import React, { useState, useEffect } from 'react';
import { Wifi } from 'lucide-react';

interface PreloaderProps {
  onLoaded?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // Detect slow network (takes longer than 2.5s)
    const slowTimer = setTimeout(() => {
      setIsSlowConnection(true);
    }, 2500);

    const finishLoading = () => {
      clearTimeout(slowTimer);
      setFading(true);
      setTimeout(() => {
        setLoading(false);
        if (onLoaded) onLoaded();
      }, 500); // 500ms smooth fade transition
    };

    // Preload hero image and verify document load state
    const heroImg = new Image();
    heroImg.src = '/images/building.jpg';

    const checkReady = () => {
      if (document.readyState === 'complete') {
        finishLoading();
      } else {
        window.addEventListener('load', finishLoading, { once: true });
      }
    };

    if (heroImg.complete) {
      checkReady();
    } else {
      heroImg.onload = checkReady;
      heroImg.onerror = checkReady;
    }

    // Safety fallback: maximum 5s so user is never permanently stuck
    const safetyTimeout = setTimeout(finishLoading, 5000);

    return () => {
      clearTimeout(slowTimer);
      clearTimeout(safetyTimeout);
      window.removeEventListener('load', finishLoading);
    };
  }, [onLoaded]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-500 ease-out select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Yuklanmoqda..."
      role="status"
    >
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      {/* Main Centered Loader Box */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 max-w-sm">
        
        {/* Animated Double Ring Spinner with Central School Badge */}
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
          {/* Outer rotating gradient ring */}
          <div className="absolute inset-0 rounded-full border-2 border-slate-800 border-t-blue-500 border-r-indigo-500 animate-spin" />
          
          {/* Inner counter-rotating ring */}
          <div className="absolute inset-2 rounded-full border-2 border-slate-800 border-b-cyan-400 border-l-blue-400 animate-spin [animation-direction:reverse] [animation-duration:1.5s]" />

          {/* Central 21-maktab Emblem */}
          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <span className="text-xl font-black text-white tracking-tighter">21</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold tracking-tight text-white mb-1.5">
          Olmaliq 21-maktab
        </h2>

        {/* Subtitle / status */}
        <p className="text-xs text-slate-400 mb-5 font-medium">
          Raqamli portal va ma'lumotlar yuklanmoqda...
        </p>

        {/* Smooth animated progress line */}
        <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4 relative">
          <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full animate-indeterminate" />
        </div>

        {/* Slow connection notification if network takes longer */}
        {isSlowConnection && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-amber-400/90 animate-in fade-in duration-300">
            <Wifi className="w-3.5 h-3.5 animate-pulse shrink-0" />
            <span>Internet tezligi past. Iltimos, kuting...</span>
          </div>
        )}

      </div>
    </div>
  );
};
