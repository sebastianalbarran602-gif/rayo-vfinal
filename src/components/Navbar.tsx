import { Link, useLocation } from 'react-router-dom';
import { Car, Bike, Wrench, Calendar, Info, MessageSquare, Newspaper, Phone, HelpCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Inicio", icon: <Car className="w-4 h-4" /> },
    { to: "/autos", label: "Autos", icon: <Car className="w-4 h-4" /> },
    { to: "/motos", label: "Motos", icon: <Bike className="w-4 h-4" /> },
    { to: "/servicios", label: "Taller", icon: <Wrench className="w-4 h-4" /> },
    { to: "/agendar", label: "Citas", icon: <Calendar className="w-4 h-4" /> },
  ];

  const secondaryLinks = [
    { to: "/nosotros", label: "Nosotros", icon: <Info className="w-4 h-4" /> },
    { to: "/testimonios", label: "Testimonios", icon: <MessageSquare className="w-4 h-4" /> },
    { to: "/blog", label: "Blog", icon: <Newspaper className="w-4 h-4" /> },
    { to: "/faq", label: "FAQ", icon: <HelpCircle className="w-4 h-4" /> },
    { to: "/contacto", label: "Contacto", icon: <Phone className="w-4 h-4" /> },
  ];

  const NavLink = ({ to, label, icon }: { to: string, label: string, icon: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300
          ${isActive 
            ? 'bg-primary-500/20 text-primary-400 shadow-[0_0_15px_rgba(14,165,233,0.3)]' 
            : 'text-slate-300 hover:bg-white/5 hover:text-white'
          }`}
        onClick={() => setIsOpen(false)}
      >
        {icon}
        {label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative h-full py-2">
            <img src="/logo.png" alt="Rayo Logo" className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] group-hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map(link => (
              <NavLink key={link.to} {...link} />
            ))}
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            {secondaryLinks.map(link => (
              <NavLink key={link.to} {...link} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden glass border-t border-white/5">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-4">Principal</p>
            {links.map(link => (
              <NavLink key={link.to} {...link} />
            ))}
            <div className="my-4 border-t border-white/5"></div>
            <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Más</p>
            {secondaryLinks.map(link => (
              <NavLink key={link.to} {...link} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
