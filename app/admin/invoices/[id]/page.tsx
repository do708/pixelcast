import Link from "next/link";
import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase-server";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamic = "force-dynamic";

function getStatusColor(
  status: string
) {
  switch (status) {
    case "Betaald":
      return "bg-green-100 text-green-700";

    case "Verzonden":
      return "bg-blue-100 text-blue-700";

    case "Concept":
      return "bg-slate-100 text-slate-700";

    case "Vervallen":
      return "bg-red-100 text-red-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default async function InvoicePage({
  params,
}: PageProps) {

  const { id } =
    await params;

  const {
    data: invoice,
  } = await supabaseServer
    .from("invoices")
    .select("*")
    .eq(
      "id",
      Number(id)
    )
    .single();

  if (!invoice) {
    notFound();
  }

  const {
    data: customer,
  } = await supabaseServer
    .from("customers")
    .select("*")
    .eq(
      "id",
      invoice.customer_id
    )
    .single();

  const vat =
    Number(invoice.amount || 0) *
    0.21;

  const totalInclVat =
    Number(invoice.amount || 0) +
    vat;

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                {invoice.invoice_number}
              </h1>

              <p className="text-slate-600 mt-2">
                Factuurdossier
              </p>

            </div>

            <div className="flex gap-3">

              <a
                href={`/api/invoices/${invoice.id}/pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-5 py-3 rounded-xl"
              >
                PDF
              </a>

              <Link
                href={`/admin/invoices/${invoice.id}/send`}
                className="bg-purple-600 text-white px-5 py-3 rounded-xl"
              >
                Mailen
              </Link>

              <Link
                href="/admin/invoices"
                className="bg-slate-900 text-white px-5 py-3 rounded-xl"
              >
                Terug
              </Link>

            </div>

          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Factuurbedrag
              </p>

              <div className="text-3xl font-bold text-green-600">

                €
                {Number(
                  invoice.amount
                ).toFixed(2)}

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                BTW
              </p>

              <div className="text-3xl font-bold text-blue-600">

                €
                {vat.toFixed(2)}

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Totaal incl. BTW
              </p>

              <div className="text-3xl font-bold text-purple-600">

                €
                {totalInclVat.toFixed(
                  2
                )}

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Status
              </p>

              <div className="mt-3">

                <span
                  className={`px-4 py-2 rounded-xl font-semibold ${getStatusColor(
                    invoice.status
                  )}`}
                >
                  {invoice.status}
                </span>

              </div>

            </div>

          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">

            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-2xl font-bold mb-6">
                Klantgegevens
              </h2>

              <div className="space-y-4">

                <div>

                  <p className="text-slate-500">
                    Bedrijf
                  </p>

                  <p className="font-semibold">
                    {customer?.company}
                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    Contactpersoon
                  </p>

                  <p className="font-semibold">
                    {customer?.contact_name}
                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    E-mail
                  </p>

                  <p className="font-semibold">
                    {customer?.email}
                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    Telefoon
                  </p>

                  <p className="font-semibold">
                    {customer?.phone}
                  </p>

                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-2xl font-bold mb-6">
                Factuurinformatie
              </h2>

              <div className="space-y-4">

                <div>

                  <p className="text-slate-500">
                    Factuurnummer
                  </p>

                  <p className="font-semibold">
                    {invoice.invoice_number}
                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    Status
                  </p>

                  <p className="font-semibold">
                    {invoice.status}
                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    Factuurdatum
                  </p>

                  <p className="font-semibold">

                    {new Date(
                      invoice.created_at
                    ).toLocaleDateString(
                      "nl-NL"
                    )}

                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    Vervaldatum
                  </p>

                  <p className="font-semibold">
                    {invoice.due_date}
                  </p>

                </div>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-2xl font-bold mb-6">
              Financieel Overzicht
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between border-b pb-3">

                <span>
                  Bedrag excl. BTW
                </span>

                <strong>
                  €
                  {Number(
                    invoice.amount
                  ).toFixed(2)}
                </strong>

              </div>

              <div className="flex justify-between border-b pb-3">

                <span>
                  BTW 21%
                </span>

                <strong>
                  €
                  {vat.toFixed(2)}
                </strong>

              </div>

              <div className="flex justify-between text-2xl font-bold text-green-600 pt-3">

                <span>
                  Totaal incl. BTW
                </span>

                <span>
                  €
                  {totalInclVat.toFixed(
                    2
                  )}
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}