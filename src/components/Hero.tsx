import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Code, ChevronDown } from 'lucide-react';

const TypewriterEffect = () => {
  const words = ["Desarrollo de Software", "Ciberseguridad", "Sistemas Computacionales"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="text-xl md:text-3xl font-mono font-bold text-slate-400 h-12 flex items-center justify-center">
      <span className="text-white">
        {words[index].substring(0, subIndex)}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-1 h-7 md:h-9 bg-blue-500 ml-2"
      />
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elementos de fondo decorativos */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Badge de estado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 text-xs font-mono mb-8"
        >
          <Terminal size={14} className="text-blue-500" />
          <span>Status: <span className="text-emerald-500">Available_for_Projects</span></span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter"
        >
          CRUZITO<span className="text-blue-600">123</span>
        </motion.h1>

        {/* Efecto Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <TypewriterEffect />
        </motion.div>

        {/* Descripción corta */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Estudiante de Ingeniería en Sistemas. Especializándome en construir software robusto y 
          actualmente en proceso de certificación de <span className="text-blue-400 font-bold">Microsoft Ciberseguridad</span>.
        </motion.p>

        {/* Botones de acción */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20">
            <Code size={20} />
            Ver Proyectos
          </a>
          <a href="https://www.linkedin.com/in/martin-cruz-armas-31b5683b3/" 
          target="_blank"  rel="noreferrer" className="flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all">
        <Shield size={20} className="text-emerald-500" />
        Logros y Diplomas
          </a>


        </motion.div>
      </div>

      {/* Indicador de Scroll hacia abajo */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;