import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const News: React.FC = () => {
  const { isVisible, isActive } = useScrollAnimation('news-section');
  const news = [
    {
      title: "Premio Capital 2024 al Mejor Proyecto de transformación digital",
      image: "/images/premio-capital.jpg",
      alt: "Premio Capital 2024",
      description: "Reconocimiento a la excelencia en transformación digital empresarial"
    },
    {
      title: "Siweb, nuevo patrocinador oficial del RC Celta",
      image: "/images/celta.jpg",
      alt: "Patrocinio RC Celta",
      description: "Alianza estratégica para impulsar la innovación en el deporte"
    }
  ];

  return (
    <section 
      id="news-section" 
      className="py-24 bg-blue-600 pt-32"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-white mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            Últimas Noticias
          </h2>
          <p className={`text-xl text-slate-100 ${
            isVisible ? 'animate-fade-in-up-delayed' : 'opacity-0'
          }`}>
            Mantente informado sobre las últimas novedades del Bono Digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {news.map((item, index) => (
            <div 
              key={index}
              className={`relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border-2 border-transparent hover:border-blue-500 ${
                index === 0 ? (isVisible ? 'animate-slide-right' : 'opacity-0') : 
                (isVisible ? 'animate-slide-left' : 'opacity-0')
              }`}
            >
              <img 
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-800/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-200 text-lg group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News; 