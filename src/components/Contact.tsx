import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-20 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">¿Hablamos?</h2>
        <p className="text-slate-400 mb-10 text-lg">
          Estoy abierto a oportunidades de pasantías, proyectos freelance o colaboración en código abierto.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {/* Email */}
          <a href="mailto:tu-correo@gmail.com" 
             className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all shadow-lg shadow-blue-500/20">
            <span>Enviame un correo</span>
          </a>
          
          {/* GitHub */}
          <a href="https://github.com/Cruzito123" target="_blank" rel="noreferrer"
             className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full transition-all">
            <span>GitHub (Cruzito123)</span>
          </a>
        </div>

        <div className="text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} - Diseñado y programado por Ti.</p>
          <p className="mt-2 font-mono">Built with React + TS + Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;