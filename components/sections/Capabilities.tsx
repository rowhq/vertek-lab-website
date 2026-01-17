'use client';

import { motion } from 'framer-motion';

// Animated Graphic: Product Design - Iteración y Evolución (diagonal)
function ProductDesignGraphic() {
  // 4 etapas en diagonal: abajo-izquierda → arriba-derecha (dentro del marco 20-180)
  const stages = [
    { x: 45, y: 160 },   // 1. Punto (idea)
    { x: 72, y: 128 },   // 2. Círculo (concepto)
    { x: 100, y: 96 },   // 3. Wireframe
    { x: 132, y: 62 },   // 4. Producto final (más adentro)
  ];

  return (
    <div className="flex h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[250px] md:w-[250px] lg:h-[280px] lg:w-[280px] items-center justify-center">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        {/* Marco */}
        <motion.rect
          x="20" y="20" width="160" height="160"
          stroke="black" strokeWidth="1" strokeOpacity="0.1" fill="none" rx="2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        />

        {/* Línea de progreso diagonal */}
        <motion.line
          x1={stages[0].x} y1={stages[0].y} x2={stages[3].x} y2={stages[3].y}
          stroke="black" strokeWidth="1" strokeOpacity="0.1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Flechas de iteración en diagonal */}
        {[0, 1, 2].map((i) => {
          const x = 55 + i * 35;
          const y = 150 - i * 35;
          return (
            <motion.path
              key={`arrow-${i}`}
              d={`M ${x - 3} ${y + 3} L ${x + 3} ${y - 3} M ${x + 1} ${y - 5} L ${x + 4} ${y - 2} L ${x + 1} ${y + 1}`}
              stroke="#5D04F6" strokeWidth="1" strokeOpacity="0.4" fill="none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
            />
          );
        })}

        {/* Etapa 1: Punto simple (idea inicial) */}
        <motion.circle
          cx={stages[0].x} cy={stages[0].y} r="6"
          fill="black" fillOpacity="0.25"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        />

        {/* Etapa 2: Círculo (concepto básico) */}
        <motion.circle
          cx={stages[1].x} cy={stages[1].y} r="18"
          stroke="black" strokeWidth="1" strokeOpacity="0.2" fill="none"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
        />
        <motion.circle
          cx={stages[1].x} cy={stages[1].y} r="6"
          fill="black" fillOpacity="0.15"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.55 }}
        />

        {/* Etapa 3: Cuadrado con estructura (wireframe) - reducido a 30x30 */}
        <motion.rect
          x={stages[2].x - 15} y={stages[2].y - 15} width="30" height="30"
          stroke="#5D04F6" strokeWidth="1" strokeOpacity="0.5" fill="none"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.7 }}
        />
        <motion.line
          x1={stages[2].x - 15} y1={stages[2].y - 5} x2={stages[2].x + 15} y2={stages[2].y - 5}
          stroke="#5D04F6" strokeWidth="1" strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.8 }}
        />
        <motion.line
          x1={stages[2].x} y1={stages[2].y - 15} x2={stages[2].x} y2={stages[2].y + 15}
          stroke="#5D04F6" strokeWidth="1" strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.85 }}
        />

        {/* Etapa 4: Forma final refinada (producto) - 34x34 */}
        <motion.rect
          x={stages[3].x - 17} y={stages[3].y - 17} width="34" height="34"
          stroke="#5D04F6" strokeWidth="1" fill="#5D04F6" fillOpacity="0.1" rx="3"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.9 }}
        />
        <motion.rect
          x={stages[3].x - 12} y={stages[3].y - 11} width="24" height="6"
          fill="#5D04F6" fillOpacity="0.3" rx="1"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 1 }}
        />
        <motion.rect
          x={stages[3].x - 12} y={stages[3].y - 1} width="16" height="5"
          fill="#5D04F6" fillOpacity="0.2" rx="1"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 1.05 }}
        />
        <motion.rect
          x={stages[3].x - 12} y={stages[3].y + 7} width="10" height="5"
          fill="#5D04F6" rx="1"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 1.1 }}
        />

        {/* Partícula animada recorriendo el proceso diagonal */}
        <motion.circle
          r="4"
          fill="#5D04F6"
          initial={{ cx: stages[0].x, cy: stages[0].y, opacity: 0 }}
          animate={{
            cx: [stages[0].x, stages[1].x, stages[2].x, stages[3].x, stages[3].x],
            cy: [stages[0].y, stages[1].y, stages[2].y, stages[3].y, stages[3].y],
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{
            duration: 3,
            delay: 2,
            repeat: Infinity,
            repeatDelay: 2
          }}
        />

        {/* Pulso sutil en el producto final */}
        <motion.rect
          x={stages[3].x - 17} y={stages[3].y - 17} width="34" height="34"
          stroke="#5D04F6" strokeWidth="1" fill="none" rx="3"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>
    </div>
  );
}

