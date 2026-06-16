import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const { data: products, error } = await supabaseServer
    .from("products")
    .select("*")
    .order("name");

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                Producten
              </h1>

              <p className="text-slate-600 mt-2">
                Beheer alle PixelCast producten.
              </p>

            </div>

            <div className="flex gap-4">

              <Link
                href="/admin"
                className="bg-slate-900 text-white px-5 py-3 rounded-xl"
              >
                Dashboard
              </Link>

              <Link
                href="/admin/products/new"
                className="bg-blue-600 text-white px-5 py-3 rounded-xl"
              >
                + Nieuw Product
              </Link>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-6 mb-8">

            <p className="text-slate-500">
              Totaal Producten
            </p>

            <h2 className="text-4xl font-bold">
              {products?.length || 0}
            </h2>

          </div>

          {error && (

            <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-xl mb-6">

              {error.message}

            </div>

          )}

          <div className="bg-white rounded-3xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="text-left p-4">
                    Product
                  </th>

                  <th className="text-left p-4">
                    Categorie
                  </th>

                  <th className="text-left p-4">
                    Prijs
                  </th>

                </tr>

              </thead>

              <tbody>

                {products?.map((product) => (

                  <tr
                    key={product.id}
                    className="border-t hover:bg-slate-50"
                  >

                    <td className="p-4 font-medium">

                      <Link
                        href={`/admin/products/${product.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {product.name}
                      </Link>

                    </td>

                    <td className="p-4">
                      {product.category}
                    </td>

                    <td className="p-4">
                      € {Number(product.price).toFixed(2)}
                    </td>

                  </tr>

                ))}

                {(!products || products.length === 0) && (

                  <tr>

                    <td
                      colSpan={3}
                      className="p-10 text-center text-slate-500"
                    >

                      Nog geen producten gevonden.

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