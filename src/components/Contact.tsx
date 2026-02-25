import React from 'react';
import { Linkedin, Github, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/martin-cruz-armas-31b5683b3/', 
      color: 'hover:text-[#0077B5]'
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/Cruzito123',
      color: 'hover:text-white'
    },
    {
      name: 'Especialidad',
      icon: <ShieldCheck size={24} />,
      url: '#', 
      color: 'hover:text-emerald-400'
    }
  ];

  return (
    <footer id="contact" className="py-20 border-t border-slate-900 bg-slate-950/50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Conectemos</h2>
        <p className="text-slate-500 mb-8 font-mono text-sm uppercase tracking-widest">
          Software Development & Cybersecurity
        </p>
        
        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-400 transition-all duration-300 transform hover:scale-125 ${link.color}`}
              whileHover={{ y: -5 }}
            >
              {link.icon}
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-900/50 text-slate-600 text-[12px] font-mono">
          <p>ESTUDIANTE DE INGENIERÍA EN SISTEMAS</p>
          <p className="mt-1">© {new Date().getFullYear()} — HECHO CON REACT + TS + TAILWIND V4</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;