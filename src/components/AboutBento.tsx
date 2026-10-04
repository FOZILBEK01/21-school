import React from 'react';
import { Cpu, BookOpen, ShieldCheck, Trophy, Dumbbell, UtensilsCrossed } from 'lucide-react';

export const AboutBento: React.FC = () => {
  return (
    <section id="haqida" className="py-14 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            Ta'lim Muhiti & Imkoniyatlar
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-balance">
            21-maktabda har bir o'quvchi uchun keng imkoniyatlar
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Maktabimizda zamonaviy STEAM laboratoriyalari, xalqaro til sertifikatlari tayyorlovi va sport majmualari barcha o'quvchilar uchun to'liq yo'lga qo'yilgan.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          
          {/* Bento Card 1 (Large 2-col): STEM & IT Lab */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col group">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-800">
              <img
                src="/src/assets/images/school_stem_lab_1791125458486.jpg"
                alt="21-maktab STEM va IT laboratoriyasi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-600/90 text-white backdrop-blur-sm">
                  STEAM & IT Markazi
                </span>
                <span className="text-xs text-slate-300">30+ kompyuter stansiyasi</span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5">
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

          {/* Bento Card 2 (Large 2-col): Library Hall */}
          <div className="md:col-span-1 lg:col-span-2 rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col group">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-800">
              <img
                src="/src/assets/images/school_library_hall_1791125489002.jpg"
                alt="21-maktab zamonaviy kutubxonasi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-600/90 text-white backdrop-blur-sm">
                  Axborot-Resurs Markazi
                </span>
                <span className="text-xs text-slate-300">25,000+ kitob</span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5">
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

          {/* Bento Card 3: Security & Turnstile */}
          <div className="rounded-2xl p-5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
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

          {/* Bento Card 4: Sport & Sog'lom turmush */}
          <div className="rounded-2xl p-5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
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

          {/* Bento Card 5: Olimpiada & Iqtidor */}
          <div className="rounded-2xl p-5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
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

          {/* Bento Card 6: Sog'lom ovqatlanish */}
          <div className="rounded-2xl p-5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
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

        </div>

      </div>
    </section>
  );
};
