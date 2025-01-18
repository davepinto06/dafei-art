import { useState } from 'react'

export default function ArtDisplayer() {
  const periods = [
    {
      id: 1,
      title: 'Renacimiento',
      description: `Renacimiento es el nombre dado en el siglo XIX a un amplio movimiento cultural que se produjo en Europa Occidental durante los siglos XV y XVI. Fue un periodo de transición entre la Edad Media y los inicios de la Edad Moderna. Sus principales exponentes se hallan en el campo de las artes, aunque también se produjo una renovación en las ciencias, tanto naturales como humanas.`,
      imgUrl:
        'https://blogimages.musement.com/2020/11/pintores-renacentistas-243830470.jpg',
      imgAlt: 'La creación de Adán',
      century: 'Siglo XVI',
    },
    {
      id: 2,
      title: 'Barroco',
      description: `El Barroco fue un período de la historia en la cultura occidental
                originado por una nueva forma de concebir el arte (el «estilo
                barroco») y que, partiendo desde diferentes contextos
                histórico-culturales, produjo obras en numerosos campos
                artísticos: literatura, arquitectura, escultura, pintura, música,
                ópera, danza, teatro, etc. Se manifestó principalmente en la
                Europa occidental, aunque debido al colonialismo también se dio en
                numerosas colonias de las potencias europeas, principalmente en
                Iberoamérica.`,
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg/640px-The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg',
      imgAlt: 'La Vocación de San Mateo',
      century: 'Siglo XVII',
    },
    {
      id: 3,
      title: 'Impresionismo',
      description: `El impresionismo es un movimiento artístico inicialmente definido para la pintura impresionista, a partir del comentario despectivo de un crítico de arte (Louis Leroy) ante el cuadro Impresión, sol naciente de Claude Monet. El movimiento plástico impresionista se desarrolló a partir de la segunda mitad del siglo XIX en Europa —principalmente en Normandía (Giverny y la costa normanda principalmente)— caracterizado, a grandes rasgos, por el intento de plasmar la luz (la «impresión» visual) y el instante, sin reparar en la identidad de aquello que la proyectaba.`,
      imgUrl:
        'https://definicion.com/wp-content/uploads/2023/02/impresionismo-cielo-estrellado.jpg',
      imgAlt: 'La noche estrellada',
      century: 'Siglo XIX',
    },
  ]

  const [currentPeriod, setCurrentPeriod] = useState(periods[0])

  const handleCenturyButton = (id: number) => {
    const newPeriod = periods.find((period) => period.id === id)
    if (newPeriod) {
      setCurrentPeriod(newPeriod)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center font-serif text-stone-800">
      <div className="mx-auto max-w-3xl px-4 py-4">
        {/* Header */}
        <header className="mb-14 text-center">
          <h1 className="my-4 text-5xl font-bold">{currentPeriod.title}</h1>
          <div className="mx-auto h-0.5 w-16 bg-stone-800"></div>
        </header>

        {/* Main Content */}
        <main className="space-y-12">
          {/* Image Section */}
          <section className="flex items-start justify-center">
            <div className="relative flex flex-col items-center">
              <img
                src={currentPeriod.imgUrl}
                alt="La Vocación de San Mateo"
                className="rounded-sm"
              />
              <p className="mt-1 text-center text-sm italic">
                {currentPeriod.imgAlt}
              </p>
            </div>
          </section>

          {/* Text Content */}
          <section className="min-h-44 text-justify">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-bold first-letter:text-black first-line:tracking-widest">
              {currentPeriod.description}
            </p>
          </section>

          {/* Timeline */}
        </main>
        <h2 className="mb-2 text-center text-2xl font-bold">Cronología</h2>
        <div className="my-4 flex h-full items-center justify-between">
          {periods.map((p) => (
            <button
              type="button"
              key={p.id}
              className={`rounded border border-solid border-black p-1 ${p.id === currentPeriod.id ? 'bg-slate-600 text-white' : 'bg-transparent'}`}
              onClick={() => handleCenturyButton(p.id)}
            >
              {p.century}
            </button>
          ))}
        </div>
        <div className="mt-4 flex w-full max-w-3xl flex-col items-center">
          <div className="h-0.5 w-1/2 bg-stone-800"></div>
        </div>
      </div>
    </div>
  )
}
