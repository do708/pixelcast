import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Opslaan in Supabase

    const { error } = await supabase
      .from("leads")
      .insert([
        {
          name: body.name,
          company: body.company,
          email: body.email,
          phone: body.phone,
          interest: body.interest,
          screens: body.screens,
          message: body.message,
        },
      ]);

    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    // Mail versturen

    await resend.emails.send({
      from: "PixelCast <onboarding@resend.dev>",
      to: ["do@mdb-networks.nl"],
      subject: "Nieuwe PixelCast aanvraag",
      html: `
        <h2>Nieuwe aanvraag via pixelcast.eu</h2>

        <p><strong>Naam:</strong> ${body.name}</p>
        <p><strong>Bedrijf:</strong> ${body.company}</p>
        <p><strong>E-mail:</strong> ${body.email}</p>
        <p><strong>Telefoon:</strong> ${body.phone}</p>
        <p><strong>Interesse:</strong> ${body.interest}</p>
        <p><strong>Aantal schermen:</strong> ${body.screens}</p>

        <hr>

        <p><strong>Bericht:</strong></p>

        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}