'use client';

import { motion } from 'framer-motion';

const helvetica = { fontFamily: 'Helvetica Neue, sans-serif' };

// Startup Illustration - Simple growth curve with rocket
function StartupIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
      {/* Grid background */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`h-${i}`}
            x1="20" y1={40 + i * 35}
            x2="180" y2={40 + i * 35}
            stroke="black" strokeWidth="0.5" strokeOpacity="0.05"
          />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`v-${i}`}
            x1={40 + i * 35} y1="20"
            x2={40 + i * 35} y2="180"
            stroke="black" strokeWidth="0.5" strokeOpacity="0.05"
          />
        ))}
      </motion.g>

      {/* Axes */}
      <motion.line
        x1="30" y1="170" x2="30" y2="30"
        stroke="black" strokeWidth="1" strokeOpacity="0.15"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      <motion.line
        x1="30" y1="170" x2="180" y2="170"
        stroke="black" strokeWidth="1" strokeOpacity="0.15"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />

      {/* Growth curve area */}
      <motion.path
        d="M 30 170 Q 80 160 100 130 Q 130 80 155 50 L 155 170 Z"
        fill="#5D04F6" fillOpacity="0.08"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Growth curve line */}
      <motion.path
        d="M 30 170 Q 80 160 100 130 Q 130 80 155 50"
        stroke="#5D04F6" strokeWidth="1" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />

      {/* Milestone points */}
      {[
        { cx: 65, cy: 158, delay: 0.6 },
        { cx: 100, cy: 130, delay: 0.8 },
        { cx: 130, cy: 85, delay: 1.0 },
      ].map((point, i) => (
        <motion.g key={`point-${i}`}>
          <motion.circle
            cx={point.cx} cy={point.cy} r="6"
            fill="white" stroke="#5D04F6" strokeWidth="1"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: point.delay }}
          />
          <motion.circle
            cx={point.cx} cy={point.cy} r="2.5"
            fill="#5D04F6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: point.delay + 0.1 }}
          />
        </motion.g>
      ))}

      {/* Rocket at curve end */}
      <motion.g
        initial={{ x: -30, y: 30, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <g transform="translate(155, 50) rotate(45)">
          {/* Rocket body */}
          <path
            d="M -8 20 L -8 5 Q -8 -5 0 -15 Q 8 -5 8 5 L 8 20 Z"
            stroke="black" strokeWidth="1" fill="white"
          />
          {/* Window */}
          <circle cx="0" cy="5" r="4" stroke="#5D04F6" strokeWidth="1" fill="none" />
          {/* Fins */}
          <path d="M -8 15 L -14 22 L -8 20 Z" stroke="black" strokeWidth="1" fill="white" />
          <path d="M 8 15 L 14 22 L 8 20 Z" stroke="black" strokeWidth="1" fill="white" />
          {/* Flame - animated */}
          <motion.path
            d="M -5 20 Q 0 35 0 20 Q 0 35 5 20"
            fill="#5D04F6"
            animate={{ d: ["M -5 20 Q 0 32 0 20 Q 0 32 5 20", "M -6 20 Q 0 40 0 20 Q 0 40 6 20", "M -5 20 Q 0 32 0 20 Q 0 32 5 20"] }}
            transition={{ duration: 0.4, repeat: Infinity }}
          />
        </g>
      </motion.g>

      {/* Pulse at rocket */}
      <motion.circle
        cx="155" cy="50" r="10"
        stroke="#5D04F6" strokeWidth="1" fill="none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 2.5, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
      />

      {/* Labels */}
      <motion.text
        x="35" y="185" fontSize="9" fill="black" fillOpacity="0.6" style={helvetica}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      >
        MVP
      </motion.text>
      <motion.text
        x="155" y="35" fontSize="9" fill="#5D04F6" fontWeight="600" style={helvetica}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4 }}
      >
        SCALE
      </motion.text>
    </svg>
  );
}

