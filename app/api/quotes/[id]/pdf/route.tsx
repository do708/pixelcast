import { NextResponse } from "next/server";
import { pdf } from "@react-pdf/renderer";
import QuotePdf from "@/app/lib/pdf/QuotePdf";
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
    const { id } = await params;

    const { data: quote } =
      await supabaseServer
        .from("quotes")
        .select("*")
        .eq("id", Number(id))
        .single();

    if (!quote) {
      return NextResponse.json(
        {
          success: false,
          error: "Offerte niet gevonden",
        },
        {
          status: 404,
        }
      );
    }

    const { data: lead } =
      await supabaseServer
        .from("leads")
        .select("*")
        .eq("id", quote.lead_id)
        .single();

    const { data: quoteItems } =
      await supabaseServer
        .from("quote_items")
        .select("*")
        .eq("quote_id", quote.id);

    const productIds =
      quoteItems?.map(
        (item) => item.product_id
      ) || [];

    const { data: products } =
      productIds.length > 0
        ? await supabaseServer
            .from("products")
            .select("*")
            .in("id", productIds)
        : { data: [] };

    const enrichedItems =
      (quoteItems || []).map(
        (item) => ({
          ...item,
          product:
            products?.find(
              (p) =>
                p.id === item.product_id
            ) || null,
        })
      );

    const pdfDocument = (
      <QuotePdf
        quote={quote}
        lead={lead}
        items={enrichedItems}
      />
    );

    const pdfBlob =
      await pdf(pdfDocument).toBlob();

    const buffer =
      Buffer.from(
        await pdfBlob.arrayBuffer()
      );

    return new NextResponse(buffer, {
      headers: {
        "Content-Type":
          "application/pdf",
        "Content-Disposition":
          `attachment; filename="${quote.quote_number}.pdf"`,
      },
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          error?.message ||
          "PDF generatie mislukt",
      },
      {
        status: 500,
      }
    );
  }
}