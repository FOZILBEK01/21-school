import React, { useState } from 'react';
import { X, Copy, Check, Share2, QrCode } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://21-maktab.uz';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Olmaliq 21-maktab | Raqamli Vizitka",
          text: "Olmaliq shahridagi 21-sonli umumiy o'rta ta'lim maktabining rasmiy raqamli vizitkasi",
          url: currentUrl,
        });
      } catch (err) {
        // Ignored or cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-150">
      
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl z-10">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-slate-800 transition-colors"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-400 flex items-center justify-center mx-auto mb-3 border border-blue-500/20">
          <QrCode className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-white mb-1">
          Olmaliq 21-maktab Vizitkasi
        </h3>
        
        <p className="text-xs text-slate-400 mb-6">
          Kamerangizni ushbu QR kodga qarating va maktab vizitkasini telefoningizda oching.
        </p>

        {/* High-fidelity SVG QR Code */}
        <div className="p-4 bg-white rounded-2xl shadow-inner mx-auto inline-block mb-6 border-4 border-slate-800">
          <svg
            className="w-48 h-48 mx-auto"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Real aesthetic QR matrix illustration */}
            <rect width="200" height="200" fill="white" />
            
            {/* Top-left position marker */}
            <rect x="15" y="15" width="50" height="50" fill="#0F172A" rx="8" />
            <rect x="23" y="23" width="34" height="34" fill="white" rx="4" />
            <rect x="31" y="31" width="18" height="18" fill="#2563EB" rx="3" />

            {/* Top-right position marker */}
            <rect x="135" y="15" width="50" height="50" fill="#0F172A" rx="8" />
            <rect x="143" y="23" width="34" height="34" fill="white" rx="4" />
            <rect x="151" y="31" width="18" height="18" fill="#2563EB" rx="3" />

            {/* Bottom-left position marker */}
            <rect x="15" y="135" width="50" height="50" fill="#0F172A" rx="8" />
            <rect x="23" y="143" width="34" height="34" fill="white" rx="4" />
            <rect x="31" y="151" width="18" height="18" fill="#2563EB" rx="3" />

            {/* Data patterns */}
            <rect x="75" y="20" width="10" height="10" fill="#0F172A" />
            <rect x="90" y="20" width="10" height="10" fill="#0F172A" />
            <rect x="105" y="20" width="10" height="10" fill="#0F172A" />
            <rect x="75" y="35" width="10" height="10" fill="#2563EB" />
            <rect x="105" y="35" width="10" height="10" fill="#0F172A" />
            <rect x="90" y="50" width="10" height="10" fill="#0F172A" />
            
            <rect x="20" y="75" width="10" height="10" fill="#0F172A" />
            <rect x="35" y="75" width="10" height="10" fill="#0F172A" />
            <rect x="50" y="75" width="10" height="10" fill="#2563EB" />
            <rect x="65" y="75" width="10" height="10" fill="#0F172A" />
            <rect x="80" y="75" width="10" height="10" fill="#0F172A" />
            <rect x="95" y="75" width="10" height="10" fill="#2563EB" />
            <rect x="110" y="75" width="10" height="10" fill="#0F172A" />
            <rect x="125" y="75" width="10" height="10" fill="#0F172A" />
            <rect x="140" y="75" width="10" height="10" fill="#2563EB" />
            <rect x="155" y="75" width="10" height="10" fill="#0F172A" />
            <rect x="170" y="75" width="10" height="10" fill="#0F172A" />

            <rect x="20" y="90" width="10" height="10" fill="#2563EB" />
            <rect x="50" y="90" width="10" height="10" fill="#0F172A" />
            <rect x="80" y="90" width="10" height="10" fill="#0F172A" />
            <rect x="110" y="90" width="10" height="10" fill="#2563EB" />
            <rect x="140" y="90" width="10" height="10" fill="#0F172A" />
            <rect x="170" y="90" width="10" height="10" fill="#0F172A" />

            <rect x="20" y="105" width="10" height="10" fill="#0F172A" />
            <rect x="35" y="105" width="10" height="10" fill="#2563EB" />
            <rect x="65" y="105" width="10" height="10" fill="#0F172A" />
            <rect x="95" y="105" width="10" height="10" fill="#0F172A" />
            <rect x="125" y="105" width="10" height="10" fill="#2563EB" />
            <rect x="155" y="105" width="10" height="10" fill="#0F172A" />

            {/* Bottom patterns */}
            <rect x="75" y="135" width="10" height="10" fill="#0F172A" />
            <rect x="105" y="135" width="10" height="10" fill="#2563EB" />
            <rect x="120" y="135" width="10" height="10" fill="#0F172A" />
            <rect x="135" y="135" width="10" height="10" fill="#0F172A" />
            <rect x="150" y="135" width="10" height="10" fill="#2563EB" />
            <rect x="165" y="135" width="10" height="10" fill="#0F172A" />

            <rect x="75" y="150" width="10" height="10" fill="#2563EB" />
            <rect x="90" y="150" width="10" height="10" fill="#0F172A" />
            <rect x="120" y="150" width="10" height="10" fill="#0F172A" />
            <rect x="150" y="150" width="10" height="10" fill="#0F172A" />
            <rect x="165" y="150" width="10" height="10" fill="#2563EB" />

            <rect x="75" y="165" width="10" height="10" fill="#0F172A" />
            <rect x="90" y="165" width="10" height="10" fill="#2563EB" />
            <rect x="105" y="165" width="10" height="10" fill="#0F172A" />
            <rect x="135" y="165" width="10" height="10" fill="#0F172A" />
            <rect x="150" y="165" width="10" height="10" fill="#2563EB" />
            <rect x="165" y="165" width="10" height="10" fill="#0F172A" />

            {/* Center school badge dot */}
            <circle cx="100" cy="100" r="14" fill="#2563EB" />
            <text x="100" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">21</text>
          </svg>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleCopyLink}
            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Nusxalandi!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Havolani nusxalash</span>
              </>
            )}
          </button>

          <button
            onClick={handleShare}
            className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>Ulashish</span>
          </button>
        </div>

      </div>

    </div>
  );
};
