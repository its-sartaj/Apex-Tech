import { motion } from 'motion/react';

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
      {/* 1. Ambient Background Soft Glow (Breathing Aura) */}
      <motion.div
        animate={{
          opacity: [0.35, 0.65, 0.35],
          scaleY: [1, 1.25, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4.5,
          ease: 'easeInOut',
        }}
        className="absolute w-3/4 max-w-4xl h-12 bg-gradient-to-r from-transparent via-[#714B67]/25 via-[#017E84]/25 to-transparent blur-2xl pointer-events-none -z-10"
      />

      {/* 2. Full Width Baseline Subtle Track */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent relative">
          
          {/* 3. Gradient Laser Core Line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#714B67] via-[#017E84] to-transparent opacity-80" />

          {/* 4. Animated Traveling Laser Pulse Bead (Sweeps horizontally) */}
          <motion.div
            animate={{
              left: ['-10%', '110%'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.6,
              ease: 'easeInOut',
              repeatDelay: 1.2,
            }}
            className="absolute top-1/2 -translate-y-1/2 w-28 sm:w-44 h-[2.5px] bg-gradient-to-r from-transparent via-[#00A09D] via-white to-transparent shadow-[0_0_12px_#017E84,0_0_24px_#714B67]"
          />

          {/* Opposite Subtle Counter-Pulse for Organic Rhythm */}
          <motion.div
            animate={{
              right: ['-10%', '110%'],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.8,
              ease: 'easeInOut',
              delay: 1.8,
              repeatDelay: 1.5,
            }}
            className="absolute top-1/2 -translate-y-1/2 w-20 sm:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#9B6C8F] to-transparent shadow-[0_0_10px_#714B67]"
          />
        </div>

        {/* 5. Center Optical Diamond Beacon & Flare */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          {showBadge && badgeLabel ? (
            /* Pill Badge with Glow Border */
            <motion.div
              initial={{ scale: 0.9, opacity: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 rounded-full bg-[#14101A] border border-[#714B67]/40 shadow-[0_0_15px_rgba(113,75,103,0.4)] flex items-center gap-1.5 backdrop-blur-md cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#017E84] shadow-[0_0_6px_#017E84] animate-pulse" />
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-white/80 font-bold">
                {badgeLabel}
              </span>
            </motion.div>
          ) : (
            /* Prismatic Micro Crest Jewel */
            <div className="relative flex items-center justify-center">
              {/* Outer Radiant Flare */}
              <motion.div
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.5, 0.9, 0.5],
                  rotate: [0, 90, 180],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: 'linear',
                }}
                className="absolute w-6 h-6 bg-gradient-to-tr from-[#714B67]/40 to-[#017E84]/40 rounded-full blur-sm"
              />

              {/* Diamond Node */}
              <motion.div
                whileHover={{ rotate: 45, scale: 1.25 }}
                className="w-3.5 h-3.5 rotate-45 rounded-[2px] bg-gradient-to-tr from-[#1E1724] via-[#10141D] to-[#0A0D14] border border-[#00A09D]/70 shadow-[0_0_10px_rgba(1,126,132,0.6)] flex items-center justify-center"
              >
                <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_4px_#FFFFFF]" />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
