const Footer = () => {
  return (
    <footer className="h-full grid grid-cols-1 mt-10 border-t-1 border-border bg-background/70">
      <div className="w-full p-6 text-center">
        <p className="text-sm md:text-md text-muted-foreground">Pagina creada por <a href="https://github.com/mikemem44" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent transition duration-300">Mikel Membreño.</a></p>
        <p className="text-sm md:text-md text-muted-foreground">Datos proporcionados por <a href="https://rawg.io/apidocs" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent transition duration-300">RAWG Video Games Database API.</a></p>
      </div>
    </footer>
  );
};

export default Footer;
