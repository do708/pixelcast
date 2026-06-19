import Link from "next/link";
import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase-server";
import QuoteStatusSelect from "@/app/components/QuoteStatusSelect";
import DeleteQuoteButton from "@/app/components/DeleteQuoteButton";
import AcceptQuoteButton from "@/app/components/AcceptQuoteButton";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamic = "force-dynamic";

function getStatusColor(status: string) {
  switch (status) {
    case "Concept":
      return "bg-slate-100 text-slate-700";

    case "Verstuurd":
      return "bg-blue-100 text-blue-700";

    case "Geaccepteerd":
      return "bg-green-100 text-green-700";

    case "Afgewezen":
      return "bg-red-100 text-red-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default async function QuotePage({
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

  const enrichedItems =
    (items || []).map(
      (item) => ({
        ...item,
        product:
          products?.find(
            (p) =>
              p.id ===
              item.product_id
          ) || null,
      })
    );

  const subtotal =
    Number(quote.total || 0);

  const vat =
    subtotal * 0.21;

  const totalInclVat =
    subtotal + vat;

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                {quote.quote_number}
              </h1>

              <p className="text-slate-600 mt-2">
                {lead?.company}
              </p>

            </div>

            <div className="flex gap-3">

              <a
                href={`/api/quotes/${quote.id}/pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-5 py-3 rounded-xl"
              >
                PDF
              </a>

              <Link
                href={`/admin/quotes/${quote.id}/send`}
                className="bg-purple-600 text-white px-5 py-3 rounded-xl"
              >
                Versturen
              </Link>

              <Link
                href={`/admin/quotes/${quote.id}/edit`}
                className="bg-blue-600 text-white px-5 py-3 rounded-xl"
              >
                Bewerken
              </Link>

{quote.status !==
  "Geaccepteerd" && (

  <AcceptQuoteButton
    quoteId={quote.id}
  />

)}

              <DeleteQuoteButton
                quoteId={quote.id}
              />

              <Link
                href="/admin/quotes"
                className="bg-slate-900 text-white px-5 py-3 rounded-xl"
              >
                Terug
              </Link>

            </div>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">

            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-xl font-bold mb-6">
                Klant
              </h2>

              <div className="space-y-4">

                <div>
                  <p className="text-slate-500">
                    Contactpersoon
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
                    {lead?.company}
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

              <h2 className="text-xl font-bold mb-6">
                Status
              </h2>

              <div
                className={`inline-block px-4 py-2 rounded-xl mb-4 font-semibold ${getStatusColor(
                  quote.status
                )}`}
              >
                {quote.status}
              </div>

              <QuoteStatusSelect
                quoteId={quote.id}
                status={quote.status}
              />

            </div>

            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-xl font-bold mb-6">
                Financieel
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between">

                  <span>
                    Subtotaal
                  </span>

                  <span>
                    €
                    {subtotal.toFixed(
                      2
                    )}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>
                    BTW 21%
                  </span>

                  <span>
                    €
                    {vat.toFixed(
                      2
                    )}
                  </span>

                </div>

                <div className="flex justify-between text-2xl font-bold text-green-600 border-t pt-3">

                  <span>
                    Totaal
                  </span>

                  <span>
                    €
                    {totalInclVat.toFixed(
                      2
                    )}
                  </span>

                </div>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-2xl font-bold mb-8">
              Productregels
            </h2>

            <div className="space-y-4">

              {enrichedItems.map(
                (item) => (

                  <div
                    key={item.id}
                    className="grid grid-cols-12 gap-4 border rounded-xl p-4"
                  >

                    <div className="col-span-5">
                      {item.product?.name}
                    </div>

                    <div className="col-span-2">
                      {item.quantity} x
                    </div>

                    <div className="col-span-2">
                      €
                      {Number(
                        item.unit_price
                      ).toFixed(2)}
                    </div>

                    <div className="col-span-3 font-semibold">

                      €
                      {(
                        Number(
                          item.unit_price
                        ) *
                        Number(
                          item.quantity
                        )
                      ).toFixed(2)}

                    </div>

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