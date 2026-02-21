
import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'A Experiência', href: '#ritual' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Visagismo AI', href: '#consultor' },
    { name: 'Ambiente', href: '#galeria' },
    { name: 'Localização', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-barbeza-beige/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <span className={`font-bold tracking-widest text-xl flex flex-col leading-none ${isScrolled ? 'text-barbeza-olive' : 'text-white'}`}>
            <span className="text-2xl font-serif">BARBEZA</span>
            <span className="text-[10px] tracking-[0.4em] opacity-80 border-t border-current pt-1">BARBEARIA</span>
          </span>
        </motion.div>
        
        <div className={`hidden lg:flex space-x-8 text-[10px] font-bold tracking-[0.3em] uppercase ${isScrolled ? 'text-stone-600' : 'text-white/80'}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-barbeza-gold transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-barbeza-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.a 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            href="https://wa.me/5500000000000" 
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:flex px-6 py-2 rounded-full border transition-all duration-300 text-[10px] font-bold tracking-widest uppercase items-center gap-2 ${
              isScrolled 
                ? 'border-barbeza-olive text-barbeza-olive hover:bg-barbeza-olive hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            <Phone size={12} />
            Agendar
          </motion.a>
          
          <button 
            className={`lg:hidden p-2 ${isScrolled ? 'text-barbeza-olive' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden bg-barbeza-beige overflow-hidden"
      >
        <div className="flex flex-col p-6 space-y-4 text-[10px] font-bold tracking-widest uppercase text-stone-600">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="py-2 border-b border-stone-100">
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/5500000000000" className="py-4 bg-barbeza-olive text-white text-center rounded-full">
            Agendar Agora
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
