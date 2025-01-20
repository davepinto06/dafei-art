import { motion } from 'framer-motion'
import VideoDisplayer from './VideoDisplayer'

export default function InclusionExamples() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="overflow-hidden rounded border border-solid border-gray-300 bg-white p-8 shadow-sm">
          <h2 className="mb-6 font-serif text-3xl">Ejemplos de Inclusión</h2>
          <div className="space-y-6">
            <div className="rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 p-6">
              <h3 className="mb-2 text-xl font-medium">Autismo</h3>
              <p className="text-gray-600">
                Para favorecer a los alumnos con autismo se utilizan programas o
                aplicaciones que nos ayudan a crear pictogramas, estos se
                utilizan para crearles un canal efectivo de comunicación.
              </p>
            </div>
            <div className="rounded-lg bg-gradient-to-r from-teal-50 to-teal-100 p-6">
              <h3 className="mb-2 text-xl font-medium">Discapacidad Visual</h3>
              <p className="text-gray-600">
                Los alumnos con Discapacidad Visual se apoyan de programas que
                convierten el texto de la computadora, teléfono o tablet en voz,
                permitiéndoles navegar por interfaces digitales.
              </p>
            </div>
          </div>
          <div className="mt-8 space-y-6">
            <h3 className="mb-4 font-serif text-2xl">Videos Informativos</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <VideoDisplayer videoId="2tvFD1p5COw" />
              <VideoDisplayer videoId="z--eLW1hKp0" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
