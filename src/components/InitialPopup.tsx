import React from 'react';

interface InitialPopupProps {
  onClose: () => void;
}

const InitialPopup: React.FC<InitialPopupProps> = ({ onClose }) => {
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

        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            ¿Te gustaría recibir más información sobre el Bono Digital?
          </h2>
          <p className="text-slate-600 mb-6">
            Te ayudamos a conseguir tu Bono Digital SIN IVA, con servicios totalmente gratuitos para tu negocio.
          </p>
          <p className="text-slate-600 mb-8">
            Si quieres más información, podemos llamarte e informarte sin compromiso.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => {
              onClose();
              document.getElementById('urgent-call-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
          >
            ¡Te llamamos Gratis!
          </button>
          <button
            onClick={onClose}
            className="w-full bg-slate-100 text-slate-600 px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors font-semibold"
          >
            No, gracias
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitialPopup; 