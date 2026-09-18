import { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Palette, Search, TrendingUp, Check, ArrowRight, Clock, Award, Layers } from 'lucide-react';
import { SERVICES, COMPANY_DETAILS } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#017E84] mb-3 block">
            What We Do
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Four disciplines, one integrated team.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-normal">
            No endless handoffs between disconnected agencies. Your website design, modern frontend, and organic search visibility are crafted and optimized by specialists who collaborate daily.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SERVICES.map((service, index) => {
            const isSelected = selectedService.id === service.id;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => setSelectedService(service)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`cursor-pointer rounded-3xl p-8 transition-all duration-200 border bg-white ${
                  isSelected
                    ? 'border-[#714B67] shadow-lg ring-2 ring-[#714B67]/30'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#714B67]/10 border border-[#714B67]/20 text-[#714B67] flex items-center justify-center shadow-sm">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {service.timeline}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-slate-900 mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold text-[#017E84] bg-[#017E84]/10 border border-[#017E84]/20 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 4 && (
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-1 rounded-md">
                      +{service.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold">
                  <span className="text-slate-600">
                    Ideal for: <strong className="text-slate-900">{service.popularFor}</strong>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.title);
                    }}
                    className="inline-flex items-center gap-1 text-[#017E84] hover:text-[#714B67] font-bold transition-colors cursor-pointer"
                  >
                    <span>Discuss Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Service Deep Dive Drawer / Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#714B67] text-white flex items-center justify-center shadow-[0_2px_10px_rgba(113,75,103,0.3)]">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#017E84]">
                  Detailed Breakdown
                </span>
                <h4 className="font-display font-bold text-2xl text-slate-900">
                  {selectedService.title} Blueprint
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phoneTel}`}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 hover:bg-slate-200 transition-colors"
              >
                <span>Call specialist: {COMPANY_DETAILS.phone}</span>
              </a>
              <button
                onClick={() => onSelectService(selectedService.title)}
                className="px-5 py-2.5 bg-[#714B67] hover:bg-[#885B7C] text-white text-xs font-bold rounded-full transition-colors flex items-center gap-2 shadow-[0_2px_10px_rgba(113,75,103,0.3)] cursor-pointer"
              >
                <span>Inquire About {selectedService.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-slate-700 leading-relaxed">
                {selectedService.longDesc}
              </p>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#714B67]" />
                  <span>Key Technical Capabilities</span>
                </h5>
                <div className="space-y-2.5">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-[#017E84]/10 text-[#017E84] flex items-center justify-center shrink-0 mt-0.5 border border-[#017E84]/30">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Verified Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-800 shadow-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Standard Deliverables
                </span>
                <ul className="space-y-2 text-xs text-slate-800 font-medium">
                  {selectedService.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#017E84]" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#714B67]" />
                  <span>Timeline: <strong className="text-slate-900">{selectedService.timeline}</strong></span>
                </span>
                <span className="text-[#017E84] font-bold bg-[#017E84]/10 px-2 py-0.5 rounded border border-[#017E84]/20">
                  Dedicated Team
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
