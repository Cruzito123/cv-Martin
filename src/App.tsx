import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Recuerda renombrar Hero.jsx a Hero.tsx
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  );
}

export default App;