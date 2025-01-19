import { motion } from 'framer-motion'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

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
              <div class="relative">
                <div class="-mb-3 mt-4">
                  <div
                    class="not-prose relative overflow-hidden"
                    style={{ marginRight: '0px' }}
                  >
                    <div
                      class="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
                      style={{ backgroundPosition: '10px 10px;' }}
                    ></div>
                    <div class="relative overflow-auto rounded-xl p-8">
                      <iframe
                        class="aspect-video w-full rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen=""
                      ></iframe>
                    </div>
                    <div class="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
                  </div>
                </div>
                <div class="pointer-events-none absolute inset-y-0 left-80 right-[-1.375rem] ml-4">
                  <div
                    class="pointer-events-auto absolute right-0 top-1/2 -mt-6 hidden cursor-ew-resize p-2 md:block"
                    draggable="false"
                    style={{
                      transform: 'none',
                      userSelect: 'none',
                      touchAction: 'pan-y',
                      transformOrigin: '50% 50% 0px;',
                    }}
                  >
                    <div class="h-8 w-1.5 rounded-full bg-slate-500/60"></div>
                  </div>
                </div>
              </div>
              <div>
                <div class="relative">
                  <div class="-mb-3 mt-4">
                    <div
                      class="not-prose relative overflow-hidden"
                      style={{ marginRight: '0px' }}
                    >
                      <div
                        class="bg-grid-slate-100 dark:bg-grid-slate-700/25 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
                        style={{ backgroundPosition: '10px 10px;' }}
                      ></div>
                      <div class="relative overflow-auto rounded-xl p-8">
                        <iframe
                          class="aspect-video w-full rounded-lg shadow-lg"
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen=""
                        ></iframe>
                      </div>
                      <div class="pointer-events-none absolute inset-0 rounded-xl border border-black/5 dark:border-white/5"></div>
                    </div>
                  </div>
                  <div class="pointer-events-none absolute inset-y-0 left-80 right-[-1.375rem] ml-4">
                    <div
                      class="pointer-events-auto absolute right-0 top-1/2 -mt-6 hidden cursor-ew-resize p-2 md:block"
                      draggable="false"
                      style={{
                        transform: 'none',
                        userSelect: 'none',
                        touchAction: 'pan-y',
                        transformOrigin: '50% 50% 0px;',
                      }}
                    >
                      <div class="h-8 w-1.5 rounded-full bg-slate-500/60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
