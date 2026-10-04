import React, { useState } from 'react';
import { Award, GraduationCap, Calendar, Phone, ExternalLink, X } from 'lucide-react';
import { TEACHERS, SCHOOL_INFO } from '../data/schoolData';
import { Teacher } from '../types/school';
import { SmartImage } from './SmartImage';
import { ScrollReveal } from './ScrollReveal';

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
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
              Pedagogik Jamoa & Rahbariyat
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Tajribali va Fidoyi Ustozlarimiz
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Maktabimizda 78 nafar malakali pedagog faoliyat yuritadi. Ularning har biri zamonaviy pedagogik texnologiyalar bo'yicha maxsus sertifikatlangan.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Principal Showcase Card */}
        {director && (
          <ScrollReveal direction="up" delay={100}>
            <div className="mb-14 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 hover:border-blue-500/40 p-6 sm:p-8 relative overflow-hidden transition-all duration-300 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Director Image */}
                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-xl bg-slate-800 shrink-0">
                    <SmartImage
                      src={director.avatar}
                      fallbackSrc="/images/director.jpg"
                      alt={director.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2 left-2 right-2 text-center text-[11px] font-semibold py-1 px-2 rounded-md bg-blue-600/90 text-white backdrop-blur-sm z-20">
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
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      Qabul vaqti: Chorshanba & Juma (14:00 - 17:00)
                    </span>
                    <a 
                      href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-1.5 text-blue-400 hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Qabulxona: {SCHOOL_INFO.phone}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Filter Tabs */}
        <ScrollReveal direction="up" delay={150}>
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeFilter === tab.key
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher, index) => (
            <ScrollReveal key={teacher.id} direction="up" delay={index * 50}>
              <div
                onClick={() => setSelectedTeacher(teacher)}
                role="button"
                tabIndex={0}
                className="rounded-2xl p-5 bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-slate-700">
                      <SmartImage
                        src={teacher.avatar}
                        fallbackSrc="/images/director.jpg"
                        alt={teacher.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

                  <p className="text-xs text-slate-300 line-clamp-2 mb-3 leading-relaxed">
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
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Teacher Profile Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative max-w-lg w-full rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-7 shadow-2xl">
            <button
              onClick={() => setSelectedTeacher(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="Yopish"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-800 shrink-0 border border-slate-700">
                <SmartImage
                  src={selectedTeacher.avatar}
                  fallbackSrc="/images/director.jpg"
                  alt={selectedTeacher.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block">
                  {selectedTeacher.categoryLabel}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {selectedTeacher.name}
                </h3>
                <p className="text-xs text-emerald-400 mt-0.5">
                  {selectedTeacher.degree}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div>
                <h4 className="font-semibold text-white mb-1">Fan va lavozim:</h4>
                <p className="text-slate-400">{selectedTeacher.subject} — {selectedTeacher.role} ({selectedTeacher.experience} yillik pedagogik staj)</p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-1">Qisqacha ma'lumot:</h4>
                <p className="text-slate-300 leading-relaxed">{selectedTeacher.bio}</p>
              </div>

              {selectedTeacher.achievements && selectedTeacher.achievements.length > 0 && (
                <div>
                  <h4 className="font-semibold text-white mb-1.5">Yutuqlari va sertifikatlari:</h4>
                  <ul className="space-y-1.5">
                    {selectedTeacher.achievements.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300">
                        <Award className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedTeacher(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
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
