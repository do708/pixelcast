import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(
  request: Request
) {
  try {

    const body =
      await request.json();

    const {
      customerId,
      amount,
      dueDate,
    } = body;

    const {
      data: customer,
      error: customerError,
    } = await supabaseServer
      .from("customers")
      .select("*")
      .eq(
        "id",
        Number(customerId)
      )
      .single();

    if (
      customerError ||
      !customer
    ) {

      return NextResponse.json(
        {
          success: false,
          error:
            "Klant niet gevonden",
        },
        {
          status: 404,
        }
      );

    }

    const year =
      new Date()
        .getFullYear();

    const invoiceNumber =
      `INV-${year}-${Date.now()
        .toString()
        .slice(-6)}`;

    const {
      data: invoice,
      error:
        invoiceError,
    } = await supabaseServer
      .from("invoices")
      .insert([
        {
          customer_id:
            customer.id,
          lead_id:
            customer.lead_id,
          invoice_number:
            invoiceNumber,
          amount:
            Number(amount),
          due_date:
            dueDate,
          status:
            "Concept",
        },
      ])
      .select()
      .single();

    if (
      invoiceError
    ) {
      throw invoiceError;
    }

    return NextResponse.json({
      success: true,
      invoiceId:
        invoice.id,
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