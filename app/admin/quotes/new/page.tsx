import { supabaseServer } from "@/lib/supabase-server";
import QuoteBuilder from "@/app/components/QuoteBuilder";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    lead?: string;
  }>;
}

export default async function NewQuotePage({
  searchParams,
}: PageProps) {
  const { lead } = await searchParams;

  const { data: leads } =
    await supabaseServer
      .from("leads")
      .select("*")
      .order("name");

  const { data: products } =
    await supabaseServer
      .from("products")
      .select("*")
      .order("name");

  const selectedLead =
    leads?.find(
      (item) =>
        String(item.id) === String(lead)
    ) || null;

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                Nieuwe Offerte
              </h1>

              <p className="text-slate-600 mt-2">
                Maak een nieuwe offerte voor een bestaande lead.
              </p>

            </div>

            <Link
              href="/admin/quotes"
              className="bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              ← Terug naar Offertes
            </Link>

          </div>

          {selectedLead && (

            <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6 mb-8">

              <h2 className="text-xl font-bold mb-2">
                Geselecteerde Lead
              </h2>

              <p>
                <strong>
                  {selectedLead.name}
                </strong>

                {selectedLead.company &&
                  ` - ${selectedLead.company}`}
              </p>

              <p className="text-slate-600">
                {selectedLead.email}
              </p>

            </div>

          )}

          <div className="bg-white rounded-3xl shadow p-10">

            <QuoteBuilder
              leads={leads || []}
              products={products || []}
              defaultLeadId={
                lead || ""
              }
            />

          </div>

        </div>

      </section>

    </main>
  );
}