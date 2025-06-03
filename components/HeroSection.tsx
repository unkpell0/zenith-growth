import React from 'react';
import { ChevronDownIcon } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <h1 className="text-hero-heading font-bold text-brand-text-light mb-6 leading-hero-heading tracking-tight">
          Akhirnya! Cara Terbukti Closing <span className="text-brand-primary">6-12+ Unit Rumah/Bulan.</span>
        </h1>
        <p className="text-body-text text-brand-text-medium mb-8 max-w-3xl mx-auto leading-body-text">
          Iklan zonk, tim lesu, closing seret? Kami paham betul rasanya. Anda sudah kerja keras, tapi hasilnya gitu-gitu aja. Tenang, Anda tidak sendiri. <strong className='text-brand-text-light'>Dan yang terpenting, ada SOLUSI yang sudah terbukti</strong>. Kami hadir untuk mengubah semua itu.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center">
          <a href="#tentang" aria-label="Scroll ke bawah untuk menemukan solusi" className="mb-1 p-2 bg-brand-bg-card-start/30 rounded-full animate-bounce hover:bg-brand-bg-card-start/50 transition-colors">
            <ChevronDownIcon className="w-12 h-12 md:w-16 md:h-16 text-brand-text-link hover:text-brand-primary transition-colors" />
          </a>
          <p className="text-sm text-brand-text-dark animate-pulse font-bold">👇 SCROLL, TEMUKAN JAWABANNYA! 👇</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;