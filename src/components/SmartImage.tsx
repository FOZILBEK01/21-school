import React, { useState } from 'react';
import { ImageOff, Loader2 } from 'lucide-react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  containerClassName?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${containerClassName}`}>
      {/* Skeleton Shimmer while loading */}
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/80 animate-pulse z-10">
          <Loader2 className="w-6 h-6 text-blue-400 animate-spin opacity-50" />
        </div>
      )}

      {/* Error / Fallback display if network fails */}
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-slate-800/90 text-slate-400 text-center z-10">
          <ImageOff className="w-8 h-8 mb-2 text-slate-500 stroke-[1.5]" />
          <span className="text-xs font-medium text-slate-300">{alt}</span>
          <span className="text-[10px] text-slate-400 mt-1">21-maktab fotogalereyasi</span>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={handleError}
          className={`transition-all duration-700 ease-out ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
