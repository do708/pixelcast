import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const { error } =
      await supabaseServer
        .from("products")
        .update({
          name: body.name,
          category: body.category,
          price: body.price,
        })
        .eq("id", body.id);

    if (error) {
      console.error(error);

      return NextResponse.json({
        success: false,
      });
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
    });
  }
}