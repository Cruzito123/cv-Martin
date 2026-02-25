const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-blue-500 font-mono mb-4 text-lg">Hola, mi nombre es</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          Tu Nombre Real
        </h1>
        <h3 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">
          Construyo soluciones de software.
        </h3>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          Soy estudiante de <span className="text-emerald-400">Ingeniería en Sistemas</span> enfocado en desarrollo Full Stack. 
          Me apasiona la arquitectura de software y la optimización de procesos.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all">
            Ver Proyectos
          </button>
          <button className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold transition-all">
            Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;