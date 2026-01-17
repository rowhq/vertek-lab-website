'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const helvetica = { fontFamily: 'Helvetica Neue, sans-serif' };

const process = [
  {
    number: '01',
    title: 'Descubrimiento',
    timeline: 'Día 1-2',
    subtitle: 'Entendemos tu visión',
    description: 'Análisis de requerimientos, entrevistas con stakeholders y definición clara del alcance.',
    details: ['Análisis de requisitos', 'Evaluación de viabilidad', 'Definición de alcance'],
  },
  {
    number: '02',
    title: 'Diseño y Construcción',
    timeline: 'Día 3-12',
    subtitle: 'Construimos con velocidad',
    description: 'Desarrollo estructurado con revisiones continuas y control de calidad integrado.',
    details: ['Arquitectura modular', 'Código production-ready', 'QA integrado'],
  },
  {
    number: '03',
    title: 'Despliegue y Soporte',
    timeline: 'Día 15',
    subtitle: 'Lanzamos y acompañamos',
    description: 'Implementación, documentación y soporte post-lanzamiento incluido.',
    details: ['Deploy a producción', 'Documentación técnica', '30 días de soporte'],
  },
];

const timelineSteps = [
  { label: 'Día 1-5', position: 0 },
  { label: 'Día 6-15', position: 50 },
  { label: 'Día 15', position: 100 },
];

const smoothEase = [0.22, 1, 0.36, 1];

