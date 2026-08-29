import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MessageSquare, Send, CheckCircle2, Copy, Check, Clock, Sparkles, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data';

interface ContactSectionProps {
  preselectedService?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactSection({ preselectedService }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || 'Web Development');
  const [projectScope, setProjectScope] = useState('Full Platform Build');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Field validation and shake state
  const [errors, setErrors] = useState<FormErrors>({});
  const [shakeKeys, setShakeKeys] = useState<{ [key: string]: number }>({
    name: 0,
    email: 0,
    phone: 0,
    message: 0,
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const newShakeKeys = { ...shakeKeys };

    // Validate Name
    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
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

    // Validate Phone (optional, but if provided must be realistic)
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

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(COMPANY_DETAILS.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_DETAILS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const getWhatsAppSubmitUrl = () => {
    const text = `Hi Apex Tech Team,
My Name: ${name || 'Prospective Client'}
Email: ${email || 'Not provided'}
Phone: ${phone || 'Not provided'}
Service Interested: ${service}
Project Scope: ${projectScope}
Message: ${message || 'I would like to discuss a new digital project with your team.'}`;
    return `https://wa.me/917979968347?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#080a0e] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#714B67]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A09D] mb-3 block">
            Direct Discovery & Contact
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Ready to start the climb to your apex?
          </h2>
          <p className="text-base sm:text-lg text-white/70 mt-3 font-normal">
            Reach out directly by phone, WhatsApp, or email. We respond to all project inquiries within 2 hours.
          </p>
        </motion.div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Hub Cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Phone Primary Box */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-[#11141C] rounded-3xl p-7 border border-[#714B67]/30 space-y-4 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#714B67]/20 border border-[#714B67]/40 text-[#9B6C8F] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#9B6C8F]" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs font-bold text-white/80 hover:text-white transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00A09D]" />
                      <span className="text-[#00A09D]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy number</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                  Direct Telephone Line
                </span>
                <div className="font-display font-black text-2xl sm:text-3xl text-white mt-0.5">
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneTel}`}
                    className="hover:text-[#00A09D] transition-colors font-mono"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
                <p className="text-xs text-white/60 mt-1 font-normal">
                  Direct line to engineering & project leadership. Available Mon–Sat 9AM–8PM IST.
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${COMPANY_DETAILS.phoneTel}`}
                  className="flex-1 py-3 px-4 rounded-full bg-[#714B67] hover:bg-[#885B7C] text-white text-xs font-bold text-center transition-colors shadow-[0_0_15px_rgba(113,75,103,0.4)]"
                >
                  Call {COMPANY_DETAILS.phoneRaw}
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Email Box */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-[#11141C] rounded-3xl p-7 border border-white/10 space-y-4 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#017E84]/20 border border-[#017E84]/40 text-[#00A09D] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#00A09D]" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs font-bold text-white/80 hover:text-white transition-colors"
                  title="Copy Email Address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00A09D]" />
                      <span className="text-[#00A09D]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                  Official Email Desks
                </span>
                <div className="font-display font-bold text-xl text-white mt-0.5 font-mono">
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="hover:text-[#00A09D] transition-colors"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
                <div className="text-xs text-white/60 mt-1 font-mono">
                  Secondary: <a href={`mailto:${COMPANY_DETAILS.secondaryEmail}`} className="underline hover:text-[#00A09D]">{COMPANY_DETAILS.secondaryEmail}</a>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href={`mailto:${COMPANY_DETAILS.email}?subject=Project%20Inquiry%20-%20Apex%20Tech`}
                  className="w-full block py-2.5 px-4 rounded-full bg-white/10 border border-white/15 hover:bg-[#017E84] text-white text-xs font-bold text-center transition-colors"
                >
                  Send Email Message →
                </motion.a>
              </div>
            </motion.div>

            {/* Operating Details Card */}
            <div className="p-6 rounded-2xl bg-[#11141C] border border-white/10 space-y-3 text-xs text-white/70">
              <div className="flex items-center gap-2.5 text-white font-semibold">
                <Clock className="w-4 h-4 text-[#714B67]" />
                <span>Operating Hours: {COMPANY_DETAILS.hours}</span>
              </div>
              <div className="flex items-center gap-2.5 text-white font-semibold">
                <Sparkles className="w-4 h-4 text-[#00A09D]" />
                <span>Response Guarantee: {COMPANY_DETAILS.responseTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Proposal & Discovery Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#11141C] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#714B67]/30 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-12 space-y-5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-[#017E84]/20 text-[#00A09D] mx-auto flex items-center justify-center border border-[#017E84]/40"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h3 className="font-display font-extrabold text-3xl text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-white/70 text-sm max-w-md mx-auto leading-relaxed font-normal">
                    Thank you, <strong className="text-white">{name}</strong>. An Apex Tech solutions architect will review your project requirements and get in touch at <strong className="text-white">{email}</strong> / <strong className="text-white font-mono">{phone || 'your phone'}</strong> within 2 hours.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={getWhatsAppSubmitUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5D] transition-colors flex items-center gap-2 shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Also open on WhatsApp</span>
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors"
                    >
                      Send Another Inquiry
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#00A09D]">
                      Project Discovery & Scope Form
                    </span>
                    <span className="text-xs text-white/50">
                      Average reply: 45 mins
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input with Shake Animation */}
                    <motion.div
                      key={`shake-name-${shakeKeys.name}`}
                      animate={shakeKeys.name > 0 ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
                      transition={{ duration: 0.42, ease: [0.36, 0.07, 0.19, 0.97] }}
                    >
                      <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={name}
                        onChange={(e) => handleNameChange(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none transition-all duration-200 ${
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

                    {/* Email Input with Shake Animation */}
                    <motion.div
                      key={`shake-email-${shakeKeys.email}`}
                      animate={shakeKeys.email > 0 ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
                      transition={{ duration: 0.42, ease: [0.36, 0.07, 0.19, 0.97] }}
                    >
                      <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => handleEmailChange(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none transition-all duration-200 ${
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Input with Shake Animation */}
                    <motion.div
                      key={`shake-phone-${shakeKeys.phone}`}
                      animate={shakeKeys.phone > 0 ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : { x: 0 }}
                      transition={{ duration: 0.42, ease: [0.36, 0.07, 0.19, 0.97] }}
                    >
                      <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none transition-all duration-200 ${
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

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1.5">
                        Discipline of Interest
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#14101A] border border-white/15 text-white text-sm focus:outline-none focus:border-[#714B67] focus:ring-1 focus:ring-[#714B67] transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#14101A] text-white">
                            {s.title}
                          </option>
                        ))}
                        <option value="Complete Web & SEO Package" className="bg-[#14101A] text-white">
                          Complete Web & SEO Package (Web + UI/UX + SEO)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1.5">
                      Target Project Scale
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['MVP / Rapid Sprint', 'Full Platform Build', 'Enterprise Scale'].map((scope) => (
                        <motion.button
                          key={scope}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setProjectScope(scope)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all truncate ${
                            projectScope === scope
                              ? 'bg-[#714B67] text-white border-[#714B67] shadow-[0_0_15px_rgba(113,75,103,0.4)]'
                              : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          {scope}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-1.5">
                      Tell us about your project goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what you're building, target audience, key features, or current site URL..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#714B67] focus:ring-1 focus:ring-[#714B67] transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#714B67] hover:bg-[#885B7C] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(113,75,103,0.4)] disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </motion.button>

                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={getWhatsAppSubmitUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </motion.a>
                  </div>

                  <div className="text-center text-[11px] text-white/50 pt-2 font-normal">
                    🔒 Direct engineering response within 2 hours. 100% confidential.
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
