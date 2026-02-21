
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Star } from 'lucide-react';

const services = [
  {
    name: "Corte Barbeza Experience",
    price: "R$ 95",
    desc: "A técnica do visagismo aliada a um ritual de lavagem terapêutica com massagem craniana, finalizando com o design perfeito para seu rosto.",
    tag: "O MAIS PROCURADO"
  },
  {
    name: "Barboterapia Botânica",
    price: "R$ 80",
    desc: "O barbear clássico com navalha, utilizando toalha quente com óleos essenciais, pré e pós-barba de origem natural e massagem facial relaxante.",
    tag: "RELAXAMENTO PURO"
  },
  {
    name: "Ritual Barbeza Completo",
    price: "R$ 160",
    desc: "Nossa experiência de 90 minutos. Inclui o Corte Experience, a Barboterapia e um tratamento detox para o couro cabeludo.",
    tag: "EXPERIÊNCIA MÁXIMA"
  },
  {
    name: "Corte Kids (Gentle)",
    price: "R$ 75",
    desc: "Um momento de calma para os pequenos, ensinando desde cedo o valor do autocuidado em um ambiente sereno.",
    tag: "PARA ELES"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-32 bg-barbeza-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-barbeza-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block"
          >
            Cardápio de Rituais
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl text-barbeza-dark font-serif"
          >
            Escolha sua <br /><span className="italic text-barbeza-olive">pausa.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-stone-100 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-barbeza-gold/5 group-hover:text-barbeza-gold/10 transition-colors">
                <Star size={80} />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold text-barbeza-gold tracking-[0.2em] uppercase">{service.tag}</span>
                  <span className="text-2xl font-bold text-barbeza-olive">{service.price}</span>
                </div>
                <h3 className="text-2xl font-serif text-barbeza-dark mb-4 group-hover:text-barbeza-olive transition-colors">{service.name}</h3>
                <p className="text-stone-500 font-light leading-relaxed mb-8">{service.desc}</p>
              </div>
              <div className="pt-6 border-t border-stone-100 flex items-center justify-between relative z-10">
                 <span className="text-[10px] font-bold text-stone-400 tracking-widest uppercase">Inclui Bebida & Massagem</span>
                 <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-barbeza-olive font-bold text-[10px] uppercase tracking-widest hover:text-barbeza-gold transition-colors flex items-center gap-2"
                >
                  <MessageSquare size={12} />
                  Agendar
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-barbeza-olive/5 rounded-[3rem] border border-barbeza-olive/20 flex flex-col md:flex-row items-center justify-between gap-8"
        >
           <div className="text-center md:text-left">
              <h4 className="text-xl font-serif text-barbeza-dark mb-2 italic">Deseja um serviço personalizado?</h4>
              <p className="text-stone-500 text-sm font-light">Fale com nossa equipe para planos corporativos ou preparativos para eventos.</p>
           </div>
           <a 
            href="https://wa.me/5500000000000" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-barbeza-dark text-white rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-barbeza-olive transition-all shadow-lg"
          >
            CONSULTAR EQUIPE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
