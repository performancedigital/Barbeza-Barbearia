
import React from 'react';

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
    <section id="servicos" className="py-32 bg-[#F5F5F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <span className="text-[#B89C66] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Cardápio de Rituais</span>
          <h2 className="text-4xl md:text-6xl text-[#1C1C1A] font-serif">Escolha sua <br /><span className="italic">pausa.</span></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group border border-stone-100 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold text-[#B89C66] tracking-[0.2em] uppercase">{service.tag}</span>
                  <span className="text-2xl font-bold text-[#9A936A]">{service.price}</span>
                </div>
                <h3 className="text-2xl font-serif text-[#1C1C1A] mb-4 group-hover:text-[#9A936A] transition-colors">{service.name}</h3>
                <p className="text-stone-500 font-light leading-relaxed mb-8">{service.desc}</p>
              </div>
              <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                 <span className="text-[10px] font-bold text-stone-400 tracking-widest uppercase">Inclui Bebida & Massagem</span>
                 <a href="https://wa.me/5500000000000" className="text-[#9A936A] font-bold text-[10px] uppercase tracking-widest hover:text-[#B89C66] transition-colors">Agendar</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-[#9A936A]/5 rounded-[3rem] border border-[#9A936A]/20 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-center md:text-left">
              <h4 className="text-xl font-serif text-[#1C1C1A] mb-2 italic">Deseja um serviço personalizado?</h4>
              <p className="text-stone-500 text-sm font-light">Fale com nossa equipe para planos corporativos ou preparativos para eventos.</p>
           </div>
           <a href="https://wa.me/5500000000000" className="px-12 py-4 bg-[#1C1C1A] text-white rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-[#9A936A] transition-all">CONSULTAR EQUIPE</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
