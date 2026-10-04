import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types/school';
import { SmartImage } from './SmartImage';
import { ScrollReveal } from './ScrollReveal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const categories = [
    { key: 'all', label: 'Barchasi' },
    { key: 'bino', label: 'Maktab binosi' },
    { key: 'laboratoriya', label: 'Laboratoriyalar' },
    { key: 'kutubxona', label: 'Kutubxona' },
  ];

  const handleOpenPhoto = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="galereya" className="py-14 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
                Virtual Sayr & Foto Galereya
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Maktabimiz Hayotidan Lavhalar
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
                21-maktabning zamonaviy infratuzilmasi, shinam sinfxonalari va o'quv maydonlari bilan yaqindan tanishing.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 self-start md:self-auto overflow-x-auto shadow-inner">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  type="button"
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                    activeCategory === cat.key
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item: GalleryItem, index: number) => (
            <ScrollReveal key={item.id} direction="up" delay={index * 60}>
              <div
                onClick={() => handleOpenPhoto(index)}
                role="button"
                tabIndex={0}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/50 aspect-[4/3] cursor-pointer shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1.5"
              >
                <SmartImage
                  src={item.imageUrl}
                  fallbackSrc="/images/building.jpg"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity pointer-events-none" />

                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-4 right-4 z-20 pointer-events-none">
                  <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredItems[selectedPhotoIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-900/80 border border-slate-800 transition-colors z-50"
            aria-label="Yopish"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white p-2 rounded-xl bg-slate-900/80 border border-slate-800 transition-colors z-40"
            aria-label="Oldingi"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white p-2 rounded-xl bg-slate-900/80 border border-slate-800 transition-colors z-40"
            aria-label="Keyingi"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden max-h-[75vh] w-full flex items-center justify-center bg-slate-900 border border-slate-800 shadow-2xl">
              <SmartImage
                src={filteredItems[selectedPhotoIndex].imageUrl}
                fallbackSrc="/images/building.jpg"
                alt={filteredItems[selectedPhotoIndex].title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs font-semibold text-blue-400 block mb-1">
                {filteredItems[selectedPhotoIndex].categoryLabel}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {filteredItems[selectedPhotoIndex].title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {filteredItems[selectedPhotoIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
