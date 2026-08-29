import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WorkPortfolio from './components/WorkPortfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import FloatingContactBar from './components/FloatingContactBar';
import SectionDivider from './components/SectionDivider';
import BackToTop from './components/BackToTop';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('Web Development');

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
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections with Glowing Animated Dividers */}
      <main className="flex-1">
        <Hero onOpenConsultation={() => handleOpenConsultation()} />
        
        <SectionDivider showBadge badgeLabel="Core Disciplines" />
        <Services onSelectService={(service) => handleOpenConsultation(service)} />
        
        <SectionDivider showBadge badgeLabel="Execution Framework" />
        <Process onOpenConsultation={() => handleOpenConsultation()} />
        
        <SectionDivider showBadge badgeLabel="Selected Works" />
        <WorkPortfolio onOpenConsultation={() => handleOpenConsultation()} />
        
        <SectionDivider showBadge badgeLabel="Verified Results" />
        <Testimonials />
        
        <SectionDivider showBadge badgeLabel="Clarity & FAQ" />
        <FAQ onOpenConsultation={() => handleOpenConsultation()} />
        
        <SectionDivider showBadge badgeLabel="Direct Engagement" />
        <ContactSection preselectedService={selectedServiceForModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Quick Bar */}
      <FloatingContactBar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Floating Circular Back-to-Top Action */}
      <BackToTop />

      {/* Consultation Discovery Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
        defaultService={selectedServiceForModal}
      />
    </div>
  );
}

