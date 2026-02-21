
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Cinematográfico */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000')` }}
        />
        <div className="absolute inset-0 bg-[#1C1C1A]/50 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F2] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="mb-8 flex flex-col items-center animate-fadeIn">
          <div className="w-20 h-20 bg-[#9A936A] rounded-full flex items-center justify-center mb-6 shadow-2xl border border-white/20">
             <svg viewBox="0 0 100 100" className="w-12 h-12 text-white" fill="currentColor">
              <path d="M40 20H60C71 20 80 29 80 40C80 45 78 50 74 54C78 58 80 63 80 68C80 79 71 88 60 88H40V20ZM52 50V30H55C60 30 65 34 65 40C65 46 60 50 55 50H52ZM52 78V58H55C60 58 65 62 65 68C65 74 60 78 55 78H52Z"/>
            </svg>
          </div>
          <span className="text-white uppercase tracking-[0.6em] text-[10px] font-bold mb-4 opacity-80">Ipatinga • Minas Gerais</span>
        </div>

        <h1 className="text-white text-5xl md:text-8xl mb-8 leading-[1.1] font-serif font-light text-balance">
          A arte de se dar <br /><span className="italic">um tempo.</span>
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide">
          Descubra o refúgio onde o silêncio, o bem-estar e a técnica impecável se encontram para redefinir sua melhor versão.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#ritual"
            className="w-full sm:w-auto px-12 py-5 bg-[#9A936A] text-white rounded-full font-bold tracking-[0.2em] hover:bg-white hover:text-[#9A936A] transition-all transform hover:scale-105 shadow-2xl uppercase text-[10px]"
          >
            VIVER A EXPERIÊNCIA
          </a>
          <a 
            href="https://wa.me/5500000000000"
            className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold tracking-[0.2em] hover:bg-white hover:text-[#9A936A] transition-all uppercase text-[10px]"
          >
            AGENDAR VIA WHATSAPP
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
