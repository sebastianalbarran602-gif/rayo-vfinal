import { useParams, Link } from 'react-router-dom';
import { AUTOS } from '../types';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Calendar, Settings, ShieldCheck, Mail, Phone } from 'lucide-react';

export default function AutoDetail() {
  const { id } = useParams();
  const auto = AUTOS.find(a => a.id === Number(id));

  if (!auto) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl text-white font-bold mb-4">Vehículo no encontrado</h1>
        <p className="text-slate-400 mb-8">El vehículo que buscas no existe o ha sido retirado del catálogo.</p>
        <Link to="/autos" className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors">
          Volver al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/autos" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" /> Volver a los autos
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden glass border-white/5 relative aspect-[4/3]">
              <img src={auto.image} alt={auto.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {auto.gallery.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden glass border-white/5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer aspect-video">
                  <img src={img} className="w-full h-full object-cover" alt={`thumb ${idx + 1}`} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col h-full"
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-4">
                Disponible
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">{auto.name}</h1>
              <p className="text-3xl font-bold text-primary-400 mb-6">${auto.price.toLocaleString('es-MX')}</p>
              <p className="text-lg text-slate-300 leading-relaxed border-b border-white/10 pb-8">{auto.description}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Especificaciones Técnicas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {auto.specs.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-white/5">
                    <Check className="w-5 h-5 text-primary-500 shrink-0" />
                    <span className="text-slate-300 text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => alert('Gracias por su interés. Un asesor se comunicará pronto.')} 
                className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
              >
                Solicitar Cotización
              </button>
              <button className="flex-1 glass glass-card hover:bg-white/5 py-4 px-6 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all">
                <Phone className="w-5 h-5 text-slate-400" /> Agendar Prueba
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
