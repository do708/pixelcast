import Link from "next/link";
import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase-server";
import SubscriptionEditor from "@/app/components/SubscriptionEditor";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function EditSubscriptionPage({
  params,
}: PageProps) {

  const { id } =
    await params;

  const {
    data: subscription,
    error,
  } = await supabaseServer
    .from("subscriptions")
    .select("*")
    .eq(
      "id",
      Number(id)
    )
    .single();

  if (
    error ||
    !subscription
  ) {
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

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-5xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                Abonnement Bewerken
              </h1>

              <p className="text-slate-600 mt-2">
                {
                  subscription.description
                }
              </p>

            </div>

            <div className="flex gap-3">

              <Link
                href={`/admin/subscriptions/${subscription.id}`}
                className="bg-slate-900 text-white px-5 py-3 rounded-xl"
              >
                Terug
              </Link>

            </div>

          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Klant
              </p>

              <h2 className="text-xl font-bold mt-2">
                {lead?.company ||
                  lead?.name}
              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Maandbedrag
              </p>

              <h2 className="text-3xl font-bold text-green-600 mt-2">

                €
                {Number(
                  subscription.monthly_amount || 0
                ).toFixed(2)}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Status
              </p>

              <h2 className="text-xl font-bold mt-2">

                {subscription.status}

              </h2>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-10">

            <SubscriptionEditor
              subscription={
                subscription
              }
              lead={lead}
            />

          </div>

        </div>

      </section>

    </main>
  );
}