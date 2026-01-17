'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactSchema, type ContactFormData } from '@/lib/schemas';

const helvetica = { fontFamily: 'Helvetica Neue, sans-serif' };

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'mvp',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const validatedData = ContactSchema.parse(formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'mvp',
        message: '',
        consent: false,
      });
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'errors' in error &&
        Array.isArray((error as { errors: unknown[] }).errors)
      ) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        (error as { errors: { path: string[]; message: string }[] }).errors.forEach(
          (err) => {
            if (err.path[0]) {
              fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
            }
          }
        );
        setErrors(fieldErrors);
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-white px-4 pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 lg:px-16 lg:pt-48">
      <div className="mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p
            className="text-base text-black/50"
            style={helvetica}
          >
            Contacto
          </p>
          <h1
            className="mt-2 text-4xl text-black md:text-5xl lg:text-6xl"
            style={{ ...helvetica, fontWeight: 500 }}
          >
            Hablemos de tu Proyecto
          </h1>
        </motion.div>

        {/* Divider */}
        <div className="mb-12 h-px w-full bg-black/10" />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p
              className="text-xl text-black/70 lg:text-2xl"
              style={helvetica}
            >
              ¿Tienes un proyecto en mente? Conversemos sobre cómo podemos colaborar.
            </p>

            {/* Contact Info */}
            <div className="mt-12 space-y-6">
              <div className="border-b border-black/10 pb-6">
                <span
                  className="text-sm uppercase tracking-wider text-black/50"
                  style={helvetica}
                >
                  Correo
                </span>
                <a
                  href="mailto:contact@vertek.lab"
                  className="mt-2 block text-lg text-black transition-colors hover:text-[#5D04F6]"
                  style={{ ...helvetica, fontWeight: 500 }}
                >
                  contact@vertek.lab
                </a>
              </div>
              <div className="border-b border-black/10 pb-6">
                <span
                  className="text-sm uppercase tracking-wider text-black/50"
                  style={helvetica}
                >
                  Tiempo de Respuesta
                </span>
                <p
                  className="mt-2 text-lg text-black"
                  style={helvetica}
                >
                  En menos de 24 horas
                </p>
              </div>
              <div className="pb-6">
                <span
                  className="text-sm uppercase tracking-wider text-black/50"
                  style={helvetica}
                >
                  Ubicación
                </span>
                <p
                  className="mt-2 text-lg text-black"
                  style={helvetica}
                >
                  Latinoamérica y Global
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-sm uppercase tracking-wider text-black/50"
                style={helvetica}
              >
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                placeholder="Tu nombre"
                className="mt-2 w-full border-0 border-b border-black/10 bg-transparent py-4 sm:py-3 text-base text-black placeholder-black/30 transition-colors focus:border-[#5D04F6] focus:outline-none"
                style={helvetica}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600" role="alert" style={helvetica}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-sm uppercase tracking-wider text-black/50"
                style={helvetica}
              >
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                placeholder="tu@correo.com"
                className="mt-2 w-full border-0 border-b border-black/10 bg-transparent py-4 sm:py-3 text-base text-black placeholder-black/30 transition-colors focus:border-[#5D04F6] focus:outline-none"
                style={helvetica}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600" role="alert" style={helvetica}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="text-sm uppercase tracking-wider text-black/50"
                style={helvetica}
              >
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Tu empresa"
                className="mt-2 w-full border-0 border-b border-black/10 bg-transparent py-4 sm:py-3 text-base text-black placeholder-black/30 transition-colors focus:border-[#5D04F6] focus:outline-none"
                style={helvetica}
              />
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor="projectType"
                className="text-sm uppercase tracking-wider text-black/50"
                style={helvetica}
              >
                Tipo de Proyecto *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="mt-2 w-full border-0 border-b border-black/10 bg-transparent py-4 sm:py-3 text-base text-black transition-colors focus:border-[#5D04F6] focus:outline-none"
                style={helvetica}
              >
                <option value="mvp">Sistema MVP (5-7 días)</option>
                <option value="full">Sistema Completo (2-4 semanas)</option>
                <option value="enterprise">Solución Empresarial</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="text-sm uppercase tracking-wider text-black/50"
                style={helvetica}
              >
                Cuéntanos sobre tu proyecto *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                placeholder="Cuéntanos sobre tu proyecto..."
                className="mt-2 w-full border-0 border-b border-black/10 bg-transparent py-4 sm:py-3 text-base text-black placeholder-black/30 transition-colors focus:border-[#5D04F6] focus:outline-none"
                style={helvetica}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600" role="alert" style={helvetica}>
                  {errors.message}
                </p>
              )}
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-5 w-5 cursor-pointer accent-[#5D04F6]"
              />
              <label
                htmlFor="consent"
                className="text-sm sm:text-sm text-black/60 cursor-pointer"
                style={helvetica}
              >
                Acepto ser contactado por VERTEK.lab respecto a mi consulta. *
              </label>
            </div>
            {errors.consent && (
              <p className="text-sm text-red-600" role="alert" style={helvetica}>
                {errors.consent}
              </p>
            )}

            {/* Submit Button - Chamfered corners */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative mt-4 h-[56px] w-full transition-all disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 56"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.5 0.5H391.5L399.5 8.5V55.5H8.5L0.5 47.5V0.5Z"
                  className="fill-black stroke-black transition-all group-hover:fill-[#5D04F6] group-hover:stroke-[#5D04F6]"
                  strokeWidth="1"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2 text-white" style={helvetica}>
                    <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <>
                    <span className="text-base text-white" style={helvetica}>Enviar mensaje</span>
                    <span className="text-white">→</span>
                  </>
                )}
              </div>
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <p
                className="border border-[#5D04F6]/30 bg-[#5D04F6]/10 p-4 text-center text-sm text-black"
                role="status"
                style={helvetica}
              >
                Mensaje recibido. Te contactaremos en menos de 24 horas.
              </p>
            )}
            {submitStatus === 'error' && (
              <p
                className="border border-red-500/30 bg-red-500/10 p-4 text-center text-sm text-red-600"
                role="alert"
                style={helvetica}
              >
                Algo salió mal. Por favor, intenta de nuevo.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
