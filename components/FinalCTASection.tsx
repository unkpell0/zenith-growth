import React from 'react';
import { ArrowRightIcon } from '../constants';

const FinalCTASection: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=6288988988918&text=Halo%20saya%20serius%20ingin%20berkomitmen%20Rp.%20300.000%20untuk%20transformasi%20dengan%20Zenith%20Growth%20Framework";

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-brand-bg-card-start via-brand-primary/10 to-brand-bg-card-end text-brand-text-light">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-[3.2rem] font-bold mb-8 leading-tight tracking-tight">
          Saatnya Membuat Keputusan Tepat: <br className="hidden sm:block md:hidden"/> <span className="text-brand-primary">Transformasi Penjualan</span> atau Stagnasi?
        </h2>
        <p className="text-body-text text-brand-text-medium mb-10 max-w-2xl mx-auto leading-body-text">
          Ini bukan sekadar program. Ini adalah <strong className="text-brand-text-light">komitmen untuk pertumbuhan eksponensial.</strong> Dapatkan akses ke seluruh strategi, panduan, dan dukungan kami dengan investasi minimal. <strong className="text-icon-yellow">Slot sangat terbatas dan bisa habis kapan saja.</strong>
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cta-start to-brand-cta-end text-brand-text-light font-bold py-4 md:py-5 px-10 md:px-12 rounded-card text-xl md:text-2xl shadow-brand-shadow-glow-blue hover:shadow-brand-shadow-glow-blue-hover hover:bg-gradient-to-r hover:from-brand-cta-hover-start hover:to-brand-cta-hover-end transition-all duration-300 transform hover:-translate-y-px animate-pulse text-button-text tracking-wide"
          aria-label="Amankan Slot Anda Sekarang!"
        >
          <span>Amankan Slot Anda Sekarang!</span>
          <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <p className="mt-6 text-brand-text-medium text-sm">
          Garansi Kepuasan 100% Uang Kembali 7 Hari | <strong className="text-icon-yellow">SLOT SANGAT TERBATAS, AMBIL SEBELUM KEHABISAN!</strong>
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;