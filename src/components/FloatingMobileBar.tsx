import React from 'react';
import { Phone, Send, QrCode, Edit3, MapPin } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FloatingMobileBarProps {
  onOpenQr: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenQr }) => {
  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-2 shadow-2xl flex items-center justify-around gap-1.5">
        
        {/* Call button */}
        <a
          href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-3 rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-colors flex-1"
          aria-label="Qo'ng'iroq"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold">Qo'ng'iroq</span>
        </a>

        {/* Telegram button */}
        <a
          href={SCHOOL_INFO.telegramChannel}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-2 px-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex-1"
          aria-label="Telegram"
        >
          <Send className="w-4 h-4 mb-0.5 text-sky-400" />
          <span className="text-[10px] font-medium">Telegram</span>
        </a>

        {/* QR Vizitka button */}
        <button
          type="button"
          onClick={onOpenQr}
          className="flex flex-col items-center justify-center py-2 px-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex-1"
          aria-label="QR Vizitka"
        >
          <QrCode className="w-4 h-4 mb-0.5 text-purple-400" />
          <span className="text-[10px] font-medium">QR Vizitka</span>
        </button>

        {/* Quick Location */}
        <a
          href="#manzil"
          className="flex flex-col items-center justify-center py-2 px-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex-1"
          aria-label="Manzil"
        >
          <MapPin className="w-4 h-4 mb-0.5 text-emerald-400" />
          <span className="text-[10px] font-medium">Manzil</span>
        </a>

      </div>
    </div>
  );
};
