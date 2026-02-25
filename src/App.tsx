import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    // Usamos clases de Tailwind. Si la pantalla se vuelve blanca otra vez,
    // sabremos que Tailwind v4 tiene un detalle con las clases.
    <div className="min-h-screen bg-slate-950 text-slate-100">
    <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default App;