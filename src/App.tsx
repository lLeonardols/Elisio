import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          href="https://wa.me/5511945060258" 
          className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle size={32} fill="currentColor" />
        </a>
      </div>
    </Router>
  );
}
