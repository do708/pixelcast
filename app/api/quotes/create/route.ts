import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const quoteNumber =
      "PC-" +
      new Date().getFullYear() +
      "-" +
      Date.now().toString().slice(-6);

    const { data: quote, error } =
      await supabaseServer
        .from("quotes")
        .insert([
          {
            lead_id: body.leadId,
            quote_number: quoteNumber,
            total: body.total,
            status: "Concept",
          },
        ])
        .select()
        .single();

    if (error || !quote) {
      return NextResponse.json({
        success: false,
      });
    }

    if (
      body.products &&
      body.products.length > 0
    ) {
      const items =
        body.products.map(
          (product: any) => ({
            quote_id: quote.id,
            product_id: product.id,
            quantity: 1,
            unit_price: product.price,
          })
        );

      await supabaseServer
        .from("quote_items")
        .insert(items);
    }

    return NextResponse.json({
      success: true,
      quoteId: quote.id,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
    });
  }
}