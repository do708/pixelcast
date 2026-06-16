import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function QuotesPage() {
  const { data: quotes } = await supabaseServer
    .from("quotes")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

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
                Beheer alle PixelCast offertes
              </p>

            </div>

            <Link
              href="/admin"
              className="bg-slate-900 text-white px-5 py-3 rounded-xl"
            >
              Dashboard
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
                    Status
                  </th>

                  <th className="text-left p-4">
                    Totaal
                  </th>

                  <th className="text-left p-4">
                    Datum
                  </th>

                </tr>

              </thead>

              <tbody>

                {quotes?.map((quote) => (

                  <tr
                    key={quote.id}
                    className="border-t"
                  >

                    <td className="p-4">

                      <Link
                        href={`/admin/quotes/${quote.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {quote.quote_number}
                      </Link>

                    </td>

                    <td className="p-4">
                      {quote.status}
                    </td>

                    <td className="p-4">
                      € {Number(
                        quote.total || 0
                      ).toFixed(2)}
                    </td>

                    <td className="p-4">

                      {quote.created_at
                        ? new Date(
                            quote.created_at
                          ).toLocaleDateString("nl-NL")
                        : "-"}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </main>
  );
}