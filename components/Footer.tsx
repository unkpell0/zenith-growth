
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="kontak" className="py-12 md:py-16 bg-brand-bg-navbar border-t border-brand-border-navbar">
      <div className="container mx-auto px-4 sm:px-6 text-center text-brand-text-medium">
        <a href="#home" className="inline-block mb-4 text-2xl font-bold text-brand-text-light transition-opacity hover:opacity-80">
          Zenith <span className="text-brand-primary">Growth</span>
        </a>
        <p className="mb-4 text-base">
          Email: <a href="mailto:support@zenithgrowth.id" className="hover:text-brand-text-link transition-colors">support@zenithgrowth.id</a>
        </p>
        <div className="flex justify-center space-x-4 mb-6 text-sm">
          <a href="#" className="hover:text-brand-text-link transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-brand-text-link transition-colors">Syarat & Ketentuan</a>
        </div>
        <p className="text-sm text-brand-text-dark opacity-70">&copy; {new Date().getFullYear()} Zenith Growth. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;