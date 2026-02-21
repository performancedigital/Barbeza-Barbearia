
import React, { useState } from 'react';
import { getStyleConsultation } from '../services/geminiService';

const StyleConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const advice = await getStyleConsultation(query);
    setResult(advice || '');
    setLoading(false);
  };

  return (
    <section id="consultor" className="py-32 bg-barbeza-olive text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-white/60 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Personalização</span>
            <h2 className="text-4xl md:text-6xl mb-8 font-serif italic">Visagismo AI</h2>
            <p className="text-white/80 mb-10 text-xl leading-relaxed font-light">
              Nossa curadoria inteligente analisa seu perfil e sugere o visual que melhor expressa sua sofisticação e estilo de vida.
            </p>

            <div className="space-y-6">
              <div className="relative">
                <textarea 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ex: Sou executivo, busco um corte moderno mas que transmita seriedade. Tenho pouco tempo para finalizar pela manhã."
                  className="w-full bg-white/10 border border-white/20 rounded-3xl p-8 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-barbeza-gold/50 transition-all resize-none h-40 text-lg"
                />
              </div>
              <button 
                onClick={handleConsult}
                disabled={loading}
                className="w-full py-5 bg-white text-barbeza-olive rounded-full font-bold tracking-[0.3em] uppercase text-xs hover:bg-barbeza-gold hover:text-white transition-all disabled:opacity-50 shadow-2xl"
              >
                {loading ? 'ANALISANDO PERFIL...' : 'RECEBER CURADORIA'}
              </button>
            </div>
          </div>

          <div className="relative min-h-[450px] flex items-center justify-center">
            <div className={`transition-all duration-1000 w-full ${result ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-barbeza-beige p-12 rounded-[3rem] text-stone-800 shadow-3xl relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-barbeza-gold rounded-3xl flex items-center justify-center shadow-2xl transform -rotate-12">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h4 className="font-serif text-3xl mb-6 text-barbeza-olive italic">Nossa sugestão:</h4>
                <p className="text-stone-700 leading-relaxed text-xl font-light">
                  {result}
                </p>
                <div className="mt-12 pt-10 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <span className="text-xs font-bold text-stone-400 tracking-widest uppercase">Barbeza Style Guide</span>
                  <a href="https://wa.me/5500000000000" className="bg-barbeza-olive text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">RESERVAR ESTE LOOK</a>
                </div>
              </div>
            </div>
            
            {!result && !loading && (
              <div className="text-center text-white/10 group">
                <svg className="w-48 h-48 mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-1000" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                </svg>
                <p className="font-serif italic text-2xl">Sua transformação começa com um insight.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleConsultant;
