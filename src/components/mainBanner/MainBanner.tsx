import PrimaryButton from "../common/buttons/PrimaryButton";
import SecundaryButton from "../common/buttons/SecundaryButton";

const MainBanner = () => {
  return (
    <header className="flex items-center pb-10 mt-6 border-b border-customGray md:border-none">
      <div className="flex flex-col items-center text-center w-full px-4 md:px-0">
        <h1 className="mt-16 font-semibold text-xl md:text-4xl animate-blurUp text-balance lg:w-3/4">
          Recorre el mundo del Desarrollo todo en un solo lugar
        </h1>
        <p className="w-full md:w-3/4 lg:w-1/2 mt-2 text-customGray text-sm animate-blurUp delay-100">
          aprende el gran mundo del desarrollo en base al lenguaje Javascript,
          conocee HTML, CSS, React y mucho más. Este es un espacio que te
          mostrará el camino de un desarrollador hoy en día, acompañado con
          documentación, ejercicios y recursos útiles.
        </p>
        <div className="flex gap-3 mt-6 animate-blurUp delay-200">
          <PrimaryButton href="/blocks" text="Explorar Bloques" />
          <SecundaryButton href="/about" text="Sobre Nosotros" />
        </div>
      </div>
    </header>
  );
};

export default MainBanner;
