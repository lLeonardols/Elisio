import React from 'react';
import { Instagram, Facebook, MessageCircle, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <a href="/" className="text-3xl font-display font-black tracking-tighter text-white mb-6 inline-block">
              ELÍSIO <span className="text-primary">FITNESS</span>
            </a>
            <p className="text-gray-500 max-w-sm mb-8">
              Sua jornada para uma vida mais saudável começa aqui. Estrutura completa e equipe dedicada para te levar além.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="/#inicio" className="text-gray-500 hover:text-primary transition-colors">Início</a></li>
              <li><a href="/#sobre" className="text-gray-500 hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="/#modalidades" className="text-gray-500 hover:text-primary transition-colors">Modalidades</a></li>
              <li><a href="/#planos" className="text-gray-500 hover:text-primary transition-colors">Planos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="text-gray-500 flex items-center gap-2"><Phone size={16} /> (11) 94506-0258</li>
              <li className="text-gray-500 flex items-center gap-2"><MapPin size={16} /> Av. Elísio Teixeira Leite, 5291 - 02810-000</li>
              <li className="text-gray-500 flex items-center gap-2"><Instagram size={16} /> @elisiofitness</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 Elísio Fitness. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-white text-xs uppercase tracking-widest">Privacidade</a>
            <a href="#" className="text-gray-600 hover:text-white text-xs uppercase tracking-widest">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
