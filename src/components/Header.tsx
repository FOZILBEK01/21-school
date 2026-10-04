import React, { useState } from 'react';
import { Phone, QrCode, Menu, X, GraduationCap, ArrowUpRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeaderProps {
  onOpenQr: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQr }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Maktab haqida", href: "#haqida" },
    { label: "Rahbariyat", href: "#ustozlar" },
    { label: "Galereya", href: "#galereya" },
    { label: "Manzil & Aloqa", href: "#manzil" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#top" 
          className="flex items-center gap-2.5 text-slate-100 font-bold tracking-tight hover:text-blue-400 transition-colors"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight font-sans">
            Olmaliq 21-maktab
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenQr}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            title="Raqamli QR vizitkani ko'rish"
          >
            <QrCode className="w-3.5 h-3.5 text-blue-400" />
            <span>Vizitka QR</span>
          </button>

          <a
            href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Qo'ng'iroq</span>
            <span className="sm:hidden">Aloqa</span>
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQr();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-medium text-slate-200 bg-slate-800 rounded-lg border border-slate-700"
            >
              <QrCode className="w-4 h-4 text-blue-400" />
              <span>QR Vizitka</span>
            </button>
            <a
              href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-semibold text-white bg-blue-600 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Qo'ng'iroq qilish</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
