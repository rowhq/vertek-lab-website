'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
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
    <Section id="contact">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left Column - Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl font-normal text-primary md:text-5xl lg:text-6xl">
            Have a system to <em className="italic">build</em>?
          </h2>
          <p className="mt-6 text-xl text-secondary">
            Let&apos;s architect it together.
          </p>

          {/* Contact Info */}
          <div className="mt-12 space-y-8">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                Email
              </span>
              <p className="mt-2 text-lg text-primary">contact@vertek.lab</p>
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                Response Time
              </span>
              <p className="mt-2 text-lg text-primary">Within 24 hours</p>
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                Location
              </span>
              <p className="mt-2 text-lg text-primary">Latin America & Global</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
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
              aria-describedby={errors.name ? 'name-error' : undefined}
              placeholder="Your name"
              className="mt-2 w-full border-0 border-b-2 border-line bg-transparent py-4 text-lg text-primary placeholder-secondary/50 transition-colors focus:border-accent focus:outline-none"
            />
            {errors.name && (
              <p
                id="name-error"
                className="mt-2 text-sm text-red-600"
                role="alert"
              >
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
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="your@email.com"
              className="mt-2 w-full border-0 border-b-2 border-line bg-transparent py-4 text-lg text-primary placeholder-secondary/50 transition-colors focus:border-accent focus:outline-none"
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-2 text-sm text-red-600"
                role="alert"
              >
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
              className="mt-2 w-full border-0 border-b-2 border-line bg-transparent py-4 text-lg text-primary placeholder-secondary/50 transition-colors focus:border-accent focus:outline-none"
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
              className="mt-2 w-full border-0 border-b-2 border-line bg-transparent py-4 text-lg text-primary transition-colors focus:border-accent focus:outline-none [&>option]:bg-bg-card [&>option]:text-primary"
            >
              <option value="mvp">MVP System (5-7 days, from $15k)</option>
              <option value="full">Full System (2-4 weeks, from $35k)</option>
              <option value="enterprise">
                Enterprise (Custom timeline & pricing)
              </option>
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
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Tell us about your project..."
              className="mt-2 w-full border-0 border-b-2 border-line bg-transparent py-4 text-lg text-primary placeholder-secondary/50 transition-colors focus:border-accent focus:outline-none"
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-2 text-sm text-red-600"
                role="alert"
              >
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
              className="mt-1 h-4 w-4 rounded border-line text-accent focus:ring-2 focus:ring-accent"
            />
            <label htmlFor="consent" className="text-sm text-secondary">
              I agree to be contacted by Vertek.lab regarding my inquiry. *
            </label>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-600" role="alert">
              {errors.consent}
            </p>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-5 w-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              <>
                Start a Build
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </>
            )}
          </motion.button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <p
              className="rounded-lg bg-accent/10 p-4 text-center text-accent"
              role="status"
            >
              Thank you! We&apos;ll be in touch soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p
              className="rounded-lg bg-red-500/10 p-4 text-center text-red-400"
              role="alert"
            >
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}
