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
    case "Actief":
      return "bg-green-100 text-green-700";

    case "Gestopt":
      return "bg-red-100 text-red-700";

    case "Gepauzeerd":
      return "bg-yellow-100 text-yellow-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default async function SubscriptionPage({
  params,
}: PageProps) {

  const { id } =
    await params;

  const {
    data: subscription,
  } = await supabaseServer
    .from("subscriptions")
    .select("*")
    .eq(
      "id",
      Number(id)
    )
    .single();

  if (!subscription) {
    notFound();
  }

  const {
    data: lead,
  } = await supabaseServer
    .from("leads")
    .select("*")
    .eq(
      "id",
      subscription.lead_id
    )
    .single();

  const yearlyRevenue =
    Number(
      subscription.monthly_amount || 0
    ) * 12;

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">

                {subscription.description}

              </h1>

              <p className="text-slate-600 mt-2">

                {lead?.company ||
                  lead?.name}

              </p>

            </div>

            <div className="flex gap-3">

              <Link
                href={`/admin/subscriptions/${subscription.id}/edit`}
                className="bg-blue-600 text-white px-5 py-3 rounded-xl"
              >
                Bewerken
              </Link>

              <Link
                href="/admin/subscriptions"
                className="bg-slate-900 text-white px-5 py-3 rounded-xl"
              >
                Terug
              </Link>

            </div>

          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-8">

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Maandbedrag
              </p>

              <h2 className="text-4xl font-bold text-green-600">

                €
                {Number(
                  subscription.monthly_amount
                ).toFixed(2)}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Jaarwaarde
              </p>

              <h2 className="text-4xl font-bold text-blue-600">

                €
                {yearlyRevenue.toFixed(2)}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Startdatum
              </p>

              <h2 className="text-xl font-bold">

                {subscription.start_date ||
                  "-"}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Status
              </p>

              <div className="mt-3">

                <span
                  className={`px-4 py-2 rounded-xl font-semibold ${getStatusColor(
                    subscription.status
                  )}`}
                >
                  {subscription.status}
                </span>

              </div>

            </div>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-2xl font-bold mb-6">
                Klantgegevens
              </h2>

              <div className="space-y-4">

                <div>

                  <p className="text-slate-500">
                    Naam
                  </p>

                  <p className="font-semibold">
                    {lead?.name}
                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    Bedrijf
                  </p>

                  <p className="font-semibold">
                    {lead?.company}
                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    E-mail
                  </p>

                  <p className="font-semibold">
                    {lead?.email}
                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    Telefoon
                  </p>

                  <p className="font-semibold">
                    {lead?.phone}
                  </p>

                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow p-8">

              <h2 className="text-2xl font-bold mb-6">
                Abonnement
              </h2>

              <div className="space-y-4">

                <div>

                  <p className="text-slate-500">
                    Omschrijving
                  </p>

                  <p className="font-semibold">
                    {subscription.description}
                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    Aangemaakt
                  </p>

                  <p className="font-semibold">

                    {new Date(
                      subscription.created_at
                    ).toLocaleDateString(
                      "nl-NL"
                    )}

                  </p>

                </div>

                <div>

                  <p className="text-slate-500">
                    Status
                  </p>

                  <p className="font-semibold">
                    {subscription.status}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}