import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export const products = [
    { name: "Whey Protein Premium", price: "189,90", category: "Suplemento", img: "https://images.unsplash.com/photo-1593095194471-2933015967b7?q=80&w=2070&auto=format&fit=crop" },
    { name: "Creatina Monohidratada", price: "99,90", category: "Suplemento", img: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1982&auto=format&fit=crop" },
    { name: "Garrafa d'Água Elísio", price: "45,00", category: "Acessório", img: "https://images.unsplash.com/photo-1602143393494-721d0030e10e?q=80&w=1974&auto=format&fit=crop" },
    { name: "Luvas de Treino Pro", price: "55,00", category: "Acessório", img: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=2070&auto=format&fit=crop" },
    { name: "Energético Monster", price: "12,00", category: "Bebida", img: "https://images.unsplash.com/photo-1622543925917-763c34d1538c?q=80&w=1974&auto=format&fit=crop" },
    { name: "Água Mineral 500ml", price: "3,50", category: "Bebida", img: "https://images.unsplash.com/photo-1523362628744-0c100150b504?q=80&w=2070&auto=format&fit=crop" },
    { name: "Pré-Treino Explosive", price: "129,90", category: "Suplemento", img: "https://images.unsplash.com/photo-1593095194471-2933015967b7?q=80&w=2070&auto=format&fit=crop" },
    { name: "Coqueteleira Elísio", price: "35,00", category: "Acessório", img: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1974&auto=format&fit=crop" },
  ];

const Loja = () => {

  return (
    <div className="min-h-screen bg-secondary pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading 
          title="Nossa Loja" 
          subtitle="Suplementos e acessórios exclusivos para potencializar seus resultados."
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-white/5 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-black text-xl">R$ {product.price}</span>
                    <a 
                      href="https://wa.me/5511945060258" 
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-all"
                      title="Comprar via WhatsApp"
                    >
                      <ShoppingBag size={18} />
                    </a>
                  </div>
                  <button 
                    onClick={() => alert(`${product.name} adicionado ao carrinho!`)}
                    className="w-full bg-white/10 hover:bg-primary text-white py-2 rounded-xl text-sm font-bold transition-all uppercase tracking-wider"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 bg-primary/10 rounded-3xl p-12 text-center border border-primary/20">
          <h3 className="text-3xl font-display font-black text-white mb-4 uppercase">Precisa de Ajuda?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Nossos consultores estão prontos para te indicar os melhores suplementos para o seu objetivo.
          </p>
          <a 
            href="https://wa.me/5511945060258" 
            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-red-700 transition-all"
          >
            Falar com Consultor <ShoppingBag size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Loja;
