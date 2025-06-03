
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import AgitationSection from './components/AgitationSection';
import RevelationSection from './components/ConsultationOfferSection';
import SolutionPreview from './components/SolutionPreview';
import SocialProof from './components/SocialProof';
import ProductOverview from './components/ProductOverview';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection'; 
import GuaranteeSection from './components/GuaranteeSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg-hero-start flex flex-col">
      <Navbar />
      <main className="flex-grow pt-4 sm:pt-6">
        <HeroSection />
        {/* SectionDivider removed after HeroSection as Hero has its own scroll cue */}
        <ProblemSection />
        <SectionDivider />
        <AgitationSection />
        <SectionDivider />
        <RevelationSection />
        <SectionDivider />
        <SolutionPreview />
        <SectionDivider />
        <SocialProof />
        <SectionDivider />
        <ProductOverview />
        <SectionDivider />
        <PricingSection />
        <SectionDivider /> {/* Added divider before FAQ for consistent separation */}
        <FAQSection />
        {/* Guarantee and FinalCTA might flow naturally or have internal spacing, or a divider could be added if needed */}
        <GuaranteeSection /> 
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;