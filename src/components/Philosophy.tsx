
import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  return (
    <section id="ritual" className="py-32 bg-barbeza-beige">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-3xl">
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1200" 
                alt="Detalhe de atendimento premium" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-barbeza-olive/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
          
          <div className="space-y-10 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-barbeza-olive font-bold tracking-[0.4em] uppercase text-[10px]">Nosso Padrão de Ouro</span>
              <h2 className="text-4xl md:text-6xl text-barbeza-dark font-serif leading-tight">Muito além de <br /><span className="italic text-barbeza-gold">cabelo e barba.</span></h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-stone-600 text-xl font-light leading-relaxed"
            >
              Na Barbeza, o atendimento é um ritual sagrado. Criamos um ambiente onde cada detalhe foi planejado para reduzir o ruído do mundo exterior.
            </motion.p>
            
            <div className="space-y-12 pt-4">
              {[
                { 
                  title: "Boas-vindas", 
                  desc: "Ao chegar, escolha entre um café gourmet artesanal ou uma cerveja premium de cortesia." 
                },
                { 
                  title: "Aromaterapia & Toalha Quente", 
                  desc: "Utilizamos toalhas infundidas com óleos essenciais de eucalipto e lavanda para relaxamento imediato." 
                },
                { 
                  title: "Visagismo de Elite", 
                  desc: "Nossos especialistas não apenas cortam; eles analisam sua estrutura óssea e estilo de vida para o design perfeito." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6 items-start group"
                >
                  <span className="text-barbeza-gold text-2xl font-serif italic opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}.</span>
                  <div>
                    <h4 className="font-bold text-barbeza-dark tracking-widest uppercase text-[10px] mb-2">{item.title}</h4>
                    <p className="text-stone-500 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-barbeza-dark rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden text-center"
        >
           <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1512690196236-8a033c46d231?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
           </div>
           <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-serif mb-6 italic">O luxo do silêncio.</h3>
              <p className="text-white/60 font-light text-lg mb-8">
                Esqueça as barbearias barulhentas. Aqui, a música é suave, a luz é acolhedora e o foco é total na sua experiência de descanso.
              </p>
              <div className="w-16 h-px bg-barbeza-gold mx-auto"></div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
