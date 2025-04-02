import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, cta, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
      <div className="text-emerald-500 mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-4">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold">
        {cta}
      </button>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  cta: string;
  icon: React.ReactNode;
}

const Services: React.FC = () => {
  const { isVisible, isMostVisible } = useScrollAnimation('services-section');

  const services = [
    {
      title: 'Creación de Páginas Web',
      description: 'Desarrollamos una página web profesional para tu negocio, sin pagar IVA.',
      cta: 'Solicita tu Página Web Ahora',
      icon: (
        <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Creación de Tiendas online',
      description: 'Tu tienda online profesional para vender en toda España, sin pagar IVA.',
      cta: 'Solicita tu Página Tienda Online',
      icon: (
        <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Gestión de Redes Sociales',
      description: 'Conecta con tu público. Gestionamos tus redes sociales de manera profesional.',
      cta: 'Empieza con Redes Sociales',
      icon: (
        <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
    },
    {
      title: 'Equipos Informáticos (Ordenadores)',
      description: 'Renueva tus equipos informáticos sin coste adicional.',
      cta: 'Solicita Equipamiento Informático',
      icon: (
        <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      id="services-section" 
      className="py-16 bg-blue-600 pt-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className={`text-4xl font-bold text-white mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            Servicios gratuitos que Puedes Obtener con tu Bono Digital
          </h2>
          <p className={`text-xl text-slate-100 ${
            isVisible ? 'animate-slide-left' : 'opacity-0'
          }`}>
            Con tu Bono Digital podrás disfrutar de los siguientes servicios completamente gratis para tu negocio:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
                isVisible ? 'animate-slide-right' : 'opacity-0'
              }`}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-bold text-slate-800 ml-4">{service.title}</h3>
              </div>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <a
                href="#urgent-call-section"
                className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 