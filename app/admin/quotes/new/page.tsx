import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";
import QuoteBuilder from "@/app/components/QuoteBuilder";

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

  const leadId = lead ?? "";

  const { data: leads, error: leadsError } =
    await supabaseServer
      .from("leads")
      .select("*")
      .order("name");

  const { data: products, error: productsError } =
    await supabaseServer
      .from("products")
      .select("*")
      .order("name");

  if (leadsError) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Fout bij laden van leads
          </h1>

          <p>{leadsError.message}</p>
        </div>
      </main>
    );
  }

  if (productsError) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Fout bij laden van producten
          </h1>

          <p>{productsError.message}</p>
        </div>
      </main>
    );
  }

  const selectedLead =
    leads?.find(
      (item) =>
        String(item.id) === String(leadId)
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

              <p className="text-slate-600 mt-3">
                Maak een nieuwe offerte voor een bestaande lead.
              </p>

            </div>

            <Link
              href="/admin/quotes"
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl transition"
            >
              ← Terug naar Offertes
            </Link>

          </div>

          {selectedLead && (

            <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6 mb-8">

              <h2 className="text-xl font-bold mb-4">
                Geselecteerde Lead
              </h2>

              <div className="grid md:grid-cols-3 gap-6">

                <div>

                  <p className="text-sm text-slate-500">
                    Naam
                  </p>

                  <p className="font-semibold">
                    {selectedLead.name}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Bedrijf
                  </p>

                  <p className="font-semibold">
                    {selectedLead.company || "-"}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    E-mail
                  </p>

                  <p className="font-semibold">
                    {selectedLead.email}
                  </p>

                </div>

              </div>

            </div>

          )}

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <QuoteBuilder
              leads={leads || []}
              products={products || []}
              defaultLeadId={leadId}
            />

          </div>

        </div>

      </section>

    </main>
  );
}