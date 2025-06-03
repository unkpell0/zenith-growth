import React from 'react';
import { QuestionMarkCircleIcon, ChevronDownIcon } from '../constants';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Mengapa ada biaya komitmen Rp 300.000?",
    answer: "Biaya ini menunjukkan keseriusan Anda. Kami ingin fokus pada mereka yang berkomitmen untuk sukses. Anda mendapatkan nilai jutaan dengan investasi minimal untuk transformasi bisnis Anda."
  },
  {
    question: "Apakah saya akan mendapatkan software AI atau CRM?",
    answer: "Anda akan belajar CARA menggunakan berbagai tools AI & CRM (termasuk yang gratis). Fokus kami adalah pada STRATEGI implementasi yang efektif, bukan hanya tools."
  },
  {
    question: "Apa itu 'AI Toolkit' dalam komunitas?",
    answer: "Dalam komunitas eksklusif, Anda akan mendapatkan akses ke 'contekan' prompt AI terbaru, strategi praktis, dan update terkini untuk mempercepat riset dan pembuatan iklan yang efektif."
  },
  {
    question: "Saya sudah mencoba banyak cara dan gagal. Apa bedanya framework ini?",
    answer: "Ini adalah SISTEM LENGKAP dan terstruktur, bukan sekadar teori. Kami menyediakan panduan A-Z dengan contoh nyata untuk implementasi langsung. Fokus pada praktik yang terbukti, bukan basa-basi."
  },
  {
    question: "Apakah proses belajarnya lama dan rumit?",
    answer: "Framework ini dirancang untuk MUDAH dipahami dan CEPAT diimplementasikan. Kami fokus pada hal-hal esensial yang memberikan dampak terbesar. Dengan keseriusan Anda, hasil akan terlihat."
  },
  {
    question: "Siapa yang paling cocok untuk framework ini?",
    answer: "Untuk para profesional properti (Agen, Developer, Marketer) yang ingin meningkatkan hasil secara signifikan, bekerja lebih cerdas, dan bosan dengan cara lama. Tidak untuk yang tidak mau bertindak nyata."
  },
  {
    question: "Bagaimana jika saya memiliki pertanyaan atau butuh bantuan?",
    answer: "Tentu! Anda akan mendapatkan dukungan penuh melalui komunitas eksklusif kami dan sesi Q&A langsung dengan tim ahli. Kesuksesan Anda adalah prioritas utama kami."
  },
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <QuestionMarkCircleIcon className="w-12 h-12 text-brand-primary mb-4" />
          <h2 className="text-section-heading font-semibold text-center text-brand-text-light tracking-tight leading-section-heading">
            Pertanyaan Umum? <span className="text-brand-primary">Kami Punya Jawabannya!</span>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <details
              key={index}
              className="bg-gradient-to-br from-brand-bg-card-start to-brand-bg-card-end p-6 rounded-3xl shadow-brand-shadow-medium group border border-brand-border transition-all duration-300 hover:border-brand-border-hover hover:shadow-brand-shadow-strong"
            >
              <summary className="flex justify-between items-center font-semibold text-brand-text-light cursor-pointer text-lg hover:text-brand-text-link transition-colors">
                {item.question}
                <ChevronDownIcon className="w-5 h-5 text-brand-text-medium group-open:rotate-180 transition-transform shrink-0 ml-2" />
              </summary>
              <p className="text-base text-brand-text-medium mt-3 leading-body-text">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;