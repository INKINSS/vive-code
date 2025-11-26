import CardBlock from "@/components/cardBlock/CardBlock";

const Blocks = () => {
  return (
    <main className="mt-10">
      <h1 className="text-center py-10 text-2xl font-bold animate-blurUp">
        Listado de bloques
      </h1>
      <article className="flex container mx-auto flex-col md:flex-row flex-wrap gap-4 animate-blurUp-delay-1 mb-10">
        <CardBlock
          title="<Introducción a HTML />"
          description="Aprende los conceptos básicos de HTML, concepto de etiquetas, estructura de un documento HTML y más."
          href="/blocks/html"
        />
      </article>
    </main>
  );
};

export default Blocks;
