import React, { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';

interface ResumenData {
  totalExpedientes: number;
  concedidos: number;
  desistidos: number;
  inadmitidos: number;
}

const COLORS = ['#4CAF50', '#FFC107', '#F44336']; // Verde, Amarillo, Rojo

const ResumenPanel: React.FC = () => {
  const [resumen, setResumen] = useState<ResumenData | null>(null);
  const [mesSeleccionado, setMesSeleccionado] = useState<string>('');

  useEffect(() => {
    const url = mesSeleccionado
      ? `http://localhost:3001/api/stats/resumen?mes=${mesSeleccionado}`
      : `http://localhost:3001/api/stats/resumen`;

    fetch(url)
      .then(res => res.json())
      .then(data => setResumen(data))
      .catch(err => console.error('Error al obtener resumen:', err));
  }, [mesSeleccionado]);

  if (!resumen) return <div className="text-center mt-10">Cargando resumen...</div>;

  const chartData = [
    { name: 'Concedidos', value: resumen.concedidos },
    { name: 'Desistidos', value: resumen.desistidos },
    { name: 'Inadmitidos', value: resumen.inadmitidos },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gray-50">
      <div className="max-w-5xl w-full bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">📊 Panel de Resumen</h1>

        <div className="flex justify-center mb-6">
          <label className="mr-2 font-medium text-gray-700">Filtrar por mes:</label>
          <input
            type="month"
            value={mesSeleccionado}
            onChange={(e) => setMesSeleccionado(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 shadow-sm"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
          <div className="grid grid-cols-2 gap-4">
            <Card title="Total de Expedientes" value={resumen.totalExpedientes} />
            <Card title="Concedidos" value={resumen.concedidos} />
            <Card title="Desistidos" value={resumen.desistidos} />
            <Card title="Inadmitidos" value={resumen.inadmitidos} />
          </div>

          <div className="w-full h-80 flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  innerRadius={60}
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  value: number;
}

const Card: React.FC<CardProps> = ({ title, value }) => (
  <div className="bg-white border-2 border-indigo-100 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-gray-500 text-sm">{title}</h2>
    <p className="text-3xl font-bold text-indigo-600 mt-2">{value}</p>
  </div>
);

export default ResumenPanel;
