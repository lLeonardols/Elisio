import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const menuItems = [
    { name: 'Início', href: isHome ? '#inicio' : '/#inicio', type: 'link' },
    { name: 'Sobre', href: isHome ? '#sobre' : '/#sobre', type: 'link' },
    { name: 'Modalidades', href: isHome ? '#modalidades' : '/#modalidades', type: 'link' },
    { name: 'Campanhas', href: '/campanhas', type: 'route' },
    { name: 'Treinadores', href: isHome ? '#treinadores' : '/#treinadores', type: 'link' },
    { name: 'Planos', href: isHome ? '#planos' : '/#planos', type: 'link' },
    { name: 'Loja', href: '/loja', type: 'route' },
    { name: 'Catálogo', href: '/catalogo', type: 'route' },
    { name: 'Contato', href: isHome ? '#contato' : '/#contato', type: 'link' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-secondary/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-display font-black tracking-tighter text-white">
              ELÍSIO <span className="text-primary">FITNESS</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                item.type === 'route' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wider"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wider"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a
                href="https://wa.me/5511945060258"
                className="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 uppercase tracking-wider"
              >
                Quero Treinar
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                item.type === 'route' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-primary block px-3 py-4 text-base font-medium border-b border-white/5 last:border-0"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-primary block px-3 py-4 text-base font-medium border-b border-white/5 last:border-0"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a
                href="https://wa.me/5511945060258"
                className="block w-full text-center bg-primary text-white px-6 py-4 rounded-lg font-bold mt-4 uppercase tracking-wider"
              >
                Quero Treinar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
