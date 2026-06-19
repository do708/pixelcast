import Link from "next/link";
import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase-server";
import QuoteEditor from "@/app/components/QuoteEditor";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function EditQuotePage({
  params,
}: PageProps) {
  const { id } = await params;

  const { data: quote } =
    await supabaseServer
      .from("quotes")
      .select("*")
      .eq("id", Number(id))
      .single();

  if (!quote) {
    notFound();
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

  const { data: products } =
    await supabaseServer
      .from("products")
      .select("*")
      .order("name");

  const enrichedItems =
    (quoteItems || []).map(
      (item) => ({
        ...item,
        products:
          products?.find(
            (p) =>
              p.id ===
              item.product_id
          ) || null,
      })
    );

  const fullQuote = {
    ...quote,
    leads: lead,
  };

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                Offerte Bewerken
              </h1>

              <p className="text-slate-600">
                {quote.quote_number}
              </p>

            </div>

            <Link
              href={`/admin/quotes/${quote.id}`}
              className="bg-slate-900 text-white px-5 py-3 rounded-xl"
            >
              Terug
            </Link>

          </div>

          <div className="bg-white rounded-3xl shadow p-10">

            <QuoteEditor
              quote={fullQuote}
              quoteItems={enrichedItems}
              products={products || []}
            />

          </div>

        </div>

      </section>

    </main>
  );
}