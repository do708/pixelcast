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
                Beheer productinformatie
              </p>
            </div>

            <Link
              href="/admin/products"
              className="bg-slate-900 text-white px-5 py-3 rounded-xl"
            >
              ← Terug
            </Link>

          </div>

          <div className="bg-white rounded-3xl shadow p-10">

            <ProductEditor
              productId={product.id}
              initialName={product.name}
              initialCategory={product.category}
              initialPrice={product.price}
            />

          </div>

        </div>
      </section>
    </main>
  );
}