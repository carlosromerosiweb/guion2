import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'Inicio', href: '#hero-section' },
    { name: 'Beneficios', href: '#benefits-section' },
    { name: 'Servicios', href: '#services-section' },
    { name: 'Testimonios', href: '#testimonials-section' },
    { name: 'Novedades', href: '#news-section' },
    { name: 'Contacto', href: '#urgent-call-section' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a 
              href="#hero-section" 
              className="text-4xl font-bold text-emerald-600 transition-all duration-300 hover:text-5xl"
              onClick={(e) => scrollToSection(e, '#hero-section')}
            >
              Siweb
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a 
                href="#hero-section" 
                onClick={(e) => scrollToSection(e, '#hero-section')}
                className="text-slate-700 hover:text-emerald-500 transition-colors"
              >
                Inicio
              </a>
            </li>
            <li>
              <a 
                href="#benefits-section" 
                onClick={(e) => scrollToSection(e, '#benefits-section')}
                className="text-slate-700 hover:text-emerald-500 transition-colors"
              >
                Beneficios
              </a>
            </li>
            <li>
              <a 
                href="#services-section" 
                onClick={(e) => scrollToSection(e, '#services-section')}
                className="text-slate-700 hover:text-emerald-500 transition-colors"
              >
                Servicios
              </a>
            </li>
            <li>
              <a 
                href="#urgent-call-section" 
                onClick={(e) => scrollToSection(e, '#urgent-call-section')}
                className="text-slate-700 hover:text-emerald-500 transition-colors"
              >
                Contacto
              </a>
            </li>
            <li>
              <a 
                href="#testimonials-section" 
                onClick={(e) => scrollToSection(e, '#testimonials-section')}
                className="text-slate-700 hover:text-emerald-500 transition-colors"
              >
                Testimonios
              </a>
            </li>
            <li>
              <a 
                href="#news-section" 
                onClick={(e) => scrollToSection(e, '#news-section')}
                className="text-slate-700 hover:text-emerald-500 transition-colors"
              >
                Noticias
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-emerald-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#hero-section"
                onClick={(e) => {
                  scrollToSection(e, '#hero-section');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-500 hover:bg-slate-50"
              >
                Inicio
              </a>
              <a
                href="#benefits-section"
                onClick={(e) => {
                  scrollToSection(e, '#benefits-section');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-500 hover:bg-slate-50"
              >
                Beneficios
              </a>
              <a
                href="#services-section"
                onClick={(e) => {
                  scrollToSection(e, '#services-section');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-500 hover:bg-slate-50"
              >
                Servicios
              </a>
              <a
                href="#urgent-call-section"
                onClick={(e) => {
                  scrollToSection(e, '#urgent-call-section');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-500 hover:bg-slate-50"
              >
                Contacto
              </a>
              <a
                href="#testimonials-section"
                onClick={(e) => {
                  scrollToSection(e, '#testimonials-section');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-500 hover:bg-slate-50"
              >
                Testimonios
              </a>
              <a
                href="#news-section"
                onClick={(e) => {
                  scrollToSection(e, '#news-section');
                  setIsOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-emerald-500 hover:bg-slate-50"
              >
                Noticias
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 