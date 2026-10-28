import { useState } from 'react';

interface FlagImageProps {
  countryId: string;
  countryName: string;
  flagEmoji?: string;
  className?: string;
  isSilhouette?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function FlagImage({
  countryId,
  countryName,
  flagEmoji,
  className = '',
  isSilhouette = false,
  size = 'md',
}: FlagImageProps) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // flagcdn uses standard 2-letter ISO code
  const cdnCode = countryId.toLowerCase();
  const cdnUrl = `https://flagcdn.com/w320/${cdnCode}.png`;

  const sizeClasses = {
    sm: 'w-10 h-7 text-base rounded',
    md: 'w-24 sm:w-28 aspect-[3/2] h-auto text-2xl rounded-md sm:rounded-lg',
    lg: 'w-full max-w-[220px] sm:max-w-[260px] aspect-[3/2] h-auto text-4xl sm:text-5xl rounded-lg sm:rounded-xl',
    xl: 'w-full max-w-[260px] xs:max-w-[300px] sm:max-w-sm aspect-[3/2] h-auto text-5xl sm:text-7xl rounded-xl sm:rounded-2xl',
  }[size];

  if (isSilhouette) {
    return (
      <div
        className={`relative flex items-center justify-center bg-slate-800/80 border border-slate-700/60 shadow-inner overflow-hidden select-none ${sizeClasses} ${className}`}
        title="Drapeau non découvert"
      >
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xs flex items-center justify-center">
          <span className="text-slate-500 font-bold tracking-widest text-lg sm:text-2xl">???</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center bg-slate-800/40 border border-white/10 shadow-lg overflow-hidden select-none transition-transform ${sizeClasses} ${className}`}
    >
      {!hasError ? (
        <img
          src={cdnUrl}
          alt={`Drapeau de ${countryName}`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          referrerPolicy="no-referrer"
        />
      ) : null}

      {(!loaded || hasError) && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-slate-800/80 ${
            loaded && !hasError ? 'hidden' : 'flex'
          }`}
        >
          <span className="leading-none">{flagEmoji || '🏳️'}</span>
        </div>
      )}
    </div>
  );
}
