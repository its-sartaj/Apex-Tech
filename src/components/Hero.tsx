import { motion } from 'motion/react';
import { ArrowRight, Phone, Mail, CheckCircle2, ShieldCheck, Sparkles, MessageCircle, TrendingUp, Zap, Star } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';
import Logo from './Logo';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
      {/* Animated Subtle Ambient Light Canvas (Pure GPU CSS - Zero TBT) */}
      <div
        className="absolute -top-24 right-0 w-[700px] h-[700px] bg-gradient-to-br from-[#714B67]/10 via-[#017E84]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10 animate-ambient-1"
      />
      <div
        className="absolute top-48 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-[#714B67]/10 via-[#017E84]/5 to-transparent rounded-full blur-[100px] pointer-events-none -z-10 animate-ambient-2"
      />

      {/* Decorative Floating Background Particles (Pure CSS) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-slate-300/40 animate-pulse"
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + (i * 17) % 80}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition (Instant FCP & LCP) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Eyebrow badge with glowing pulse */}
            <div>
              <div
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#017E84]/10 border border-[#017E84]/30 text-[#017E84] text-xs font-bold uppercase tracking-widest shadow-sm cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#017E84] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#017E84]" />
                </span>
                <span>Full-Service Digital Studio & Website Builder</span>
              </div>
            </div>

            {/* Main Headline with Instant Paint (Crucial LCP element) */}
            <h1
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl text-slate-900 tracking-tight leading-[1.05]"
            >
              We build the climb <br />
              <span className="bg-gradient-to-r from-[#714B67] via-[#9B6C8F] to-[#017E84] bg-clip-text text-transparent relative inline-block">
                to your apex.
                <svg
                  className="absolute -bottom-2.5 left-0 w-full text-[#017E84]"
                  height="10"
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <path
                    d="M2 7C50 2 150 2 198 7"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Lead paragraph */}
            <p
              className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal"
            >
              Apex Tech designs and builds high-performing websites, modern UI/UX design systems, and organic search visibility for ambitious brands ready to reach further — backed by direct communication, clean code, and zero agency fluff.
            </p>

            {/* Direct Contact Bar Highlight Card */}
            <div
              className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-md max-w-xl relative overflow-hidden group"
            >
              {/* Subtle card edge glow */}
              <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-[#714B67] to-[#017E84] opacity-80 group-hover:w-full transition-all duration-700" />

              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#017E84]" />
                <span>Direct Contact Line • Zero Middleware</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  href={`tel:${COMPANY_DETAILS.phoneTel}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#714B67]/10 border border-[#714B67]/30 text-[#714B67] font-bold text-sm hover:bg-[#714B67] hover:text-white transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#017E84]" />
                  <span className="font-mono tracking-tight">Call: {COMPANY_DETAILS.phone}</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#017E84]/10 border border-[#017E84]/30 text-[#017E84] font-semibold text-sm hover:bg-[#017E84] hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4 text-[#017E84]" />
                  <span>{COMPANY_DETAILS.email}</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs hover:bg-emerald-600 hover:text-white transition-all"
                  title="WhatsApp Chat"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                id="hero-primary-cta"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#714B67] hover:bg-[#885B7C] text-white text-base font-bold transition-all shadow-[0_4px_16px_rgba(113,75,103,0.35)] relative overflow-hidden group"
              >
                <span className="relative z-10">Start a project</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-slate-200 hover:border-[#714B67] text-slate-800 hover:text-[#714B67] text-base font-semibold transition-all shadow-sm"
              >
                <span>Explore Featured Work</span>
              </motion.a>

              <motion.a
                whileHover={{ x: 3 }}
                href="#services"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-600 hover:text-[#714B67] transition-colors"
              >
                <span>Our capabilities</span>
                <span aria-hidden="true">→</span>
              </motion.a>
            </div>

            {/* Trust Highlights Checkmarks */}
            <div
              className="flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-slate-700 pt-2 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#017E84]" />
                <span>100% Code &amp; Asset Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#017E84]" />
                <span>30-Day Post-Launch Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#714B67]" />
                <span>Fixed Scope &amp; Guaranteed Milestones</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Animated Summit Graphic & Live Telemetry Cards */}
          <div
            className="lg:col-span-5 relative"
          >
            {/* Floating Top Floating Chip (Pure CSS) */}
            <div
              className="absolute -top-5 -left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-xs font-bold text-slate-900 animate-chip-float"
            >
              <div className="w-6 h-6 rounded-lg bg-[#714B67]/10 text-[#714B67] flex items-center justify-center">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <span>98+ Core Web Vitals Guaranteed</span>
            </div>

            {/* Floating Bottom Floating Chip (Pure CSS) */}
            <div
              className="absolute -bottom-5 -right-3 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-xs font-bold text-slate-900 animate-chip-float-rev"
            >
              <div className="w-6 h-6 rounded-lg bg-[#017E84]/10 text-[#017E84] flex items-center justify-center">
                <Star className="w-3.5 h-3.5 fill-[#017E84]" />
              </div>
              <span>100% 5-Star Client Rating</span>
            </div>

            {/* Main Interactive Stage Container */}
            <div
              className="relative bg-gradient-to-b from-[#11141C] to-[#0d0f16] rounded-3xl p-7 text-white shadow-2xl overflow-hidden border border-white/15 group animate-chip-float"
            >
              {/* Header inside stage */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
                <Logo size="sm" subtitleText="Engineering Lab" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/80 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#017E84]" />
                  <span>Apex Core v4.8</span>
                </span>
              </div>

              {/* Dynamic Summit Visual SVG with Glowing Waypoints */}
              <div className="relative w-full h-60 flex items-center justify-center">
                <svg viewBox="0 0 500 340" fill="none" className="w-full h-full drop-shadow-xl">
                  <defs>
                    <linearGradient id="heroPeakGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#714B67" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#017E84" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#017E84" />
                      <stop offset="45%" stopColor="#714B67" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines in background */}
                  <line x1="40" y1="280" x2="460" y2="280" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                  <line x1="40" y1="200" x2="460" y2="200" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                  <line x1="40" y1="120" x2="460" y2="120" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                  {/* Mountain silhouette */}
                  <polygon points="40,300 160,150 220,210 320,50 460,300" fill="url(#heroPeakGrad)" />

                  {/* Path line */}
                  <motion.polyline
                    points="40,300 160,150 220,210 320,50 460,300"
                    fill="none"
                    stroke="url(#heroLineGrad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                  />

                  {/* Waypoint 1: Discovery */}
                  <circle cx="160" cy="150" r="6" fill="#017E84" />
                  <circle cx="160" cy="150" r="12" fill="#017E84" fillOpacity="0.2" className="animate-pulse" />
                  <text x="135" y="135" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                    Phase 1
                  </text>

                  {/* Waypoint 2: Prototype */}
                  <circle cx="220" cy="210" r="6" fill="#017E84" />
                  <circle cx="220" cy="210" r="12" fill="#017E84" fillOpacity="0.2" className="animate-pulse" />
                  <text x="232" y="215" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                    Phase 2
                  </text>

                  {/* Waypoint 3: Summit Peak */}
                  <circle cx="320" cy="50" r="9" fill="#714B67" stroke="#FFFFFF" strokeWidth="3" />
                  <circle cx="320" cy="50" r="20" fill="#714B67" fillOpacity="0.35" className="animate-ping" />
                  
                  {/* Summit Marker Box */}
                  <rect x="340" y="36" width="125" height="28" rx="8" fill="#FFFFFF" />
                  <text x="350" y="54" fill="#050505" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                    ★ Launch Apex (100%)
                  </text>
                </svg>
              </div>

              {/* Status pill with animated indicator */}
              <div className="mt-3 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/85 font-semibold flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#017E84]" />
                    <span>Sprint Capacity Status:</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#00A09D] font-bold px-2.5 py-0.5 rounded-full bg-[#017E84]/15 border border-[#017E84]/30">
                    <span className="w-2 h-2 rounded-full bg-[#017E84] animate-pulse" />
                    Open for Q3/Q4 Projects
                  </span>
                </div>
                <div className="text-xs text-white/80 leading-relaxed">
                  Currently accepting new web design &amp; engineering, UI/UX systems, and search visibility projects. Average response: 45 minutes.
                </div>
              </div>

              {/* Contact mini footer inside card */}
              <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                <span className="font-semibold uppercase tracking-wider text-[10px] text-white/80">Direct Engineer Desk:</span>
                <a
                  href={`tel:${COMPANY_DETAILS.phoneTel}`}
                  className="font-mono text-white hover:text-[#017E84] font-bold tracking-wide transition-colors"
                >
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Row with Smooth Scroll-Triggered Fade-In */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-10 border-t border-slate-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {COMPANY_DETAILS.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: '#714B67' }}
                className="space-y-1.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
