'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactSchema, type ContactFormData } from '@/lib/schemas';

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
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 border-b border-dashed border-line-dark pb-8">
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-secondary">04</span>
            <span className="text-xs font-medium uppercase tracking-wider text-secondary">
              Contact
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl font-medium tracking-tight text-black md:text-5xl"
          >
            Get in Touch
          </motion.h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-secondary lg:text-2xl">
              Have a system to build? Let&apos;s architect it together.
            </p>

            {/* Contact Info */}
            <div className="mt-12 space-y-6">
              <div className="border-b border-dashed border-line-dark pb-6">
                <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                  Email
                </span>
                <a href="mailto:contact@vertek.lab" className="mt-2 block text-lg font-medium text-black hover:text-accent">
                  contact@vertek.lab
                </a>
              </div>
              <div className="border-b border-dashed border-line-dark pb-6">
                <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                  Response Time
                </span>
                <p className="mt-2 text-lg text-black">Within 24 hours</p>
              </div>
              <div className="pb-6">
                <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                  Location
                </span>
                <p className="mt-2 text-lg text-black">Latin America & Global</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-xs font-medium uppercase tracking-wider text-secondary"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                placeholder="Your name"
                className="mt-2 w-full border-0 border-b border-line-dark bg-transparent py-3 text-black placeholder-secondary/50 transition-colors focus:border-accent focus:outline-none"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-xs font-medium uppercase tracking-wider text-secondary"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                placeholder="your@email.com"
                className="mt-2 w-full border-0 border-b border-line-dark bg-transparent py-3 text-black placeholder-secondary/50 transition-colors focus:border-accent focus:outline-none"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="text-xs font-medium uppercase tracking-wider text-secondary"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company"
                className="mt-2 w-full border-0 border-b border-line-dark bg-transparent py-3 text-black placeholder-secondary/50 transition-colors focus:border-accent focus:outline-none"
              />
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor="projectType"
                className="text-xs font-medium uppercase tracking-wider text-secondary"
              >
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="mt-2 w-full border-0 border-b border-line-dark bg-transparent py-3 text-black transition-colors focus:border-accent focus:outline-none"
              >
                <option value="mvp">MVP System (5-7 days, from $15k)</option>
                <option value="full">Full System (2-4 weeks, from $35k)</option>
                <option value="enterprise">Enterprise (Custom timeline & pricing)</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-wider text-secondary"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                placeholder="Tell us about your project..."
                className="mt-2 w-full border-0 border-b border-line-dark bg-transparent py-3 text-black placeholder-secondary/50 transition-colors focus:border-accent focus:outline-none"
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600" role="alert">
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
                className="mt-1 h-4 w-4 border-line-dark text-accent focus:ring-accent"
              />
              <label htmlFor="consent" className="text-sm text-secondary">
                I agree to be contacted by VERTEK.lab regarding my inquiry. *
              </label>
            </div>
            {errors.consent && (
              <p className="text-sm text-red-600" role="alert">
                {errors.consent}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-3 bg-black px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  Send Message
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <p className="border border-accent/30 bg-accent/10 p-4 text-center text-sm text-black" role="status">
                Thank you! We&apos;ll be in touch within 24 hours.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="border border-red-500/30 bg-red-500/10 p-4 text-center text-sm text-red-600" role="alert">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
