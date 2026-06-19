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
      description,
      monthly_amount,
      billing_cycle,
      start_date,
      status,
    } = body;

    const {
      error,
    } = await supabaseServer
      .from("subscriptions")
      .update({
        description,
        monthly_amount,
        billing_cycle,
        start_date,
        status,
      })
      .eq(
        "id",
        Number(id)
      );

    if (error) {

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