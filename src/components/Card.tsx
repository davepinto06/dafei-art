type CardProps = {
  title: string
  description: string
  number: number
  startingLeft: boolean
  style: string
}

export default function Card({
  title,
  description,
  number,
  startingLeft,
  style,
}: CardProps) {
  return (
    <article className="grid overflow-hidden rounded border border-solid border-gray-300 shadow-sm md:grid-cols-2">
      {startingLeft ? (
        <>
          <div className="bg-white p-8">
            <h1 className="mb-4 font-serif text-3xl">{title}</h1>
            <p className="leading-relaxed text-gray-600">{description}</p>
          </div>
          <div
            className={`flex items-center justify-center bg-gradient-to-br ${style}`}
          >
            <h2 className={`p-2 font-serif text-6xl sm:p-0`}>{number}</h2>
          </div>
        </>
      ) : (
        <>
          <div
            className={`flex items-center justify-center bg-gradient-to-br ${style}`}
          >
            <h2 className={`p-2 font-serif text-6xl sm:p-0`}>{number}</h2>
          </div>
          <div className="bg-white p-8">
            <h1 className="mb-4 font-serif text-3xl">{title}</h1>
            <p className="leading-relaxed text-gray-600">{description}</p>
          </div>
        </>
      )}
    </article>
  )
}
