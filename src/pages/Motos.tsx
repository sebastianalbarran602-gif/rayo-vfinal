import { Link } from 'react-router-dom';
import { MOTOS } from '../types';
import { motion } from 'motion/react';
import { Search, Filter, Bike } from 'lucide-react';

export default function Motos() {
  return (
    <div className="min-h-screen pt-12 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <Bike className="w-6 h-6 text-cyan-400" />
              </div>
              <h1 className="text-4xl font-bold text-white">Catálogo de Motocicletas</h1>
            </div>
            <p className="text-slate-400 max-w-2xl">
              Siente la libertad y la adrenalina con nuestra línea exclusiva de motocicletas. Desde urbanas hasta deportivas de alto cilindraje.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Buscar modelo..." 
                className="bg-slate-900 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-full md:w-64 transition-all"
              />
            </div>
            <button className="p-2.5 bg-slate-900 border border-white/10 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MOTOS.map((moto, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              key={moto.id}
              className="glass-card group flex flex-col rounded-2xl overflow-hidden hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <div className="relative h-56 overflow-hidden bg-slate-800">
                <img 
                  src={moto.image} 
                  alt={moto.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                
                {/* Specs overview */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  {moto.specs.slice(0,2).map((spec, idx) => (
                    <span key={idx} className="text-[10px] font-medium px-2 py-1 bg-cyan-950/80 backdrop-blur text-cyan-200 rounded border border-cyan-500/20">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{moto.name}</h2>
                <p className="text-sm text-slate-400 line-clamp-2 mb-4 flex-1">{moto.description}</p>
                
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-white/5">
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Precio desde</p>
                    <p className="text-2xl font-bold text-white">${moto.price.toLocaleString('es-MX')}</p>
                  </div>
                  <Link 
                    to={`/motos/${moto.id}`} 
                    className="h-10 px-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium flex items-center justify-center transition-colors shadow-lg shadow-cyan-500/20"
                  >
                    Detalles
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
