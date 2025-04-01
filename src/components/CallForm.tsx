import React, { useState } from 'react';

const CallForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el número de teléfono
    console.log('Número de teléfono:', phoneNumber);
    setPhoneNumber('');
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              ¿Prefieres que te llamemos?
            </h2>
            <p className="text-lg text-slate-600">
              Déjanos tu número y te contactamos gratis para explicarte cómo aprovechar el Bono Digital.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full bg-emerald-600 text-white px-6 py-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Te Llamamos Gratis
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            Un asesor te llamará para ayudarte a entender cómo aprovechar el Bono Digital y los servicios gratuitos disponibles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallForm; 