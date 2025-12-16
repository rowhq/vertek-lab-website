import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(80, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(120, 'Company name is too long')
    .optional()
    .or(z.literal('')),
  projectType: z.enum(['mvp', 'full', 'enterprise'], {
    required_error: 'Please select a project type',
  }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message is too long'),
  consent: z.boolean().refine((val) => val === true, 'You must accept to continue'),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
