import { motion } from 'framer-motion'
import Card from '../components/Card'

export default function CardsDisplayer() {
  const cards = [
    {
      id: 1,
      title: 'TIC',
      description:
        'Las TIC son las Tecnologías de la Información y Comunicación. Con su utilización se puede favorecer el alcanzar una educación de calidad, y eliminar las barreras que impiden el acercamiento de todas las personas al hecho educativo.',
      startingLeft: true,
      style: 'from-blue-50 to-blue-100 text-blue-800',
    },
    {
      id: 2,
      title: 'TAC',
      description:
        'Cuando las TIC se utilizan dentro de la educación pasan a ser Tecnologías para el aprendizaje y el conocimiento (TAC), un aspecto importante de estas es su capacidad para adaptar el contenido educativo a las necesidades individuales de los estudiantes.',
      startingLeft: false,
      style: 'from-green-50 to-green-100 text-green-800',
    },
    {
      id: 3,
      title: 'TEP',
      description:
        'Las TEP son la última etapa en la evolución, enfocándose en cómo las tecnologías pueden empoderar a los estudiantes y fomentar su participación activa en la sociedad. Mientras que las TIC facilitan la comunicación y las TAC mejoran el aprendizaje, las TEP buscan que los estudiantes utilicen su conocimiento para impactar en el mundo de manera positiva.',
      startingLeft: true,
      style: 'from-purple-50 to-purple-100 text-purple-800',
    },
  ]
  return (
    <section className="space-y-32">
      {cards.map((c) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card
            key={c.id}
            title={c.title}
            description={c.description}
            number={c.id}
            startingLeft={c.startingLeft}
            style={c.style}
          />
        </motion.div>
      ))}
    </section>
  )
}
