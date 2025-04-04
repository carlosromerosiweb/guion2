import { useState } from "react";
import { Download } from "lucide-react";

export default function PdfManager() {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleDownload = async () => {
    await downloadPdf("/download", "documento.pdf");
  };

  const handleDownloadAll = async () => {
    await downloadPdf("/download-all", "todos-los-pdfs.zip");
  };

  const downloadPdf = async (endpoint: string, fileName: string) => {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch(`http://localhost:3001${endpoint}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setMessage("Descargado exitosamente!");
      } else {
        setMessage("Error al descargar.");
      }
    } catch (error) {
      setMessage("Error al descargar.");
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Gestión de Resoluciones PDF</h1>

      <div className="flex gap-4 mb-4">
        <button
          onClick={handleDownload}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Download size={18} /> Descargar PDF
        </button>
        <button
          onClick={handleDownloadAll}
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Download size={18} /> Descargar Todos los PDFs
        </button>
      </div>

      {message && (
        <div className="mt-4 p-2 bg-green-200 text-green-800 rounded">
          {message}
        </div>
      )}
    </div>
  );
}
