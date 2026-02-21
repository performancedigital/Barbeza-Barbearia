
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-stone-900 text-white pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1 space-y-10">
            <div className="flex flex-col">
              <span className="text-4xl font-bold tracking-[0.2em]">BARBEZA</span>
              <span className="text-[10px] tracking-[0.6em] text-barbeza-gold mt-2">BARBEARIA</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed font-light">
              Desde 2017, redefinindo o autocuidado masculino através da sofisticação, silêncio e conexão com a natureza.
            </p>
            <div className="flex space-x-6">
              {['Instagram', 'WhatsApp'].map((social) => (
                <a key={social} href="#" className="text-xs font-bold tracking-widest uppercase hover:text-barbeza-gold transition-colors border-b border-white/20 pb-1">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-barbeza-gold font-bold uppercase tracking-[0.3em] text-xs">A Experiência</h4>
            <ul className="space-y-4 text-stone-400 text-sm font-light">
              <li><a href="#filosofia" className="hover:text-white transition-colors">Nosso Conceito</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Menu de Rituais</a></li>
              <li><a href="#consultor" className="hover:text-white transition-colors">Visagismo AI</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Nosso Ambiente</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-barbeza-gold font-bold uppercase tracking-[0.3em] text-xs">Visite-nos</h4>
            <div className="space-y-6 text-stone-400 text-sm font-light">
              <p className="flex items-start space-x-4">
                <svg className="w-5 h-5 text-barbeza-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Av. Selim José de Sales, 2473<br />Bethânia, Ipatinga - MG</span>
              </p>
              <p className="flex items-center space-x-4">
                <svg className="w-5 h-5 text-barbeza-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
                <span>(31) 98765-4321</span>
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-barbeza-gold font-bold uppercase tracking-[0.3em] text-xs">Horários</h4>
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
