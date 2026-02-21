
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-barbeza-dark text-white pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-10"
          >
            <div className="flex flex-col">
              <span className="text-4xl font-bold tracking-[0.2em] font-serif">BARBEZA</span>
              <span className="text-[10px] tracking-[0.6em] text-barbeza-gold mt-2">BARBEARIA</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed font-light">
              Desde 2017, redefinindo o autocuidado masculino através da sofisticação, silêncio e conexão com a natureza.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-stone-400 hover:text-barbeza-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-barbeza-gold transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </motion.div>

          <div className="space-y-8">
            <h4 className="text-barbeza-gold font-bold uppercase tracking-[0.3em] text-[10px]">A Experiência</h4>
            <ul className="space-y-4 text-stone-400 text-sm font-light">
              <li><a href="#ritual" className="hover:text-white transition-colors">Nosso Conceito</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Menu de Rituais</a></li>
              <li><a href="#consultor" className="hover:text-white transition-colors">Visagismo AI</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Nosso Ambiente</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-barbeza-gold font-bold uppercase tracking-[0.3em] text-[10px]">Visite-nos</h4>
            <div className="space-y-6 text-stone-400 text-sm font-light">
              <p className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-barbeza-gold flex-shrink-0" />
                <span>Av. Selim José de Sales, 2473<br />Bethânia, Ipatinga - MG</span>
              </p>
              <p className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-barbeza-gold" />
                <span>(31) 98765-4321</span>
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-barbeza-gold font-bold uppercase tracking-[0.3em] text-[10px]">Horários</h4>
            <ul className="space-y-4 text-stone-400 text-sm font-light">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Seg - Sex</span>
                <span className="text-white">09:00 - 20:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sábado</span>
                <span className="text-white">08:00 - 18:00</span>
              </li>
              <li className="flex flex-col pt-2">
                <span className="text-barbeza-gold font-bold text-[10px] tracking-widest uppercase">Domingo</span>
                <span className="italic text-xs mt-1">Recesso para renovação.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-stone-500 text-[10px] font-bold tracking-[0.2em] uppercase">
          <p>© 2024 Barbeza Barbearia. Excellence in Male Grooming.</p>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-barbeza-gold transition-colors">Privacidade</a>
            <a href="#" className="hover:text-barbeza-gold transition-colors">Agendamento</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
