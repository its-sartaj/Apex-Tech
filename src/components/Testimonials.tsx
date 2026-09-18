import { motion } from 'motion/react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#017E84] mb-3 block flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Feedback & Trust</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Trusted by founders, product leaders & marketers.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
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
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#714B67]/50 hover:shadow-md hover:bg-white transition-all duration-300 relative group"
            >
              <div>
                {/* Rating stars & Quote decoration */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200 group-hover:text-[#714B67]/30 transition-colors" />
                </div>

                {/* Quote content */}
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed italic mb-6 font-normal">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-900">
                    {t.name}
                  </h3>
                  <div className="text-xs text-slate-500">
                    {t.role}, <span className="font-semibold text-slate-700">{t.company}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#017E84]/10 border border-[#017E84]/20 text-[#017E84] uppercase tracking-wider">
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

