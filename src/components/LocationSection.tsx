import React from 'react';
import { MapPin, Bus, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { ScrollReveal } from './ScrollReveal';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=40.8497,69.5982`;
  const yandexMapsUrl = `https://yandex.com/maps/?text=40.8497,69.5982`;

  return (
    <section id="manzil" className="py-14 sm:py-20 bg-slate-950/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Manzil va Joylashuv</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Maktabimizga Tashrif Buyuring
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Maktabimiz Olmaliq shahrining markaziy hududida joylashgan bo'lib, barcha jamoat transportlarida kelish qulay.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column: Details and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Transports, Schedule */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <ScrollReveal direction="right" delay={100}>
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Aniq Manzilimiz</h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      {SCHOOL_INFO.address}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Mo'ljal: {SCHOOL_INFO.landmark}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-3">
                  <a
                    href={yandexMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Yandex Xarita</span>
                  </a>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Public Transport Guide */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <Bus className="w-4 h-4 text-emerald-400" />
                  <span>Jamoat Transporti</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-white px-2 py-0.5 rounded bg-slate-800 text-[11px] shrink-0">Avtobuslar:</span>
                    <span>№ 2, 7, 14, 21 yo'nalishlari ("Madaniyat saroyi" yoki "Metallurg stadioni" bekati)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-white px-2 py-0.5 rounded bg-slate-800 text-[11px] shrink-0">Marshrutka:</span>
                    <span>№ 5, 11 va 23 yo'nalishli taksilar bevosita maktab darvozasi yonidan o'tadi</span>
                  </div>
                </div>
              </div>

              {/* Quick Contacts Bar */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Ish vaqti: {SCHOOL_INFO.workingHours}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-blue-400 transition-colors">
                    {SCHOOL_INFO.phone} (Qabulxona)
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{SCHOOL_INFO.email}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Map Frame */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={150} className="h-full">
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 min-h-[380px] h-full relative shadow-xl">
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
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
