import { motion } from 'motion/react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  subtitleText?: string;
  className?: string;
  variant?: 'full' | 'mark-only';
}

/**
 * Animated Modern Apex Emblem
 * Clean, minimalist geometric summit with smooth ambient animations:
 * - Breathing aura glow
 * - Continuous subtle light sweep
 * - Pulsing pinnacle beacon light
 * - Micro-interactive spring hover
 */
export function ApexAnimatedMark({
  size = 40,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center select-none group/mark ${className}`}
    >
      {/* 1. Ambient Breathing Aura Animation */}
      <motion.div
        animate={{
          opacity: [0.35, 0.7, 0.35],
          scale: [0.95, 1.15, 0.95],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: 'easeInOut',
        }}
        className="absolute -inset-1 bg-gradient-to-tr from-[#714B67]/60 via-[#017E84]/50 to-[#00A09D]/40 rounded-xl blur-md pointer-events-none -z-10 group-hover/mark:scale-125 group-hover/mark:opacity-90 transition-all duration-300"
      />

      {/* 2. Sleek Obsidian Frame */}
      <motion.div
        whileHover={{ scale: 1.08, rotate: 2 }}
        whileTap={{ scale: 0.94 }}
        className="w-full h-full rounded-xl bg-gradient-to-b from-[#1C1420] via-[#10141D] to-[#0A0D14] p-[1.2px] border border-white/25 shadow-lg relative overflow-hidden flex items-center justify-center group-hover/mark:border-[#714B67]/80 transition-colors duration-300"
      >
        {/* Continuous Animated Shimmer Sweep */}
        <motion.div
          animate={{
            x: ['-120%', '220%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.2,
            ease: 'easeInOut',
            repeatDelay: 1.5,
          }}
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-25deg] pointer-events-none"
        />

        {/* 3. Pure Geometric Apex Vector Mark */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[80%] h-[80%] drop-shadow-md"
        >
          <defs>
            {/* Odoo Royal Purple Wing Gradient */}
            <linearGradient id="apexSimpleSapphire" x1="15" y1="85" x2="50" y2="15" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4A2E44" />
              <stop offset="60%" stopColor="#714B67" />
              <stop offset="100%" stopColor="#9B6C8F" />
            </linearGradient>

            {/* Odoo Teal Wing Gradient */}
            <linearGradient id="apexSimpleCyan" x1="85" y1="85" x2="50" y2="15" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#005B5F" />
              <stop offset="60%" stopColor="#017E84" />
              <stop offset="100%" stopColor="#00A09D" />
            </linearGradient>

            {/* Center Peak Diamond Gradient */}
            <linearGradient id="apexSimpleDiamond" x1="50" y1="15" x2="50" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F8EEF5" />
              <stop offset="100%" stopColor="#714B67" />
            </linearGradient>
          </defs>

          {/* Left Wing Facet */}
          <polygon
            points="50,15 18,80 36,84 50,56"
            fill="url(#apexSimpleSapphire)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.8"
          />

          {/* Right Wing Facet */}
          <polygon
            points="50,15 82,80 64,84 50,56"
            fill="url(#apexSimpleCyan)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.8"
          />

          {/* Center Pinnacle Diamond */}
          <polygon
            points="50,15 64,42 50,70 36,42"
            fill="url(#apexSimpleDiamond)"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Base Crossbar */}
          <polygon
            points="28,68 50,58 72,68 64,76 50,70 36,76"
            fill="#14101A"
            stroke="rgba(113,75,103,0.8)"
            strokeWidth="0.8"
          />

          {/* Animated Pinnacle Beacon (Optical Star) */}
          <circle cx="50" cy="15" r="3.5" fill="#FFFFFF" />
          <circle cx="50" cy="15" r="1.5" fill="#017E84" />
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * Isolated Iconic Mark for Cards, Quick Actions & Floating Nav
 */
export function ApexXIcon({
  size = 36,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return <ApexAnimatedMark size={size} className={className} />;
}

/**
 * Master Clean & Animated Logo Component
 */
export default function Logo({
  size = 'md',
  showSubtitle = true,
  subtitleText = 'Digital Studio',
  className = '',
  variant = 'full',
}: LogoProps) {
  const sizeMap = {
    sm: {
      markSize: 32,
      title: 'text-xl',
      subtitle: 'text-[9px] tracking-[0.24em]',
      gap: 'gap-2.5',
      dot: 'w-1.5 h-1.5',
    },
    md: {
      markSize: 38,
      title: 'text-2xl',
      subtitle: 'text-[10px] tracking-[0.28em]',
      gap: 'gap-3',
      dot: 'w-2 h-2',
    },
    lg: {
      markSize: 48,
      title: 'text-3xl sm:text-4xl',
      subtitle: 'text-xs tracking-[0.32em]',
      gap: 'gap-3.5',
      dot: 'w-2.5 h-2.5',
    },
    xl: {
      markSize: 60,
      title: 'text-4xl sm:text-5xl',
      subtitle: 'text-sm tracking-[0.36em]',
      gap: 'gap-4',
      dot: 'w-3 h-3',
    },
  };

  const current = sizeMap[size];

  if (variant === 'mark-only') {
    return (
      <div className={`cursor-pointer ${className}`}>
        <ApexAnimatedMark size={current.markSize} />
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center ${current.gap} group cursor-pointer select-none ${className}`}
    >
      {/* Animated Clean Geometric Emblem */}
      <div className="shrink-0">
        <ApexAnimatedMark size={current.markSize} />
      </div>

      {/* Typography Identity */}
      <div className="flex flex-col justify-center">
        {/* Main Brand Name */}
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-display font-black tracking-tight text-white ${current.title}`}>
            Apex
          </span>
          <span className={`font-display font-black tracking-tight bg-gradient-to-r from-[#714B67] via-[#9B6C8F] to-[#017E84] bg-clip-text text-transparent ${current.title}`}>
            Tech
          </span>

          {/* Animated Pulsing Status Beacon */}
          <motion.span
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: 'easeInOut',
            }}
            className={`${current.dot} rounded-full bg-[#017E84] shadow-[0_0_8px_#017E84] ml-0.5`}
          />
        </div>

        {/* Subtitle */}
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span
              className={`uppercase font-bold text-white/50 group-hover:text-white/80 transition-colors ${current.subtitle}`}
            >
              {subtitleText}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
