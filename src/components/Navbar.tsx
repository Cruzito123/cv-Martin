import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          &lt;Cruzito123 /&gt;
        </span>
        
        <div className="hidden md:flex gap-8 text-slate-400 font-medium">
          <a href="#home" className="hover:text-blue-400 transition-colors">Inicio</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Proyectos</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;