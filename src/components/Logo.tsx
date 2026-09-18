import { motion } from 'motion/react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  subtitleText?: string;
  className?: string;
  variant?: 'full' | 'mark-only';
}

/**
 * Apex Tech Logo Mark — Image-based circular emblem
 */
export function ApexAnimatedMark({
  size = 40,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center select-none group/mark ${className}`}
    >
      {/* Ambient Breathing Aura (Pure CSS) */}
      <div
        className="absolute -inset-1 bg-gradient-to-tr from-[#2196F3]/40 via-[#00BCD4]/30 to-[#4FC3F7]/20 rounded-full blur-md pointer-events-none -z-10 group-hover/mark:scale-125 group-hover/mark:opacity-80 transition-all duration-300 animate-pulse"
      />

      {/* Logo Image — scaled up to crop out light background edges */}
      <div
        style={{ width: size, height: size }}
        className="rounded-full overflow-hidden shadow-lg"
      >
        <img
          src="./logo.jpg"
          alt="Apex Tech"
          className="w-full h-full object-cover scale-[1.15]"
        />
      </div>
    </motion.div>
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
 * Master Logo Component with Image Mark + Typography
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
      markSize: 34,
      title: 'text-xl',
      subtitle: 'text-[9px] tracking-[0.24em]',
      gap: 'gap-2.5',
      dot: 'w-1.5 h-1.5',
    },
    md: {
      markSize: 40,
      title: 'text-2xl',
      subtitle: 'text-[10px] tracking-[0.28em]',
      gap: 'gap-3',
      dot: 'w-2 h-2',
    },
    lg: {
      markSize: 50,
      title: 'text-3xl sm:text-4xl',
      subtitle: 'text-xs tracking-[0.32em]',
      gap: 'gap-3.5',
      dot: 'w-2.5 h-2.5',
    },
    xl: {
      markSize: 64,
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
      {/* Logo Image Mark */}
      <div className="shrink-0">
        <ApexAnimatedMark size={current.markSize} />
      </div>

      {/* Typography Identity */}
      <div className="flex flex-col justify-center">
        {/* Main Brand Name */}
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-display font-black tracking-tight text-slate-900 ${current.title}`}>
            Apex
          </span>
          <span className={`font-display font-black tracking-tight bg-gradient-to-r from-[#0288D1] via-[#017E84] to-[#714B67] bg-clip-text text-transparent ${current.title}`}>
            Tech
          </span>

          {/* Animated Pulsing Status Beacon (Pure CSS) */}
          <span
            className={`${current.dot} rounded-full bg-[#017E84] shadow-[0_0_8px_rgba(1,126,132,0.4)] ml-0.5 animate-pulse`}
          />
        </div>

        {/* Subtitle */}
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span
              className={`uppercase font-bold text-slate-500 group-hover:text-slate-800 transition-colors ${current.subtitle}`}
            >
              {subtitleText}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

