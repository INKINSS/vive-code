import MainBanner from "@/components/mainBanner/MainBanner";
import SectionInformative from "@/components/sectionInformative/SectionInformative";

const Home = () => {
  return (
    <main>
      <MainBanner />
      <article className="flex flex-col md:flex-row animate-blurUp-delay-1 divide-y-2 md:divide-y-0 md:divide-x-2 divide-customGray">
        <SectionInformative
          title="conoce la plataforma y resuelve tus dudas"
          description="¿tienes dudas?, revisa el bloque 0 que contiene respuestas a la gran mayoria de preguntas que podrías tener y también una sugerencia para llevar un registro de todo"
          href="/blocks/0"
          label="bloque 0"
        />
        <SectionInformative
          title="resuelve ejercicios y lleva un seguimiento"
          description="si ya tienes conocimientos previos de los bloques, puedes comenzar directamente resolviendo ejercicios y llevar un seguimiento"
          href="/exercises"
          label="ver ejercicios"
        />
      </article>
    </main>
  );
};

export default Home;
