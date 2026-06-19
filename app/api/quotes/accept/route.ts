import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(
  request: Request
) {
  try {

    const body =
      await request.json();

    const {
      quoteId,
    } = body;

    const {
      data: quote,
      error: quoteError,
    } = await supabaseServer
      .from("quotes")
      .select("*")
      .eq(
        "id",
        quoteId
      )
      .single();

    if (
      quoteError ||
      !quote
    ) {

      return NextResponse.json(
        {
          success: false,
          error:
            "Offerte niet gevonden",
        },
        {
          status: 404,
        }
      );

    }

    const {
      data: lead,
      error: leadError,
    } = await supabaseServer
      .from("leads")
      .select("*")
      .eq(
        "id",
        quote.lead_id
      )
      .single();

    if (
      leadError ||
      !lead
    ) {

      return NextResponse.json(
        {
          success: false,
          error:
            "Lead niet gevonden",
        },
        {
          status: 404,
        }
      );

    }

    const {
      data: existingCustomer,
    } = await supabaseServer
      .from("customers")
      .select("id")
      .eq(
        "lead_id",
        lead.id
      )
      .maybeSingle();

    let customerId =
      existingCustomer?.id;

    if (
      !existingCustomer
    ) {

      const {
        data: customer,
        error:
          customerError,
      } = await supabaseServer
        .from("customers")
        .insert([
          {
            lead_id:
              lead.id,
            company:
              lead.company,
            contact_name:
              lead.name,
            email:
              lead.email,
            phone:
              lead.phone,
          },
        ])
        .select()
        .single();

      if (
        customerError
      ) {
        throw customerError;
      }

      customerId =
        customer.id;
    }

    const {
      error:
        updateQuoteError,
    } = await supabaseServer
      .from("quotes")
      .update({
        status:
          "Geaccepteerd",
        accepted_at:
          new Date().toISOString(),
        customer_created:
          true,
      })
      .eq(
        "id",
        quote.id
      );

    if (
      updateQuoteError
    ) {
      throw updateQuoteError;
    }

    const {
      error:
        updateLeadError,
    } = await supabaseServer
      .from("leads")
      .update({
        status:
          "Klant",
      })
      .eq(
        "id",
        lead.id
      );

    if (
      updateLeadError
    ) {
      throw updateLeadError;
    }

    return NextResponse.json({
      success: true,
      customerId,
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