
import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Cinematográfico */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000')` }}
        />
        <div className="absolute inset-0 bg-[#1C1C1A]/60 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-barbeza-beige via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-barbeza-olive rounded-full flex items-center justify-center mb-6 shadow-2xl border border-white/20 relative">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Scissors className="w-10 h-10 text-white" />
            </motion.div>
            <div className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-20"></div>
          </div>
          <span className="text-white uppercase tracking-[0.6em] text-[10px] font-bold mb-4 opacity-80">Ipatinga • Minas Gerais</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-5xl md:text-8xl mb-8 leading-[1.1] font-serif font-light text-balance"
        >
          A arte de se dar <br /><span className="italic text-barbeza-gold">um tempo.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide"
        >
          Descubra o refúgio onde o silêncio, o bem-estar e a técnica impecável se encontram para redefinir sua melhor versão.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#filosofia"
            className="w-full sm:w-auto px-12 py-5 bg-barbeza-olive text-white rounded-full font-bold tracking-[0.2em] hover:bg-white hover:text-barbeza-olive transition-all transform hover:scale-105 shadow-2xl uppercase text-[10px]"
          >
            VIVER A EXPERIÊNCIA
          </a>
          <a 
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold tracking-[0.2em] hover:bg-white hover:text-barbeza-olive transition-all uppercase text-[10px] flex items-center justify-center gap-2"
          >
            <MessageSquare size={14} />
            AGENDAR WHATSAPP
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4">Explore</span>
        <motion.div 
          animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-gradient-to-b from-white/40 to-transparent"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
