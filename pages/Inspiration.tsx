
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Sparkles, Send, Loader2, Info, ArrowUpRight } from 'lucide-react';
import { INSPIRATION } from '../constants';
import { getDecorAdvice } from '../services/geminiService';
import MetaTags from '../components/MetaTags';

const Inspiration: React.FC = () => {
  const [roomDesc, setRoomDesc] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAdvice = async () => {
    if (!roomDesc.trim()) return;
    setIsLoading(true);
    const result = await getDecorAdvice(roomDesc);
    setAdvice(result);
    setIsLoading(false);
  };

  return (
    <>
      <MetaTags 
        title="Inspiration | Homiee"
        description="Explore our curation of atmospheric living environments and tap into our AI-driven design atelier for bespoke aesthetic guidance."
        keywords="interior design inspiration, home decor ideas, AI design assistant, space planning, decorating tips"
        canonicalUrl="https://www.homiee.studio/inspiration"
      />
      <div className="bg-[#fdfdfc] min-h-screen pt-32 pb-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <header className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-clay"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-clay">Visual Journal</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold serif leading-[0.85] tracking-tight mb-12">
              Spaces <br /> & Stories
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
              Explore our curation of atmospheric living environments and tap into our AI-driven design atelier for bespoke aesthetic guidance.
            </p>
          </motion.div>
        </header>

        {/* Gallery - Horizontal Scroll / Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-40 items-start">
          {INSPIRATION.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 ${
                idx % 4 === 0 ? 'lg:col-span-8 h-[700px]' : 'lg:col-span-4 h-[500px]'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-12 flex flex-col justify-end">
                <span className="text-clay text-[10px] font-bold uppercase tracking-[0.4em] mb-4">{item.tag}</span>
                <h3 className="text-white text-3xl font-bold serif mb-6">{item.title}</h3>
                <div className="flex items-center gap-4 text-white/60 text-xs font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Read Visual Story <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Atelier - The Design Assistant */}
        <section id="ai-atelier" className="relative mt-20">
          <div className="bg-gray-900 rounded-[3rem] p-10 md:p-24 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-clay/20 rounded-full blur-[120px]"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-10">
                  <Sparkles size={14} className="text-clay" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">Design Intelligence</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold serif text-white leading-tight mb-10">
                  Your Bespoke <br /> <span className="italic text-clay font-light">Design Atelier</span>
                </h2>
                <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed max-w-md">
                  Stuck with a layout or choosing a palette? Describe your space and let our AI curator suggest foundational improvements.
                </p>
                
                <div className="space-y-8">
                  <div className="relative">
                    <label htmlFor="room-description" className="sr-only">Describe your room</label>
                    <textarea
                      id="room-description"
                      value={roomDesc}
                      onChange={(e) => setRoomDesc(e.target.value)}
                      placeholder="e.g. A small reading nook with north-facing light..."
                      className="w-full h-48 bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white placeholder:text-gray-600 focus:ring-1 focus:ring-clay/50 focus:border-clay focus:outline-none resize-none transition-all text-lg font-light"
                      aria-describedby="room-description-help"
                    />
                    <div className="absolute bottom-6 right-8 opacity-40">
                      <Info size={16} className="text-gray-500" />
                    </div>
                  </div>
                  
                  <button
                    onClick={handleGetAdvice}
                    disabled={isLoading || !roomDesc}
                    className={`w-full py-6 rounded-2xl font-bold transition-all flex items-center justify-center gap-4 group ${
                      isLoading || !roomDesc 
                      ? 'bg-white/5 text-gray-700 cursor-not-allowed' 
                      : 'bg-clay text-white hover:bg-white hover:text-gray-900 shadow-xl'
                    }`}
                    aria-label="Analyze my space"
                  >
                    {isLoading ? (
                      <Loader2 size={24} className="animate-spin" />
                    ) : (
                      <>
                        <span className="uppercase tracking-[0.2em] text-xs">Analyze My Space</span>
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Advice Display Area */}
              <div className="relative z-10 min-h-[600px] flex flex-col bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
                <AnimatePresence mode="wait">
                  {advice ? (
                    <motion.div 
                      key="advice"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="h-full flex flex-col"
                    >
                      <div className="flex justify-between items-center mb-12 pb-8 border-b border-white/10">
                        <h4 className="font-serif text-3xl text-clay italic">The Curator's Note</h4>
                        <Lightbulb size={24} className="text-clay opacity-50" />
                      </div>
                      <div className="text-gray-300 text-lg font-light leading-[1.8] flex-grow">
                         {advice.split('\n').map((line, i) => (
                           <p key={i} className="mb-6">{line}</p>
                         ))}
                      </div>
                      <div className="mt-12 pt-8 border-t border-white/5">
                        <button 
                          onClick={() => setAdvice(null)}
                          className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 hover:text-white transition-colors"
                          aria-label="Start new session"
                        >
                          New Session
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-20"
                    >
                      <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center mb-10 bg-white/[0.02]">
                        <Sparkles size={40} className="text-gray-800" />
                      </div>
                      <h4 className="text-2xl font-bold serif text-gray-500 mb-6">Awaiting Input</h4>
                      <p className="text-gray-600 font-light text-lg max-w-xs mx-auto leading-relaxed">
                        Share your room's narrative on the left to receive our curated perspective.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default Inspiration;
