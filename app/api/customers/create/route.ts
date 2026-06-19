import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(
  request: Request
) {
  try {

    const body =
      await request.json();

    const {
      leadId,
    } = body;

    const {
      data: lead,
      error: leadError,
    } = await supabaseServer
      .from("leads")
      .select("*")
      .eq(
        "id",
        leadId
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

    if (
      existingCustomer
    ) {

      return NextResponse.json(
        {
          success: true,
          customerId:
            existingCustomer.id,
        }
      );

    }

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

    return NextResponse.json({
      success: true,
      customerId:
        customer.id,
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