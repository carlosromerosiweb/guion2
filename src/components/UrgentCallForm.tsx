import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const UrgentCallForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const { isVisible, isMostVisible } = useScrollAnimation('urgent-call-section');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el número de teléfono
    console.log('Número de teléfono:', phoneNumber);
    setPhoneNumber('');
  };

  return (
    <section 
      id="urgent-call-section" 
      className={`py-16 bg-white pt-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 transition-all duration-1000 ${
            isMostVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            ¡Los fondos son limitados! Solicita tu bono digital ahora y asegura tu subvención.
          </h2>
          <p className={`text-lg text-slate-600 mb-8 transition-all duration-1000 delay-200 ${
            isMostVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            ¿Quieres más información sobre nuestros servicios? Déjanos tu número y te llamamos gratis.
          </p>
          <form onSubmit={handleSubmit} className={`space-y-4 transition-all duration-1000 delay-300 ${
            isMostVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                Introduce tu número de teléfono
              </label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                placeholder="Ej: 666 777 888"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Te Llamamos Gratis
            </button>
          </form>
          <p className={`text-sm text-slate-500 mt-4 transition-all duration-1000 delay-400 ${
            isMostVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Un asesor te llamará para ayudarte a entender cómo aprovechar el Bono Digital y los servicios gratuitos disponibles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgentCallForm; 