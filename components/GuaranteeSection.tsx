import React from 'react';
import { ShieldCheckIcon } from '../constants';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-transparent text-brand-text-light">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center mb-6">
          <ShieldCheckIcon className="w-16 h-16 text-icon-green filter drop-shadow-lg" />
        </div>
        <h2 className="text-section-heading font-semibold mb-6 tracking-tight leading-section-heading">
          Garansi Kepuasan 100%: <span className="text-brand-primary">Tanpa Risiko, Uang Kembali & Bonus untuk Anda!</span>
        </h2>
        <p className="text-body-text text-brand-text-medium max-w-3xl mx-auto mb-6 leading-body-text">
          Kami sangat yakin Zenith Growth Framework akan mentransformasi penjualan Anda. Coba modul inti kami. Jika dalam 7 HARI Anda tidak puas atau tidak melihat potensi hasil, <strong className="text-brand-text-light">kami kembalikan investasi Rp 300.000 Anda sepenuhnya, tanpa pertanyaan.</strong> Bahkan, Anda dapat <strong className="text-icon-green">menyimpan Bonus Blueprint Iklan & 'Contekan' Prompt AI (senilai Rp 1.500.000) GRATIS</strong> sebagai apresiasi waktu Anda. Benar-benar tanpa risiko.
        </p>
        <div className="text-base font-medium text-brand-text-medium mb-4">
          Ini adalah komitmen kami untuk kesuksesan Anda.
        </div>
        <p className="text-sm text-brand-text-dark opacity-70">
          Syarat & Ketentuan berlaku (prosesnya mudah dan transparan).
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;