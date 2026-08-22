import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/email";

/**
 * Route API du formulaire de contact (cf. CLAUDE.md section 16).
 * Seule route dynamique du site — toutes les autres pages restent en SSG.
 */
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Une erreur est survenue, merci de réessayer." },
      { status: 500 },
    );
  }
}
