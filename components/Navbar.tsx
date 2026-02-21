
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const LogoIcon = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
    <path d="M40 20H60C71 20 80 29 80 40C80 45 78 50 74 54C78 58 80 63 80 68C80 79 71 88 60 88H40V20Z" stroke={color} strokeWidth="6"/>
    <path d="M50 35C55 30 65 30 70 35C70 40 65 45 50 45V35Z" stroke={color} strokeWidth="2"/>
    <path d="M50 65C55 60 65 60 70 65C70 70 65 75 50 75V65Z" stroke={color} strokeWidth="2"/>
    <path d="M40 54H65" stroke={color} strokeWidth="6"/>
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-barbeza-beige/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`font-bold tracking-widest text-xl flex flex-col leading-none ${isScrolled ? 'text-barbeza-olive' : 'text-white'}`}>
            <span className="text-2xl">BARBEZA</span>
            <span className="text-[10px] tracking-[0.4em] opacity-80 border-t border-current pt-1">BARBEARIA</span>
          </span>
        </div>
        
        <div className={`hidden lg:flex space-x-8 text-xs font-semibold tracking-widest uppercase ${isScrolled ? 'text-stone-600' : 'text-white/80'}`}>
          <a href="#filosofia" className="hover:text-barbeza-gold transition-colors">A Experiência</a>
          <a href="#servicos" className="hover:text-barbeza-gold transition-colors">Serviços</a>
          <a href="#consultor" className="hover:text-barbeza-gold transition-colors">Visagismo AI</a>
          <a href="#galeria" className="hover:text-barbeza-gold transition-colors">Ambiente</a>
          <a href="#contato" className="hover:text-barbeza-gold transition-colors">Localização</a>
        </div>

        <a 
          href="https://wa.me/5500000000000" 
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-2 rounded-full border transition-all duration-300 text-xs font-bold tracking-widest uppercase ${
            isScrolled 
              ? 'border-barbeza-olive text-barbeza-olive hover:bg-barbeza-olive hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-stone-900'
          }`}
        >
          Agendar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
