import { useState, useEffect } from 'react';

export const useScrollAnimation = (sectionId: string) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMostVisible, setIsMostVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Verificar si es el elemento más visible
          const allSections = document.querySelectorAll('section[id]') as NodeListOf<HTMLElement>;
          let maxVisibleArea = 0;
          let mostVisibleSection = null;

          allSections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Calcular el área visible real
            const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
            const visibleWidth = Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
            const visibleArea = visibleHeight * visibleWidth;
            
            if (visibleArea > maxVisibleArea) {
              maxVisibleArea = visibleArea;
              mostVisibleSection = section;
            }
          });

          setIsMostVisible(mostVisibleSection?.id === sectionId);
        } else {
          setIsVisible(false);
          setIsMostVisible(false);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '0px'
      }
    );

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }

    // Añadir un listener para el scroll que recalcule la visibilidad
    const handleScroll = () => {
      const allSections = document.querySelectorAll('section[id]') as NodeListOf<HTMLElement>;
      let maxVisibleArea = 0;
      let mostVisibleSection = null;

      allSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calcular el área visible real
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibleWidth = Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
        const visibleArea = visibleHeight * visibleWidth;
        
        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea;
          mostVisibleSection = section;
        }
      });

      setIsMostVisible(mostVisibleSection?.id === sectionId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionId]);

  return { isVisible, isMostVisible };
}; 