import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {

  const { data: leads } =
    await supabaseServer
      .from("leads")
      .select("*");

  const { data: quotes } =
    await supabaseServer
      .from("quotes")
      .select("*");

  const totalLeads =
    leads?.length || 0;

  const totalQuotes =
    quotes?.length || 0;

  const openQuotes =
    quotes?.filter(
      (q) =>
        q.status === "Concept" ||
        q.status === "Verstuurd"
    ).length || 0;

  const acceptedQuotes =
    quotes?.filter(
      (q) =>
        q.status ===
        "Geaccepteerd"
    ).length || 0;

  const rejectedQuotes =
    quotes?.filter(
      (q) =>
        q.status ===
        "Afgewezen"
    ).length || 0;

  const quoteValue =
    quotes?.reduce(
      (sum, q) =>
        sum +
        Number(q.total || 0),
      0
    ) || 0;

  const acceptedValue =
    quotes
      ?.filter(
        (q) =>
          q.status ===
          "Geaccepteerd"
      )
      .reduce(
        (sum, q) =>
          sum +
          Number(
            q.total || 0
          ),
        0
      ) || 0;

  const conversion =
    totalQuotes > 0
      ? (
          (acceptedQuotes /
            totalQuotes) *
          100
        ).toFixed(1)
      : "0";

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-12">

            <div>

              <h1 className="text-5xl font-bold">
                PixelCast CRM
              </h1>

              <p className="text-slate-500 mt-2">
                Dashboard
              </p>

            </div>

            <div className="flex gap-3">

              <Link
                href="/admin/leads"
                className="bg-slate-900 text-white px-5 py-3 rounded-xl"
              >
                Leads
              </Link>

              <Link
                href="/admin/quotes"
                className="bg-blue-600 text-white px-5 py-3 rounded-xl"
              >
                Offertes
              </Link>

            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

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
                Openstaand
              </p>
              <h2 className="text-4xl font-bold text-orange-600">
                {openQuotes}
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow p-6">
              <p className="text-slate-500">
                Conversie
              </p>
              <h2 className="text-4xl font-bold text-green-600">
                {conversion}%
              </h2>
            </div>

          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">

            <div className="bg-white rounded-3xl shadow p-8">

              <p className="text-slate-500 mb-3">
                Totale Offertewaarde
              </p>

              <h2 className="text-4xl font-bold text-blue-600">

                €
                {quoteValue.toLocaleString(
                  "nl-NL"
                )}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-8">

              <p className="text-slate-500 mb-3">
                Gewonnen Omzet
              </p>

              <h2 className="text-4xl font-bold text-green-600">

                €
                {acceptedValue.toLocaleString(
                  "nl-NL"
                )}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-8">

              <p className="text-slate-500 mb-3">
                Verloren Offertes
              </p>

              <h2 className="text-4xl font-bold text-red-600">

                {rejectedQuotes}

              </h2>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-2xl font-bold mb-6">
              Snelle Acties
            </h2>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/admin/leads"
                className="bg-slate-900 text-white px-6 py-4 rounded-xl"
              >
                Leads Beheren
              </Link>

              <Link
                href="/admin/quotes"
                className="bg-blue-600 text-white px-6 py-4 rounded-xl"
              >
                Offertes Beheren
              </Link>

              <Link
                href="/admin/quotes/new"
                className="bg-green-600 text-white px-6 py-4 rounded-xl"
              >
                Nieuwe Offerte
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}