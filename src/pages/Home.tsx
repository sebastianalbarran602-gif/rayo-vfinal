import { Link } from 'react-router-dom';
import { AUTOS, MOTOS, SERVICES } from '../types';
import { motion } from 'motion/react';
import { ChevronRight, Star, Shield, Wrench } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80" 
            alt="Luxury Car Showcase" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4" /> Excelencia Automotriz
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
              Encuentra el <br />
              <span className="gradient-text">Vehículo Perfecto</span>
            </h1>
            <p className="text-lg text-slate-300 md:text-xl mb-10 max-w-2xl leading-relaxed">
              Descubre nuestra selección premium de autos y motocicletas. Desempeño, exclusividad y el mejor servicio técnico garantizado.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/autos" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] flex items-center gap-2">
                Ver Catálogo Automotriz <ChevronRight className="w-5 h-5" />
              </Link>
              <Link to="/servicios" className="glass hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2">
                Servicio Técnico <Wrench className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Autos Section */}
      <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Autos Destacados</h2>
            <p className="text-slate-400">Las mejores opciones seleccionadas para ti</p>
          </div>
          <Link to="/autos" className="hidden md:flex items-center gap-1 text-primary-400 hover:text-primary-300 font-medium transition-colors">
            Ver todos <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AUTOS.slice(0, 3).map((auto, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={auto.id} 
              className="glass-card group overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={auto.image} alt={auto.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                   <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/10">Premium</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{auto.name}</h3>
                <p className="text-2xl font-bold text-slate-200 mb-4">${auto.price.toLocaleString('es-MX')}</p>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <Link to={`/autos/${auto.id}`} className="w-full block text-center bg-white/5 hover:bg-primary-500 text-white py-3 rounded-lg font-medium transition-colors">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 border-y border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="flex flex-col items-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center mb-4 border border-primary-500/20">
                  <Shield className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Garantía Extendida</h3>
                <p className="text-slate-400 text-sm">Todos nuestros vehículos pasan por una rigurosa inspección de 150 puntos.</p>
             </div>
             <div className="flex flex-col items-center p-6">
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 border border-cyan-500/20">
                  <Star className="w-8 h-8 text-cyan-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Servicio Premium</h3>
                <p className="text-slate-400 text-sm">Atención personalizada y asesoría financiera experta a tu medida.</p>
             </div>
             <div className="flex flex-col items-center p-6">
                <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 border border-orange-500/20">
                  <Wrench className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Taller Especializado</h3>
                <p className="text-slate-400 text-sm">Técnicos certificados trabajando con tecnología y refacciones de punta.</p>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
