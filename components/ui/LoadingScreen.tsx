'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Vertek Wordmark Animado - Efecto de llenado
function VertekWordmarkAnimated({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="wordmarkClip">
          <motion.rect
            x="0"
            width="120"
            height="40"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />
        </clipPath>
      </defs>

      {/* Capa 1: Contorno del texto */}
      <text
        x="0"
        y="30"
        fontSize="32"
        fontWeight="bold"
        fontFamily="system-ui, -apple-system, sans-serif"
        stroke="white"
        strokeWidth="0.5"
        strokeOpacity="0.3"
        fill="none"
      >
        vertek
      </text>

      {/* Capa 2: Relleno del texto (se revela con clipPath animado) */}
      <text
        x="0"
        y="30"
        fontSize="32"
        fontWeight="bold"
        fontFamily="system-ui, -apple-system, sans-serif"
        fill="white"
        clipPath="url(#wordmarkClip)"
      >
        vertek
      </text>
    </svg>
  );
}

// Vertek Isotipo Animado - Efecto de llenado
function VertekIsotipoAnimated({ className = '' }: { className?: string }) {
  const pathTop = "M39 16L20 16.0001V28.0001L27.3418 28C30.221 28 32.8781 29.5472 34.2993 32.0512L53 65C53 65 64.3295 44.8695 71.7007 32.0002C73.1213 29.5201 75.7607 28 78.6188 28H86V16H67L53 40.2487L39 16Z";
  const pathBottom = "M20 27.9999L8 28V40L13 39.9999L34.8667 78.2667C38.6594 84.9038 45.7176 88.9999 53.362 88.9999C61.1824 88.9999 68.4091 84.8309 72.299 78.0465C82.3805 60.4629 94 39.9999 94 39.9999L98 40V28L86 27.9999L60.4807 72.6587C58.9467 75.3432 56.0919 76.9999 53 76.9999C49.9081 76.9999 47.0533 75.3432 45.5193 72.6587L20 27.9999Z";

  return (
    <svg className={className} viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* ClipPath animado que sube de abajo hacia arriba */}
        <clipPath id="fillClip">
          <motion.rect
            x="0"
            width="105"
            height="105"
            initial={{ y: 105 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />
        </clipPath>
      </defs>

      {/* Capa 1: Contorno del logo (siempre visible) */}
      <g stroke="white" strokeWidth="1.5" strokeOpacity="0.3" fill="none">
        <path d={pathTop} />
        <path d={pathBottom} />
      </g>

      {/* Capa 2: Relleno del logo (se revela con clipPath animado) */}
      <g clipPath="url(#fillClip)" fill="white">
        <path d={pathTop} />
        <path d={pathBottom} />
      </g>
    </svg>
  );
}

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Verificar si ya se mostró en esta sesión
    const hasLoaded = sessionStorage.getItem('vertek-loaded');

    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Primera visita: mostrar loading y guardar flag
    setShouldShow(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('vertek-loaded', 'true');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // No renderizar nada si ya se cargó en esta sesión
  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-purple"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <VertekIsotipoAnimated className="h-16 w-16 text-white" />
            <VertekWordmarkAnimated className="h-10 w-auto" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