// Animated Graphic: Software Development - Flujo Modular Abstracto
function SoftwareDevGraphic() {
  const nodes = [
    { x: 100, y: 100, isCenter: true },
    { x: 50, y: 50 },
    { x: 150, y: 50 },
    { x: 50, y: 150 },
    { x: 150, y: 150 },
    { x: 100, y: 35 },
    { x: 100, y: 165 },
  ];

  return (
    <div className="flex h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[250px] md:w-[250px] lg:h-[280px] lg:w-[280px] items-center justify-center">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        {/* Marco */}
        <motion.rect
          x="20" y="20" width="160" height="160"
          stroke="black" strokeWidth="1" strokeOpacity="0.1" fill="none" rx="2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        />

        {/* Conexiones desde el centro */}
        {nodes.slice(1).map((node, i) => (
          <motion.line
            key={`conn-${i}`}
            x1="100" y1="100"
            x2={node.x} y2={node.y}
            stroke="#5D04F6" strokeWidth="1" strokeOpacity="0.2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
          />
        ))}

        {/* Conexiones entre nodos externos */}
        <motion.line x1="50" y1="50" x2="150" y2="50" stroke="black" strokeWidth="1" strokeOpacity="0.08"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.6 }} />
        <motion.line x1="50" y1="150" x2="150" y2="150" stroke="black" strokeWidth="1" strokeOpacity="0.08"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.65 }} />
        <motion.line x1="50" y1="50" x2="50" y2="150" stroke="black" strokeWidth="1" strokeOpacity="0.08"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.7 }} />
        <motion.line x1="150" y1="50" x2="150" y2="150" stroke="black" strokeWidth="1" strokeOpacity="0.08"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.75 }} />

        {/* Nodo central */}
        <motion.circle
          cx="100" cy="100" r="20"
          stroke="#5D04F6" strokeWidth="1" fill="#5D04F6" fillOpacity="0.1"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
        <motion.circle
          cx="100" cy="100" r="6"
          fill="#5D04F6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />

        {/* Nodos externos */}
        {nodes.slice(1).map((node, i) => (
          <motion.g key={`node-${i}`}>
            <motion.circle
              cx={node.x} cy={node.y} r="14"
              stroke="black" strokeWidth="1" strokeOpacity="0.15" fill="white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
            />
            <motion.circle
              cx={node.x} cy={node.y} r="4"
              fill="black" fillOpacity="0.2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.35 + i * 0.05 }}
            />
          </motion.g>
        ))}

        {/* Partículas animadas fluyendo hacia el centro */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={`particle-${i}`}
            r="2"
            fill="#5D04F6"
            initial={{ cx: nodes[i + 1].x, cy: nodes[i + 1].y, opacity: 0 }}
            animate={{
              cx: [nodes[i + 1].x, 100],
              cy: [nodes[i + 1].y, 100],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2,
              delay: 1 + i * 0.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}

        {/* Pulso central */}
        <motion.circle
          cx="100" cy="100" r="20"
          stroke="#5D04F6" strokeWidth="1" fill="none"
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>
    </div>
  );
}

// Animated Graphic: AI - Pulso Neural Abstracto
function AIGraphic() {
  const orbitalAngles = [0, 60, 120, 180, 240, 300];

  return (
    <div className="flex h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[250px] md:w-[250px] lg:h-[280px] lg:w-[280px] items-center justify-center">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        {/* Marco */}
        <motion.rect
          x="20" y="20" width="160" height="160"
          stroke="black" strokeWidth="1" strokeOpacity="0.1" fill="none" rx="2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        />

        {/* Círculos concéntricos estáticos */}
        {[25, 45, 65].map((r, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx="100" cy="100" r={r}
            stroke="#5D04F6" strokeWidth="1" strokeOpacity={0.08 + i * 0.04} fill="none"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
          />
        ))}

        {/* Líneas radiales sutiles */}
        {orbitalAngles.map((angle, i) => (
          <motion.line
            key={`radial-${i}`}
            x1="100" y1="100"
            x2={100 + 75 * Math.cos(angle * Math.PI / 180)}
            y2={100 + 75 * Math.sin(angle * Math.PI / 180)}
            stroke="black" strokeWidth="1" strokeOpacity="0.05"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
          />
        ))}

        {/* Puntos orbitales */}
        {orbitalAngles.map((angle, i) => (
          <motion.circle
            key={`orbital-${i}`}
            cx={100 + 55 * Math.cos(angle * Math.PI / 180)}
            cy={100 + 55 * Math.sin(angle * Math.PI / 180)}
            r="6"
            stroke="#5D04F6" strokeWidth="1" strokeOpacity="0.4" fill="white"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
          />
        ))}

        {/* Conexiones entre puntos orbitales adyacentes */}
        {orbitalAngles.map((angle, i) => {
          const nextAngle = orbitalAngles[(i + 1) % orbitalAngles.length];
          return (
            <motion.line
              key={`conn-${i}`}
              x1={100 + 55 * Math.cos(angle * Math.PI / 180)}
              y1={100 + 55 * Math.sin(angle * Math.PI / 180)}
              x2={100 + 55 * Math.cos(nextAngle * Math.PI / 180)}
              y2={100 + 55 * Math.sin(nextAngle * Math.PI / 180)}
              stroke="#5D04F6" strokeWidth="1" strokeOpacity="0.15"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.03 }}
            />
          );
        })}

        {/* Centro - círculo principal */}
        <motion.circle
          cx="100" cy="100" r="18"
          stroke="#5D04F6" strokeWidth="1" fill="#5D04F6" fillOpacity="0.1"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />

        {/* Centro - núcleo */}
        <motion.circle
          cx="100" cy="100" r="8"
          fill="#5D04F6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        />

        {/* Pulsos expandiéndose desde el centro */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx="100" cy="100" r="18"
            stroke="#5D04F6" strokeWidth="1" fill="none"
            initial={{ scale: 1, opacity: 0.4 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 3, delay: i * 1, repeat: Infinity }}
          />
        ))}

        {/* Partículas orbitando */}
        {[0, 1].map((i) => (
          <motion.circle
            key={`orbit-particle-${i}`}
            r="3"
            fill="#5D04F6"
            initial={{ opacity: 0 }}
            animate={{
              cx: orbitalAngles.map(a => 100 + 55 * Math.cos((a + i * 180) * Math.PI / 180)),
              cy: orbitalAngles.map(a => 100 + 55 * Math.sin((a + i * 180) * Math.PI / 180)),
              opacity: [0, 1, 1, 1, 1, 1, 0]
            }}
            transition={{ duration: 6, delay: 1.5 + i * 3, repeat: Infinity }}
          />
        ))}
      </svg>
    </div>
  );
}

