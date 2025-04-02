import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const { isVisible } = useScrollAnimation('testimonials-section');
  const testimonials = [
    {
      name: "María Jesús Romero Ponce",
      rating: 5,
      text: "Han diseñado mi tienda online, en concreto Patricia. Y no puedo estar más satisfecha. Todo ha sido muy fluido, sencillo y profesional. Ha quedado mejor de lo que podía esperar. Tienen un trato cercano y resuelven todas tus dudas ayudándote en todo el proceso. Muchas gracias por todo!",
      date: "Hace 1 mes",
      link: "https://www.google.com/maps/reviews/@42.2261068,-8.7059353,15.25z/data=!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnTUNBal9xd0J3EAE!2m1!1s0x0:0x4d4e4d154ef8f59d?hl=gl&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Rosa Maria Rodríguez",
      rating: 5,
      text: "Trabajar con Liliana del equipo de Siweb ha sido un auténtico placer. Ofrece un servicio y una asistencia de primera categoría. Se tomó el tiempo necesario para comprender nuestras necesidades y desarrollaron una solución a medida que superó nuestras expectativas. Una atención excepcional.",
      date: "Hace 1 mes",
      link: "https://www.google.com/maps/reviews/@42.2191246,-8.6969378,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnTURBd0xtQl93RRAB!2m1!1s0x0:0x4d4e4d154ef8f59d?hl=gl&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Eva Morera",
      rating: 5,
      text: "Estoy encantada con la realización de mi página web, gracias a Patricia Campelo que me guió muy bien y supo plasmar la idea qué yo tenía para la web de mi joyería, ha quedado elegante, práctica y duradera en el tiempo, Gracias Patricia‼️",
      date: "Hace 3 semanas",
      link: "https://www.google.com/maps/reviews/@42.2191246,-8.6969378,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnTUNRcWZxN3J3RRAB!2m1!1s0x0:0x4d4e4d154ef8f59d?hl=gl&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <section 
      id="testimonials-section" 
      className="py-24 bg-blue-600 pt-32"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-white mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            Lo que dicen nuestros clientes
          </h2>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${
                isVisible ? 
                  index === 0 ? 'animate-slide-right' : 
                  index === 1 ? 'animate-fade-in-up-delayed' : 
                  'animate-slide-left' 
                : 'opacity-0'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-slate-500">{testimonial.date}</span>
              </div>
              
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800">{testimonial.name}</span>
                <a 
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-500 hover:text-emerald-600 transition-colors flex items-center"
                >
                  Ver en Google
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 