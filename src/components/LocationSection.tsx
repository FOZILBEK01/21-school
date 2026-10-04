import React from 'react';
import { MapPin, Bus, Train, Phone, Mail, Clock, Send, Navigation, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=40.8497,69.5982`;
  const yandexMapsUrl = `https://yandex.com/maps/?text=40.8497,69.5982`;

  return (
    <section id="manzil" className="py-14 sm:py-20 bg-slate-950/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-2 flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>Manzil va Joylashuv</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Maktabimizga Tashrif Buyuring
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Maktabimiz Olmaliq shahrining markaziy hududida joylashgan bo'lib, barcha jamoat transportlarida kelish qulay.
          </p>
        </div>

        {/* 2-Column: Details and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Transports, Schedule */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Aniq Manzilimiz</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">
                    {SCHOOL_INFO.address}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Mo'ljal: {SCHOOL_INFO.landmark}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>

                <a
                  href={yandexMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <span>Yandex Xarita</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Transport routes */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Jamoat Transporti (Olmaliq shahri)
              </h4>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Bus className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Shahar avtobuslari: <strong className="text-white">1, 3, 5, 8-yo'nalish</strong> ("21-maktab" bekati)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Bus className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Marshrut taksilari: <strong className="text-white">Damas 2, 7, 14</strong></span>
                </div>
              </div>
            </div>

            {/* Working hours & Contact */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.workingHours}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-blue-400 transition-colors">
                  {SCHOOL_INFO.phone} (Qabulxona)
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Frame */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 min-h-[380px] relative shadow-xl">
            <iframe
              title="Olmaliq 21-maktab joylashuvi xaritasi"
              src="https://www.openstreetmap.org/export/embed.html?bbox=69.5700%2C40.8350%2C69.6300%2C40.8650&amp;layer=mapnik&amp;marker=40.8497%2C69.5982"
              className="w-full h-full min-h-[380px] border-0 filter contrast-105"
              loading="lazy"
            />
            
            {/* Map badge overlay */}
            <div className="absolute top-4 left-4 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-xs shadow-lg max-w-xs">
              <div className="flex items-center gap-2 text-blue-400 font-bold mb-0.5">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>21-sonli maktab binosi</span>
              </div>
              <div className="text-slate-300 text-[11px]">
                Olmaliq shahri, Metallurglar dahasi
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
