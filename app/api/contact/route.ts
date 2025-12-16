import { NextResponse } from 'next/server';
import { ContactSchema } from '@/lib/schemas';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const json = await req.json();

    // Validate with Zod
    const data = ContactSchema.parse(json);

    // TODO: Implement actual functionality:
    // 1. Verify reCAPTCHA token
    // 2. Save to Supabase
    // 3. Send email via Resend
    // 4. Implement rate limiting

    // For now, just log and return success
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message.substring(0, 50) + '...',
    });

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 500));

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
