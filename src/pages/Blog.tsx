import { motion } from 'motion/react';
import { Newspaper, Calendar, ArrowRight, User } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "El Futuro de la Movilidad Eléctrica Premium",
      excerpt: "Descubre cómo las marcas de lujo están integrando tecnologías de hipercarga y baterías de estado sólido en los nuevos modelos.",
      category: "Innovación",
      date: "15 Oct 2026",
      author: "Carlos Rivera",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "5 Consejos para el Mantenimiento de tu Superdeportivo",
      excerpt: "Mantener un motor V8 biturbo no es tarea fácil. Nuestros expertos técnicos comparten los secretos mejor guardados del taller.",
      category: "Guías",
      date: "02 Sep 2026",
      author: "Ing. Marco Aurelio",
      image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Lanzamiento Exclusivo: La Nueva Línea de Motos Touring",
      excerpt: "Cubrimos todos los detalles del evento de presentación de las nuevas motocicletas diseñadas para cruzar continentes con máximo confort.",
      category: "Eventos",
      date: "28 Ago 2026",
      author: "Lucía Gómez",
      image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Análisis: Por qué los SUV de Lujo dominan el Mercado",
      excerpt: "Exploramos la tendencia mundial que ha llevado a las marcas más puristas a fabricar utilitarios deportivos de alto rendimiento.",
      category: "Mercado",
      date: "10 Ago 2026",
      author: "Carlos Rivera",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-12 pb-24 relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6"
            >
              <Newspaper className="w-4 h-4" /> Noticias El Rayo
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Revista <span className="text-cyan-500">Motor Premium</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400"
            >
              Mantente al tanto de los últimos lanzamientos, eventos exclusivos y consejos de mantenimiento de nuestros expertos.
            </motion.p>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl transition-colors font-medium border border-white/5">
            Suscribirse al Newsletter
          </button>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card mb-12 overflow-hidden group cursor-pointer border hover:border-cyan-500/30 transition-all"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-auto relative overflow-hidden">
              <img src={posts[0].image} alt={posts[0].title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-cyan-500 text-sm font-bold uppercase tracking-wider mb-4">{posts[0].category}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{posts[0].title}</h2>
              <p className="text-slate-400 mb-8 leading-relaxed max-w-lg">{posts[0].excerpt}</p>
              
              <div className="flex items-center gap-6 mt-auto">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <User className="w-4 h-4" /> {posts[0].author}
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar className="w-4 h-4" /> {posts[0].date}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col overflow-hidden group cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden bg-slate-800">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-cyan-400 border border-white/5">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                  <div className="text-slate-500 text-sm flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-1">
                    Leer más <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
