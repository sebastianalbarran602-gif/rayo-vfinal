import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Autos from './pages/Autos';
import AutoDetail from './pages/AutoDetail';
import Motos from './pages/Motos';
import MotoDetail from './pages/MotoDetail';
import Servicios from './pages/Servicios';
import Agendar from './pages/Agendar';
import Nosotros from './pages/Nosotros';
import Testimonios from './pages/Testimonios';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950 font-sans text-slate-200 selection:bg-primary-500/30">
        <Navbar />
        <main className="flex-1 pt-20"> {/* pt-20 added for the fixed Navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/autos" element={<Autos />} />
            <Route path="/autos/:id" element={<AutoDetail />} />
            <Route path="/motos" element={<Motos />} />
            <Route path="/motos/:id" element={<MotoDetail />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