// Scaleup Illustration - Simple bar chart with trend
function ScaleupIllustration() {
  const bars = [
    { x: 35, h: 30 },
    { x: 65, h: 55 },
    { x: 95, h: 85 },
    { x: 125, h: 120 },
    { x: 155, h: 140 },
  ];

  return (
    <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
      {/* Grid */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {[0, 1, 2, 3].map((i) => (
          <line
            key={`grid-${i}`}
            x1="25" y1={50 + i * 40}
            x2="185" y2={50 + i * 40}
            stroke="black" strokeWidth="0.5" strokeOpacity="0.05"
            strokeDasharray="4 4"
          />
        ))}
      </motion.g>

      {/* Axes */}
      <motion.line
        x1="25" y1="170" x2="25" y2="30"
        stroke="black" strokeWidth="1" strokeOpacity="0.15"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      />
      <motion.line
        x1="25" y1="170" x2="185" y2="170"
        stroke="black" strokeWidth="1" strokeOpacity="0.15"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />

      {/* Bars */}
      {bars.map((bar, i) => (
        <motion.g key={`bar-${i}`}>
          <motion.rect
            x={bar.x} y={170 - bar.h}
            width="20" height={bar.h}
            fill="#5D04F6" fillOpacity={i === bars.length - 1 ? 0.2 : 0.1}
            stroke={i === bars.length - 1 ? "#5D04F6" : "black"}
            strokeWidth="1"
            strokeOpacity={i === bars.length - 1 ? 0.8 : 0.2}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            style={{ transformOrigin: `${bar.x + 10}px 170px` }}
          />
        </motion.g>
      ))}

      {/* Trend line */}
      <motion.path
        d="M 45 145 L 75 115 L 105 85 L 135 55 L 165 35"
        stroke="#5D04F6" strokeWidth="1" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      />

      {/* Data points on trend */}
      {[
        { cx: 45, cy: 145, delay: 0.9 },
        { cx: 75, cy: 115, delay: 1.0 },
        { cx: 105, cy: 85, delay: 1.1 },
        { cx: 135, cy: 55, delay: 1.2 },
        { cx: 165, cy: 35, delay: 1.3 },
      ].map((point, i) => (
        <motion.circle
          key={`dp-${i}`}
          cx={point.cx} cy={point.cy} r="4"
          fill="white" stroke="#5D04F6" strokeWidth="1"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: point.delay }}
        />
      ))}

      {/* Growth badge */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5 }}
      >
        <rect x="130" y="5" width="55" height="22" rx="4" fill="#5D04F6" fillOpacity="0.1" />
        <text x="157" y="20" textAnchor="middle" fontSize="11" fontWeight="600" fill="#5D04F6" style={helvetica}>
          +340%
        </text>
      </motion.g>

      {/* Pulse at top point */}
      <motion.circle
        cx="165" cy="35" r="8"
        stroke="#5D04F6" strokeWidth="1" fill="none"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 2.5, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
    </svg>
  );
}

// Enterprise Illustration - Simple hub and nodes network
function EnterpriseIllustration() {
  const nodes = [
    { cx: 100, cy: 55, label: 'CLOUD' },
    { cx: 155, cy: 85, label: 'API' },
    { cx: 155, cy: 145, label: 'AI' },
    { cx: 100, cy: 175, label: 'DATA' },
    { cx: 45, cy: 145, label: 'ERP' },
    { cx: 45, cy: 85, label: 'CRM' },
  ];

  return (
    <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
      {/* Background circles */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <circle cx="100" cy="115" r="40" stroke="black" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="115" r="70" stroke="black" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
      </motion.g>

      {/* Connections to center */}
      {nodes.map((node, i) => (
        <motion.line
          key={`conn-${i}`}
          x1="100" y1="115"
          x2={node.cx} y2={node.cy}
          stroke="#5D04F6" strokeWidth="1" strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
        />
      ))}

      {/* Data particles - flowing to center */}
      {nodes.map((node, i) => (
        <motion.circle
          key={`particle-${i}`}
          r="3"
          fill="#5D04F6"
          initial={{ cx: node.cx, cy: node.cy, opacity: 0 }}
          animate={{
            cx: [node.cx, 100],
            cy: [node.cy, 115],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 1.5,
            delay: 1.5 + i * 0.3,
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
      ))}

      {/* Satellite nodes */}
      {nodes.map((node, i) => (
        <motion.g key={`node-${i}`}>
          <motion.circle
            cx={node.cx} cy={node.cy} r="18"
            fill="white" stroke="#5D04F6" strokeWidth="1"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
          />
          <motion.text
            x={node.cx} y={node.cy + 3}
            textAnchor="middle" fontSize="7" fontWeight="600" fill="#5D04F6" style={helvetica}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.08 }}
          >
            {node.label}
          </motion.text>
        </motion.g>
      ))}

      {/* Central hub */}
      <motion.g>
        {/* Pulse rings */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx="100" cy="115" r="25"
            stroke="#5D04F6" strokeWidth="1" fill="none"
            initial={{ scale: 1, opacity: 0.3 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 2, delay: i * 0.6, repeat: Infinity }}
          />
        ))}

        {/* Outer glow */}
        <motion.circle
          cx="100" cy="115" r="30"
          fill="#5D04F6" fillOpacity="0.1"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />

        {/* Main hub */}
        <motion.circle
          cx="100" cy="115" r="25"
          fill="white" stroke="#5D04F6" strokeWidth="1"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        />

        {/* Label */}
        <motion.text
          x="100" y="118" textAnchor="middle" fontSize="8" fontWeight="700" fill="#5D04F6" style={helvetica}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          CORE
        </motion.text>
      </motion.g>
    </svg>
  );
}

