import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Phone, MessageSquare, Mail, Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FAQS, COMPANY_DETAILS } from '../data';
import { FAQItem } from '../types';

interface FAQProps {
  onOpenConsultation?: () => void;
}

export default function FAQ({ onOpenConsultation }: FAQProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // Open first two by default
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Process & Timelines', 'Web Development', 'UI/UX & Design', 'SEO & Warranties'];

  const filteredFaqs = FAQS.filter((faq: FAQItem) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-20 bg-slate-50/70 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#714B67]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#017E84] mb-3 block flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Clear answers about our services, timelines, and delivery.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
            Everything you need to know about starting a project, code ownership, revision rounds, and direct engineer communication with Apex Tech.
          </p>
        </motion.div>

        {/* Filter Controls: Categories & Search */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#714B67] text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-[#714B67]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="faq-search-input"
              aria-label="Search frequently asked questions"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#714B67] transition-colors"
            />
          </div>
        </div>

        {/* Main Grid: FAQs Accordion + Direct Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Center Accordion List */}
          <div className="lg:col-span-8 space-y-3.5">
            {filteredFaqs.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 text-center border border-slate-200">
                <p className="text-slate-700 text-sm">No matching questions found for "{searchQuery}".</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 text-xs font-bold text-[#017E84] hover:underline cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq: FAQItem, idx: number) => {
                const isOpen = openIndices.includes(idx);
                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors shadow-2xs"
                  >
                    <button
                      id={`faq-toggle-${idx}`}
                      onClick={() => toggleIndex(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-slate-900 hover:text-[#714B67] transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <span className="leading-snug">{faq.question}</span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                          isOpen
                            ? 'bg-[#714B67] text-white border-[#714B67] rotate-180 shadow-xs'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${idx}`}
                          role="region"
                          aria-labelledby={`faq-toggle-${idx}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-700 leading-relaxed font-normal border-t border-slate-100 space-y-3">
                            <p>{faq.answer}</p>
                            <div className="flex items-center gap-2 pt-1">
                              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#017E84]/10 border border-[#017E84]/20 text-[#017E84] uppercase tracking-wider">
                                {faq.category}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </div>

          {/* Right Column: Direct Help & Direct Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 bg-white rounded-3xl p-7 border border-slate-200 shadow-xl space-y-6 lg:sticky lg:top-28"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#017E84] block mb-1">
                Have a different question?
              </span>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Speak directly with an engineer.
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Skip the ticket queues. Talk directly to our technical team about your project goals, custom specs, or specific timeline constraints.
              </p>
            </div>

            {/* Direct Channel Action Buttons */}
            <div className="space-y-2.5">
              <a
                id="faq-phone-cta"
                href={`tel:${COMPANY_DETAILS.phoneTel}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#714B67]/10 text-[#714B67] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Direct Phone Call</div>
                    <div className="font-mono text-xs font-bold text-slate-900">{COMPANY_DETAILS.phone}</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </a>

              <a
                id="faq-whatsapp-cta"
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Instant WhatsApp</div>
                    <div className="font-mono text-xs font-bold text-slate-900">{COMPANY_DETAILS.phoneRaw}</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </a>

              <a
                id="faq-email-cta"
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#017E84]/10 text-[#017E84] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Direct Email</div>
                    <div className="text-xs font-bold text-slate-900">{COMPANY_DETAILS.email}</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </a>
            </div>

            {/* Guarantee checklist */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#017E84] shrink-0" />
                <span>Zero obligation, transparent scope</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#017E84] shrink-0" />
                <span>Response within 2 hours</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#017E84] shrink-0" />
                <span>100% intellectual property ownership</span>
              </div>
            </div>

            {onOpenConsultation && (
              <button
                id="faq-book-call-btn"
                onClick={onOpenConsultation}
                className="w-full py-3 rounded-xl bg-[#714B67] hover:bg-[#885B7C] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-[0_2px_10px_rgba(113,75,103,0.3)] cursor-pointer"
              >
                <span>Book 20-Min Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
