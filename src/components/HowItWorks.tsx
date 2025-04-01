import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 max-w-sm">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Regístrate",
      description: "Completa el formulario con tus datos y los de tu empresa"
    },
    {
      number: 2,
      title: "Verifica tu elegibilidad",
      description: "Confirmamos que cumples con los requisitos del programa"
    },
    {
      number: 3,
      title: "Elige tu Kit",
      description: "Selecciona el ordenador y los servicios que mejor se adapten a ti"
    },
    {
      number: 4,
      title: "Recibe tu Kit Digital",
      description: "Te entregamos todo lo necesario para digitalizar tu negocio"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          ¿Cómo funciona el <span className="text-blue-600">Kit Digital</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 