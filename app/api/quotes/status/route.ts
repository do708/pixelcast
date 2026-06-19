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
      status,
    } = body;

    const updateData: any = {
      status,
    };

    if (
      status === "Geaccepteerd"
    ) {
      updateData.accepted_at =
        new Date().toISOString();
    }

    if (
      status === "Afgewezen"
    ) {
      updateData.rejected_at =
        new Date().toISOString();
    }

    const { error } =
      await supabaseServer
        .from("quotes")
        .update(updateData)
        .eq(
          "id",
          quoteId
        );

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error: any) {

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