interface SectionDividerProps {
  variant?: 'sapphire-cyan' | 'laser-pulse' | 'diamond-crest' | 'aurora' | 'minimal-glow';
  className?: string;
  showBadge?: boolean;
  badgeLabel?: string;
}

/**
 * High-End Luxury Animated Section Divider
 * Featuring multi-spectrum neon gradients, continuous laser particle sweeps,
 * center optical star beacon, and ambient radial glow.
 */
export default function SectionDivider({
  variant = 'sapphire-cyan',
  className = '',
  showBadge = false,
  badgeLabel,
}: SectionDividerProps) {
  return (
    <div className={`relative w-full overflow-hidden flex items-center justify-center py-6 sm:py-8 select-none ${className}`}>
      {/* 1. Ambient Background Soft Glow (Breathing Aura - Pure CSS) */}
      <div className="absolute w-3/4 max-w-4xl h-12 bg-[linear-gradient(to_right,transparent,rgba(113,75,103,0.25),rgba(1,126,132,0.25),transparent)] blur-2xl pointer-events-none -z-10 animate-pulse" />

      {/* 2. Full Width Baseline Subtle Track */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent relative">
          
          {/* 3. Gradient Laser Core Line */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,#714B67,#017E84,transparent)] opacity-60" />

          {/* 4. Animated Traveling Laser Pulse Bead (Pure GPU CSS) */}
          <div className="absolute top-1/2 -translate-y-1/2 w-28 sm:w-44 h-[2px] bg-gradient-to-r from-transparent via-[#017E84] via-[#714B67] to-transparent shadow-[0_0_8px_rgba(1,126,132,0.4)] animate-laser-1" />

          {/* Opposite Subtle Counter-Pulse for Organic Rhythm */}
          <div className="absolute top-1/2 -translate-y-1/2 w-20 sm:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#9B6C8F] to-transparent shadow-[0_0_6px_rgba(113,75,103,0.3)] animate-laser-2" />
        </div>

        {/* 5. Center Optical Diamond Beacon & Flare */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          {showBadge && badgeLabel ? (
            /* Pill Badge with Glow Border */
            <div className="px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm flex items-center gap-1.5 backdrop-blur-md cursor-default transition-transform hover:scale-105">
              <span className="w-1.5 h-1.5 rounded-full bg-[#017E84] animate-pulse" />
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-slate-700 font-bold">
                {badgeLabel}
              </span>
            </div>
          ) : (
            /* Prismatic Micro Crest Jewel */
            <div className="relative flex items-center justify-center">
              {/* Outer Radiant Flare */}
              <div className="absolute w-6 h-6 bg-gradient-to-tr from-[#714B67]/20 to-[#017E84]/20 rounded-full blur-sm animate-pulse" />

              {/* Diamond Node */}
              <div className="w-3.5 h-3.5 rotate-45 rounded-[2px] bg-white border border-[#017E84] shadow-sm flex items-center justify-center transition-transform hover:scale-125">
                <div className="w-1 h-1 rounded-full bg-[#714B67]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
