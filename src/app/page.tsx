import ActionButton from "@/components/common/actionButtons/ActionButton"

const Home = () => {
  return (
    <header>
      <h1 className="mt-16 font-semibold text-xl md:text-4xl">Recorre el mundo del Desarrollo</h1>
      <p className="w-full md:w-1/2 mt-2 text-customGray">aprende el gran mundo del desarrollo en base al lenguaje Javascript, conocee HTML, CSS, React y mucho más. Este es un espacio que te mostrará el camino de un desarrollador hoy en día, acompañado con documentación, ejercicios y recursos útiles.</p>
      <div className="mt-6">
      <ActionButton href="/blocks" text="Explorar Bloques" />
      </div>
    </header>
  )
}

export default Home
