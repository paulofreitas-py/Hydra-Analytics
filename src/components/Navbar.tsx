import { useState, useEffect } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Automação', href: '#automacao' },
    { name: 'Casos de Uso', href: '#casos-de-uso' },
    { name: 'Planos', href: '#planos' },
    { name: 'Sobre', href: '#sobre' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Hydra Analytics" 
              className="h-12 w-auto mix-blend-screen invert grayscale contrast-125 brightness-150 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('navbar-fallback-icon');
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div id="navbar-fallback-icon" className="hidden w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Hydra Analytics</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Entrar
            </a>
            <a
              href="#contato"
              className="px-4 py-2 rounded-full bg-white text-slate-950 text-sm font-semibold hover:bg-cyan-50 transition-colors"
            >
              Solicitar Proposta
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-slate-800 my-2" />
              <a
                href="#login"
                className="text-base font-medium text-slate-300 hover:text-white"
              >
                Entrar
              </a>
              <a
                href="#contato"
                className="px-4 py-3 rounded-lg bg-cyan-500 text-white text-center font-semibold hover:bg-cyan-600"
              >
                Solicitar Proposta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
