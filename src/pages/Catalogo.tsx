import React from 'react';
import { motion } from 'motion/react';
import { products } from './Loja';
import { SectionHeading } from '../components/SectionHeading';

const Catalogo = () => {
  return (
    <div className="min-h-screen bg-secondary pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading 
          title="Catálogo de Produtos" 
          subtitle="Confira nossa linha completa de suplementos e acessórios."
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
                <p className="text-primary font-black text-xl mb-4">R$ {product.price}</p>
                <button 
                  onClick={() => alert(`${product.name} adicionado ao carrinho!`)}
                  className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-all uppercase tracking-wider shadow-lg shadow-primary/20"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