// Panel Component with new Figma design
function Panel({ step, isActive }: { step: typeof process[0]; isActive: boolean }) {
  return (
    <div className="flex h-full w-screen shrink-0 items-center justify-center px-6 lg:px-16">
      <div className="flex w-full max-w-6xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-24">
        {/* Giant Number */}
        <motion.div
          className="flex items-center justify-center lg:justify-start"
          animate={{ opacity: isActive ? 1 : 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[180px] xl:text-[260px] leading-none"
            style={{
              ...helvetica,
              fontWeight: 100,
              color: 'black',
            }}
          >
            {step.number}/
          </span>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.2, x: 15 }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="flex flex-col gap-4"
        >
          {/* Subtitle - Purple */}
          <p
            className="text-base"
            style={{ ...helvetica, color: '#5D04F6' }}
          >
            {step.subtitle}
          </p>

          {/* Title */}
          <h3
            className="text-2xl text-black lg:text-[32px]"
            style={helvetica}
          >
            {step.title}
          </h3>

          {/* Timeline Badge */}
          <span
            className="inline-block w-fit rounded-full border px-4 py-2.5 text-base"
            style={{
              ...helvetica,
              borderColor: '#5D04F6',
              color: '#5D04F6',
            }}
          >
            {step.timeline}
          </span>

          {/* Description */}
          <p
            className="max-w-lg text-base leading-relaxed text-black"
            style={helvetica}
          >
            {step.description}
          </p>

          {/* Details Tags - Black pills */}
          <div className="flex flex-wrap gap-4 pt-2">
            {step.details.map((detail, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 5 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: smoothEase }}
                className="rounded-full bg-black px-4 py-2 text-base text-white"
                style={helvetica}
              >
                {detail}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Timeline Progress Indicator
function TimelineIndicator({ progress, activeIndex }: { progress: number; activeIndex: number }) {
  return (
    <div className="absolute bottom-8 left-0 right-0 px-8 lg:bottom-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        {/* Timeline Line with Dots */}
        <div className="relative flex items-center justify-between">
          {/* Background Line */}
          <div className="absolute left-3 right-3 top-1/2 h-px -translate-y-1/2" style={{ backgroundColor: '#D1D5DB' }} />

          {/* Progress Line */}
          <motion.div
            className="absolute left-3 top-1/2 h-px -translate-y-1/2"
            style={{
              backgroundColor: '#5D04F6',
              width: `${Math.min(progress * 100, 97)}%`
            }}
            transition={{ duration: 0.1 }}
          />

          {/* Dots */}
          {[0, 1, 2].map((i) => {
            const isReached = activeIndex >= i;
            const isCurrent = activeIndex === i;

            return (
              <motion.div
                key={i}
                className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white"
                style={{
                  borderColor: isReached ? '#5D04F6' : '#D1D5DB',
                }}
                animate={isCurrent ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={{ duration: 1, repeat: isCurrent ? Infinity : 0, repeatDelay: 0.5 }}
              >
                <div
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: isReached ? '#5D04F6' : '#D1D5DB',
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Labels */}
        <div className="mt-4 flex items-center justify-between">
          {timelineSteps.map((step, index) => (
            <p
              key={index}
              className="text-center text-base"
              style={{
                ...helvetica,
                color: activeIndex >= index ? '#5D04F6' : '#9CA3AF'
              }}
            >
              {step.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mobile Version
function MobileVersion() {
  return (
    <section id="how-we-work" className="bg-white px-4 py-14">
      <div className="mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col gap-4"
        >
          <p className="text-base text-black" style={helvetica}>
            Nuestro Proceso
          </p>
          <h2 className="text-4xl text-black md:text-5xl" style={helvetica}>
            Como Trabajamos
          </h2>
          <p className="text-xl text-black" style={helvetica}>
            Colaboramos con organizaciones construyendo sistemas de alto impacto.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="flex flex-col gap-12">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-6"
            >
              {/* Giant Number */}
              <div className="flex items-center">
                <span
                  className="text-[60px] sm:text-[70px] leading-none"
                  style={{
                    ...helvetica,
                    fontWeight: 100,
                  }}
                >
                  {step.number}/
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4">
                {/* Subtitle - Purple */}
                <p
                  className="text-base"
                  style={{ ...helvetica, color: '#5D04F6' }}
                >
                  {step.subtitle}
                </p>

                {/* Title */}
                <h3
                  className="text-2xl text-black"
                  style={helvetica}
                >
                  {step.title}
                </h3>

                {/* Timeline Badge */}
                <span
                  className="inline-block w-fit rounded-full border px-4 py-2.5 text-base"
                  style={{
                    ...helvetica,
                    borderColor: '#5D04F6',
                    color: '#5D04F6',
                  }}
                >
                  {step.timeline}
                </span>

                {/* Description */}
                <p
                  className="text-base leading-relaxed text-black"
                  style={helvetica}
                >
                  {step.description}
                </p>

                {/* Details Tags - Black pills */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {step.details.map((detail, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-black px-4 py-2 text-sm text-white"
                      style={helvetica}
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col gap-4"
        >
          {/* Timeline Line with Dots */}
          <div className="relative flex items-center justify-between px-2">
            {/* Line */}
            <div className="absolute left-4 right-4 top-1/2 h-px -translate-y-1/2" style={{ backgroundColor: '#D1D5DB' }} />

            {/* Dots */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white"
                style={{ borderColor: i === 0 ? '#5D04F6' : '#D1D5DB' }}
              >
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: i === 0 ? '#5D04F6' : '#D1D5DB' }}
                />
              </div>
            ))}
          </div>

          {/* Timeline Labels */}
          <div className="flex items-center justify-between">
            {timelineSteps.map((step, index) => (
              <p
                key={index}
                className="text-center text-sm"
                style={{ ...helvetica, color: '#5D04F6' }}
              >
                {step.label}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Desktop Horizontal Scroll Version
function HorizontalScrollVersion() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isSnappingRef = useRef(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-200%']);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Función para animar al snap más cercano
  const snapToNearestStep = (currentProgress: number) => {
    if (isSnappingRef.current || !containerRef.current) return;

    let targetProgress: number;
    if (currentProgress < 0.25) {
      targetProgress = 0;
    } else if (currentProgress < 0.75) {
      targetProgress = 0.5;
    } else {
      targetProgress = 1;
    }

    // Solo hacer snap si no estamos ya en la posición objetivo
    const threshold = 0.02;
    if (Math.abs(currentProgress - targetProgress) < threshold) return;

    // Calcular posición de scroll objetivo
    const container = containerRef.current;
    const scrollableHeight = container.offsetHeight - window.innerHeight;
    const targetScrollY = container.offsetTop + (scrollableHeight * targetProgress);

    isSnappingRef.current = true;
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });

    // Reset después de la animación
    setTimeout(() => {
      isSnappingRef.current = false;
    }, 500);
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setProgress(latest);

      // Actualizar índice activo
      if (latest < 0.25) {
        setActiveIndex(0);
      } else if (latest < 0.75) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }

      // Debounce para detectar fin de scroll y hacer snap
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (!isSnappingRef.current) {
        scrollTimeoutRef.current = setTimeout(() => {
          snapToNearestStep(latest);
        }, 150);
      }
    });

    return () => {
      unsubscribe();
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      id="how-we-work"
      className="relative bg-white"
      style={{ height: '300vh' }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 px-6 pt-[108px]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="flex flex-col gap-4"
          >
            <p className="text-base text-black" style={helvetica}>
              Nuestro Proceso
            </p>
            <h2 className="text-4xl text-black md:text-5xl" style={helvetica}>
              Como Trabajamos
            </h2>
            <p className="text-xl text-black" style={helvetica}>
              Colaboramos con organizaciones construyendo sistemas de alto impacto.
            </p>
          </motion.div>
        </div>

        {/* Horizontal scrolling panels */}
        <motion.div
          style={{ x }}
          className="flex flex-1 items-center pb-32 lg:pb-40 will-change-transform"
        >
          {process.map((step, index) => (
            <Panel
              key={index}
              step={step}
              isActive={activeIndex === index}
            />
          ))}
        </motion.div>

        {/* Timeline Progress Indicator */}
        <TimelineIndicator progress={progress} activeIndex={activeIndex} />

              </div>
    </section>
  );
}

// Main Component
export function HowWeWork() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) {
    return (
      <section id="how-we-work" className="bg-white px-4 py-14 lg:px-16">
        <div className="h-[600px]" />
      </section>
    );
  }

  return isMobile ? <MobileVersion /> : <HorizontalScrollVersion />;
}
