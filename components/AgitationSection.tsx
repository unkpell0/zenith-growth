import React from 'react';

const AgitationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-icon-red filter drop-shadow-lg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
        </div>
        <h2 className="text-section-heading font-semibold text-brand-text-light mb-6 leading-section-heading tracking-tight">
          Jangan Biarkan Kondisi Ini <span className="text-icon-red">Menggerogoti Bisnis</span> Anda!
        </h2>
        <p className="text-body-text text-brand-text-medium max-w-3xl mx-auto leading-body-text">
          Setiap hari tanpa perubahan adalah kerugian nyata: peluang terlewat, tim demotivasi, dan Anda semakin tertinggal. <strong className="text-brand-text-light font-medium">Jangan sampai penyesalan datang terlambat.</strong>
        </p>
      </div>
    </section>
  );
};

export default AgitationSection;