import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function InvoicesPage() {

  const { data: invoices } =
    await supabaseServer
      .from("invoices")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

  const totalValue =
    (invoices || []).reduce(
      (sum, invoice) =>
        sum +
        Number(
          invoice.amount || 0
        ),
      0
    );

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                Facturen
              </h1>

              <p className="text-slate-600 mt-2">
                Beheer alle facturen.
              </p>

            </div>

            <div className="flex gap-3">

              <Link
                href="/admin"
                className="bg-slate-900 text-white px-5 py-3 rounded-xl"
              >
                Dashboard
              </Link>

              <Link
                href="/admin/invoices/new"
                className="bg-blue-600 text-white px-5 py-3 rounded-xl"
              >
                + Nieuwe Factuur
              </Link>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-6 mb-8">

            <p className="text-slate-500">
              Totale factuurwaarde
            </p>

            <h2 className="text-4xl font-bold text-green-600">

              €
              {totalValue.toFixed(2)}

            </h2>

          </div>

          <div className="bg-white rounded-3xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="p-5 text-left">
                    Factuur
                  </th>

                  <th className="p-5 text-left">
                    Bedrag
                  </th>

                  <th className="p-5 text-left">
                    Status
                  </th>

                  <th className="p-5 text-left">
                    Vervaldatum
                  </th>

                </tr>

              </thead>

              <tbody>

                {invoices?.map(
                  (invoice) => (

                    <tr
                      key={invoice.id}
                      className="border-t"
                    >

                      <td className="p-5">

                        <Link
                          href={`/admin/invoices/${invoice.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          {invoice.invoice_number}
                        </Link>

                      </td>

                      <td className="p-5">

                        €
                        {Number(
                          invoice.amount
                        ).toFixed(2)}

                      </td>

                      <td className="p-5">

                        {invoice.status}

                      </td>

                      <td className="p-5">

                        {invoice.due_date}

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </main>
  );
}