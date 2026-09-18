import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MessageSquare, ArrowRight, X } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';
import { ApexXIcon } from './Logo';

interface FloatingContactBarProps {
  onOpenConsultation: () => void;
}

export default function FloatingContactBar({ onOpenConsultation }: FloatingContactBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.aside
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Quick contact tools"
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
        >
          {/* Floating Action Pill */}
          <motion.div
            whileHover={{ y: -2 }}
            className="bg-white/95 backdrop-blur-md text-slate-900 p-2 sm:p-2.5 rounded-full shadow-2xl border border-slate-200 flex items-center gap-2 ring-1 ring-slate-200/50"
          >
            {/* Mini Apex X Brand Mark */}
            <div className="hidden sm:flex items-center pl-2 pr-1 gap-1.5 border-r border-slate-200">
              <div className="w-5 h-5 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center p-0.5">
                <ApexXIcon size={16} />
              </div>
              <span className="text-[11px] font-display font-bold tracking-tight text-slate-900">Apex Tech</span>
            </div>

            {/* Phone Click */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${COMPANY_DETAILS.phoneTel}`}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              title={`Call ${COMPANY_DETAILS.phone}`}
              aria-label={`Call ${COMPANY_DETAILS.phone}`}
            >
              <Phone className="w-4 h-4 text-[#017E84]" />
            </motion.a>

            {/* WhatsApp Click */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white transition-colors shadow-md relative"
              title={`Chat with Apex Tech on WhatsApp (${COMPANY_DETAILS.phoneRaw})`}
              aria-label={`WhatsApp ${COMPANY_DETAILS.phoneRaw}`}
            >
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
              <MessageSquare className="w-4 h-4" />
            </motion.a>

            {/* Email Click */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-[#017E84] hover:text-white text-slate-800 transition-colors"
              title={`Email ${COMPANY_DETAILS.email}`}
              aria-label={`Email ${COMPANY_DETAILS.email}`}
            >
              <Mail className="w-4 h-4 text-[#017E84]" />
            </motion.a>

            {/* Start Project CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#714B67] hover:bg-[#885B7C] text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
            >
              <span>Get Proposal</span>
              <ArrowRight className="w-3 h-3" />
            </motion.button>

            {/* Dismiss mini X */}
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              aria-label="Dismiss quick contact bar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
