import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonios() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendoza",
      role: "Empresario",
      image: "https://i.pravatar.cc/150?img=11",
      text: "Compré mi primer Porsche en El Rayo y la experiencia fue simplemente de otro nivel. El asesoramiento fue honesto y transparente en todo momento. Definitivamente regresaré.",
      rating: 5
    },
    {
      id: 2,
      name: "Laura Sánchez",
      role: "Arquitecta",
      image: "https://i.pravatar.cc/150?img=9",
      text: "Llevé mi BMW al taller especializado después de que en la agencia oficial no me resolvieran un ruido en el motor. Aquí lo arreglaron en dos días y a un precio justo. Mis respetos.",
      rating: 5
    },
    {
      id: 3,
      name: "Miguel Torres",
      role: "Coleccionista",
      image: "https://i.pravatar.cc/150?img=33",
      text: "La atención personalizada que recibes es inigualable. Tienen un ojo clínico para seleccionar las mejores motocicletas. Mi Harley está en las mejores manos con su equipo de mecánicos.",
      rating: 5
    },
    {
      id: 4,
      name: "Ana Patricia",
      role: "Directora de Marketing",
      image: "https://i.pravatar.cc/150?img=20",
      text: "Financiamiento rápido, entrega inmediata y un trato espectacular. El Rayo superó todas mis expectativas al comprar mi primer auto premium. Recomendadísimo.",
      rating: 4
    },
    {
      id: 5,
      name: "Roberto Garza",
      role: "Inversionista",
      image: "https://i.pravatar.cc/150?img=53",
      text: "Transparencia total. Me mostraron el historial completo del auto, el peritaje de 150 puntos y además me dieron garantía extendida. Eso da mucha tranquilidad.",
      rating: 5
    },
    {
      id: 6,
      name: "Sofia Reyes",
      role: "Piloto Amateur",
      image: "https://i.pravatar.cc/150?img=42",
      text: "Su área de motos de alta cilindrada es un paraíso. Me ayudaron a elegir la moto perfecta para track days. Excelente servicio postventa también.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24 relative">
      {/* Decorative gradient */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4" /> Experiencias Reales
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Lo que dicen <span className="text-primary-500">nuestros clientes</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            La satisfacción de quienes confían en nosotros es nuestro mejor aval. Descubre por qué El Rayo es líder en el mercado automotriz premium.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star 
                    key={idx} 
                    className={`w-4 h-4 ${idx < testimonial.rating ? 'text-primary-500 fill-primary-500' : 'text-slate-600'}`} 
                  />
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 flex-1">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-primary-500/30 object-cover"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
