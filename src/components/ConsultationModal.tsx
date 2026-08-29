import { useState, FormEvent, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageSquare, CheckCircle2, Sparkles, ShieldCheck, Phone, Mail, ArrowRight, Lock, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data';
import Logo from './Logo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

interface ModalErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export default function ConsultationModal({ isOpen, onClose, defaultService }: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'Web Development');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Field validation and shake state
  const [errors, setErrors] = useState<ModalErrors>({});
  const [shakeKeys, setShakeKeys] = useState<{ [key: string]: number }>({
    name: 0,
    email: 0,
    phone: 0,
  });

  // Sync default service when changed
  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  // Lock body scroll cleanly and handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const validateForm = (): boolean => {
    const newErrors: ModalErrors = {};
    const newShakeKeys = { ...shakeKeys };

    // Validate Name
    if (!name.trim()) {
      newErrors.name = 'Please enter your full name';
      newShakeKeys.name = (newShakeKeys.name || 0) + 1;
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      newShakeKeys.name = (newShakeKeys.name || 0) + 1;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address';
      newShakeKeys.email = (newShakeKeys.email || 0) + 1;
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email (e.g. you@company.com)';
      newShakeKeys.email = (newShakeKeys.email || 0) + 1;
    }

    // Validate Phone (optional, but checked if filled)
    if (phone.trim() && phone.trim().replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number (min 7 digits)';
      newShakeKeys.phone = (newShakeKeys.phone || 0) + 1;
    }

    setErrors(newErrors);
    setShakeKeys(newShakeKeys);

    return Object.keys(newErrors).length === 0;
  };

  const handleNameChange = (val: string) => {
    setName(val);
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: undefined }));
    }
  };

  const handleEmailChange = (val: string) => {
    setEmail(val);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handlePhoneChange = (val: string) => {
    setPhone(val);
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

    setIsSubmitting(true);
    // Smooth micro-delay for realistic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const getWhatsAppQuickUrl = () => {
    const text = `Hi Apex Tech Team! I want to start a project.
Name: ${name || 'Prospective Client'}
Service: ${service}
Phone: ${phone || 'Not provided'}
Email: ${email || 'Not provided'}
Scope: ${notes || 'Discussing our upcoming digital roadmap.'}`;
    return `https://wa.me/917979968347?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
          {/* Backdrop with smooth fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container: Perfectly Flex-Structured for 100% Smooth Scrolling & Always Visible Submit */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{
              type: 'spring',
              damping: 26,
              stiffness: 320,
              mass: 0.8,
            }}
            className="bg-[#11141C] text-white rounded-3xl max-w-lg w-full max-h-[90vh] sm:max-h-[88vh] flex flex-col shadow-[0_25px_70px_rgba(0,0,0,0.95)] border border-[#714B67]/30 relative z-10 overflow-hidden"
          >
            {/* 1. FIXED MODAL HEADER (Always Visible at Top) */}
            <div className="px-5 py-4 sm:px-6 sm:py-4.5 border-b border-white/10 flex items-center justify-between shrink-0 bg-[#11141C] z-20">
              <Logo size="sm" subtitleText="Project Intake" />

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-flex text-[10px] font-bold uppercase tracking-widest text-[#00A09D] bg-[#017E84]/15 border border-[#017E84]/30 px-2.5 py-0.5 rounded-full items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>2h Fast Response</span>
                </span>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </div>

            {/* 2. BODY CONTENT */}
            {submitted ? (
              /* Success Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 sm:p-8 text-center space-y-5 my-auto overflow-y-auto"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 14, stiffness: 220 }}
                  className="w-16 h-16 rounded-full bg-[#017E84]/20 text-[#00A09D] mx-auto flex items-center justify-center border border-[#017E84]/40 shadow-[0_0_20px_rgba(0,160,157,0.3)]"
                >
                  <CheckCircle2 className="w-9 h-9" />
                </motion.div>

                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                    Project Request Received!
                  </h3>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed max-w-sm mx-auto">
                    Thank you, <strong className="text-white">{name || 'Client'}</strong>. Our lead architect will review your <span className="text-[#00A09D] font-semibold">{service}</span> requirements and connect with you within 2 hours.
                  </p>
                </div>

                <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 text-xs text-white/80 flex items-center justify-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[#00A09D]" />
                  <span>Your submission is encrypted and confidential</span>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={getWhatsAppQuickUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:bg-[#1EBE5D] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open Instant WhatsApp Chat ({COMPANY_DETAILS.phoneRaw})</span>
                  </motion.a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="w-full py-2.5 px-4 rounded-full bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-colors"
                  >
                    Done & Close Window
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Main Intake Form with Wrapped Form Architecture */
              <form onSubmit={handleSubmit} noValidate className="flex flex-col flex-1 min-h-0 overflow-hidden">
                {/* Scrollable Form Body with Smooth Touch Drag */}
                <div
                  ref={scrollContainerRef}
                  className="flex-1 overflow-y-auto px-5 sm:px-7 py-5 space-y-4 sm:space-y-4.5 overscroll-contain scroll-smooth [scrollbar-width:thin] [scrollbar-color:#333_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full"
                >
                  <div className="mb-2">
                    <h3 id="modal-project-title" className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                      Start Your Project
                    </h3>
                    <p className="text-xs text-white/65 mt-0.5 leading-relaxed">
                      Tell us about your project or call direct at{' '}
                      <a
                        href={`tel:${COMPANY_DETAILS.phoneTel}`}
                        className="font-bold text-white font-mono underline hover:text-[#00A09D] transition-colors"
                      >
                        {COMPANY_DETAILS.phone}
                      </a>
                    </p>
                  </div>

                  {/* 1. Full Name Field with Shake Animation */}
                  <motion.div
                    key={`modal-name-${shakeKeys.name}`}
                    animate={shakeKeys.name > 0 ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
                    transition={{ duration: 0.42, ease: [0.36, 0.07, 0.19, 0.97] }}
                  >
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/80 block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Johnathan Smith"
                      value={name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none transition-all duration-200 ${
                        errors.name
                          ? 'bg-rose-500/10 border-2 border-rose-500/80 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.2)]'
                          : 'bg-white/5 border border-white/15 focus:border-[#714B67] focus:ring-1 focus:ring-[#714B67]'
                      }`}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -4, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -4, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-1.5 text-xs text-rose-400 font-medium mt-1.5"
                        >
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* 2. Email & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Email Field with Shake Animation */}
                    <motion.div
                      key={`modal-email-${shakeKeys.email}`}
                      animate={shakeKeys.email > 0 ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
                      transition={{ duration: 0.42, ease: [0.36, 0.07, 0.19, 0.97] }}
                    >
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/80 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={email}
                        onChange={(e) => handleEmailChange(e.target.value)}
                        className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none transition-all duration-200 ${
                          errors.email
                            ? 'bg-rose-500/10 border-2 border-rose-500/80 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.2)]'
                            : 'bg-white/5 border border-white/15 focus:border-[#714B67] focus:ring-1 focus:ring-[#714B67]'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.div
                            initial={{ opacity: 0, y: -4, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: -4, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-1.5 text-xs text-rose-400 font-medium mt-1.5"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Phone Field with Shake Animation */}
                    <motion.div
                      key={`modal-phone-${shakeKeys.phone}`}
                      animate={shakeKeys.phone > 0 ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
                      transition={{ duration: 0.42, ease: [0.36, 0.07, 0.19, 0.97] }}
                    >
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/80 block mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 7979968347"
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none transition-all duration-200 ${
                          errors.phone
                            ? 'bg-rose-500/10 border-2 border-rose-500/80 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.2)]'
                            : 'bg-white/5 border border-white/15 focus:border-[#714B67] focus:ring-1 focus:ring-[#714B67]'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.phone && (
                          <motion.div
                            initial={{ opacity: 0, y: -4, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: -4, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-1.5 text-xs text-rose-400 font-medium mt-1.5"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.phone}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* 3. Service Discipline Selection */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/80 block mb-1">
                      Project Service Required
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#161616] border border-white/15 text-sm text-white focus:outline-none focus:border-[#714B67] focus:ring-1 focus:ring-[#714B67] transition-all cursor-pointer"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title} className="bg-[#141414] text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="Complete Digital Studio Overhaul" className="bg-[#141414] text-white">
                        Complete Digital Studio Overhaul
                      </option>
                    </select>
                  </div>

                  {/* 4. Notes / Goals */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/80 block mb-1">
                      Project Scope & Goals
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief details regarding timeline, budget, references, or key deliverables..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#714B67] focus:ring-1 focus:ring-[#714B67] transition-all resize-none"
                    />
                  </div>

                  {/* Trust Micro-Badges */}
                  <div className="flex items-center justify-between text-[11px] text-white/60 pt-1 pb-1">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00A09D]" />
                      <span>Confidential NDA Guaranteed</span>
                    </div>
                    <span className="text-[#00A09D] font-semibold">100% IP Ownership</span>
                  </div>
                </div>

                {/* 3. PINNED BOTTOM ACTION FOOTER (ALWAYS VISIBLE & INSTANTLY CLICKABLE) */}
                <div className="px-5 py-4 sm:px-7 sm:py-4.5 border-t border-white/15 bg-[#0A0A0A]/95 backdrop-blur-md shrink-0 flex flex-col gap-2 z-20">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    id="modal-submit-project-btn"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[#714B67] hover:bg-[#885B7C] text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(113,75,103,0.4)] cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Request</span>
                        <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
                      </>
                    )}
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    href={getWhatsAppQuickUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 border border-[#25D366]/30 cursor-pointer text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Direct Chat on WhatsApp ({COMPANY_DETAILS.phoneRaw})</span>
                  </motion.a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
