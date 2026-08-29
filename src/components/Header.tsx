import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Menu, X, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';
import Logo from './Logo';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-[#0b0c10]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo"
            className="focus:outline-none"
            aria-label="Apex Tech Digital Studio Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-[15px] font-semibold text-white/70">
            {['Services', 'Process', 'Work', 'Reviews', 'FAQ', 'Contact'].map((item) => (
              <motion.a
                key={item}
                whileHover={{ y: -1, color: '#ffffff' }}
                href={`#${item.toLowerCase() === 'reviews' ? 'testimonials' : item.toLowerCase()}`}
                className="hover:text-white transition-colors py-1 relative group"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#714B67] transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct Phone link */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="header-phone-btn"
              href={`tel:${COMPANY_DETAILS.phoneTel}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold bg-[#14101A] hover:bg-[#201828] text-[#F5F5F5] transition-all border border-[#714B67]/30"
              title="Direct Call to Apex Tech"
            >
              <Phone className="w-3.5 h-3.5 text-[#017E84]" />
              <span className="font-mono tracking-tight">{COMPANY_DETAILS.phone}</span>
            </motion.a>

            {/* Direct Email link */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="header-email-btn"
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold bg-[#0d1717] hover:bg-[#132222] text-[#F5F5F5] transition-all border border-[#017E84]/30"
              title="Send email to Apex Tech"
            >
              <Mail className="w-3.5 h-3.5 text-[#00A09D]" />
              <span>{COMPANY_DETAILS.email}</span>
            </motion.a>

            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              id="header-start-project-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#714B67] hover:bg-[#885B7C] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(113,75,103,0.4)]"
            >
              <span>Start a project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_DETAILS.phoneTel}`}
              className="p-2 rounded-full bg-[#14101A] text-[#9B6C8F] border border-[#714B67]/30"
              aria-label="Call Apex Tech"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-[#14101A] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#11141C] border-b border-white/10 px-5 pt-4 pb-6 space-y-4 shadow-2xl overflow-hidden"
          >
            <div className="pb-2 border-b border-white/10">
              <Logo size="sm" />
            </div>

            <div className="flex flex-col space-y-3 font-semibold text-white/80 text-base">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Process', href: '#process' },
                { label: 'Work', href: '#work' },
                { label: 'Reviews', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2.5">
              <a
                href={`tel:${COMPANY_DETAILS.phoneTel}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#14101A] text-white font-semibold text-sm border border-[#714B67]/30"
              >
                <div className="w-8 h-8 rounded-lg bg-[#714B67]/20 flex items-center justify-center text-[#9B6C8F]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-white/60">Call us directly</div>
                  <div className="font-mono">{COMPANY_DETAILS.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#14101A] text-white font-semibold text-sm border border-[#017E84]/30"
              >
                <div className="w-8 h-8 rounded-lg bg-[#017E84]/20 flex items-center justify-center text-[#00A09D]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-white/60">Email us</div>
                  <div>{COMPANY_DETAILS.email}</div>
                </div>
              </a>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-xl font-bold text-sm shadow-sm hover:bg-[#1EBE5D] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp ({COMPANY_DETAILS.phoneRaw})</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#714B67] hover:bg-[#885B7C] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-[0_0_15px_rgba(113,75,103,0.4)]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