// Map of graphics by service index
const serviceGraphics = [
  ProductDesignGraphic,
  SoftwareDevGraphic,
  AIGraphic,
];

const capabilities = [
  {
    id: 'diseno-producto',
    number: '01/',
    title: 'Diseño de producto',
    subtitle: 'De idea a prototipo validado',
    description:
      'De idea a prototipo validado en días. Investigación, UX/UI y sistemas de diseño que aceleran tu desarrollo.',
    features: ['Product Strategy', 'UX Research', 'UI Design', 'Prototyping', 'Design Systems'],
  },
  {
    id: 'desarrollo-software',
    number: '02/',
    title: 'Desarrollo de Software',
    subtitle: 'MVPs y plataformas a velocidad récord',
    description:
      'Web apps, mobile, SaaS y marketplaces. Desarrollo acelerado con IA y automatización.',
    features: ['MVPs', 'Landing pages', 'Web apps', 'Mobile Apps', 'Marketplaces', 'SaaS'],
  },
  {
    id: 'inteligencia-artificial',
    number: '03/',
    title: 'Inteligencia Artificial',
    subtitle: 'IA integrada en tu producto',
    description:
      'Integración de LLMs, agentes, automatización y flujos inteligentes.',
    features: ['LLM Integration', 'AI Agents', 'Automation', 'Custom AI'],
  },
];

export function Capabilities() {
  return (
    <section id="build" className="bg-white px-4 pt-[8.5rem] pb-14 lg:px-16">
      <div className="mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col gap-4"
        >
          <p className="text-base text-black">Nuestros Servicios</p>
          <h2 className="text-4xl text-black md:text-5xl">Nuestros Servicios</h2>
          <p className="text-xl text-black">
            Colaboramos con organizaciones construyendo sistemas de alto impacto.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-px w-full bg-black/10" />

        {/* Services List */}
        <div className="flex flex-col">
          {capabilities.map((capability, index) => {
            const GraphicComponent = serviceGraphics[index];

            return (
              <motion.div
                key={capability.number}
                id={capability.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Service Item */}
                <div className="flex flex-col gap-8 py-8 lg:flex-row lg:items-center lg:gap-14">
                  {/* Left Content */}
                  <div className="flex flex-1 flex-col gap-6">
                    {/* Top Row: Info + Tags */}
                    <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
                      {/* Service Info */}
                      <div className="flex flex-1 flex-col gap-4">
                        {/* Subtitle */}
                        <p className="text-base text-purple">{capability.subtitle}</p>

                        {/* Number + Title */}
                        <div className="flex items-start gap-4 text-3xl text-black">
                          <span>{capability.number}</span>
                          <span>{capability.title}</span>
                        </div>

                        {/* Description */}
                        <p className="text-base leading-relaxed text-black">
                          {capability.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-1 flex-wrap content-start gap-4">
                        {capability.features.map((feature, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-black px-3 py-2 text-base text-black"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button - Chamfered corners */}
                    <a
                      href="/contacto"
                      className="group relative h-[56px] w-[195px] transition-all"
                    >
                      {/* SVG with chamfered top-right and bottom-left corners */}
                      <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 195 56"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0.5 0.5H186.5L194.5 8.5V55.5H8.5L0.5 47.5V0.5Z"
                          className="fill-white stroke-black transition-all group-hover:fill-purple group-hover:stroke-purple"
                          strokeWidth="1"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center gap-3">
                        <span className="text-base text-black transition-colors group-hover:text-white">Conversemos</span>
                        <span className="text-black transition-colors group-hover:text-white">→</span>
                      </div>
                    </a>
                  </div>

                  {/* Right: Animated Graphic */}
                  <GraphicComponent />
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-black/10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
