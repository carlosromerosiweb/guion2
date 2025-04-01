import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer: React.FC = () => {
  const isVisible = useScrollAnimation('footer-section');

  return (
    <footer id="footer-section" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className={`max-w-3xl mx-auto text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            ¡No pierdas la oportunidad de transformar tu negocio!
          </h2>
          <p className={`text-xl text-slate-100 ${
            isVisible ? 'animate-fade-in-up-delayed' : 'opacity-0'
          }`}>
            Solicita tu Bono Digital hoy mismo y empieza a crecer.
          </p>
        </div>
      </div>
      <div className="border-t border-blue-500">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-slate-200">
                © 2024 Siweb. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="/politica-privacidad" 
                className="text-slate-200 hover:text-white transition-colors"
              >
                Política de Privacidad
              </a>
              <a 
                href="/aviso-legal" 
                className="text-slate-200 hover:text-white transition-colors"
              >
                Aviso Legal
              </a>
              <a 
                href="/cookies" 
                className="text-slate-200 hover:text-white transition-colors"
              >
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 