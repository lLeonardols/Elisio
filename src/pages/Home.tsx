import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Award, 
  Users, 
  Zap, 
  MapPin, 
  Dumbbell, 
  Activity, 
  Flame, 
  Music, 
  Heart, 
  CheckCircle2,
  Phone,
  Clock,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  return (
    <div className="min-h-screen bg-secondary selection:bg-primary selection:text-white">
      {/* 1. Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-6 tracking-tighter leading-tight">
              ELÍSIO <span className="text-primary">FITNESS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium">
              Transforme seus limites em resultados. Treino inteligente, resultados reais.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/5511945060258" 
                className="group bg-primary hover:bg-red-700 text-white px-10 py-5 rounded-full text-lg font-black transition-all transform hover:scale-105 flex items-center gap-2 uppercase tracking-widest shadow-2xl shadow-primary/20"
              >
                Quero Treinar
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#planos" 
                className="text-white hover:text-primary px-10 py-5 rounded-full text-lg font-bold transition-all border border-white/20 hover:border-primary uppercase tracking-widest"
              >
                Ver Planos
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* 2. Sobre Nós */}
      <section id="sobre" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-8 uppercase tracking-tight">
                Mais que uma academia, <br />
                <span className="text-primary">um estilo de vida.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Na Elísio Fitness, você encontra estrutura de ponta, profissionais qualificados e um ambiente motivador para alcançar seus objetivos. Seja bem-vindo à sua nova jornada de transformação física e mental.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Award className="text-primary" />, title: "Estrutura Premium", desc: "Equipamentos de última geração." },
                  { icon: <Users className="text-primary" />, title: "Equipe Especializada", desc: "Profissionais altamente treinados." },
                  { icon: <Zap className="text-primary" />, title: "Planos Acessíveis", desc: "O melhor custo-benefício da região." },
                  { icon: <MapPin className="text-primary" />, title: "Localização Estratégica", desc: "Fácil acesso no centro da cidade." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <ImageCarousel />
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-2xl shadow-xl hidden sm:block z-10">
                <p className="text-4xl font-display font-black text-white leading-none">10+</p>
                <p className="text-white/80 text-sm font-bold uppercase tracking-wider mt-2">Anos de <br />Excelência</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Modalidades */}
      <section id="modalidades" className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Modalidades" 
            subtitle="Escolha o treino que mais combina com seu objetivo e comece hoje mesmo."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Dumbbell size={32} />, title: "Musculação", desc: "Treino de força com equipamentos modernos para hipertrofia e definição." },
              { icon: <Activity size={32} />, title: "Funcional", desc: "Melhore sua agilidade, equilíbrio e força com movimentos naturais." },
              { icon: <Flame size={32} />, title: "Cross Training", desc: "Treino de alta intensidade que desafia seus limites físicos e mentais." },
              { icon: <Music size={32} />, title: "Dança", desc: "Queime calorias e divirta-se com aulas de Fit Dance e Zumba." },
              { icon: <Heart size={32} />, title: "Yoga & Pilates", desc: "Foco em flexibilidade, postura e equilíbrio entre corpo e mente." },
              { icon: <Zap size={32} />, title: "HIIT", desc: "Treino intervalado de alta intensidade para queima rápida de gordura." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl bg-secondary border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Treinadores */}
      <section id="Atendentes e Treinadores" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Nossa Equipe" 
            subtitle="Conheça os profissionais que estarão ao seu lado em cada etapa do seu treino."
          />
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Jessica Queiroz", role: "Atendende especializada em pessoas", img: "/Elisio/imagens/Elisio1.jpg" },
              { name: "Maria Oliveira", role: "Instrutora de Funcional", img: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop" },
              { name: "Carlos Santos", role: "Coach de Yoga e Mobilidade", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
            ].map((coach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-primary transition-colors mx-auto">
                    <img 
                      src={coach.img} 
                      alt={coach.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Coach
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-1 uppercase">{coach.name}</h3>
                <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">{coach.role}</p>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">
                  Dedicado a ajudar você a alcançar sua melhor versão com técnica e motivação constante.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Planos */}
      <section id="planos" className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading 
            title="Planos e Preços" 
            subtitle="Escolha o plano que melhor se adapta à sua rotina e comece sua transformação."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Mensal", 
                price: "99,90", 
                features: ["Acesso ilimitado", "Aulas em grupo", "Sem fidelidade"],
                highlight: false
              },
              { 
                name: "Trimestral", 
                price: "89,90", 
                features: ["Acesso ilimitado", "Aulas em grupo", "Avaliação física", "Desconto progressivo"],
                highlight: true
              },
              { 
                name: "Anual", 
                price: "69,90", 
                features: ["Tudo incluso", "Acompanhamento mensal", "Avaliação física trimestral", "Melhor preço"],
                highlight: false
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-10 rounded-3xl border-2 flex flex-col ${plan.highlight ? 'bg-primary border-primary scale-105 z-10 shadow-2xl shadow-primary/30' : 'bg-secondary border-white/5'}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                    Mais Popular
                  </div>
                )}
                <h3 className={`text-2xl font-display font-black mb-2 uppercase ${plan.highlight ? 'text-white' : 'text-white'}`}>{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className={`text-lg font-bold ${plan.highlight ? 'text-white/80' : 'text-gray-400'}`}>R$</span>
                  <span className={`text-5xl font-display font-black mx-1 ${plan.highlight ? 'text-white' : 'text-white'}`}>{plan.price}</span>
                  <span className={`text-sm font-bold ${plan.highlight ? 'text-white/80' : 'text-gray-400'}`}>/mês</span>
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className={plan.highlight ? 'text-white' : 'text-primary'} />
                      <span className={plan.highlight ? 'text-white font-medium' : 'text-gray-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://wa.me/5511945060258" 
                  className={`w-full py-4 rounded-2xl text-center font-black uppercase tracking-widest transition-all ${plan.highlight ? 'bg-white text-primary hover:bg-gray-100' : 'bg-primary text-white hover:bg-red-700'}`}
                >
                  Assinar Agora
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contato e Localização */}
      <section id="contato" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Fale Conosco" />
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-display font-black text-white mb-6 uppercase">Entre em Contato</h3>
                <p className="text-gray-400 mb-8">
                  Tire suas dúvidas, agende uma aula experimental ou venha conhecer nossa estrutura pessoalmente. Estamos prontos para te atender!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-wider">Endereço</p>
                    <p className="text-gray-500">Av. Elísio Teixeira Leite, 5291 - Brasilândia, São Paulo - SP, 02810-000 (Próximo ao mercado Queiroz)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-wider">WhatsApp</p>
                    <p className="text-gray-500">(11) 94506-0258</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Clock />
                  </div>
                  <div>
                    <p className="text-white font-bold uppercase tracking-wider">Horário de Funcionamento</p>
                    <p className="text-gray-500">Seg - Sex: 06h às 22h | Sáb: 08h às 14h</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 flex gap-4">
                <a href="https://www.instagram.com/elisiofitness/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-all">
                  <Instagram size={24} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-all">
                  <Facebook size={24} />
                </a>
                <a href="https://wa.me/5511945060258" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-all">
                  <MessageCircle size={24} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[450px] rounded-3xl overflow-hidden border-2 border-white/5"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.945123456789!2d-46.7123456789!3d-23.453456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef0f4e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sAv.%20El%C3%ADsio%20Teixeira%20Leite%2C%205291%20-%20Brasil%C3%A2ndia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002810-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Localização Elísio Fitness"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
