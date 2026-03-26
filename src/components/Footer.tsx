import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Car, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-sm h-[200px] bg-primary-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Rayo Logo" className="h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium Motors. Tu destino de confianza para los mejores autos y motocicletas del mercado, además de servicio técnico especializado.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                { to: "/autos", label: "Catálogo de Autos" },
                { to: "/motos", label: "Catálogo de Motos" },
                { to: "/servicios", label: "Taller Mecánico" },
                { to: "/agendar", label: "Agendar Cita" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.to} className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2 group text-sm">
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-primary-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Av. Principal 1234, Zona Automotriz, CP 00000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-slate-400 text-sm">+52 55 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-slate-400 text-sm">contacto@elrayomotors.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-semibold mb-6">Horarios</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center text-slate-400 border-b border-white/5 pb-2">
                <span>Lunes - Viernes</span>
                <span className="text-white">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center text-slate-400 border-b border-white/5 pb-2 pt-1">
                <span>Sábado</span>
                <span className="text-white">09:00 - 14:00</span>
              </li>
              <li className="flex justify-between items-center text-slate-400 pt-1">
                <span>Domingo</span>
                <span className="text-primary-500 font-medium">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} El Rayo Premium Motors. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/faq" className="hover:text-white transition-colors">Términos</Link>
            <Link to="/faq" className="hover:text-white transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
