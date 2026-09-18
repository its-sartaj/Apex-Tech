import { Phone, Mail, MessageSquare, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-slate-50 text-slate-700 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />

            <p className="text-sm text-slate-600 max-w-sm leading-relaxed font-normal">
              Full-service digital studio specializing in modern web development, UI/UX design systems, technical SEO, and high-conversion digital marketing.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Taking Q3/Q4 Projects</span>
              </div>
            </div>
          </div>

          {/* Disciplines Col */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-900 mb-4">
              Disciplines
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a href="#services" className="hover:text-[#714B67] transition-colors">
                  Modern Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#714B67] transition-colors">
                  UI/UX &amp; Brand Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#714B67] transition-colors">
                  Technical SEO &amp; Speed
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#714B67] transition-colors">
                  Conversion Landing Pages
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#714B67] transition-colors">
                  Verified Client Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#714B67] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Ascent Process Col */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-900 mb-4">
              The Ascent
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a href="#process" className="hover:text-[#714B67] transition-colors">
                  01 Discovery &amp; Scope
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#714B67] transition-colors">
                  02 Route &amp; UI/UX Design
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#714B67] transition-colors">
                  03 Agile Climb &amp; Build
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#714B67] transition-colors">
                  04 Summit Launch &amp; Scale
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#714B67] transition-colors">
                  Selected Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Col */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-900 mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${COMPANY_DETAILS.phoneTel}`}
                className="flex items-center gap-2 text-slate-800 hover:text-[#714B67] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#714B67]" />
                <span className="font-bold font-mono text-sm">{COMPANY_DETAILS.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-2 text-slate-700 hover:text-[#714B67] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#017E84]" />
                <span className="font-mono">{COMPANY_DETAILS.email}</span>
              </a>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:underline font-bold pt-1"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp: {COMPANY_DETAILS.phoneRaw}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved. 100% client code ownership.
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-[#714B67] text-slate-600 transition-colors">Services</a>
            <a href="#work" className="hover:text-[#714B67] text-slate-600 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-[#714B67] text-slate-600 transition-colors">Contact</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
