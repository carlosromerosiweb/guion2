import React, { useEffect, useState } from 'react';

interface NotificationPopUpProps {
  onClose?: () => void;
  forceHide?: boolean;
}

const NotificationPopUp: React.FC<NotificationPopUpProps> = ({ onClose, forceHide }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 5000); // 5 segundos

    return () => clearTimeout(timer);
  }, [hasShown]);

  // Efecto para ocultar cuando el PopUp de abandono aparece
  useEffect(() => {
    if (forceHide) {
      setIsVisible(false);
    }
  }, [forceHide]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 right-8 z-50 animate-slide-up">
      <div className="bg-emerald-500 rounded-tl-2xl rounded-tr-2xl p-8 shadow-2xl transform transition-all duration-300 w-[400px]">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres más información sobre el <span className="text-amber-300">Bono Digital</span>?
            </h3>
            <p className="text-white text-base mb-6">
              Déjanos tu número y te llamamos gratis para explicarte cómo aprovechar el Bono Digital.
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={handleClose}
                className="bg-white text-emerald-600 px-8 py-3 rounded-full text-base font-bold hover:bg-emerald-50 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                ¡Te llamamos Gratis!
              </button>
              <button
                onClick={handleClose}
                className="text-white hover:text-emerald-100 text-base font-medium transition-colors"
              >
                No, gracias
              </button>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-white hover:text-emerald-100 transition-colors text-xl"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopUp; 