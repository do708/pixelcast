import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

interface RouteProps {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: RouteProps
) {

  const { id } =
    await params;

  const { data: quote } =
    await supabaseServer
      .from("quotes")
      .select("*")
      .eq(
        "id",
        Number(id)
      )
      .single();

  if (!quote) {
    return NextResponse.json({
      success: false,
    });
  }

  const { data: lead } =
    await supabaseServer
      .from("leads")
      .select("*")
      .eq(
        "id",
        quote.lead_id
      )
      .single();

  return NextResponse.json({
    success: true,
    email:
      lead?.email || "",
  });
}