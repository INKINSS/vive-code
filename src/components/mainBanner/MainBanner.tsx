import ActionButton from "../common/actionButtons/ActionButton";

const MainBanner = () => {
  return (
    <header className="flex items-center pb-10 mt-6 border-b border-customGray md:border-none">
      <div className="flex-1">
        <h1 className="mt-16 font-semibold text-xl md:text-4xl">
          Recorre el mundo del Desarrollo
        </h1>
        <p className="w-full md:w-1/2 mt-2 text-customGray text-sm">
          aprende el gran mundo del desarrollo en base al lenguaje Javascript,
          conocee HTML, CSS, React y mucho más. Este es un espacio que te
          mostrará el camino de un desarrollador hoy en día, acompañado con
          documentación, ejercicios y recursos útiles.
        </p>
        <div className="mt-6">
          <ActionButton href="/blocks" text="Explorar Bloques" />
        </div>
      </div>
    </header>
  );
};

export default MainBanner;
