import Link from "next/link";
import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase-server";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function CustomerPage({
  params,
}: PageProps) {

  const { id } =
    await params;

  const {
    data: customer,
  } = await supabaseServer
    .from("customers")
    .select("*")
    .eq(
      "id",
      Number(id)
    )
    .single();

  if (!customer) {
    notFound();
  }

  const {
    data: quotes,
  } = await supabaseServer
    .from("quotes")
    .select("*")
    .eq(
      "lead_id",
      customer.lead_id
    );

  const {
    data: subscriptions,
  } = await supabaseServer
    .from("subscriptions")
    .select("*")
    .eq(
      "lead_id",
      customer.lead_id
    );

  const {
    data: invoices,
  } = await supabaseServer
    .from("invoices")
    .select("*")
    .eq(
      "lead_id",
      customer.lead_id
    );

  const totalQuoteValue =
    (quotes || []).reduce(
      (sum, quote) =>
        sum +
        Number(
          quote.total || 0
        ),
      0
    );

  const totalInvoiceValue =
    (invoices || []).reduce(
      (sum, invoice) =>
        sum +
        Number(
          invoice.amount || 0
        ),
      0
    );

  const mrr =
    (subscriptions || [])
      .filter(
        (subscription) =>
          subscription.status ===
          "Actief"
      )
      .reduce(
        (sum, subscription) =>
          sum +
          Number(
            subscription.monthly_amount || 0
          ),
        0
      );

  const ltv =
    totalInvoiceValue +
    (mrr * 24);

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">

                {customer.company}

              </h1>

              <p className="text-slate-600 mt-2">

                {customer.contact_name}

              </p>

            </div>

            <Link
              href="/admin/customers"
              className="bg-slate-900 text-white px-5 py-3 rounded-xl"
            >
              Terug
            </Link>

          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Offertes
              </p>

              <div className="text-4xl font-bold">

                {quotes?.length || 0}

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Facturen
              </p>

              <div className="text-4xl font-bold">

                {invoices?.length || 0}

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                MRR
              </p>

              <div className="text-4xl font-bold text-purple-600">

                €{mrr.toFixed(2)}

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                LTV
              </p>

              <div className="text-4xl font-bold text-green-600">

                €{ltv.toFixed(2)}

              </div>

            </div>

          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">

            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-2xl font-bold mb-6">
                Klantgegevens
              </h2>

              <div className="space-y-4">

                <div>
                  <p className="text-slate-500">
                    Contactpersoon
                  </p>
                  <p className="font-semibold">
                    {customer.contact_name}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">
                    Email
                  </p>
                  <p className="font-semibold">
                    {customer.email}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">
                    Telefoon
                  </p>
                  <p className="font-semibold">
                    {customer.phone}
                  </p>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-2xl font-bold mb-6">
                Financieel
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Offertewaarde</span>
                  <span>
                    €{totalQuoteValue.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Gefactureerd</span>
                  <span>
                    €{totalInvoiceValue.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>MRR</span>
                  <span>
                    €{mrr.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between font-bold text-green-600 text-xl">
                  <span>LTV</span>
                  <span>
                    €{ltv.toFixed(2)}
                  </span>
                </div>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-8 mb-8">

            <h2 className="text-2xl font-bold mb-6">
              Offertes
            </h2>

            <div className="space-y-3">

              {(quotes || []).map(
                (quote) => (

                  <Link
                    key={quote.id}
                    href={`/admin/quotes/${quote.id}`}
                    className="flex justify-between border rounded-xl p-4 hover:bg-slate-50"
                  >

                    <span>
                      {quote.quote_number}
                    </span>

                    <span>
                      €
                      {Number(
                        quote.total
                      ).toFixed(2)}
                    </span>

                  </Link>

                )
              )}

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-2xl font-bold mb-6">
              Abonnementen
            </h2>

            <div className="space-y-3">

              {(subscriptions || []).map(
                (
                  subscription
                ) => (

                  <Link
                    key={
                      subscription.id
                    }
                    href={`/admin/subscriptions/${subscription.id}`}
                    className="flex justify-between border rounded-xl p-4 hover:bg-slate-50"
                  >

                    <span>
                      {
                        subscription.description
                      }
                    </span>

                    <span>
                      €
                      {Number(
                        subscription.monthly_amount
                      ).toFixed(
                        2
                      )}
                      /mnd
                    </span>

                  </Link>

                )
              )}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}