const clientTypes = [
  {
    id: '001',
    title: 'Empresas emergentes',
    description: 'Al empoderar a las nuevas empresas con desarrollo ágil y soluciones rentables, nos destacamos en pensamiento de producto, creación rápida de prototipos, desarrollo de MVP y soluciones integrales móviles y SaaS.',
    Illustration: StartupIllustration,
  },
  {
    id: '002',
    title: 'Empresas en crecimiento',
    description: 'Ayudamos a empresas en expansión a escalar su tecnología de manera eficiente, optimizando procesos, integrando sistemas y construyendo infraestructura robusta para soportar el crecimiento acelerado.',
    Illustration: ScaleupIllustration,
  },
  {
    id: '003',
    title: 'Corporativos',
    description: 'Transformamos operaciones enterprise con soluciones AI-first, integraciones con sistemas legacy como SAP y Oracle, y arquitecturas escalables que modernizan sin disrumpir el negocio.',
    Illustration: EnterpriseIllustration,
  },
];

export function ClientTypes() {
  return (
    <section id="client-types" className="bg-[#F5F5F5] px-4 py-14 lg:px-16">
      <div className="mx-auto w-full">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4">
          <div className="flex items-center gap-8">
            <span
              className="text-base text-black/30"
              style={{ ...helvetica, fontWeight: 200 }}
            >
              /
            </span>
            <span
              className="text-sm uppercase tracking-wider text-black/50"
              style={helvetica}
            >
              Nuestros Clientes
            </span>
          </div>
          <h2
            className="text-3xl text-black lg:text-4xl"
            style={{ ...helvetica, fontWeight: 500 }}
          >
            Nos relacionamos con:
          </h2>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col"
              style={{ backgroundColor: 'white' }}
            >
              {/* Illustration */}
              <div className="relative aspect-[4/3] w-full overflow-hidden p-4">
                <span
                  className="absolute left-4 top-4 z-10 text-sm text-black/50"
                  style={helvetica}
                >
                  /{client.id}
                </span>
                <client.Illustration />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                {/* Title */}
                <h3
                  className="mb-4 text-xl text-black lg:text-2xl"
                  style={{ ...helvetica, fontWeight: 500 }}
                >
                  {client.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-6 flex-1 text-sm leading-relaxed text-black/70 lg:text-base"
                  style={helvetica}
                >
                  {client.description}
                </p>

                {/* CTA Button - Chamfered corners */}
                <a
                  href="/contacto"
                  className="group relative mt-4 h-[48px] w-[220px] transition-all"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 220 48"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.5 0.5H211.5L219.5 8.5V47.5H8.5L0.5 39.5V0.5Z"
                      className="fill-white stroke-black transition-all group-hover:fill-[#5D04F6] group-hover:stroke-[#5D04F6]"
                      strokeWidth="1"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center gap-2">
                    <span
                      className="text-sm text-black transition-colors group-hover:text-white"
                      style={helvetica}
                    >
                      Construye con nosotros
                    </span>
                    <span className="text-black transition-colors group-hover:text-white">→</span>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
