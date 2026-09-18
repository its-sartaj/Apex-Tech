import { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FloatingContactBar from './components/FloatingContactBar';
import SectionDivider from './components/SectionDivider';
import BackToTop from './components/BackToTop';

// Lazy-load below-the-fold components to drastically minimize initial JS payload and TBT
const Services = lazy(() => import('./components/Services'));
const Process = lazy(() => import('./components/Process'));
const WorkPortfolio = lazy(() => import('./components/WorkPortfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const ConsultationModal = lazy(() => import('./components/ConsultationModal'));
const AdminModal = lazy(() => import('./components/AdminModal'));

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('Web Development');

  useEffect(() => {
    const checkAdminTrigger = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (hash.includes('admin') || search.includes('admin')) {
        setAdminOpen(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setAdminOpen((prev) => !prev);
      }
    };

    checkAdminTrigger();

    window.addEventListener('hashchange', checkAdminTrigger);
    window.addEventListener('popstate', checkAdminTrigger);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('hashchange', checkAdminTrigger);
      window.removeEventListener('popstate', checkAdminTrigger);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForModal(serviceName);
    }
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#F5F5F5] flex flex-col selection:bg-[#714B67] selection:text-white">
      {/* Primary Navigation Header */}
      <Header onOpenConsultation={handleOpenConsultation} onOpenAdmin={() => setAdminOpen(true)} />

      {/* Main Content Sections with Glowing Animated Dividers */}
      <main className="flex-1">
        {/* Instant Above-The-Fold Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />
        
        {/* Asynchronously hydrated below-the-fold content */}
        <Suspense fallback={<div className="min-h-[400px] w-full" />}>
          <div className="content-auto">
            <SectionDivider showBadge badgeLabel="Core Disciplines" />
            <Services onSelectService={handleOpenConsultation} />
          </div>
          
          <div className="content-auto">
            <SectionDivider showBadge badgeLabel="Execution Framework" />
            <Process onOpenConsultation={handleOpenConsultation} />
          </div>
          
          <div className="content-auto">
            <SectionDivider showBadge badgeLabel="Selected Works" />
            <WorkPortfolio onOpenConsultation={handleOpenConsultation} />
          </div>
          
          <div className="content-auto">
            <SectionDivider showBadge badgeLabel="Verified Results" />
            <Testimonials />
          </div>
          
          <div className="content-auto">
            <SectionDivider showBadge badgeLabel="Clarity & FAQ" />
            <FAQ onOpenConsultation={handleOpenConsultation} />
          </div>
          
          <div className="content-auto">
            <SectionDivider showBadge badgeLabel="Direct Engagement" />
            <ContactSection preselectedService={selectedServiceForModal} />
          </div>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer onOpenAdmin={() => setAdminOpen(true)} />

      {/* Floating Interactive Quick Bar */}
      <FloatingContactBar onOpenConsultation={handleOpenConsultation} />

      {/* Floating Circular Back-to-Top Action */}
      <BackToTop />

      {/* Consultation Discovery Modal (Code-split) */}
      {consultationOpen && (
        <Suspense fallback={null}>
          <ConsultationModal
            isOpen={consultationOpen}
            onClose={handleCloseConsultation}
            defaultService={selectedServiceForModal}
          />
        </Suspense>
      )}

      {/* Admin Panel Modal (Code-split) */}
      {adminOpen && (
        <Suspense fallback={null}>
          <AdminModal
            isOpen={adminOpen}
            onClose={() => {
              setAdminOpen(false);
              if (window.location.hash === '#admin') {
                history.replaceState(null, '', window.location.pathname + window.location.search);
              }
            }}
          />
        </Suspense>
      )}
    </div>
  );
}

