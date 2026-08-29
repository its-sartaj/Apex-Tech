import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

/**
 * Circular Back-to-Top Floating Button
 * - Appears with smooth spring fade-in when scrolling past hero section (> 500px)
 * - Animated SVG circular scroll progress indicator ring
 * - Smooth scroll to top on click
 * - Ambient glow & micro-bounce hover effect
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate overall page scroll progress (0 to 100)
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      // Appear once scrolled past the Hero section (~500px)
      setIsVisible(currentScrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circular perimeter calculation
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-6 left-6 z-40 select-none"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#714B67]/50 via-[#017E84]/40 to-transparent blur-md pointer-events-none -z-10" />

          {/* Interactive Button Container */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            id="back-to-top-button"
            aria-label="Scroll back to top of page"
            title="Scroll to top"
            className="relative w-12 h-12 rounded-full bg-[#14101A]/95 text-white flex items-center justify-center border border-white/20 shadow-2xl backdrop-blur-md hover:border-[#714B67] group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#714B67]/50"
          >
            {/* Circular SVG Scroll Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-[1.5px]"
              viewBox="0 0 48 48"
            >
              {/* Background Ring Track */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-white/10"
                strokeWidth="2.5"
                fill="transparent"
              />
              {/* Animated Progress Gradient Ring */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                stroke="url(#bttGradient)"
                strokeWidth="2.5"
                fill="transparent"
                strokeDasharray={circumference}
                style={{
                  strokeDashoffset,
                  transition: 'stroke-dashoffset 120ms ease-out',
                }}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="bttGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#714B67" />
                  <stop offset="100%" stopColor="#017E84" />
                </linearGradient>
              </defs>
            </svg>

            {/* Centered Arrow Icon with Hover Float */}
            <motion.div
              className="relative z-10 flex items-center justify-center text-white/80 group-hover:text-white transition-colors"
            >
              <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
