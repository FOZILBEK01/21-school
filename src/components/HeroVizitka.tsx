import React, { useState } from 'react';
import { 
  Phone, Send, MapPin, QrCode, CheckCircle2, 
  Clock, ShieldCheck, Copy, Check, ArrowRight, Sparkles 
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroVizitkaProps {
  onOpenQr: () => void;
}

export const HeroVizitka: React.FC<HeroVizitkaProps> = ({ onOpenQr }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SCHOOL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="top" className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[350px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Line (Unboxed metadata with separators) */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-400 mb-5">
          <span className="flex items-center gap-1.5 text-blue-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Davlat akkreditatsiyasi</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>{SCHOOL_INFO.ministry}</span>
          <span aria-hidden="true">·</span>
          <span>Olmaliq shahri</span>
        </div>

        {/* Main Grid: Left Digital Vizitka Card / Pitch, Right Visual Hero Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Digital Business Card core */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4 text-balance">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                Olmaliq 21-sonli
              </span>{' '}
              Davlat Maktabi
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              O'quvchilarga chuqurlashtirilgan bilim, zamonaviy STEAM va IT ko'nikmalari beruvchi Olmaliq shahrining yetakchi ta'lim maskani.
            </p>

            {/* Live Status and Working Hours Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-emerald-400">Hozir ochiq:</span>
              <span>Dush — Shan: 08:00 – 18:30</span>
            </div>

            {/* Primary Action Button Cluster (Call / Telegram / QR) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              
              <a
                href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>Qo'ng'iroq qilish</span>
              </a>

              <a
                href={SCHOOL_INFO.telegramChannel}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white text-sm font-medium border border-slate-700 transition-all hover:border-slate-600 whitespace-nowrap"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Telegram kanal</span>
              </a>

              <button
                type="button"
                onClick={onOpenQr}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white text-sm font-medium border border-slate-700 transition-all hover:border-slate-600 whitespace-nowrap"
                title="Sayt va vizitka QR kodini ko'rish"
              >
                <QrCode className="w-4 h-4 text-purple-400" />
                <span>Vizitka QR</span>
              </button>
            </div>

            {/* Quick Contact Micro-Items (Interactive copy and jump) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto lg:mx-0 text-left">
              
              <div 
                onClick={handleCopyPhone}
                role="button"
                tabIndex={0}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer group"
                title="Nusxalash uchun bosing"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Telefon raqam</div>
                    <div className="text-sm font-semibold text-slate-200">{SCHOOL_INFO.phone}</div>
                  </div>
                </div>
                <div className="text-slate-500 group-hover:text-slate-300">
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </div>
              </div>

              <a
                href="#manzil"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs text-slate-400">Manzil</div>
                    <div className="text-sm font-semibold text-slate-200 truncate">Olmaliq sh., Metallurglar dahasi</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-transform shrink-0 ml-1" />
              </a>

            </div>

          </div>

          {/* Right Column: Hero Visual Asset with Glassmorphism Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl backdrop-blur-xl group">
                
                {/* School Exterior Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-slate-800">
                  <img
                    src="/src/assets/images/school_building_exterior_1791125440317.jpg"
                    alt="Olmaliq 21-maktab binosi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-medium text-slate-200 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>2026/2027 O'quv yili</span>
                  </div>
                </div>

                {/* Card Bottom Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-white">
                        21-sonli maktab binosi va kampusi
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {SCHOOL_INFO.address}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20">
                        A+ Toifa
                      </span>
                    </div>
                  </div>

                  {/* Highlights Mini Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40">
                      <span className="text-slate-400 block mb-0.5">Direktor qabul vaqti:</span>
                      <span className="font-semibold text-slate-200">Chor & Juma (14:00)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/40">
                      <span className="text-slate-400 block mb-0.5">Ta'lim tili:</span>
                      <span className="font-semibold text-emerald-400">O'zbek & Rus</span>
                    </div>
                  </div>

                  {/* Fast Action */}
                  <a
                    href="#manzil"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Maktab joylashuvi va xarita</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                  </a>

                </div>

              </div>

              {/* Decorative accent behind */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 -z-10 blur-xl opacity-70" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
