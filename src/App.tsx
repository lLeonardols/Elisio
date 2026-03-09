import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Campanhas from './pages/Campanhas';
import Loja from './pages/Loja';
import Catalogo from './pages/Catalogo';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-secondary selection:bg-primary selection:text-white flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campanhas" element={<Campanhas />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/catalogo" element={<Catalogo />} />
          </Routes>
        </main>

        <Footer />

        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/5511945060258?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20Elísio%20Fitness" 
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40 group animate-bounce-slow"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle size={32} fill="currentColor" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Fale conosco no WhatsApp
          </span>
        </a>
      </div>
    </Router>
  );
}