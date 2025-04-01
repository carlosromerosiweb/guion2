import React, { useState } from 'react';

interface PopUpFormProps {
  onClose: () => void;
}

const PopUpForm: React.FC<PopUpFormProps> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el número de teléfono
    console.log('Número de teléfono:', phoneNumber);
    setPhoneNumber('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Déjanos tu número de teléfono
          </h2>
          <p className="text-slate-600">
            Te llamaremos para informarte sobre el Bono Digital sin compromiso
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
          >
            Te Llamamos Gratis
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUpForm; 