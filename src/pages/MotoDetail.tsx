import { useParams, Link } from 'react-router-dom';
import { MOTOS } from '../types';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Phone } from 'lucide-react';

export default function MotoDetail() {
  const { id } = useParams();
  const moto = MOTOS.find(m => m.id === Number(id));

  if (!moto) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl text-white font-bold mb-4">Motocicleta no encontrada</h1>
        <p className="text-slate-400 mb-8">La motocicleta que buscas no existe o ha sido retirada del catálogo.</p>
        <Link to="/motos" className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-700 transition-colors">
          Volver al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/motos" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" /> Volver a Motos
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden glass border-cyan-500/20 relative aspect-[4/3] shadow-[0_0_40px_rgba(6,182,212,0.1)]">
              <img src={moto.image} alt={moto.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {moto.gallery.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden glass border-white/5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer aspect-video hover:border-cyan-500/50">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
                Disponible
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">{moto.name}</h1>
              <p className="text-3xl font-bold text-cyan-400 mb-6">${moto.price.toLocaleString('es-MX')}</p>
              <p className="text-lg text-slate-300 leading-relaxed border-b border-white/10 pb-8">{moto.description}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Especificaciones Técnicas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {moto.specs.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-colors">
                    <Check className="w-5 h-5 text-cyan-500 shrink-0" />
                    <span className="text-slate-300 text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => alert('Gracias por su interés. Un asesor de motocicletas se comunicará pronto.')} 
                className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              >
                Solicitar Cotización
              </button>
              <button className="flex-1 glass glass-card hover:bg-white/5 hover:border-cyan-500/30 py-4 px-6 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all">
                <Phone className="w-5 h-5 text-slate-400" /> Llamar Ahora
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
