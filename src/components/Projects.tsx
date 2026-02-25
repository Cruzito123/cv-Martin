import React from 'react';
import { motion } from 'framer-motion';

// Definimos la estructura técnica de un proyecto
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: 'Web' | 'Mobile' | 'Security';
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Restaurant App Full-Stack",
    description: "Sistema integral con Django y React. Implementación de arquitectura de contenedores con Docker y base de datos relacional PostgreSQL.",
    tags: ["Django", "React", "PostgreSQL", "Docker"],
    category: "Web"
  },
  {
    id: 2,
    title: "Sprouty",
    description: "Aplicacion móvil para el gestor de plantas mediante sensores de humedad. Desarrollada con Flutter y Dart, enfocada en la experiencia de usuario y eficiencia energética.",
    tags: ["Flutter", "Dart", "Android SDK", "Arduino", "PostgreSQL"],
    category: "Mobile"
  },

];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Proyectos <span className="text-blue-500">_Seleccionados</span>
        </h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 shadow-xl"
          >
            {/* Indicador de categoría estilo Terminal */}
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                {project.category}
              </span>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></div>
                <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-[10px] uppercase tracking-wider font-bold text-slate-500 border border-slate-700 px-2 py-1 rounded group-hover:border-slate-500 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 rounded-br-2xl"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;