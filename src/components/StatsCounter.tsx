import React from 'react';
import { Users, Award, GraduationCap, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const StatsCounter: React.FC = () => {
  const statIcons = [Users, Award, GraduationCap, Sparkles];

  return (
    <section className="py-6 border-y border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SCHOOL_INFO.stats.map((item, index) => {
            const Icon = statIcons[index % statIcons.length];
            return (
              <div
                key={item.label}
                className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{item.label}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
