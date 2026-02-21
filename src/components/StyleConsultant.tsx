
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, User, MessageSquare, Calendar } from 'lucide-react';
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/60 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Personalização Inteligente</span>
            <h2 className="text-4xl md:text-6xl mb-8 font-serif italic">Visagismo AI</h2>
            <p className="text-white/80 mb-10 text-xl leading-relaxed font-light">
              Nossa curadoria inteligente analisa seu perfil e sugere o visual que melhor expressa sua sofisticação e estilo de vida. Um respiro em meio ao caos.
            </p>

            <div className="space-y-6">
              <div className="relative group">
                <textarea 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ex: Sou executivo, busco um corte moderno mas que transmita seriedade. Tenho pouco tempo para finalizar pela manhã."
                  className="w-full bg-white/10 border border-white/20 rounded-3xl p-8 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-barbeza-gold/50 transition-all resize-none h-40 text-lg backdrop-blur-sm"
                />
                <div className="absolute bottom-4 right-4 text-white/20">
                  <User size={24} />
                </div>
              </div>
              <button 
                onClick={handleConsult}
                disabled={loading || !query.trim()}
                className="w-full py-5 bg-white text-barbeza-olive rounded-full font-bold tracking-[0.3em] uppercase text-xs hover:bg-barbeza-gold hover:text-white transition-all disabled:opacity-50 shadow-2xl flex items-center justify-center gap-3 group"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={18} />
                  </motion.div>
                ) : (
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                )}
                {loading ? 'ANALISANDO PERFIL...' : 'RECEBER CURADORIA'}
              </button>
            </div>
          </motion.div>

          <div className="relative min-h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  className="w-full"
                >
                  <div className="bg-barbeza-beige p-8 md:p-12 rounded-[3rem] text-stone-800 shadow-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-barbeza-gold/10">
                      <MessageSquare size={120} />
                    </div>
                    
                    <div className="absolute -top-6 -left-6 w-20 h-20 bg-barbeza-gold rounded-3xl flex items-center justify-center shadow-2xl transform -rotate-12 z-20">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>

                    <h4 className="font-serif text-3xl mb-6 text-barbeza-olive italic relative z-10">Nossa sugestão:</h4>
                    <div className="text-stone-700 leading-relaxed text-lg md:text-xl font-light relative z-10 whitespace-pre-line">
                      {result}
                    </div>
                    
                    <div className="mt-12 pt-10 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                      <span className="text-[10px] font-bold text-stone-400 tracking-widest uppercase">Barbeza Style Guide • 2024</span>
                      <a 
                        href="https://wa.me/5500000000000" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-barbeza-olive text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-barbeza-gold transition-all flex items-center gap-2 shadow-lg"
                      >
                        <Calendar size={14} />
                        RESERVAR ESTE LOOK
                      </a>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => { setResult(''); setQuery(''); }}
                    className="mt-8 text-white/60 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors mx-auto block"
                  >
                    Nova Consulta
                  </button>
                </motion.div>
              ) : loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-white/20 border-t-white rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Sparkles size={40} className="text-white/40" />
                    </motion.div>
                  </div>
                  <p className="font-serif italic text-2xl text-white/60">Tecendo sua nova imagem...</p>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-white/10 group cursor-default"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="w-48 h-48 mx-auto mb-6 opacity-20" strokeWidth={0.5} />
                  </motion.div>
                  <p className="font-serif italic text-2xl max-w-xs mx-auto">Sua transformação começa com um insight.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleConsultant;
