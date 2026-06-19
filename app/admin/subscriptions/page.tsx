import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function SubscriptionsPage() {

  const { data: subscriptions } =
    await supabaseServer
      .from("subscriptions")
      .select(`
        *,
        leads (
          id,
          name,
          company,
          email
        )
      `)
      .order("created_at", {
        ascending: false,
      });

  const activeSubscriptions =
    subscriptions?.filter(
      (s) =>
        s.status === "Actief"
    ) || [];

  const inactiveSubscriptions =
    subscriptions?.filter(
      (s) =>
        s.status !== "Actief"
    ) || [];

  const mrr =
    activeSubscriptions.reduce(
      (sum, item) =>
        sum +
        Number(
          item.monthly_amount || 0
        ),
      0
    );

  const yearlyRevenue =
    mrr * 12;

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                Abonnementen
              </h1>

              <p className="text-slate-600 mt-2">
                Terugkerende omzet en licenties.
              </p>

            </div>

            <Link
              href="/admin/subscriptions/new"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              + Nieuw Abonnement
            </Link>

          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-10">

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Actief
              </p>

              <h2 className="text-4xl font-bold">

                {activeSubscriptions.length}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Gestopt
              </p>

              <h2 className="text-4xl font-bold text-red-600">

                {inactiveSubscriptions.length}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                MRR
              </p>

              <h2 className="text-4xl font-bold text-green-600">

                €
                {mrr.toFixed(2)}

              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Jaaromzet
              </p>

              <h2 className="text-4xl font-bold text-blue-600">

                €
                {yearlyRevenue.toFixed(2)}

              </h2>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="text-left p-5">
                    Klant
                  </th>

                  <th className="text-left p-5">
                    Omschrijving
                  </th>

                  <th className="text-left p-5">
                    Bedrag p/m
                  </th>

                  <th className="text-left p-5">
                    Startdatum
                  </th>

                  <th className="text-left p-5">
                    Status
                  </th>

                  <th className="text-left p-5">
                    Acties
                  </th>

                </tr>

              </thead>

              <tbody>

                {subscriptions?.map(
                  (subscription) => (

                    <tr
                      key={subscription.id}
                      className="border-t"
                    >

                      <td className="p-5">

                        <div>

                          <div className="font-semibold">

                            {subscription.leads?.company ||
                              subscription.leads?.name}

                          </div>

                          <div className="text-sm text-slate-500">

                            {subscription.leads?.email}

                          </div>

                        </div>

                      </td>

                      <td className="p-5">

                        {subscription.description}

                      </td>

                      <td className="p-5 font-semibold text-green-600">

                        €
                        {Number(
                          subscription.monthly_amount
                        ).toFixed(2)}

                      </td>

                      <td className="p-5">

                        {subscription.start_date || "-"}

                      </td>

                      <td className="p-5">

                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            subscription.status === "Actief"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >

                          {subscription.status}

                        </span>

                      </td>

                      <td className="p-5">

                        <Link
                          href={`/admin/subscriptions/${subscription.id}`}
                          className="bg-slate-900 text-white px-4 py-2 rounded-lg"
                        >
                          Open
                        </Link>

                      </td>

                    </tr>

                  )
                )}

                {(!subscriptions ||
                  subscriptions.length === 0) && (

                  <tr>

                    <td
                      colSpan={6}
                      className="p-10 text-center text-slate-500"
                    >

                      Nog geen abonnementen gevonden.

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