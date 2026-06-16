import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {

  const { data: leads } = await supabaseServer
    .from("leads")
    .select("*");

  const total = leads?.length || 0;

  const nieuw =
    leads?.filter(
      (l) => l.status === "Nieuw"
    ).length || 0;

  const contact =
    leads?.filter(
      (l) =>
        l.status ===
        "Contact opgenomen"
    ).length || 0;

  const demo =
    leads?.filter(
      (l) =>
        l.status ===
        "Demo gepland"
    ).length || 0;

  const offerte =
    leads?.filter(
      (l) =>
        l.status ===
        "Offerte verstuurd"
    ).length || 0;

  const gewonnen =
    leads?.filter(
      (l) =>
        l.status ===
        "Gewonnen"
    ).length || 0;

  const verloren =
    leads?.filter(
      (l) =>
        l.status ===
        "Verloren"
    ).length || 0;

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-12">
            PixelCast Dashboard
          </h1>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">

            <div className="bg-white rounded-3xl p-6 shadow">
              <p className="text-slate-500">
                Totaal
              </p>
              <h2 className="text-4xl font-bold">
                {total}
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow">
              <p className="text-slate-500">
                Nieuw
              </p>
              <h2 className="text-4xl font-bold">
                {nieuw}
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow">
              <p className="text-slate-500">
                Contact
              </p>
              <h2 className="text-4xl font-bold">
                {contact}
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow">
              <p className="text-slate-500">
                Demo
              </p>
              <h2 className="text-4xl font-bold">
                {demo}
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow">
              <p className="text-slate-500">
                Offerte
              </p>
              <h2 className="text-4xl font-bold">
                {offerte}
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow">
              <p className="text-slate-500">
                Gewonnen
              </p>
              <h2 className="text-4xl font-bold">
                {gewonnen}
              </h2>
            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-8">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">
                Laatste Leads
              </h2>

              <Link
                href="/admin/leads"
                className="bg-blue-600 text-white px-5 py-3 rounded-xl"
              >
                Alle Leads
              </Link>

            </div>

            <div className="space-y-4">

              {leads
                ?.sort(
                  (a, b) =>
                    new Date(
                      b.created_at
                    ).getTime() -
                    new Date(
                      a.created_at
                    ).getTime()
                )
                .slice(0, 10)
                .map((lead) => (

                  <Link
                    key={lead.id}
                    href={`/admin/leads/${lead.id}`}
                    className="block border rounded-2xl p-4 hover:bg-slate-50"
                  >

                    <div className="flex justify-between">

                      <div>

                        <h3 className="font-semibold">
                          {lead.name}
                        </h3>

                        <p className="text-slate-500">
                          {lead.company}
                        </p>

                      </div>

                      <div>

                        <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">

                          {lead.status || "Nieuw"}

                        </span>

                      </div>

                    </div>

                  </Link>

                ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}