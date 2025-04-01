import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "Página Web Profesional",
      description: "Diseño moderno y responsive adaptado a tu negocio",
      icon: "🌐"
    },
    {
      title: "Tienda Online",
      description: "Vende tus productos las 24 horas del día",
      icon: "🛍️"
    },
    {
      title: "Gestión de Redes Sociales",
      description: "Presencia profesional en redes sociales",
      icon: "📱"
    },
    {
      title: "Ordenador Subvencionado",
      description: "Equipamiento tecnológico de última generación",
      icon: "💻"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Todo lo que necesitas para <span className="text-blue-600">digitalizar tu negocio</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 