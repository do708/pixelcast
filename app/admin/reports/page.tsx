import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function ReportsPage() {

  const { data: leads } =
    await supabaseServer
      .from("leads")
      .select("*");

  const { data: quotes } =
    await supabaseServer
      .from("quotes")
      .select("*");

  const { data: invoices } =
    await supabaseServer
      .from("invoices")
      .select("*");

  const { data: subscriptions } =
    await supabaseServer
      .from("subscriptions")
      .select("*");

  const totalLeads =
    leads?.length || 0;

  const totalQuotes =
    quotes?.length || 0;

  const acceptedQuotes =
    quotes?.filter(
      (quote) =>
        quote.status ===
        "Geaccepteerd"
    ).length || 0;

  const quoteValue =
    quotes?.reduce(
      (sum, quote) =>
        sum +
        Number(
          quote.total || 0
        ),
      0
    ) || 0;

  const invoiceValue =
    invoices?.reduce(
      (sum, invoice) =>
        sum +
        Number(
          invoice.amount || 0
        ),
      0
    ) || 0;

  const mrr =
    subscriptions
      ?.filter(
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
      ) || 0;

  const arr =
    mrr * 12;

  const conversionRate =
    totalLeads > 0
      ? (
          (acceptedQuotes /
            totalLeads) *
          100
        ).toFixed(1)
      : "0";

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                Rapportages
              </h1>

              <p className="text-slate-600 mt-2">
                Bedrijfsresultaten en KPI's
              </p>

            </div>

            <Link
              href="/admin"
              className="bg-slate-900 text-white px-6 py-3 rounded-xl"
            >
              Dashboard
            </Link>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Leads
              </p>

              <h2 className="text-4xl font-bold">

                {totalLeads}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Offertes
              </p>

              <h2 className="text-4xl font-bold">

                {totalQuotes}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Conversie
              </p>

              <h2 className="text-4xl font-bold text-blue-600">

                {conversionRate}%

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Geaccepteerd
              </p>

              <h2 className="text-4xl font-bold text-green-600">

                {acceptedQuotes}

              </h2>

            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Offertewaarde
              </p>

              <h2 className="text-3xl font-bold text-green-600">

                €
                {quoteValue.toFixed(2)}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Factuurwaarde
              </p>

              <h2 className="text-3xl font-bold text-blue-600">

                €
                {invoiceValue.toFixed(2)}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                MRR
              </p>

              <h2 className="text-3xl font-bold text-purple-600">

                €
                {mrr.toFixed(2)}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                ARR
              </p>

              <h2 className="text-3xl font-bold text-orange-600">

                €
                {arr.toFixed(2)}

              </h2>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-2xl font-bold mb-6">
              Management Samenvatting
            </h2>

            <div className="space-y-4 text-lg">

              <div>
                Totale leadwaarde:
                <strong>
                  {" "}
                  €{quoteValue.toFixed(2)}
                </strong>
              </div>

              <div>
                Totale gefactureerde omzet:
                <strong>
                  {" "}
                  €{invoiceValue.toFixed(2)}
                </strong>
              </div>

              <div>
                Jaarlijkse terugkerende omzet:
                <strong>
                  {" "}
                  €{arr.toFixed(2)}
                </strong>
              </div>

              <div>
                Conversieratio:
                <strong>
                  {" "}
                  {conversionRate}%
                </strong>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}