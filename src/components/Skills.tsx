import React from 'react';

interface Skill {
  name: string;
  category: 'Lenguajes' | 'Frontend' | 'Backend' | 'Sistemas & DevOps' | 'Redes e IoT';
}

const skills: Skill[] = [
  
  { name: 'Python', category: 'Lenguajes' },
  { name: 'Java', category: 'Lenguajes' },
  { name: 'C#', category: 'Lenguajes' },
  { name: 'C++', category: 'Lenguajes' },
  { name: 'JavaScript', category: 'Lenguajes' },
  { name: 'TypeScript', category: 'Lenguajes' },
  { name: 'Dart', category: 'Lenguajes' },

  { name: 'Node.js', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'MariaDB (XAMPP)', category: 'Backend' },
  
  
  { name: 'React', category: 'Frontend' },
  { name: 'HTML5/CSS3', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Android', category: 'Frontend' },

  
  { name: 'Kali Linux', category: 'Sistemas & DevOps' },
  { name: 'Docker', category: 'Sistemas & DevOps' },
  { name: 'AWS', category: 'Sistemas & DevOps' },

  
  { name: 'Cisco Networking', category: 'Redes e IoT' },
  { name: 'Hardware Sensors', category: 'Redes e IoT' },
  { name: 'Cisco CCNA: Redes', category: 'Redes e IoT' },
  
    { name: 'Seguridad Defensiva', category: 'Sistemas & DevOps' },
    { name: 'Cifrado de Datos', category: 'Sistemas & DevOps' },
    { name: 'Microsoft Certified (In Progress)', category: 'Sistemas & DevOps' },
    { name: 'Arquitectura de Software', category: 'Lenguajes' },
];

const categories = Array.from(new Set(skills.map(s => s.category)));

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Habilidades Técnicas</h2>
        <p className="text-slate-400">Inglés: <span className="text-blue-400 font-mono">B1 Intermediate</span></p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map(category => (
          <div key={category} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
            <h3 className="text-blue-400 font-mono text-sm mb-4 uppercase tracking-widest">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700 hover:text-white hover:bg-slate-700 transition-all cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;