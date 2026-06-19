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

function getQuoteStatusColor(
  status: string
) {
  switch (status) {
    case "Concept":
      return "bg-slate-100 text-slate-700";

    case "Verstuurd":
      return "bg-blue-100 text-blue-700";

    case "Geaccepteerd":
      return "bg-green-100 text-green-700";

    case "Afgewezen":
      return "bg-red-100 text-red-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default async function LeadDetailPage({
  params,
}: PageProps) {
  const { id } = await params;

  const { data: lead } =
    await supabaseServer
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

  const totalQuoteValue =
    (quotes || []).reduce(
      (sum, quote) =>
        sum +
        Number(
          quote.total || 0
        ),
      0
    );

  const acceptedQuotes =
    (quotes || []).filter(
      (q) =>
        q.status ===
        "Geaccepteerd"
    ).length;

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                {lead.name}
              </h1>

              <p className="text-slate-600 mt-2">
                {lead.company}
              </p>

            </div>

            <Link
              href="/admin/leads"
              className="bg-slate-900 text-white px-6 py-3 rounded-xl"
            >
              Terug
            </Link>

          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Offertes
              </p>

              <div className="text-4xl font-bold">
                {quotes?.length || 0}
              </div>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Totale Waarde
              </p>

              <div className="text-3xl font-bold text-green-600">

                €
                {totalQuoteValue.toFixed(
                  2
                )}

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Geaccepteerd
              </p>

              <div className="text-4xl font-bold text-green-600">

                {acceptedQuotes}

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Lead Status
              </p>

              <div className="mt-3">

                <StatusDropdown
                  leadId={lead.id}
                  currentStatus={
                    lead.status ||
                    "Nieuw"
                  }
                />

              </div>

            </div>

          </div>

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

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-10 mb-8">

            <h2 className="text-2xl font-bold mb-6">
              Bericht
            </h2>

            <div className="bg-slate-100 rounded-2xl p-6 whitespace-pre-wrap">

              {lead.message || "Geen bericht"}

            </div>

          </div>

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

                {quotes.map(
                  (quote) => (

                    <Link
                      key={quote.id}
                      href={`/admin/quotes/${quote.id}`}
                      className="flex justify-between items-center border rounded-xl p-4 hover:bg-slate-50"
                    >

                      <div>

                        <p className="font-semibold">
                          {quote.quote_number}
                        </p>

                        <span
                          className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${getQuoteStatusColor(
                            quote.status
                          )}`}
                        >
                          {quote.status}
                        </span>

                      </div>

                      <div className="font-bold text-green-600">

                        €
                        {Number(
                          quote.total
                        ).toFixed(2)}

                      </div>

                    </Link>

                  )
                )}

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