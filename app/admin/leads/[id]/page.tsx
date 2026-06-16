import Link from "next/link";
import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase-server";
import StatusDropdown from "@/app/components/StatusDropdown";
import NotesEditor from "@/app/components/NotesEditor";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function LeadDetailPage({
  params,
}: PageProps) {
  const { id } = await params;

  const { data: lead } = await supabaseServer
    .from("leads")
    .select("*")
    .eq("id", id)
    .single();

  if (!lead) {
    notFound();
  }

  const { data: quotes } =
    await supabaseServer
      .from("quotes")
      .select("*")
      .eq("lead_id", lead.id)
      .order("created_at", {
        ascending: false,
      });

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                Lead Details
              </h1>

              <p className="text-slate-600 mt-2">
                PixelCast CRM
              </p>

            </div>

            <Link
              href="/admin/leads"
              className="bg-slate-900 text-white px-6 py-3 rounded-xl"
            >
              ← Terug naar Leads
            </Link>

          </div>

          {/* Lead gegevens */}

          <div className="bg-white rounded-3xl shadow p-10 mb-8">

            <div className="grid md:grid-cols-2 gap-8">

              <div>

                <h3 className="text-sm text-slate-500 mb-1">
                  Naam
                </h3>

                <p className="text-xl font-semibold">
                  {lead.name}
                </p>

              </div>

              <div>

                <h3 className="text-sm text-slate-500 mb-1">
                  Bedrijf
                </h3>

                <p className="text-xl">
                  {lead.company || "-"}
                </p>

              </div>

              <div>

                <h3 className="text-sm text-slate-500 mb-1">
                  E-mail
                </h3>

                <a
                  href={`mailto:${lead.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {lead.email}
                </a>

              </div>

              <div>

                <h3 className="text-sm text-slate-500 mb-1">
                  Telefoon
                </h3>

                <a
                  href={`tel:${lead.phone}`}
                  className="text-blue-600 hover:underline"
                >
                  {lead.phone || "-"}
                </a>

              </div>

              <div>

                <h3 className="text-sm text-slate-500 mb-1">
                  Interesse
                </h3>

                <p>
                  {lead.interest || "-"}
                </p>

              </div>

              <div>

                <h3 className="text-sm text-slate-500 mb-1">
                  Aantal Schermen
                </h3>

                <p>
                  {lead.screens || "-"}
                </p>

              </div>

              <div>

                <h3 className="text-sm text-slate-500 mb-1">
                  Datum
                </h3>

                <p>
                  {lead.created_at
                    ? new Date(
                        lead.created_at
                      ).toLocaleString("nl-NL")
                    : "-"}
                </p>

              </div>

              <div>

                <h3 className="text-sm text-slate-500 mb-1">
                  Status
                </h3>

                <StatusDropdown
                  leadId={lead.id}
                  currentStatus={
                    lead.status || "Nieuw"
                  }
                />

              </div>

            </div>

          </div>

          {/* Bericht */}

          <div className="bg-white rounded-3xl shadow p-10 mb-8">

            <h2 className="text-2xl font-bold mb-6">
              Bericht
            </h2>

            <div className="bg-slate-100 rounded-2xl p-6 whitespace-pre-wrap">

              {lead.message || "Geen bericht"}

            </div>

          </div>

          {/* Notities */}

          <div className="bg-white rounded-3xl shadow p-10 mb-8">

            <h2 className="text-2xl font-bold mb-6">
              Interne Notities
            </h2>

            <NotesEditor
              leadId={lead.id}
              initialNotes={
                lead.notes || ""
              }
            />

          </div>

          {/* Offertes */}

          <div className="bg-white rounded-3xl shadow p-10">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-2xl font-bold">
                Offertes
              </h2>

              <Link
                href={`/admin/quotes/new?lead=${lead.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
              >
                + Nieuwe Offerte
              </Link>

            </div>

            {quotes && quotes.length > 0 ? (

              <div className="space-y-4">

                {quotes.map((quote) => (

                  <Link
                    key={quote.id}
                    href={`/admin/quotes/${quote.id}`}
                    className="flex justify-between items-center border rounded-xl p-4 hover:bg-slate-50"
                  >

                    <div>

                      <p className="font-semibold">
                        {quote.quote_number}
                      </p>

                      <p className="text-sm text-slate-500">
                        {quote.status}
                      </p>

                    </div>

                    <div className="font-bold text-green-600">

                      €
                      {Number(
                        quote.total
                      ).toFixed(2)}

                    </div>

                  </Link>

                ))}

              </div>

            ) : (

              <p className="text-slate-500">
                Er zijn nog geen offertes gekoppeld aan deze lead.
              </p>

            )}

          </div>

        </div>

      </section>

    </main>
  );
}