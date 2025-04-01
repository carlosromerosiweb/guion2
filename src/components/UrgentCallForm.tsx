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
      className="py-16 bg-white pt-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-4 ${
              isMostVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}>
              ¡Los fondos son limitados!
            </h2>
            <p className={`text-xl text-slate-600 mb-6 ${
              isMostVisible ? 'animate-fade-in-up-delayed' : 'opacity-0'
            }`}>
              Solicita tu bono digital ahora y asegura tu subvención.
            </p>
            <p className={`text-lg text-slate-700 ${
              isMostVisible ? 'animate-fade-in-up-delayed' : 'opacity-0'
            }`}>
              ¿Quieres más información sobre nuestros servicios? Déjanos tu número y te llamamos gratis.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={`space-y-6 ${
            isMostVisible ? 'animate-fade-in-up-delayed' : 'opacity-0'
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
              className="w-full bg-emerald-500 text-white px-6 py-4 rounded-lg hover:bg-emerald-600 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Te Llamamos Gratis
            </button>
          </form>

          <p className={`text-center text-sm text-slate-500 mt-6 ${
            isMostVisible ? 'animate-fade-in-up-delayed' : 'opacity-0'
          }`}>
            Un asesor te llamará para ayudarte a entender cómo aprovechar el Bono Digital y los servicios gratuitos disponibles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgentCallForm; 