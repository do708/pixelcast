import Link from "next/link";
import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase-server";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function QuotePage({
  params,
}: PageProps) {
  const { id } = await params;

  const { data: quote } =
    await supabaseServer
      .from("quotes")
      .select("*")
      .eq("id", id)
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

  const { data: items } =
    await supabaseServer
      .from("quote_items")
      .select("*")
      .eq("quote_id", quote.id);

  const productIds =
    items?.map(
      (item) => item.product_id
    ) || [];

  const { data: products } =
    productIds.length > 0
      ? await supabaseServer
          .from("products")
          .select("*")
          .in("id", productIds)
      : { data: [] };

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                {quote.quote_number}
              </h1>

              <p className="text-slate-600 mt-2">
                PixelCast Offerte
              </p>

            </div>

            <Link
              href="/admin/quotes"
              className="bg-slate-900 text-white px-5 py-3 rounded-xl"
            >
              ← Terug
            </Link>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-2xl font-bold mb-6">
                Klantgegevens
              </h2>

              <div className="space-y-4">

                <div>

                  <p className="text-slate-500">
                    Naam
                  </p>

                  <p className="font-semibold">
                    {lead?.name}
                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    Bedrijf
                  </p>

                  <p className="font-semibold">
                    {lead?.company || "-"}
                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    E-mail
                  </p>

                  <p className="font-semibold">
                    {lead?.email}
                  </p>

                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-2xl font-bold mb-6">
                Offerte
              </h2>

              <div className="space-y-4">

                <div>

                  <p className="text-slate-500">
                    Offertenummer
                  </p>

                  <p className="font-semibold">
                    {quote.quote_number}
                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    Status
                  </p>

                  <p className="font-semibold">
                    {quote.status}
                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    Totaal
                  </p>

                  <p className="text-3xl font-bold text-green-600">
                    €
                    {Number(
                      quote.total
                    ).toFixed(2)}
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-8 mt-8">

            <h2 className="text-2xl font-bold mb-6">
              Producten
            </h2>

            <div className="space-y-3">

              {products?.map(
                (product) => (

                  <div
                    key={product.id}
                    className="flex justify-between border rounded-xl p-4"
                  >

                    <span>
                      {product.name}
                    </span>

                    <span className="font-semibold">

                      €
                      {Number(
                        product.price
                      ).toFixed(2)}

                    </span>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}