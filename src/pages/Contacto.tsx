import { motion } from 'motion/react';
import { Phone, MapPin, MessageSquare, ArrowRight, MessageCircle } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="min-h-screen pt-12 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6"
          >
            <MessageSquare className="w-4 h-4" /> Asistencia Premium
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Hablemos de <span className="text-primary-500">Tratos</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            ¿Interesado en un vehículo o requieres atención especializada? Nuestro equipo de asesores está listo para brindarte una solución a la medida por nuestro canal directo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* WhatsApp Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-10 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#25D366]/10 blur-[40px] rounded-full pointer-events-none"></div>

            <div className="w-24 h-24 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6 border border-[#25D366]/30 shadow-[0_0_30px_rgba(37,211,102,0.2)]">
               <MessageCircle className="w-12 h-12 text-[#25D366]" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Chat Inmediato</h3>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Olvídate de formularios y esperas. La forma más rápida de cotizar tu vehículo, agendar una prueba de manejo o solicitar servicio es enviándonos un WhatsApp.
            </p>
            <a 
              href="https://wa.me/525512345678?text=Hola,%20estoy%20interesado%20en%20los%20servicios%20y%20vehículos%20de%20El%20Rayo%20Motors!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-10 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:scale-105"
            >
              Iniciar Chat en WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Showroom Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-10 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Nuestras Instalaciones</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20 group-hover:bg-primary-500/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Llamadas Directas</h4>
                  <p className="text-slate-400 text-sm">Ventas: +52 55 1234 5678</p>
                  <p className="text-slate-400 text-sm">Servicio: +52 55 8765 4321</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Showroom Principal</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Av. Principal 1234<br />
                    Zona Automotriz Premium<br />
                    CP 00000, Ciudad de México
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/5">
              <h4 className="text-white font-semibold mb-4">Horario de Atención</h4>
              <div className="space-y-3">
                <p className="text-slate-400 text-sm flex justify-between"><span>Lunes a Viernes:</span> <span className="text-white font-medium">09:00 - 18:00</span></p>
                <p className="text-slate-400 text-sm flex justify-between"><span>Sábados:</span> <span className="text-white font-medium">09:00 - 14:00</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
