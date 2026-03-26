import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "¿Ofrecen garantía en vehículos seminuevos?",
      answer: "Sí, todos nuestros vehículos seminuevos pasan por una rigurosa certificación de 150 puntos. Dependiendo del modelo y año, ofrecemos garantías desde 6 meses hasta 2 años, cubriendo tren motriz y componentes eléctricos principales."
    },
    {
      id: 2,
      question: "¿Puedo dejar mi vehículo actual como enganche?",
      answer: "Absolutamente. Realizamos un peritaje profesional a tu vehículo actual en menos de 45 minutos. Te ofrecemos una valoración justa basada en el mercado actual para que la apliques como pago inicial de tu nueva unidad."
    },
    {
      id: 3,
      question: "¿Trabajan con financieras externas o solo crédito propio?",
      answer: "Contamos con nuestra propia financiera (Rayo Financial Services) que ofrece tasas altamente competitivas. Sin embargo, también tenemos convenio con los principales bancos nacionales, por lo que podemos buscar la opción que mejor se adapte a tu perfil crediticio."
    },
    {
      id: 4,
      question: "¿Se requiere hacer cita para mantenimiento en el taller especializado?",
      answer: "Es altamente recomendable agendar tu cita con al menos 48 horas de anticipación. Esto nos permite asegurar la disponibilidad de bahías, asignar al técnico especializado adecuado y tener preparadas las refacciones originales que tu vehículo requerirá."
    },
    {
      id: 5,
      question: "¿Pueden conseguir un modelo o versión específica si no lo tienen en stock?",
      answer: "Sí, contamos con un servicio de 'Concierge Automotriz'. A través de nuestra red internacional, podemos localizar ese modelo específico, edición limitada o configuración de colores exacta que estás buscando."
    }
  ];

  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <div className="min-h-screen pt-12 pb-24 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/10 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4" /> Preguntas Frecuentes
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Resolvemos tus <span className="text-primary-500">Dudas</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400"
          >
            Información transparente y precisa sobre nuestros servicios, procesos de compra y garantías.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button 
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${openId === faq.id ? 'text-primary-400' : 'text-white'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openId === faq.id ? 'bg-primary-500/20 text-primary-400 rotate-180' : 'bg-white/5 text-slate-400'}`}>
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="pt-2 border-t border-white/5">
                  <p className="text-slate-400 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center border-t border-white/10 pt-12"
        >
          <p className="text-white mb-4">¿Aún tienes dudas sin resolver?</p>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors border border-white/10">
            Contactar Asesor Directo
          </button>
        </motion.div>

      </div>
    </div>
  );
}
