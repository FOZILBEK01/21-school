import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroVizitka } from './components/HeroVizitka';
import { StatsCounter } from './components/StatsCounter';
import { AboutBento } from './components/AboutBento';
import { TeachersSection } from './components/TeachersSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { QrModal } from './components/QrModal';
import { Preloader } from './components/Preloader';

export default function App() {
  const [isQrOpen, setIsQrOpen] = useState(false);

  const handleOpenQr = () => {
    setIsQrOpen(true);
  };

  const handleCloseQr = () => {
    setIsQrOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Fullscreen Smart Preloader for Slow Internet Connections */}
      <Preloader />

      {/* Top Header */}
      <Header onOpenQr={handleOpenQr} />

      {/* Main One-Page Content */}
      <main className="flex-1">
        {/* Digital Business Card / Hero */}
        <HeroVizitka onOpenQr={handleOpenQr} />

        {/* Statistical Highlights */}
        <StatsCounter />

        {/* About School & Facilities Bento Grid */}
        <AboutBento />

        {/* Leadership & Faculty */}
        <TeachersSection />

        {/* Virtual Photo Tour & Lightbox */}
        <GallerySection />

        {/* Location, Transports & Interactive Map */}
        <LocationSection />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Mobile-Only Floating Action Bar (Thumb-friendly vizitka buttons) */}
      <FloatingMobileBar onOpenQr={handleOpenQr} />

      {/* QR Code & Digital Business Card Modal */}
      <QrModal isOpen={isQrOpen} onClose={handleCloseQr} />
    </div>
  );
}
