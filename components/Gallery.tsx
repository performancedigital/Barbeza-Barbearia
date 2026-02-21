
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { 
      url: 'https://images.unsplash.com/photo-1512690196236-8a033c46d231?auto=format&fit=crop&q=80&w=1200', 
      title: 'O Ambiente',
      subtitle: 'Biofília e design minimalista'
    },
    { 
      url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800', 
      title: 'Técnica',
      subtitle: 'Precisão em cada movimento'
    },
    { 
      url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800', 
      title: 'Detalhes',
      subtitle: 'Produtos premium de origem botânica'
    },
    { 
      url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800', 
      title: 'Hospitalidade',
      subtitle: 'Café gourmet e drinks exclusivos'
    }
  ];

  return (
    <section id="galeria" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <span className="text-[#9A936A] font-bold tracking-[0.4em] uppercase text-[10px] block mb-4">Tour Virtual</span>
          <h2 className="text-4xl md:text-6xl text-[#1C1C1A] font-serif leading-tight">Nosso Santuário</h2>
          <p className="text-stone-500 mt-8 text-xl font-light leading-relaxed">
            Um espaço planejado para o homem que entende que a imagem é o reflexo do seu bem-estar interno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`group relative overflow-hidden rounded-[2rem] shadow-xl ${i % 3 === 0 ? 'md:aspect-video' : 'aspect-square'}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                <h4 className="text-white text-3xl font-serif mb-2">{img.title}</h4>
                <p className="text-white/60 text-sm tracking-wider uppercase">{img.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <div className="inline-flex flex-col items-center">
              <p className="text-stone-400 italic font-serif text-lg mb-6">"O melhor lugar para estar, quando você precisa não estar em lugar nenhum."</p>
              <a 
                href="https://wa.me/5500000000000"
                className="px-10 py-4 border border-[#9A936A] text-[#9A936A] rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-[#9A936A] hover:text-white transition-all"
              >
                CONHECER PESSOALMENTE
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
