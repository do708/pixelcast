import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

interface RouteProps {
  params: Promise<{
    id: string;
  }>;
}

export async function POST(
  request: Request,
  { params }: RouteProps
) {
  try {

    const { id } =
      await params;

    const body =
      await request.json();

    const {
      status,
    } = body;

    const {
      error,
    } = await supabaseServer
      .from("quotes")
      .update({
        status,
      })
      .eq(
        "id",
        Number(id)
      );

    if (error) {

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