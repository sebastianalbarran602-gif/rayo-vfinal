import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, Car, Settings, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Agendar() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen pt-12 pb-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6"
          >
            <CalendarIcon className="w-4 h-4" /> Agenda Digital
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Tu Tiempo es <span className="text-primary-500">Valioso</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Reserva una prueba de manejo o cita de servicio técnico en nuestro sistema en línea. Rápido, seguro y garantizado.
          </motion.p>
        </div>

        {/* Steps Progress */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-primary-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]' : 'bg-slate-800 text-slate-500'}`}>1</div>
            <div className={`w-16 h-px ${step >= 2 ? 'bg-primary-500' : 'bg-slate-800'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? 'bg-primary-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]' : 'bg-slate-800 text-slate-500'}`}>2</div>
            <div className={`w-16 h-px ${step >= 3 ? 'bg-primary-500' : 'bg-slate-800'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 3 ? 'bg-primary-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]' : 'bg-slate-800 text-slate-500'}`}>3</div>
          </div>
        </div>

        {/* Step Content */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-12 mb-8"
        >
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Selecciona el Tipo de Cita</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button 
                  onClick={() => setStep(2)}
                  className="flex flex-col items-center justify-center p-8 bg-slate-900/50 border border-white/5 rounded-2xl hover:border-primary-500 hover:bg-primary-500/5 transition-all group text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Car className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Prueba de Manejo</h3>
                  <p className="text-slate-400 text-sm">Prueba tu vehículo ideal antes de tomar una decisión.</p>
                </button>

                <button 
                  onClick={() => setStep(2)}
                  className="flex flex-col items-center justify-center p-8 bg-slate-900/50 border border-white/5 rounded-2xl hover:border-orange-500 hover:bg-orange-500/5 transition-all group text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Settings className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Servicio Técnico</h3>
                  <p className="text-slate-400 text-sm">Mantenimiento y revisión con personal certificado.</p>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Selecciona Fecha y Hora</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Día</label>
                  <input type="date" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Horarios Disponibles</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['10:00', '11:30', '13:00', '16:00', '17:30'].map((time) => (
                      <button key={time} className="py-3 px-2 border border-white/10 rounded-lg text-white hover:border-primary-500 hover:bg-primary-500/10 transition-colors text-sm font-medium">
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8 pt-8 border-t border-white/5">
                <button onClick={() => setStep(1)} className="text-slate-400 hover:text-white font-medium">Atrás</button>
                <button onClick={() => setStep(3)} className="bg-primary-500 hover:bg-primary-600 px-8 py-3 rounded-xl text-white font-bold shadow-lg shadow-primary-500/20">Continuar</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">¡Cita a Punto!</h2>
              <p className="text-slate-400 max-w-md mx-auto mb-8">
                Dejamos simulado el flujo de agendar para mantener la interfaz como un prototipo premium. En producción aquí se recaban los datos finales.
              </p>
              <button onClick={() => setStep(1)} className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-3 rounded-xl text-white font-medium">Volver a empezar</button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
