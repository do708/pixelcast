import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function CustomersPage() {

  const { data: customers } =
    await supabaseServer
      .from("customers")
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
                Klanten
              </h1>

              <p className="text-slate-600 mt-2">
                Alle actieve klanten.
              </p>

            </div>

            <Link
              href="/admin"
              className="bg-slate-900 text-white px-5 py-3 rounded-xl"
            >
              Dashboard
            </Link>

          </div>

          <div className="bg-white rounded-3xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="text-left p-5">
                    Bedrijf
                  </th>

                  <th className="text-left p-5">
                    Contact
                  </th>

                  <th className="text-left p-5">
                    Email
                  </th>

                  <th className="text-left p-5">
                    Telefoon
                  </th>

                </tr>

              </thead>

              <tbody>

                {customers?.map(
                  (customer) => (

                    <tr
                      key={customer.id}
                      className="border-t"
                    >

                      <td className="p-5 font-semibold">

  <Link
    href={`/admin/customers/${customer.id}`}
    className="text-blue-600 hover:underline"
  >
    {customer.company}
  </Link>

</td>

                      <td className="p-5">
                        {customer.contact_name}
                      </td>

                      <td className="p-5">
                        {customer.email}
                      </td>

                      <td className="p-5">
                        {customer.phone}
                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </main>
  );
}