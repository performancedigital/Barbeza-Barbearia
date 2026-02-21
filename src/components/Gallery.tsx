
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ExternalLink } from 'lucide-react';

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
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-barbeza-olive font-bold tracking-[0.4em] uppercase text-[10px] block mb-4"
          >
            Tour Virtual
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl text-barbeza-dark font-serif leading-tight"
          >
            Nosso Santuário
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-stone-500 mt-8 text-xl font-light leading-relaxed"
          >
            Um espaço planejado para o homem que entende que a imagem é o reflexo do seu bem-estar interno.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] shadow-xl ${i % 3 === 0 ? 'md:aspect-video' : 'aspect-square'}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-barbeza-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                <h4 className="text-white text-3xl font-serif mb-2">{img.title}</h4>
                <p className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-bold">{img.subtitle}</p>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="mt-6"
                >
                  <Camera className="text-barbeza-gold" size={24} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex flex-col items-center"
           >
              <p className="text-stone-400 italic font-serif text-lg mb-8 max-w-md">"O melhor lugar para estar, quando você precisa não estar em lugar nenhum."</p>
              <a 
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border border-barbeza-olive text-barbeza-olive rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-barbeza-olive hover:text-white transition-all flex items-center gap-3 group"
              >
                CONHECER PESSOALMENTE
                <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
