import React from 'react';
import { motion } from 'motion/react';
import { Camera, Instagram, Tag, Trophy, Star, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

const Campanhas = () => {
  return (
    <div className="min-h-screen bg-secondary pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading 
          title="Campanhas & Desafios" 
          subtitle="Participe das nossas campanhas exclusivas e ganhe prêmios incríveis enquanto treina."
        />
        
        <div className="bg-gradient-to-br from-primary/20 to-black/40 rounded-[3rem] p-8 md:p-16 border border-primary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <Star size={14} fill="currentColor" /> Campanha Ativa
              </div>
              <h3 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight uppercase tracking-tighter">
                DESAFIO <br /><span className="text-primary">POSTOU, GANHOU!</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Quem postar mais fotos treinando na Elísio Fitness este mês ganha um <strong>Kit Suplementação Premium + 1 Mês de Mensalidade Grátis!</strong>
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  { icon: <Camera className="text-primary" />, text: "Poste uma foto ou story treinando na academia" },
                  { icon: <Instagram className="text-primary" />, text: "Marque nosso perfil @elisiofitness" },
                  { icon: <Tag className="text-primary" />, text: "Use a hashtag oficial #DesafioElisio" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-gray-300 font-medium">{step.text}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://www.instagram.com/elisiofitness/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all transform hover:scale-105"
              >
                Participar no Instagram <ChevronRight size={20} />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                  alt="People training" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-2xl border border-primary/50 shadow-2xl -rotate-3">
                <Trophy size={48} className="text-primary mb-2" />
                <p className="text-white font-black text-xl uppercase leading-none">Prêmio</p>
                <p className="text-primary font-bold text-sm uppercase">Kit Premium</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Outras campanhas futuras */}
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 opacity-50 grayscale">
             <h4 className="text-2xl font-display font-bold text-white mb-4 uppercase">Em Breve: Desafio Verão</h4>
             <p className="text-gray-400">Prepare-se para o maior desafio de transformação do ano. Inscrições em breve!</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 opacity-50 grayscale">
             <h4 className="text-2xl font-display font-bold text-white mb-4 uppercase">Em Breve: Amigo Fitness</h4>
             <p className="text-gray-400">Traga um amigo e ambos ganham descontos exclusivos na mensalidade.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campanhas;
