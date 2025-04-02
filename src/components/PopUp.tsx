import React, { useEffect, useState } from 'react';

interface PopUpProps {
  onShow?: boolean;
  onClose?: () => void;
  onPopUpShow?: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ onShow, onClose, onPopUpShow }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCenter, setIsCenter] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isActive, setIsActive] = useState(false);

  // Efecto para activar el popup después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (onShow && !hasShown) {
      setIsVisible(true);
      setHasShown(true);
      if (onPopUpShow) onPopUpShow();
    }
  }, [onShow, hasShown, onPopUpShow]);

  const handleMouseLeave = (e: MouseEvent) => {
    if (e.clientY <= 0 && !hasShown && isActive) {
      setIsVisible(true);
      setIsCenter(true);
      setHasShown(true);
      if (onPopUpShow) onPopUpShow();
    }
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden' && !hasShown && isActive) {
      setIsVisible(true);
      setIsCenter(true);
      setHasShown(true);
      if (onPopUpShow) onPopUpShow();
    }
  };

  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    if (!hasShown && isActive) {
      e.preventDefault();
      setIsVisible(true);
      setIsCenter(true);
      setHasShown(true);
      if (onPopUpShow) onPopUpShow();
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.clientY <= 0 && !hasShown && isActive) {
      setIsVisible(true);
      setIsCenter(true);
      setHasShown(true);
      if (onPopUpShow) onPopUpShow();
    }
  };

  useEffect(() => {
    if (!hasShown && isActive) {
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('beforeunload', handleBeforeUnload);
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hasShown, isActive]);

  const handleClose = () => {
    setIsVisible(false);
    setShowForm(false);
    setPhoneNumber('');
    if (onClose) onClose();
  };

  const handleCallMe = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el número de teléfono
    console.log('Número de teléfono:', phoneNumber);
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-8 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl transform transition-all duration-500 ease-in-out ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} border border-emerald-400/20`}>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
            ¿Quieres más información sobre el <span className="text-amber-300 drop-shadow-md">Bono Digital</span>?
          </h2>
          <p className="text-lg text-white mb-8 drop-shadow-md">
            Déjanos tu número y te llamamos gratis para explicarte cómo aprovechar el Bono Digital.
          </p>
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => {
                const urgentCallSection = document.getElementById('urgent-call-section');
                if (urgentCallSection) {
                  const yOffset = -80; // Altura de la barra de navegación
                  const y = urgentCallSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
                handleClose();
              }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 border border-emerald-200"
            >
              ¡Te llamamos Gratis!
            </button>
            <button 
              onClick={handleClose}
              className="text-white hover:text-emerald-100 font-medium transition-colors hover:underline"
            >
              No, gracias
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp; 