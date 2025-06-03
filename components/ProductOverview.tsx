import React from 'react';
import { UsersIcon, PresentationChartLineIcon, BuildingStorefrontIcon, CogIcon, ChatBubbleIcon } from '../constants';
import type { ProductModule } from '../types';

const modulesData: ProductModule[] = [
  {
    id: 1,
    title: "Modul 1: Targeting Akurat Calon Pembeli Ideal",
    description: "Identifikasi dan jangkau calon pembeli potensial yang benar-benar tertarik dengan properti Anda, hemat biaya dan waktu.",
    icon: <UsersIcon className="w-9 h-9 text-icon-blue" />
  },
  {
    id: 2,
    title: "Modul 2: Copywriting Persuasif Berbasis AI",
    description: "Ciptakan pesan iklan yang menjual secara otomatis dengan bantuan AI, ubah kata menjadi konversi yang menghasilkan.",
    icon: <PresentationChartLineIcon className="w-9 h-9 text-icon-blue" />
  },
  {
    id: 3,
    title: "Modul 3: Optimalisasi Platform Digital Properti Anda",
    description: "Desain dan kelola 'etalase' digital properti Anda agar menarik minat tinggi dan interaksi langsung dari calon pembeli.",
    icon: <BuildingStorefrontIcon className="w-9 h-9 text-icon-blue" />
  },
  {
    id: 4,
    title: "Modul 4: Sistem Follow-Up Otomatis & Efektif",
    description: "Kelola prospek secara otomatis dan konsisten, tingkatkan rasio closing tanpa ada yang terlewat atau terlupakan.",
    icon: <CogIcon className="w-9 h-9 text-icon-blue" />
  },
   {
    id: 5,
    title: "Modul 5: Komunitas Eksklusif & Toolkit AI Terkini",
    description: "Bergabunglah dengan komunitas suportif dan dapatkan akses ke toolkit AI terbaru untuk akselerasi hasil bersama.",
    icon: <ChatBubbleIcon className="w-9 h-9 text-icon-blue" />
  },
];

const ProductOverview: React.FC = () => {
  return (
    <section id="solusi" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-section-heading font-semibold text-center text-brand-text-light mb-4 tracking-tight leading-section-heading">
          Inilah <span className="text-brand-primary">Fondasi Sukses</span> Marketing Properti Anda:
        </h2>
        <p className="text-xl md:text-2xl text-brand-primary text-center font-semibold mb-12 md:mb-16">
          Framework Lengkap Zenith Growth. Siap Mentransformasi Hasil Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {modulesData.map((module) => (
            <div
              key={module.id}
              className="bg-gradient-to-br from-brand-bg-card-start to-brand-bg-card-end p-8 rounded-3xl shadow-brand-shadow-medium border border-brand-border hover:border-brand-border-hover transition-all duration-300 transform hover:-translate-y-1 hover:shadow-brand-shadow-strong"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-black/20 rounded-md mr-4 shadow-sm">
                  {module.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-brand-text-light">{module.title}</h3>
              </div>
              <p className="text-base text-brand-text-medium leading-body-text">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;