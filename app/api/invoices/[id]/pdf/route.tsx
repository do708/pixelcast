import { NextResponse } from "next/server";
import { pdf } from "@react-pdf/renderer";
import InvoicePdf from "@/app/lib/pdf/InvoicePdf";
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
  try {

    const { id } =
      await params;

    const {
      data: invoice,
    } = await supabaseServer
      .from("invoices")
      .select("*")
      .eq(
        "id",
        Number(id)
      )
      .single();

    if (!invoice) {

      return NextResponse.json(
        {
          success: false,
          error:
            "Factuur niet gevonden",
        },
        {
          status: 404,
        }
      );

    }

    const {
      data: customer,
    } = await supabaseServer
      .from("customers")
      .select("*")
      .eq(
        "id",
        invoice.customer_id
      )
      .single();

    const blob =
      await pdf(
        <InvoicePdf
          invoice={invoice}
          customer={customer}
        />
      ).toBlob();

    const buffer =
      Buffer.from(
        await blob.arrayBuffer()
      );

    return new NextResponse(
      buffer,
      {
        headers: {
          "Content-Type":
            "application/pdf",

          "Content-Disposition":
            `attachment; filename=${invoice.invoice_number}.pdf`,
        },
      }
    );

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