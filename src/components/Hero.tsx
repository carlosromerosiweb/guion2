import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const element = document.getElementById('hero-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleCTAClick = () => {
    // Aquí irá la lógica para ir al formulario del bloque 7
    console.log('Navegando al formulario...');
  };

  return (
    <section id="hero-section" className="relative py-32">
      {/* Imagen de fondo con overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/oficina-bloque1.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-700/80"></div>
      </div>

      {/* Contenido existente */}
      <div className="container mx-auto px-4 py-12 pb-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
          <div className={`lg:w-3/4 w-full ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              ¡Transforma tu Negocio con el <span className="text-amber-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Bono Digital SIN IVA</span>! Todo Gratis para ti
            </h1>
            <p className="text-2xl md:text-3xl mb-16 text-white leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-medium">
              Gestionamos tu Kit Digital en las Islas Canarias. Página web, tienda online, redes sociales y equipamiento informático.
            </p>
            <div className="flex justify-start">
              <button
                onClick={handleCTAClick}
                className="bg-emerald-500 text-white px-32 py-6 rounded-full text-2xl font-bold hover:bg-emerald-600 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] hover:-translate-y-1 active:translate-y-0 border-2 border-emerald-400"
              >
                Alta Kit Digital
              </button>
            </div>
          </div>
          <div className={`lg:w-1/4 w-full ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <div className="bg-white rounded-xl shadow-2xl p-10">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                ¿Prefieres que te llamemos?
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Déjanos tu número y te contactamos gratis para explicarte cómo aprovechar el Bono Digital.
              </p>
              <form className="space-y-6">
                <div>
                  <input
                    type="tel"
                    className="w-full px-6 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                    placeholder="Introduce tu teléfono"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white px-6 py-4 rounded-lg hover:bg-emerald-600 transition-colors font-semibold text-lg"
                >
                  Te Llamamos Gratis
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 