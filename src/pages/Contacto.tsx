import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

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
            ¿Interesado en un vehículo o requieres atención especializada? Nuestro equipo de asesores está listo para brindarte una solución a la medida.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary-500/10 blur-[40px] rounded-full pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8">Información de Contacto</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Teléfonos</h4>
                    <p className="text-slate-400 text-sm">Ventas: +52 55 1234 5678</p>
                    <p className="text-slate-400 text-sm">Servicio: +52 55 8765 4321</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <Mail className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Correo Electrónico</h4>
                    <p className="text-slate-400 text-sm">contacto@elrayomotors.com</p>
                    <p className="text-slate-400 text-sm">ventas@elrayomotors.com</p>
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

              <div className="mt-10 pt-8 border-t border-white/5">
                <h4 className="text-white font-semibold mb-3">Horario de Atención</h4>
                <p className="text-slate-400 text-sm">Lunes - Viernes: 09:00 - 18:00</p>
                <p className="text-slate-400 text-sm">Sábado: 09:00 - 14:00</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-2">Envíanos un Mensaje</h3>
              <p className="text-slate-400 mb-8 text-sm">Completa el formulario y un asesor se pondrá en contacto contigo a la brevedad.</p>

              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Nombre Completo</label>
                    <input type="text" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Teléfono Móvil</label>
                    <input type="tel" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" placeholder="(55) 0000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Correo Electrónico</label>
                  <input type="email" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" placeholder="correo@ejemplo.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Departamento de Interés</label>
                  <select className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors appearance-none">
                    <option value="ventas_autos">Ventas - Autos</option>
                    <option value="ventas_motos">Ventas - Motocicletas</option>
                    <option value="servicio">Servicio / Taller</option>
                    <option value="credito">Financiamiento</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Mensaje</label>
                  <textarea rows={4} className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none" placeholder="¿En qué te podemos ayudar?"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-primary-500/20">
                  <Send className="w-5 h-5" /> Enviar Mensaje
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
