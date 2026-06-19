import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function GET() {
  try {

    const { data, error } =
      await supabaseServer
        .from("leads")
        .select(`
          id,
          name,
          company,
          email,
          status
        `)
        .order("company", {
          ascending: true,
        });

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      leads: data || [],
    });

  } catch (error: any) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          error.message ||
          "Onbekende fout",
        leads: [],
      },
      {
        status: 500,
      }
    );

  }
}