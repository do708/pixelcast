import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function POST(
  request: Request,
  { params }: RouteParams
) {
  try {
    const { id } = await params;

    const body = await request.json();

    const {
      items,
      total,
    } = body;

    if (!items || !Array.isArray(items)) {
      return NextResponse.json(
        {
          success: false,
          error: "Geen items ontvangen",
        },
        {
          status: 400,
        }
      );
    }

    const quoteId = Number(id);

    /*
     * Oude quote_items verwijderen
     */

    const {
      error: deleteError,
    } = await supabaseServer
      .from("quote_items")
      .delete()
      .eq("quote_id", quoteId);

    if (deleteError) {
      console.error(deleteError);

      return NextResponse.json(
        {
          success: false,
          error:
            deleteError.message,
        },
        {
          status: 500,
        }
      );
    }

    /*
     * Nieuwe quote_items aanmaken
     */

    const quoteItems =
      items.map(
        (item: any) => ({
          quote_id: quoteId,
          product_id:
            item.product_id,
          quantity:
            item.quantity,
          unit_price:
            item.unit_price,
        })
      );

    const {
      error: insertError,
    } = await supabaseServer
      .from("quote_items")
      .insert(
        quoteItems
      );

    if (insertError) {
      console.error(
        insertError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            insertError.message,
        },
        {
          status: 500,
        }
      );
    }

    /*
     * Quote totaal updaten
     */

    const {
      error: updateError,
    } = await supabaseServer
      .from("quotes")
      .update({
        total,
      })
      .eq("id", quoteId);

    if (updateError) {
      console.error(
        updateError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            updateError.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
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