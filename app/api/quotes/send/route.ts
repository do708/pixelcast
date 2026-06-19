import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseServer } from "@/lib/supabase-server";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  request: Request
) {
  try {

    const body =
      await request.json();

    const {
      quoteId,
      to,
      subject,
      message,
      pdfUrl,
    } = body;

    const result =
      await resend.emails.send({
        from:
          "PixelCast <offertes@pixelcast.nl>",
        to,
        subject,
        html: `
          <div style="font-family:Arial;padding:20px;">
            <pre style="font-family:Arial;white-space:pre-wrap;">
${message}
            </pre>

            <p>
              Download offerte:
              <a href="${pdfUrl}">
                ${pdfUrl}
              </a>
            </p>
          </div>
        `,
      });

    await supabaseServer
      .from("quotes")
      .update({
        status: "Verstuurd",
      })
      .eq(
        "id",
        quoteId
      );

    return NextResponse.json({
      success: true,
      result,
    });

  } catch (error: any) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          error.message,
      },
      {
        status: 500,
      }
    );

  }
}