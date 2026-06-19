import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function QuotesPage() {
  const { data: quotes, error } =
    await supabaseServer
      .from("quotes")
      .select(`
        *,
        leads (
          id,
          name,
          company,
          email
        )
      `)
      .order("created_at", {
        ascending: false,
      });

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Fout bij laden van offertes
          </h1>

          <p>{error.message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                Offertes
              </h1>

              <p className="text-slate-600 mt-2">
                Overzicht van alle aangemaakte offertes.
              </p>

            </div>

            <Link
              href="/admin/quotes/new"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              + Nieuwe Offerte
            </Link>

          </div>

          <div className="bg-white rounded-3xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="text-left p-4">
                    Offerte
                  </th>

                  <th className="text-left p-4">
                    Bedrijf
                  </th>

                  <th className="text-left p-4">
                    Contact
                  </th>

                  <th className="text-left p-4">
                    Status
                  </th>

                  <th className="text-left p-4">
                    Totaal
                  </th>

                  <th className="text-left p-4">
                    Datum
                  </th>

                  <th className="text-right p-4">
                    Actie
                  </th>

                </tr>

              </thead>

              <tbody>

                {quotes?.map((quote: any) => (

                  <tr
                    key={quote.id}
                    className="border-t hover:bg-slate-50"
                  >

                    <td className="p-4 font-semibold">
                      {quote.quote_number}
                    </td>

                    <td className="p-4">

                      <div className="font-medium">

                        {quote.leads?.company ||
                          "-"}

                      </div>

                    </td>

                    <td className="p-4">

                      <div>
                        {quote.leads?.name}
                      </div>

                      <div className="text-sm text-slate-500">
                        {quote.leads?.email}
                      </div>

                    </td>

                    <td className="p-4">

                      <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">

                        {quote.status}

                      </span>

                    </td>

                    <td className="p-4 font-semibold">

                      €
                      {Number(
                        quote.total
                      ).toFixed(2)}

                    </td>

                    <td className="p-4">

                      {new Date(
                        quote.created_at
                      ).toLocaleDateString(
                        "nl-NL"
                      )}

                    </td>

                    <td className="p-4 text-right">

                      <Link
                        href={`/admin/quotes/${quote.id}`}
                        className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl"
                      >
                        Bekijken
                      </Link>

                    </td>

                  </tr>

                ))}

                {(!quotes ||
                  quotes.length === 0) && (

                  <tr>

                    <td
                      colSpan={7}
                      className="p-10 text-center text-slate-500"
                    >
                      Nog geen offertes gevonden.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </main>
  );
}