import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const [path, anchor] = href.split('#');
    
    if (path === '/' && !isHome) {
      // Se não estiver na home, navega para home e depois rola até a âncora
      navigate('/', { state: { scrollTo: anchor } });
    } else if (isHome) {
      // Se estiver na home, rola suavemente até a âncora
      const element = document.getElementById(anchor);
      if (element) {
        const navbarHeight = 80; // Altura da navbar
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  const menuItems = [
    { name: 'Início', href: '/#inicio', type: 'anchor' },
    // { name: 'Sobre', href: '/#sobre', type: 'anchor' },
    // { name: 'Modalidades', href: '/#modalidades', type: 'anchor' },
    { name: 'Campanhas', href: '/campanhas', type: 'route' },
    // { name: 'Treinadores', href: '/#treinadores', type: 'anchor' },
    // { name: 'Planos', href: '/#planos', type: 'anchor' },
    // { name: 'Loja', href: '/loja', type: 'route' }, // Descomente se tiver a página Loja
    { name: 'Catálogo', href: '/catalogo', type: 'route' },
    { name: 'Contato', href: '/#contato', type: 'anchor' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || !isHome ? 'bg-secondary/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl font-display font-black tracking-tighter text-white"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
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
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wider"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a
                href="https://wa.me/5511945060258?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20Elísio%20Fitness"
                target="_blank"
                rel="noopener noreferrer"
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
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
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
            transition={{ duration: 0.3 }}
            className="md:hidden bg-secondary border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <React.Fragment key={item.name}>
                  {item.type === 'route' ? (
                    <Link
                      to={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="text-gray-300 hover:text-primary block px-3 py-4 text-base font-medium border-b border-white/5 last:border-0"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        handleAnchorClick(e, item.href);
                        setIsOpen(false);
                      }}
                      className="text-gray-300 hover:text-primary block px-3 py-4 text-base font-medium border-b border-white/5 last:border-0"
                    >
                      {item.name}
                    </a>
                  )}
                </React.Fragment>
              ))}
              <a
                href="https://wa.me/5511945060258?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20Elísio%20Fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary hover:bg-red-700 text-white px-6 py-4 rounded-lg font-bold mt-4 uppercase tracking-wider transition-colors"
                onClick={() => setIsOpen(false)}
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