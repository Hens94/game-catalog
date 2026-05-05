const AboutPage = () => {

  return (
    <div className="grid grid-cols-1 m-4 md:m-8 md:flex items-center gap-4">
      <section className="md:w-3/4 grid grid-cols-1 gap-6 animate-fade-in-up md:animate-fade-in-right md:delay-300">
        <h1 className="mt-2 text-4xl text-center md:text-left md:text-6xl">Game Catalog</h1>
        <p>Esta aplicacion web es un catalogo digital de videojuegos creada con el principal objetivo de demostrar mis habilidades en desarrollo front-end y afianzar conocimientos sobre el stack tecnologico utilizado. Tomando datos directamente de la 
          <a href="https://api.rawg.io/docs/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition duration-300"> API de videojuegos de RAWG</a>
          , se ha curado una lista de plataformas modernas para mostrar unicamente los juegos mas relevantes de la actualidad. Las features de esta aplicacion web son:</p>
        <ul className="list-disc list-inside grid gap-1 md:gap-3">
          <li>Busqueda de juegos por nombre y plataformas</li>
          <li>Filtrado disponible por plataforma</li>
          <li>Carrusel de juegos destacado con autoplay y navegacion</li>
          <li>Grid responsivo con diseño masonry</li>
          <li>Navegacion con params dinamicos</li>
          <li>Proximamente mas...</li>
        </ul>
      </section>
      <aside className="my-10 mx-3 md:m-auto md:w-1/4 md:h-3/4 border-1 border-border bg-card rounded-lg p-4 timeline-view  animate-fade-in-up animate-range-brisk md:animate-fade-in-left md:delay-300">
        <h2 className="text-3xl md:text-4xl">Stack tecnologico:</h2>
        <ul className="grid gap-1 my-4 list-none list-inside">
          <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full" />Nextjs 15</li>
          <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full" />React 19</li>
          <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full" />Tailwind CSS</li>
          <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full" />Axios</li>
          <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full" />Radix UI</li>
          <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full" />shacn + tweakcn</li>
          <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-full" />Zod + React Hook Form</li>
        </ul>
      </aside>
    </div>
  )
};

export default AboutPage;