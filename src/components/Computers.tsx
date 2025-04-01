import React from 'react';

interface ComputerSpecs {
  so: string;
  procesador: string;
  ram: string;
  almacenamiento: string;
  pantalla: string;
}

interface ComputerProps {
  modelo: string;
  specs: ComputerSpecs;
}

const ComputerCard: React.FC<ComputerProps> = ({ modelo, specs }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <span className="text-3xl font-bold text-blue-600">0€</span>
        <span className="text-xl text-gray-500 line-through ml-2">1.000€</span>
      </div>
      <h3 className="text-2xl font-bold text-center mb-6">{modelo}</h3>
      <div className="space-y-2">
        <p><span className="font-semibold">S.O:</span> {specs.so}</p>
        <p><span className="font-semibold">Procesador:</span> {specs.procesador}</p>
        <p><span className="font-semibold">Memoria RAM:</span> {specs.ram}</p>
        <p><span className="font-semibold">Almacenamiento:</span> {specs.almacenamiento}</p>
        <p><span className="font-semibold">Pantalla:</span> {specs.pantalla}</p>
      </div>
    </div>
  );
};

const Computers: React.FC = () => {
  const computers = [
    {
      modelo: "Samsung Galaxy Book 4",
      specs: {
        so: "Windows 11 pro",
        procesador: "Intel® Core™ 5 Processor 120U",
        ram: "16GB",
        almacenamiento: "512GB",
        pantalla: "15.6″ FHD LED Display"
      }
    },
    {
      modelo: "Lenovo ThinkBook 16″ G7 ARP",
      specs: {
        so: "Windows 11 pro",
        procesador: "AMD Ryzen™ 5 7535HS",
        ram: "16GB",
        almacenamiento: "512GB",
        pantalla: "16″ WUXGA"
      }
    },
    {
      modelo: "Lenovo ThinkPad L14 Gen 5",
      specs: {
        so: "Windows 11 pro",
        procesador: "AMD Ryzen™ 5 PRO 7535U",
        ram: "16GB",
        almacenamiento: "512GB",
        pantalla: "14″ WUXGA"
      }
    },
    {
      modelo: "Dell Latitude 3450",
      specs: {
        so: "Windows 11 pro",
        procesador: "Intel Core i5 4,3 GHz",
        ram: "16GB",
        almacenamiento: "512GB SSD",
        pantalla: "14 Pulgadas Táctil"
      }
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Elige tu <span className="text-blue-600">ordenador</span> entre casi 40 modelos disponibles <span className="text-blue-600">subvencionados</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {computers.map((computer, index) => (
            <ComputerCard key={index} {...computer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Computers; 