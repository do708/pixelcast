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
        .insert([
          {
            name: body.name,
            category: body.category,
            price: body.price,
          },
        ]);

    if (error) {
      return NextResponse.json({
        success: false,
      });
    }

    return NextResponse.json({
      success: true,
    });

  } catch {
    return NextResponse.json({
      success: false,
    });
  }
}