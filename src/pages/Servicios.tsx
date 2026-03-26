import { SERVICES } from '../types';
import { motion } from 'motion/react';
import { Wrench, CheckCircle2, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Servicios() {
  return (
    <div className="min-h-screen pt-12 pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -mr-[500px] -mt-[200px] w-[1000px] h-[1000px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6"
          >
            <Wrench className="w-4 h-4" /> Taller Especializado
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Cuidado y Mantenimiento <br /> <span className="text-orange-500">Para tu Vehículo</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Ofrecemos servicios completos con refacciones originales y técnicos certificados para asegurar que tu auto o motocicleta siempre esté en las mejores condiciones.
          </motion.p>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="glass-card p-6 flex items-start gap-4">
             <div className="p-3 bg-orange-500/10 rounded-xl mt-1">
               <ShieldCheck className="w-6 h-6 text-orange-500" />
             </div>
             <div>
               <h3 className="text-white font-bold mb-2">Garantía Total</h3>
               <p className="text-sm text-slate-400">Todo nuestro trabajo está garantizado por 6 meses o 10,000 km.</p>
             </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.4}} className="glass-card p-6 flex items-start gap-4">
             <div className="p-3 bg-orange-500/10 rounded-xl mt-1">
               <CheckCircle2 className="w-6 h-6 text-orange-500" />
             </div>
             <div>
               <h3 className="text-white font-bold mb-2">Refacciones Originales</h3>
               <p className="text-sm text-slate-400">Usamos solo piezas avaladas por las marcas que representamos.</p>
             </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.5}} className="glass-card p-6 flex items-start gap-4">
             <div className="p-3 bg-orange-500/10 rounded-xl mt-1">
               <Clock className="w-6 h-6 text-orange-500" />
             </div>
             <div>
               <h3 className="text-white font-bold mb-2">Puntualidad</h3>
               <p className="text-sm text-slate-400">Entregamos tu vehículo en el tiempo acordado, sin excusas.</p>
             </div>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Nuestros Servicios</h2>
          <div className="space-y-4">
            {SERVICES.map((service, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={service.id}
                className="group p-6 glass-card hover:bg-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-orange-500/30 transition-all cursor-pointer"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-sm max-w-2xl">{service.description}</p>
                </div>
                <div className="flex md:flex-col items-center justify-between md:items-end gap-3 md:gap-1 shrink-0">
                  <span className="text-xl font-bold text-orange-400">{service.price}</span>
                  <Link to="/agendar" className="text-sm font-semibold text-white/50 group-hover:text-white transition-colors flex items-center">
                    Agendar  <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <Link to="/agendar" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
               <Calendar className="w-5 h-5" /> Agendar Cita de Servicio
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add the missing calendar import in the file 
import { Calendar } from 'lucide-react';
