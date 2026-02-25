import React from 'react';


interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string; // El signo '?' indica que es opcional
}

const projects: Project[] = [
  {
    title: "Restaurant App",
    description: "Aplicación web con Django, React y PostgreSQL. Contenerizada con Docker.",
    tags: ["Django", "React", "PostgreSQL", "Docker"],
  },
  {
    title: "Mobile App Flutter",
    description: "Aplicación móvil para gestión de notificaciones del sistema.",
    tags: ["Flutter", "Dart", "Android"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Proyectos Destacados</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition-all group">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">{project.title}</h3>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;