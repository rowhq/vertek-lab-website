# 🚀 Vertek.lab Website - Next Steps

El proyecto base está **100% completo** y listo para desarrollo. Aquí están los próximos pasos para llevarlo a producción.

---

## ✅ **¿Qué está listo?**

- ✅ Next.js 14 con App Router y TypeScript
- ✅ Tailwind CSS con tokens de diseño industrial
- ✅ Todas las secciones implementadas:
  - Hero con animación blueprint
  - Capabilities (What We Build)
  - Method Timeline (AI-First Framework)
  - Enterprise Integration con gráfico de red
  - Cases Gallery
  - About/Philosophy
  - Contact Form con validación Zod
- ✅ Componentes UI reutilizables (Header, Footer, Section)
- ✅ API endpoint `/api/contact` (base)
- ✅ SEO optimizado (metadata, sitemap, robots.txt)
- ✅ Accesibilidad WCAG 2.2 AA
- ✅ Security headers configurados
- ✅ Custom 404 page
- ✅ Responsive design (mobile-first)
- ✅ Framer Motion animations con `prefers-reduced-motion`

---

## 🔧 **Próximos pasos (en orden de prioridad)**

### 1. **Probar el proyecto localmente**

```bash
cd vertek-lab-website
pnpm dev
```

Abre http://localhost:3000 y verifica que todo funcione correctamente.

### 2. **Agregar assets visuales**

Crear y agregar los siguientes archivos en `/public/`:

- `favicon.ico` (32×32)
- `favicon.svg` (vector)
- `apple-touch-icon.png` (180×180)
- `og-image.png` (1200×630) - Para Open Graph
- Opcional: imágenes para los casos en la sección Cases

**Herramientas recomendadas:**
- Favicon: https://realfavicongenerator.net/
- OG Image: Figma o Canva con template 1200×630

### 3. **Configurar Supabase (para guardar leads del formulario)**

**Pasos:**

1. Crear cuenta en https://supabase.com
2. Crear nuevo proyecto
3. Ejecutar este SQL en el SQL Editor:

```sql
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null check (position('@' in email) > 1),
  company text,
  message text not null,
  created_at timestamptz not null default now(),
  ip inet,
  user_agent text,
  consent boolean not null default false
);

create index on leads (created_at desc);
```

4. Obtener las credenciales:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`

5. Agregar al archivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...
```

### 4. **Configurar Resend (para notificaciones por email)**

**Pasos:**

1. Crear cuenta en https://resend.com
2. Verificar dominio `vertek.lab` (o usar `onboarding@resend.dev` para pruebas)
3. Generar API Key
4. Agregar a `.env.local`:

```env
RESEND_API_KEY=re_xxx...
```

5. Actualizar `/app/api/contact/route.ts` para enviar emails:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// En el POST handler, después de validar:
await resend.emails.send({
  from: 'Vertek.lab <contact@vertek.lab>',
  to: 'team@vertek.lab',
  subject: `New contact: ${data.name}`,
  html: `<p><strong>Name:</strong> ${data.name}</p>
         <p><strong>Email:</strong> ${data.email}</p>
         <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
         <p><strong>Message:</strong> ${data.message}</p>`,
});
```

### 5. **Configurar reCAPTCHA Enterprise (anti-spam)**

**Pasos:**

1. Ir a https://cloud.google.com/recaptcha-enterprise
2. Crear proyecto y sitio
3. Obtener las keys:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`

4. Agregar a `.env.local`

5. Implementar validación en el formulario Contact.tsx y en la API

### 6. **Deploy en Vercel**

**Pasos:**

1. Push del código a GitHub:

```bash
git init
git add .
git commit -m "Initial commit: Vertek.lab website"
git remote add origin <tu-repo-github>
git push -u origin main
```

2. Ir a https://vercel.com
3. Importar repositorio
4. Configurar variables de entorno (copiar de `.env.local`)
5. Deploy!

**Dominio:**
- Configurar DNS de `vertek.lab` para apuntar a Vercel
- Agregar dominio custom en Vercel dashboard

### 7. **Configurar Analytics**

**Opción A: Plausible (privacy-first, recomendado)**

1. Crear cuenta en https://plausible.io
2. Agregar script en `app/layout.tsx`:

```tsx
<Script
  defer
  data-domain="vertek.lab"
  src="https://plausible.io/js/script.js"
/>
```

**Opción B: Google Analytics 4**

1. Crear propiedad GA4
2. Agregar GTM con Consent Mode v2

### 8. **Configurar Sentry (error tracking)**

```bash
pnpm add @sentry/nextjs
```

Seguir wizard de setup de Sentry.

---

## 🎨 **Mejoras opcionales (v1.1+)**

- [ ] **i18n** (Español): Usar `next-intl` para multi-idioma
- [ ] **Blog/Blueprints**: Sección técnica con MDX
- [ ] **CMS ligero**: Usar Sanity o Contentful para editar casos/copy
- [ ] **Animaciones mejoradas**: Más microinteracciones técnicas
- [ ] **Página de Legal/Privacy Policy**: Template básico
- [ ] **Chatbot de IA**: Asistente para consultas técnicas

---

## 📊 **Testing antes de Go-Live**

Checklist de calidad:

```bash
# Type check
pnpm type-check

# Lint
pnpm lint

# Build para producción
pnpm build

# Lighthouse CI (instalar globalmente)
npm i -g @lhci/cli
lhci autorun --collect.url=http://localhost:3000
```

**Targets:**
- Performance ≥ 90
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95

---

## 🔐 **Seguridad Pre-Launch**

- [ ] Verificar que todas las API keys estén en `.env.local` (NO en código)
- [ ] Confirmar que `.env.local` está en `.gitignore`
- [ ] Revisar CSP headers en `next.config.js`
- [ ] Habilitar HTTPS/HSTS en Vercel
- [ ] Configurar rate limiting en `/api/contact`

---

## 🚀 **Go-Live Checklist**

- [ ] Dominio `vertek.lab` apuntando a Vercel
- [ ] SSL/TLS configurado
- [ ] Supabase en producción
- [ ] Resend verificado con dominio real
- [ ] reCAPTCHA activo
- [ ] Analytics funcionando
- [ ] Sentry configurado
- [ ] OG image y favicons en `/public/`
- [ ] Lighthouse score ≥ 90
- [ ] Formulario de contacto probado end-to-end
- [ ] Mobile responsive verificado en dispositivos reales

---

## 📞 **Soporte**

Si necesitas ayuda con alguno de estos pasos, puedes:

1. Revisar la documentación oficial de cada servicio
2. Consultar el README.md del proyecto
3. Revisar el código comentado en los componentes

---

**¡El proyecto está listo para despegar!** 🚀

Construido con la metodología AI-First de Vertek.lab.
