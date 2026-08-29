import { motion } from 'motion/react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#080a0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A09D] mb-3 block flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Feedback & Trust</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Trusted by founders, product leaders & marketers.
          </h2>
          <p className="text-base sm:text-lg text-white/70 mt-4 leading-relaxed font-normal">
            Real feedback from growing companies who partnered with Apex Tech for modern website design, frontend engineering, and search optimization.
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#11141C] rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col justify-between hover:border-[#714B67]/50 hover:shadow-[0_10px_35px_rgba(113,75,103,0.2)] transition-all duration-300 relative group"
            >
              <div>
                {/* Rating stars & Quote decoration */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/10 group-hover:text-[#714B67]/40 transition-colors" />
                </div>

                {/* Quote content */}
                <p className="text-sm sm:text-[15px] text-white/80 leading-relaxed italic mb-6 font-normal">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-sm text-white">
                    {t.name}
                  </h3>
                  <div className="text-xs text-white/60">
                    {t.role}, <span className="font-semibold text-white/80">{t.company}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#017E84]/15 border border-[#017E84]/30 text-[#00A09D] uppercase tracking-wider">
                  {t.projectType}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

