import React from 'react';
import { GraduationCap, Phone, Send, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs pb-24 md:pb-12 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span>Olmaliq 21-maktab</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {SCHOOL_INFO.name}. Zamonaviy ta'lim, mustahkam ma'naviyat va komil shaxs tarbiyasi maskani.
            </p>
            <div className="text-[11px] text-slate-300 flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>{SCHOOL_INFO.accreditation}</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Bo'limlar
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#haqida" className="hover:text-white transition-colors">Maktab haqida</a></li>
              <li><a href="#ustozlar" className="hover:text-white transition-colors">Pedagogik jamoa</a></li>
              <li><a href="#galereya" className="hover:text-white transition-colors">Foto galereya</a></li>
              <li><a href="#manzil" className="hover:text-white transition-colors">Manzil va aloqa</a></li>
            </ul>
          </div>

          {/* Interactive contacts */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Bog'lanish
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <a href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {SCHOOL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <a href={SCHOOL_INFO.telegramChannel} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {SCHOOL_INFO.telegramChannelName}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-rose-400" />
                <span>{SCHOOL_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Hotlines */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Ishonch Telefonlari
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div>
                <span className="text-[11px] text-slate-300 block">Vazirlik ishonch telefoni:</span>
                <span className="text-xs font-bold text-white font-mono">1006</span>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <span className="text-[11px] text-slate-300 block">Maktab direktori bevosita aloqa:</span>
                <span className="text-xs font-bold text-blue-400 font-mono">+998 70 612 21 21</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-300">
          <div>
            © {new Date().getFullYear()} Olmaliq shahar 21-sonli umumiy o'rta ta'lim maktabi. Barcha huquqlar himoyalangan.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Raqamli ta'lim muhiti</span>
            <span aria-hidden="true">·</span>
            <span>Olmaliq shahri, Toshkent viloyati</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
