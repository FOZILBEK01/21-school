import React, { useState } from 'react';
import { Award, Briefcase, GraduationCap, Calendar, Phone, ExternalLink, X } from 'lucide-react';
import { TEACHERS, SCHOOL_INFO } from '../data/schoolData';
import { Teacher } from '../types/school';

export const TeachersSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const director = TEACHERS.find(t => t.id === 'dir-1');
  const otherTeachers = TEACHERS.filter(t => t.id !== 'dir-1');

  const filteredTeachers = activeFilter === 'all' 
    ? otherTeachers 
    : otherTeachers.filter(t => t.category === activeFilter);

  const filterTabs = [
    { key: 'all', label: 'Barchasi' },
    { key: 'aniq', label: 'Aniq fanlar & IT' },
    { key: 'tillar', label: 'Tillar & Adabiyot' },
    { key: 'tabiiy', label: 'Tabiiy fanlar' },
    { key: 'boshlangich', label: "Boshlang'ich" },
    { key: 'sport', label: 'Sport' },
  ];

  return (
    <section id="ustozlar" className="py-14 sm:py-20 bg-slate-950/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">
            Pedagogik Jamoa & Rahbariyat
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Tajribali va Fidoyi Ustozlarimiz
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Maktabimizda 86 nafar malakali pedagog faoliyat yuritadi. Ularning har biri zamonaviy pedagogik texnologiyalar bo'yicha maxsus sertifikatlangan.
          </p>
        </div>

        {/* Featured Principal Showcase Card */}
        {director && (
          <div className="mb-14 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 p-6 sm:p-8 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Director Image */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-xl bg-slate-800 shrink-0">
                  <img
                    src={director.avatar}
                    alt={director.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 right-2 text-center text-[11px] font-semibold py-1 px-2 rounded-md bg-blue-600/90 text-white backdrop-blur-sm">
                    {director.role}
                  </span>
                </div>
              </div>

              {/* Director Details */}
              <div className="lg:col-span-8 text-center lg:text-left space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>Maktab Ma'muriyati</span>
                  <span aria-hidden="true">·</span>
                  <span>Staj: {director.experience} yil</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {director.name}
                </h3>

                <p className="text-sm font-medium text-emerald-400">
                  {director.degree}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                  {director.bio}
                </p>

                {/* Achievements List */}
                <div className="pt-2 flex flex-wrap gap-2 justify-center lg:justify-start">
                  {director.achievements.map((item, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 flex items-center gap-1.5"
                    >
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>

                {/* Director Reception Contact Bar */}
                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 border-t border-slate-800/80">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>Qabul kunlari: Chorshanba & Juma (14:00 - 17:00)</span>
                  </span>
                  <a
                    href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Qabulxonaga ulanish</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Interactive Category Filter Tabs */}
        <div className="flex items-center justify-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 max-w-2xl mx-auto mb-10 overflow-x-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              type="button"
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === tab.key
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              onClick={() => setSelectedTeacher(teacher)}
              role="button"
              tabIndex={0}
              className="rounded-2xl p-5 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-slate-700">
                    <img
                      src={teacher.avatar}
                      alt={teacher.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-blue-400 block">
                      {teacher.categoryLabel}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {teacher.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {teacher.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                  {teacher.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Staj: <strong className="text-slate-200">{teacher.experience} yil</strong></span>
                <span className="text-blue-400 font-medium group-hover:underline flex items-center gap-1">
                  Batafsil
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Teacher Detail Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedTeacher(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 mb-4">
              <img
                src={selectedTeacher.avatar}
                alt={selectedTeacher.name}
                className="w-20 h-20 rounded-2xl object-cover border border-slate-700 shrink-0"
              />
              <div>
                <span className="text-xs font-semibold text-blue-400">
                  {selectedTeacher.categoryLabel}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {selectedTeacher.name}
                </h3>
                <p className="text-xs text-emerald-400 font-medium mt-0.5">
                  {selectedTeacher.degree}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Ish staji: {selectedTeacher.experience} yil · Fani: {selectedTeacher.subject}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              <p>{selectedTeacher.bio}</p>
              
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Yutuqlari va Sertifikatlari:
                </span>
                <ul className="space-y-1.5">
                  {selectedTeacher.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedTeacher(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white transition-colors"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
