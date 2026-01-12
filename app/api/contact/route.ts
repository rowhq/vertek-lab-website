import { NextResponse } from 'next/server';
import { ContactSchema } from '@/lib/schemas';

export const runtime = 'edge';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = 'ricardo@rowship.com';

export async function POST(req: Request) {
  try {
    const json = await req.json();

    // Validate with Zod
    const data = ContactSchema.parse(json);

    // Send email via Resend
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json({ ok: false, error: 'email_not_configured' }, { status: 500 });
    }

    const projectTypeLabels: Record<string, string> = {
      mvp: 'Sistema MVP (5-7 días)',
      full: 'Sistema Completo (2-4 semanas)',
      enterprise: 'Solución Empresarial',
    };

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'VERTEK.lab <noreply@vertek.es>',
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: `[VERTEK] Nuevo contacto: ${data.name}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Empresa:</strong> ${data.company || 'No especificada'}</p>
          <p><strong>Tipo de proyecto:</strong> ${projectTypeLabels[data.projectType] || data.projectType}</p>
          <hr />
          <p><strong>Mensaje:</strong></p>
          <p>${data.message.replace(/\n/g, '<br />')}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error('Resend error:', errorData);
      return NextResponse.json({ ok: false, error: 'email_send_failed' }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error: any) {
    console.error('Contact form error:', error);

    if (error.errors) {
      // Zod validation error
      return NextResponse.json(
        { ok: false, error: 'validation_error', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
