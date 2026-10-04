import React from 'react';
import { ShieldCheck, Trophy, Dumbbell, UtensilsCrossed } from 'lucide-react';
import { SmartImage } from './SmartImage';
import { ScrollReveal } from './ScrollReveal';

export const AboutBento: React.FC = () => {
  return (
    <section id="haqida" className="py-14 sm:py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
              Ta'lim Muhiti & Imkoniyatlar
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-balance">
              21-maktabda har bir o'quvchi uchun keng imkoniyatlar
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Maktabimizda zamonaviy STEAM laboratoriyalari, xalqaro til sertifikatlari tayyorlovi va sport majmualari barcha o'quvchilar uchun to'liq yo'lga qo'yilgan.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          
          {/* Bento Card 1 (Large 2-col): STEM & IT Lab */}
          <ScrollReveal direction="up" delay={50} className="md:col-span-2 lg:col-span-2">
            <div className="rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col group h-full">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-800">
                <SmartImage
                  src="/images/stem_lab.jpg"
                  fallbackSrc="/images/building.jpg"
                  alt="21-maktab STEM va IT laboratoriyasi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-600/90 text-white backdrop-blur-sm">
                    STEAM & IT Markazi
                  </span>
                  <span className="text-xs text-slate-300">30+ kompyuter stansiyasi</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                    Robototexnika va Sun'iy Intellekt Laboratoriyasi
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    O'quvchilar Arduino, Python va algoritmlar bo'yicha amaliy tajribalar o'tkazishadi. Har bir stol yuqori tezlikdagi optik tolali internet va interaktiv aqlli doskaga ulangan.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                  <span>· Python & C++</span>
                  <span>· 3D printerlar</span>
                  <span>· LEGO Mindstorms</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Card 2 (Large 2-col): Library Hall */}
          <ScrollReveal direction="up" delay={100} className="md:col-span-1 lg:col-span-2">
            <div className="rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col group h-full">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-800">
                <SmartImage
                  src="/images/library.jpg"
                  fallbackSrc="/images/building.jpg"
                  alt="21-maktab zamonaviy kutubxonasi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-600/90 text-white backdrop-blur-sm">
                    Axborot-Resurs Markazi
                  </span>
                  <span className="text-xs text-slate-300">25,000+ kitob</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">
                    Zamonaviy Axborot-Kutubxona Markazi
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Badiiy va ilmiy adabiyotlar, xorijiy tillardagi kitoblar, shuningdek elektron kutubxona bazasidan foydalanish uchun shinam mutolaa zali.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                  <span>· Elektron katalog</span>
                  <span>· Wi-Fi zona</span>
                  <span>· Tinch mutolaa</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Card 3: Security & Turnstile */}
          <ScrollReveal direction="up" delay={150}>
            <div className="rounded-2xl p-5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">
                  Xavfsiz Maktab & Face ID
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Kirish-chiqishda elektron Face ID turniketlari, 64 ta kuzatuv kameralari va Milliy gvardiya posti.
                </p>
              </div>
              <div className="mt-4 text-xs font-medium text-blue-400">
                Ota-onalarga SMS xabarnoma
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Card 4: Sport & Sog'lom turmush */}
          <ScrollReveal direction="up" delay={200}>
            <div className="rounded-2xl p-5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">
                  Katta Sport Majmuasi
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sun'iy qoplamali futbol stadioni, yopiq gimnastika zali, basketbol va voleybol maydonchalari.
                </p>
              </div>
              <div className="mt-4 text-xs font-medium text-emerald-400">
                6 ta sport to'garagi
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Card 5: Olimpiada & Iqtidor */}
          <ScrollReveal direction="up" delay={250}>
            <div className="rounded-2xl p-5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3">
                  <Trophy className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">
                  Olimpiada Maktabi
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Aniq va tabiiy fanlar bo'yicha tuman va respublika bosqichlariga individual tayyorgarlik kursi.
                </p>
              </div>
              <div className="mt-4 text-xs font-medium text-amber-400">
                18 ta sovrinli o'rin (2025/2026)
              </div>
            </div>
          </ScrollReveal>

          {/* Bento Card 6: Sog'lom ovqatlanish */}
          <ScrollReveal direction="up" delay={300}>
            <div className="rounded-2xl p-5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-3">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">
                  Shinam Oshxona & Bufet
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sanitariya me'yorlariga qat'iy javob beradigan issiq taomlar va sog'lom parhez menyusi.
                </p>
              </div>
              <div className="mt-4 text-xs font-medium text-rose-400">
                200 o'rinli zamonaviy zal
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
