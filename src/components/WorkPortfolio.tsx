import { useState } from 'react';
import { motion } from 'motion/react';
import { CASE_STUDIES, COMPANY_DETAILS } from '../data';
import { CaseStudy } from '../types';
import { ArrowUpRight, X, Phone, ArrowRight, Image as ImageIcon, Layers } from 'lucide-react';

interface WorkPortfolioProps {
  onOpenConsultation: () => void;
}

export default function WorkPortfolio({ onOpenConsultation }: WorkPortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'uiux' | 'seo'>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

  const filteredProjects = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.category === activeFilter);

  const handleOpenDetail = (project: CaseStudy) => {
    setSelectedCaseStudy(project);
    setActiveGalleryIndex(0);
  };

  return (
    <section id="work" className="py-20 bg-[#080a0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00A09D] mb-3 block">
              Featured Case Studies & Work
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Crafted websites & design systems.
            </h2>
            <p className="text-base sm:text-lg text-white/70 mt-3 font-normal">
              Explore our real production websites, modern UI/UX design prototypes, and technical search visibility projects.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#714B67] text-white shadow-[0_0_15px_rgba(113,75,103,0.4)]'
                  : 'bg-[#14101A] border border-white/10 text-white/70 hover:text-white hover:border-[#714B67]'
              }`}
            >
              All Work ({CASE_STUDIES.length})
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeFilter === 'web'
                  ? 'bg-[#714B67] text-white shadow-[0_0_15px_rgba(113,75,103,0.4)]'
                  : 'bg-[#14101A] border border-white/10 text-white/70 hover:text-white hover:border-[#714B67]'
              }`}
            >
              Websites
            </button>
            <button
              onClick={() => setActiveFilter('uiux')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeFilter === 'uiux'
                  ? 'bg-[#714B67] text-white shadow-[0_0_15px_rgba(113,75,103,0.4)]'
                  : 'bg-[#14101A] border border-white/10 text-white/70 hover:text-white hover:border-[#714B67]'
              }`}
            >
              UI/UX & Brand
            </button>
            <button
              onClick={() => setActiveFilter('seo')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeFilter === 'seo'
                  ? 'bg-[#714B67] text-white shadow-[0_0_15px_rgba(113,75,103,0.4)]'
                  : 'bg-[#14101A] border border-white/10 text-white/70 hover:text-white hover:border-[#714B67]'
              }`}
            >
              SEO & Speed
            </button>
          </div>
        </motion.div>

        {/* Work Grid with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`case-study-${project.id}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#11141C] rounded-3xl overflow-hidden border border-white/10 hover:border-[#714B67]/40 hover:shadow-[0_10px_35px_rgba(113,75,103,0.15)] transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => handleOpenDetail(project)}
            >
              {/* Photo Showcase Container */}
              <div className="relative h-60 w-full overflow-hidden bg-[#14101A]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Dark Vignette Overlay for Crisp Typography */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#11141C] via-[#11141C]/40 to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20">
                    {project.category.toUpperCase()}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#714B67] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Client Label on Photo */}
                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#00A09D] drop-shadow-sm">
                    {project.client}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white leading-tight mt-0.5 line-clamp-1 drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal line-clamp-3">
                  {project.summary}
                </p>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-[#171C28] rounded-2xl border border-white/10">
                  {project.impactMetrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display font-extrabold text-xs sm:text-sm text-white leading-tight">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-white/50 mt-0.5 truncate">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech chips & Action */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.techStack.slice(0, 2).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[11px] text-white/80 font-medium truncate"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 2 && (
                      <span className="px-1.5 py-0.5 bg-white/5 rounded text-[10px] text-white/50">
                        +{project.techStack.length - 2}
                      </span>
                    )}
                  </div>
                  <span className="font-bold text-[#00A09D] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0">
                    <span>View Project</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Contact Callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 p-8 rounded-3xl bg-[#11141C] border border-[#714B67]/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="font-display font-bold text-2xl text-white">
              Have a product idea or overhaul in mind?
            </h4>
            <p className="text-sm text-white/70 mt-1 font-normal">
              Direct engineering line: <a href={`tel:${COMPANY_DETAILS.phoneTel}`} className="text-white font-mono font-bold underline">{COMPANY_DETAILS.phone}</a> • Response within 2 hours.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 bg-[#714B67] hover:bg-[#885B7C] text-white text-xs font-bold rounded-full transition-colors shrink-0 flex items-center gap-2 shadow-[0_0_15px_rgba(113,75,103,0.4)]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>

      {/* High-Resolution Case Study & Photo Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#11141C] text-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-white/20 shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/70 text-white hover:bg-[#714B67] hover:text-white transition-colors shadow-lg border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Primary Image Showcase */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black rounded-t-3xl">
              <img
                src={
                  selectedCaseStudy.galleryImages && selectedCaseStudy.galleryImages[activeGalleryIndex]
                    ? selectedCaseStudy.galleryImages[activeGalleryIndex]
                    : selectedCaseStudy.imageUrl
                }
                alt={selectedCaseStudy.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11141C] via-transparent to-black/40" />

              <div className="absolute bottom-5 left-6 right-6 z-20">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00A09D] drop-shadow-md">
                  {selectedCaseStudy.category.toUpperCase()} • {selectedCaseStudy.client}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white drop-shadow-lg mt-1">
                  {selectedCaseStudy.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Photo Gallery Thumbnails if Available */}
              {selectedCaseStudy.galleryImages && selectedCaseStudy.galleryImages.length > 1 && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2 flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-[#017E84]" />
                    <span>Project Visuals & Screenshots:</span>
                  </div>
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {selectedCaseStudy.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveGalleryIndex(idx)}
                        className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                          activeGalleryIndex === idx ? 'border-[#714B67] scale-105 shadow-[0_0_10px_rgba(113,75,103,0.6)]' : 'border-white/20 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenge & Solution Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#00A09D]" />
                  <span>Project Overview & Architecture:</span>
                </h4>
                <p className="text-sm text-white/80 leading-relaxed font-normal">
                  {selectedCaseStudy.fullDescription}
                </p>
              </div>

              {/* Impact Metrics */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3">
                  Delivered Performance & Impact:
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {selectedCaseStudy.impactMetrics.map((m, i) => (
                    <div key={i} className="p-3.5 bg-[#14101A] rounded-2xl border border-[#714B67]/30 text-center">
                      <div className="font-display font-extrabold text-lg text-[#00A09D]">
                        {m.value}
                      </div>
                      <div className="text-xs text-white/60 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                  Production Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 border border-white/15 rounded-lg text-xs font-semibold text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneTel}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white"
                >
                  <Phone className="w-4 h-4 text-[#017E84]" />
                  <span>Direct Desk: <strong className="text-white font-mono">{COMPANY_DETAILS.phone}</strong></span>
                </a>
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    onOpenConsultation();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#714B67] hover:bg-[#885B7C] text-white text-xs font-bold transition-colors shadow-[0_0_15px_rgba(113,75,103,0.4)]"
                >
                  Request Similar Project Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
