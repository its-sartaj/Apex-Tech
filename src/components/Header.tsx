import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-100 py-4'
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
          <nav className="hidden md:flex items-center gap-7 text-[15px] font-semibold text-slate-700">
            {['Services', 'Process', 'Work', 'Reviews', 'FAQ', 'Contact'].map((item) => (
              <motion.a
                key={item}
                whileHover={{ y: -1, color: '#714B67' }}
                href={`#${item.toLowerCase() === 'reviews' ? 'testimonials' : item.toLowerCase()}`}
                className="hover:text-[#714B67] transition-colors py-1 relative group"
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
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold bg-slate-50 hover:bg-slate-100 text-slate-800 transition-all border border-slate-200"
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
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold bg-slate-50 hover:bg-slate-100 text-slate-800 transition-all border border-slate-200"
              title="Send email to Apex Tech"
            >
              <Mail className="w-3.5 h-3.5 text-[#017E84]" />
              <span>{COMPANY_DETAILS.email}</span>
            </motion.a>

            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              id="header-start-project-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#714B67] hover:bg-[#885B7C] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all shadow-[0_2px_10px_rgba(113,75,103,0.3)]"
            >
              <span>Start a project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_DETAILS.phoneTel}`}
              className="p-2 rounded-full bg-slate-100 text-[#714B67] border border-slate-200"
              aria-label="Call Apex Tech"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
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
            id="mobile-navigation-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white border-b border-slate-200 px-5 pt-4 pb-6 space-y-4 shadow-xl overflow-hidden"
          >
            <div className="pb-2 border-b border-slate-100">
              <Logo size="sm" />
            </div>

            <div className="flex flex-col space-y-3 font-semibold text-slate-700 text-base">
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
                  className="py-1.5 hover:text-[#714B67] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <a
                href={`tel:${COMPANY_DETAILS.phoneTel}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[#714B67]/10 flex items-center justify-center text-[#714B67]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Call us directly</div>
                  <div className="font-mono">{COMPANY_DETAILS.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 text-slate-900 font-semibold text-sm border border-slate-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[#017E84]/10 flex items-center justify-center text-[#017E84]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Email us</div>
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
                className="w-full py-3 bg-[#714B67] hover:bg-[#885B7C] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-[0_2px_10px_rgba(113,75,103,0.3)]"
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
