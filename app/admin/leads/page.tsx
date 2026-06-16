import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const { data: leads, error } = await supabaseServer
    .from("leads")
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
                PixelCast CRM
              </h1>

              <p className="text-slate-600 mt-2">
                Overzicht van alle leads
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow px-6 py-4">

              <p className="text-sm text-slate-500">
                Totaal Leads
              </p>

              <p className="text-3xl font-bold">
                {leads?.length || 0}
              </p>

            </div>

          </div>

          {error && (

            <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-4 mb-6">

              {error.message}

            </div>

          )}

          <div className="bg-white rounded-3xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="text-left p-4">
                    Datum
                  </th>

                  <th className="text-left p-4">
                    Naam
                  </th>

                  <th className="text-left p-4">
                    Bedrijf
                  </th>

                  <th className="text-left p-4">
                    E-mail
                  </th>

                  <th className="text-left p-4">
                    Telefoon
                  </th>

                  <th className="text-left p-4">
                    Interesse
                  </th>

                  <th className="text-left p-4">
                    Schermen
                  </th>

                  <th className="text-left p-4">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {leads?.map((lead) => (

                  <tr
                    key={lead.id}
                    className="border-t hover:bg-slate-50"
                  >

                    <td className="p-4">

                      {lead.created_at
                        ? new Date(
                            lead.created_at
                          ).toLocaleDateString("nl-NL")
                        : "-"}

                    </td>

                    <td className="p-4 font-medium">

                      <Link
                        href={`/admin/leads/${lead.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {lead.name}
                      </Link>

                    </td>

                    <td className="p-4">
                      {lead.company || "-"}
                    </td>

                    <td className="p-4">
                      {lead.email}
                    </td>

                    <td className="p-4">
                      {lead.phone || "-"}
                    </td>

                    <td className="p-4">
                      {lead.interest || "-"}
                    </td>

                    <td className="p-4">
                      {lead.screens || "-"}
                    </td>

                    <td className="p-4">

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">

                        {lead.status || "Nieuw"}

                      </span>

                    </td>

                  </tr>

                ))}

                {(!leads || leads.length === 0) && (

                  <tr>

                    <td
                      colSpan={8}
                      className="p-10 text-center text-slate-500"
                    >

                      Nog geen leads gevonden.

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