import { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Palette, Code, Flag, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { PROCESS_STAGES, COMPANY_DETAILS } from '../data';

interface ProcessProps {
  onOpenConsultation: () => void;
}

export default function Process({ onOpenConsultation }: ProcessProps) {
  const [activeStage, setActiveStage] = useState(0);

  const getStageIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5" />;
      case 1:
        return <Palette className="w-5 h-5" />;
      case 2:
        return <Code className="w-5 h-5" />;
      case 3:
        return <Flag className="w-5 h-5" />;
      default:
        return <CheckCircle className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#080a0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#00A09D] mb-3 block">
            How We Work
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            The ascent, mapped out step-by-step.
          </h2>
          <p className="text-base sm:text-lg text-white/70 mt-4 leading-relaxed font-normal">
            Every project climbs through four clearly defined stages with continuous staging links and zero surprises. You always know what is being built, why, and what comes next.
          </p>
        </motion.div>

        {/* 4 Stages Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Stage Navigation Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {PROCESS_STAGES.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={stage.number}
                  id={`process-stage-${stage.number}`}
                  onClick={() => setActiveStage(idx)}
                  className={`cursor-pointer p-5 rounded-2xl transition-all duration-200 border text-left flex items-start gap-4 ${
                    isActive
                      ? 'bg-[#181320] text-white border-[#714B67] ring-1 ring-[#714B67] shadow-[0_0_20px_rgba(113,75,103,0.3)]'
                      : 'bg-[#11141C] text-white border-white/10 hover:bg-[#151924] hover:border-white/20'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl font-display font-extrabold text-base flex items-center justify-center shrink-0 ${
                      isActive
                        ? 'bg-[#714B67] text-white shadow-sm'
                        : 'bg-white/5 border border-white/10 text-white/60'
                    }`}
                  >
                    {stage.number}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-display font-bold text-lg ${
                          isActive ? 'text-white' : 'text-white/80'
                        }`}
                      >
                        {stage.name}
                      </h3>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded ${
                          isActive
                            ? 'bg-[#714B67]/30 text-purple-200 border border-[#714B67]/50'
                            : 'bg-white/5 text-white/60 border border-white/10'
                        }`}
                      >
                        {stage.duration}
                      </span>
                    </div>
                    <p
                      className={`text-xs mt-1 ${
                        isActive ? 'text-white/70' : 'text-white/50'
                      }`}
                    >
                      {stage.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Support Note */}
            <div className="p-4 rounded-2xl bg-[#11141C] border border-white/10 text-xs text-white/80 flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#00A09D] shrink-0" />
              <div>
                <span className="font-bold text-white">Weekly Checkpoint Calls</span>
                <p className="text-white/60 mt-0.5">
                  Direct phone access to lead engineer: <strong className="text-white font-mono">{COMPANY_DETAILS.phone}</strong>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Active Stage Deep Dive */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#11141C] rounded-3xl p-8 sm:p-10 border border-[#714B67]/30 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#714B67] text-white flex items-center justify-center shadow-[0_0_15px_rgba(113,75,103,0.4)]">
                  {getStageIcon(activeStage)}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#00A09D]">
                    Phase {PROCESS_STAGES[activeStage].number} Details
                  </span>
                  <h4 className="font-display font-bold text-2xl text-white">
                    {PROCESS_STAGES[activeStage].name}
                  </h4>
                </div>
              </div>

              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                Estimated duration: {PROCESS_STAGES[activeStage].duration}
              </span>
            </div>

            <div className="py-6 space-y-6">
              <p className="text-base text-white/80 leading-relaxed font-normal">
                {PROCESS_STAGES[activeStage].description}
              </p>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                  Core Stage Activities:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROCESS_STAGES[activeStage].activities.map((act, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#171C28] rounded-xl border border-white/10 text-xs text-white/90 font-medium flex items-start gap-2"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#714B67]/30 text-[#9B6C8F] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                        {i + 1}
                      </span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-[#017E84]/20 via-[#714B67]/20 to-transparent rounded-2xl border border-[#017E84]/30">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#00A09D] block mb-1">
                  Guaranteed Tangible Deliverable:
                </span>
                <p className="text-sm font-bold text-white">
                  {PROCESS_STAGES[activeStage].deliverable}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-white/60">
                Have a hard deadline? We offer expedited sprint lanes.
              </div>
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-full bg-[#714B67] hover:bg-[#885B7C] text-white text-xs font-bold transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(113,75,103,0.4)]"
              >
                <span>Schedule Ascent Discovery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
