import React from 'react';
import { CheckIcon, TargetIcon, UsersIcon, PresentationChartLineIcon } from '../constants';
import type { ValueProposition } from '../types';

const propositions: ValueProposition[] = [
  { id: 1, text: "Prospek Berkualitas Tinggi Mengantri untuk Properti Anda.", icon: <UsersIcon className="w-8 h-8 text-icon-blue" /> },
  { id: 2, text: "Anggaran Iklan Efisien, Konversi & Profit Meroket.", icon: <PresentationChartLineIcon className="w-8 h-8 text-icon-blue" /> },
  { id: 3, text: "Tim Penjualan Anda Jadi Mesin Closing yang Handal.", icon: <TargetIcon className="w-8 h-8 text-icon-blue" /> },
  { id: 4, text: "Mencapai Target Puluhan Unit/Bulan Jadi Lebih Mudah.", icon: <CheckIcon className="w-8 h-8 text-icon-blue" /> },
];

const SolutionPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-section-heading font-semibold text-center text-brand-text-light mb-12 md:mb-16 tracking-tight leading-section-heading">
          Bayangkan Hasil Ini Jadi <span className="text-brand-primary">Kenyataan Anda...</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {propositions.map((prop) => (
            <div
              key={prop.id}
              className="flex items-center bg-gradient-to-br from-brand-bg-card-start to-brand-bg-card-end p-6 md:p-8 rounded-3xl shadow-brand-shadow-medium border border-brand-border hover:border-brand-border-hover transition-all duration-300 transform hover:-translate-y-1 hover:shadow-brand-shadow-strong"
            >
              <div className="p-2.5 bg-black/20 rounded-full mr-4 shrink-0 shadow-md">
                {prop.icon}
              </div>
              <p className="text-lg text-brand-text-light font-medium">{prop.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionPreview;