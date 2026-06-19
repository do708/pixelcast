import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {

  const { data: products, error } =
    await supabaseServer
      .from("products")
      .select("*")
      .order("name");

  const totalProducts =
    products?.length || 0;

  const totalValue =
    products?.reduce(
      (sum, product) =>
        sum +
        Number(
          product.price || 0
        ),
      0
    ) || 0;

  const categories =
    [
      ...new Set(
        products?.map(
          (p) =>
            p.category
        ) || []
      ),
    ];

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
                Beheer alle PixelCast producten
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

          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Producten
              </p>

              <h2 className="text-4xl font-bold">
                {totalProducts}
              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Categorieën
              </p>

              <h2 className="text-4xl font-bold">
                {categories.length}
              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow p-6">

              <p className="text-slate-500">
                Totaal Catalogus
              </p>

              <h2 className="text-3xl font-bold text-green-600">

                €
                {totalValue.toFixed(
                  2
                )}

              </h2>

            </div>

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

                  <th className="text-left p-5">
                    Product
                  </th>

                  <th className="text-left p-5">
                    Categorie
                  </th>

                  <th className="text-left p-5">
                    Prijs
                  </th>

                  <th className="text-left p-5">
                    Aangemaakt
                  </th>

                </tr>

              </thead>

              <tbody>

                {products?.map(
                  (
                    product
                  ) => (

                    <tr
                      key={
                        product.id
                      }
                      className="border-t hover:bg-slate-50"
                    >

                      <td className="p-5 font-medium">

                        <Link
                          href={`/admin/products/${product.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          {product.name}
                        </Link>

                      </td>

                      <td className="p-5">

                        <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">

                          {
                            product.category
                          }

                        </span>

                      </td>

                      <td className="p-5 font-semibold text-green-700">

                        €
                        {Number(
                          product.price
                        ).toFixed(
                          2
                        )}

                      </td>

                      <td className="p-5 text-slate-500">

                        {product.created_at
                          ? new Date(
                              product.created_at
                            ).toLocaleDateString(
                              "nl-NL"
                            )
                          : "-"}

                      </td>

                    </tr>

                  )
                )}

                {(!products ||
                  products.length === 0) && (

                  <tr>

                    <td
                      colSpan={4}
                      className="p-10 text-center text-slate-500"
                    >

                      Nog geen producten gevonden

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