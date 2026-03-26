import { motion } from 'motion/react';
import { Target, Award, Users, Trophy } from 'lucide-react';

export default function Nosotros() {
  return (
    <div className="min-h-screen pt-12 pb-24">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562141961-b5d189fa7438?auto=format&fit=crop&q=80" 
            alt="Dealership" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Nuestra <span className="text-primary-500">Historia</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Más de dos décadas transformando la manera en que adquieres tu próximo vehículo premium.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">El Rayo Premium Motors</h2>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Fundada en 2005, El Rayo nació con una visión clara: elevar el estándar del mercado automotriz ofreciendo no solo vehículos, sino experiencias de vida inigualables.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Lo que comenzó como una pequeña colección de autos clásicos, hoy se ha convertido en el concesionario de lujo y centro de servicio especializado más prestigioso de la región, abarcando desde superdeportivos hasta motocicletas de alta gama.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-2 border-primary-500 pl-4">
                <p className="text-3xl font-bold text-white">5,000+</p>
                <p className="text-sm text-slate-400">Clientes Satisfechos</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-4">
                <p className="text-3xl font-bold text-white">20+</p>
                <p className="text-sm text-slate-400">Años de Experiencia</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden glass border-white/5">
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80" alt="Showroom" className="w-full h-full object-cover" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500/20 blur-[30px] rounded-full pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Target className="w-8 h-8 text-primary-500" />, title: "Misión", desc: "Superar las expectativas en cada interacción." },
            { icon: <Award className="w-8 h-8 text-cyan-500" />, title: "Calidad", desc: "Solo los mejores vehículos pasan nuestra inspección." },
            { icon: <Users className="w-8 h-8 text-orange-500" />, title: "Atención", desc: "Servicio personalizado centrado en ti." },
            { icon: <Trophy className="w-8 h-8 text-emerald-500" />, title: "Liderazgo", desc: "Marcando el estándar en el mercado automotriz." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4 bg-white/5 p-4 rounded-xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
