import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Benefits: React.FC = () => {
  const { isVisible, isMostVisible } = useScrollAnimation('benefits-section');

  return (
    <section 
      id="benefits-section" 
      className="py-16 bg-white pt-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-slate-800 mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            Beneficios del Bono Digital
          </h2>
          <p className={`text-xl text-slate-600 ${
            isVisible ? 'animate-fade-in-up-delayed' : 'opacity-0'
          }`}>
            Descubre todas las ventajas de implementar el Bono Digital en tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${
              isVisible ? 'animate-slide-right' : 'opacity-0'
            }`}
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Sin IVA</h3>
            <p className="text-slate-600">
              El Bono Digital es una ayuda que cubre el 100% del coste, sin IVA ni gastos adicionales.
            </p>
          </div>

          <div 
            className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Servicios incluidos</h3>
            <p className="text-slate-600">
              Acceso a todas las soluciones digitales necesarias para tu negocio sin coste adicional.
            </p>
          </div>

          <div 
            className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${
              isVisible ? 'animate-slide-left' : 'opacity-0'
            }`}
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Asesoría personalizada</h3>
            <p className="text-slate-600">
              Recibe asesoramiento experto para implementar las soluciones más adecuadas para tu negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 