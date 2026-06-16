import { notFound } from "next/navigation";
import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";
import ProductEditor from "@/app/components/ProductEditor";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const { data: product, error } =
    await supabaseServer
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

  if (error || !product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-5xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                Product Bewerken
              </h1>

              <p className="text-slate-600 mt-2">
                Beheer productinformatie binnen PixelCast CRM
              </p>

            </div>

            <Link
              href="/admin/products"
              className="bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              ← Terug naar Producten
            </Link>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Product Info */}

            <div className="lg:col-span-2">

              <div className="bg-white rounded-3xl shadow p-10">

                <ProductEditor
                  productId={product.id}
                  initialName={product.name}
                  initialCategory={product.category}
                  initialPrice={product.price}
                />

              </div>

            </div>

            {/* Sidebar */}

            <div>

              <div className="bg-white rounded-3xl shadow p-8">

                <h2 className="text-xl font-bold mb-6">
                  Product Informatie
                </h2>

                <div className="space-y-5">

                  <div>

                    <p className="text-sm text-slate-500">
                      Product ID
                    </p>

                    <p className="font-semibold">
                      #{product.id}
                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      Huidige Naam
                    </p>

                    <p className="font-semibold">
                      {product.name}
                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      Categorie
                    </p>

                    <p className="font-semibold">
                      {product.category}
                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      Verkoopprijs
                    </p>

                    <p className="font-semibold text-green-600">
                      € {Number(product.price).toFixed(2)}
                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      Aangemaakt
                    </p>

                    <p className="font-semibold">

                      {product.created_at
                        ? new Date(
                            product.created_at
                          ).toLocaleDateString("nl-NL")
                        : "-"}

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}