import React from 'react';
import { XCircleIcon, LightbulbIcon, PresentationChartLineIcon } from '../constants';

const RevelationSection: React.FC = () => {
  const revelations = [
    {
      icon: <XCircleIcon className="w-12 h-12 text-icon-red filter drop-shadow-md" />,
      title: "Kesalahan #1: Beraksi Tanpa Strategi Matang",
      text: "Banyak yang hanya ikut-ikutan tren tanpa dasar yang kuat. Padahal, strategi cerdas adalah kunci utama penjualan yang konsisten."
    },
    {
      icon: <LightbulbIcon className="w-12 h-12 text-icon-blue filter drop-shadow-md" />,
      title: "Solusinya: Fokus Kualitas Prospek, Bukan Kuantitas",
      text: "Ribuan chat tidak berarti jika bukan dari calon pembeli yang tepat. Prioritaskan kualitas prospek untuk efisiensi maksimal."
    },
    {
      icon: <PresentationChartLineIcon className="w-12 h-12 text-icon-cyan filter drop-shadow-md" />,
      title: "Kuncinya: Ubah Prospek Hangat Jadi Pembeli Loyal",
      text: "Setiap interaksi adalah peluang emas. Optimalkan proses dari tanya-jawab hingga closing dengan pendekatan yang tepat."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-bg-navbar backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-section-heading font-semibold text-brand-text-light mb-12 leading-section-heading tracking-tight">
            Ubah Paradigma: 3 <span className='text-brand-primary'>Kesalahan Umum</span> & Solusi Marketing Properti
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12">
            {revelations.map((revelation, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gradient-to-br from-brand-bg-card-start to-brand-bg-card-end p-6 md:p-8 rounded-3xl shadow-brand-shadow-medium border border-brand-border hover:border-brand-border-hover transition-all duration-300 transform hover:-translate-y-1 hover:shadow-brand-shadow-strong"
              >
                <div className="p-2 mb-3">{revelation.icon}</div>
                <h3 className="text-lg font-semibold text-brand-text-light mb-2 text-center">{revelation.title}</h3>
                <p className="text-base text-brand-text-medium leading-body-text text-center">{revelation.text}</p>
              </div>
            ))}
          </div>
          <p className="text-xl text-brand-text-light mb-10 font-medium leading-relaxed">
            Kami tidak menawarkan solusi instan. Kami memberikan <strong className="text-brand-primary">framework komprehensif dan teruji</strong> untuk transformasi marketing properti Anda secara berkelanjutan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RevelationSection;