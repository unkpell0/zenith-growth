import React from 'react';
import CountdownTimer from './CountdownTimer';
import { CheckIcon, AcademicCapIcon, PresentationChartLineIcon, BuildingStorefrontIcon, CogIcon, ChatBubbleIcon, ArrowRightIcon } from '../constants';

const PricingSection: React.FC = () => {
  const threeHoursFromNow = new Date(Date.now() + 3 * 60 * 60 * 1000);
  const whatsappLink = "https://api.whatsapp.com/send?phone=6288988988918&text=Halo%20saya%20serius%20ingin%20berkomitmen%20Rp.%20300.000%20untuk%20transformasi%20dengan%20Zenith%20Growth%20Framework";

  const coreModules = [
    { name: "Modul Target PEMBELI JITU", value: "Rp 5.000.000", icon: <AcademicCapIcon className="w-5 h-5 text-icon-blue" /> },
    { name: "Modul Copywriting PENGHASIL DUIT (AI)", value: "Rp 7.000.000", icon: <PresentationChartLineIcon className="w-5 h-5 text-icon-blue" /> },
    { name: "Modul 'Toko Online' Properti ANTI SEPI", value: "Rp 8.000.000", icon: <BuildingStorefrontIcon className="w-5 h-5 text-icon-blue" /> },
    { name: "Modul Sistem Follow-Up OTOMATIS & Anti PHP", value: "Rp 6.000.000", icon: <CogIcon className="w-5 h-5 text-icon-blue" /> },
    { name: "Akses Komunitas & Toolkit AI EKSKLUSIF", value: "Rp 3.000.000", icon: <ChatBubbleIcon className="w-5 h-5 text-icon-blue" /> },
  ];
  const totalCoreValue = coreModules.reduce((sum, mod) => sum + parseInt(mod.value.replace(/\D/g, '')), 0);

  const bonuses = [
    { name: "BONUS #1: Blueprint Iklan ANTI-BONCOS", value: "Rp 500.000" },
    { name: "BONUS #2: 'Contekan' Prompt AI Copywriting", value: "Rp 1.000.000" },
    { name: "BONUS #3: Sesi Q&A EKSKLUSIF (Biar Makin Pinter!)", value: "Rp 2.500.000" },
  ];
  const totalBonusValue = bonuses.reduce((sum, bon) => sum + parseInt(bon.value.replace(/\D/g, '')), 0);
  const totalRealValue = totalCoreValue + totalBonusValue;
  const totalRealValueFormatted = `Rp ${totalRealValue.toLocaleString('id-ID')}`;


  return (
    <section id="pricing" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-section-heading font-bold text-center text-brand-text-light mb-6 tracking-tight leading-section-heading">
          Investasi Cerdas untuk Hasil Optimal. <span className="text-brand-primary">Amankan Penawaran Spesial Ini!</span>
        </h2>
        <p className="text-body-text text-brand-text-medium text-center max-w-3xl mx-auto mb-12 md:mb-16 leading-body-text">
          Ini bukan sekadar kursus. Ini adalah investasi strategis untuk pertumbuhan bisnis properti Anda yang berkelanjutan.
        </p>

        <div
          className="max-w-2xl mx-auto bg-gradient-to-br from-brand-bg-card-start to-brand-bg-card-end rounded-3xl shadow-brand-shadow-medium p-8 md:p-10 lg:p-12 border border-brand-border-hover relative overflow-hidden"
        >
          <div className="absolute -top-px -right-px md:top-0 md:right-0 bg-icon-yellow text-black font-bold py-2 px-6 text-xs shadow-lg transform md:rotate-45 md:translate-x-12 md:-translate-y-5 origin-center md:origin-top-right z-10 tracking-wide">
            PENAWARAN TERBATAS!
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-center text-brand-text-light mb-2">Zenith Growth Framework: Paket Komprehensif</h3>
          <p className="text-center text-brand-primary mb-6 text-lg font-medium">Total Nilai Sesungguhnya: <strong className="text-brand-text-light">{totalRealValueFormatted}</strong> (Hemat Luar Biasa!)</p>

          <div className="mb-6 p-6 bg-brand-bg-hero-start/60 rounded-xl border border-brand-border">
            <h4 className="text-xl font-bold text-brand-text-light mb-4 text-center uppercase tracking-wider">INI SEMUA JADI MILIK ANDA!</h4>
            <div className="space-y-3">
              {coreModules.map((item, index) => (
                <div key={`mod-val-${index}`} className="flex items-start text-brand-text-medium text-base">
                   <CheckIcon className="w-5 h-5 text-icon-blue inline mr-2.5 shrink-0 mt-0.5" /> 
                   <div>
                    <span className="font-semibold text-brand-text-light">{item.name}</span> 
                    <span className="text-sm text-brand-text-dark"> (Nilai Asli: {item.value})</span>
                   </div>
                </div>
              ))}
              <hr className="border-brand-border/50 my-3"/>
              {bonuses.map((bonus, index) => (
                 <div key={`bonus-val-${index}`} className="flex items-start text-brand-text-medium text-base">
                   <CheckIcon className="w-5 h-5 text-icon-blue inline mr-2.5 shrink-0 mt-0.5" /> 
                   <div>
                    <span className="font-semibold text-brand-text-light">{bonus.name}</span>
                    <span className="text-sm text-brand-text-dark"> (Senilai: {bonus.value})</span>
                   </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-icon-yellow text-2xl line-through mb-1 font-medium">Harga Normal Paket Lengkap: Rp 6.000.000+</p>

          <p className="text-center text-brand-primary text-xl mb-1 font-semibold">Harga Spesial Pre-Launch (<span className='text-brand-text-light'>Slot Sangat Terbatas</span>):</p>
          <p
            className="text-5xl md:text-6xl font-extrabold text-center text-brand-primary my-1 mb-4"
            style={{textShadow: '0 0 10px rgba(59, 130, 246, 0.3)'}}
          >
            Rp 300.000
          </p>
          <div className="text-center text-base font-semibold text-brand-text-light mb-4 bg-brand-primary/80 py-2 px-3 rounded-md shadow-md">
             Dapatkan Akses Penuh Senilai {totalRealValueFormatted} Hanya dengan Rp 300.000!
          </div>

          <div className="my-4">
            <p className="text-center text-xs text-icon-yellow mt-1 mb-1 animate-pulse font-semibold">PENAWARAN INI BERAKHIR DALAM:</p>
            <CountdownTimer targetDate={threeHoursFromNow} />
            <p className="text-center text-xs text-brand-text-dark mt-1 font-medium">HARGA AKAN NAIK SETELAH TIMER BERAKHIR!</p>
          </div>
           

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cta-start to-brand-cta-end text-brand-text-light font-bold py-4 px-6 rounded-card text-xl md:text-2xl shadow-brand-shadow-glow-blue hover:shadow-brand-shadow-glow-blue-hover hover:bg-gradient-to-r hover:from-brand-cta-hover-start hover:to-brand-cta-hover-end transition-all duration-300 transform hover:-translate-y-px my-5 tracking-wide text-button-text"
            aria-label="Checkout di WhatsApp untuk Zenith Growth Framework"
          >
            <span>Checkout di WhatsApp</span>
            <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6" />
          </a>

          <div className="mt-8 p-4 bg-brand-bg-hero-start/60 rounded-xl border border-brand-border">
            <h4 className="text-lg font-semibold text-brand-text-light mb-2 text-center">Kenapa Hanya Rp 300.000? Ini Komitmen Kami.</h4>
            <p className="text-brand-text-medium text-center text-sm leading-relaxed">
            Kami mencari individu yang <strong className="text-brand-text-light">SERIUS BERKOMITMEN</strong> untuk bertindak dan meraih sukses. Investasi ini adalah filter untuk memastikan Anda mendapatkan <strong className="text-brand-text-light">FOKUS dan DUKUNGAN TERBAIK</strong>. Kesuksesan Anda adalah prioritas kami!
            </p>
          </div>
           <p className="text-center text-sm text-brand-text-dark opacity-70 mt-6">Akses Materi Langsung | Garansi Kepuasan 100% Uang Kembali 7 Hari.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;