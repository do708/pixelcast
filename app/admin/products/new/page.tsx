"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const categories = [
  "Digital Signage",
  "Player",
  "Display",
  "Touchscreen",
  "Videowall",
  "Mounting",
  "Audio",
  "Software",
  "Licentie",
  "Installatie",
  "Onderhoud",
  "Dienst",
  "Hardware",
];

export default function NewProductPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    const form =
      e.currentTarget;

    const formData =
      new FormData(form);

    const name =
      String(
        formData.get("name")
      );

    const category =
      String(
        formData.get("category")
      );

    const price =
      Number(
        formData.get("price")
      );

    if (!name.trim()) {
      alert(
        "Productnaam ontbreekt"
      );
      return;
    }

    if (!category.trim()) {
      alert(
        "Categorie ontbreekt"
      );
      return;
    }

    if (price <= 0) {
      alert(
        "Prijs moet groter zijn dan 0"
      );
      return;
    }

    setLoading(true);

    try {

      const response =
        await fetch(
          "/api/products/create",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              name,
              category,
              price,
            }),
          }
        );

      const result =
        await response.json();

      if (
        result.success
      ) {

        alert(
          "✅ Product opgeslagen"
        );

        router.push(
          "/admin/products"
        );

      } else {

        alert(
          "❌ Product opslaan mislukt"
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "❌ Er ging iets fout"
      );

    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-3xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                Nieuw Product
              </h1>

              <p className="text-slate-600 mt-2">
                Voeg een product toe aan de PixelCast catalogus
              </p>

            </div>

            <a
              href="/admin/products"
              className="bg-slate-900 text-white px-5 py-3 rounded-xl"
            >
              Terug
            </a>

          </div>

          <form
            onSubmit={
              handleSubmit
            }
            className="bg-white rounded-3xl shadow p-10 space-y-6"
          >

            <div>

              <label className="block font-semibold mb-2">
                Productnaam
              </label>

              <input
                name="name"
                required
                className="w-full border rounded-xl p-4"
                placeholder="Samsung QM55C"
              />

            </div>

            <div>

              <label className="block font-semibold mb-2">
                Categorie
              </label>

              <select
                name="category"
                required
                className="w-full border rounded-xl p-4"
              >

                <option value="">
                  Kies categorie
                </option>

                {categories.map(
                  (
                    category
                  ) => (

                    <option
                      key={
                        category
                      }
                      value={
                        category
                      }
                    >
                      {category}
                    </option>

                  )
                )}

              </select>

            </div>

            <div>

              <label className="block font-semibold mb-2">
                Prijs (€)
              </label>

              <input
                name="price"
                type="number"
                step="0.01"
                min="0"
                required
                className="w-full border rounded-xl p-4"
                placeholder="999.00"
              />

            </div>

            <button
              type="submit"
              disabled={
                loading
              }
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-8 py-4 rounded-xl font-semibold"
            >

              {loading
                ? "Opslaan..."
                : "Product Opslaan"}

            </button>

          </form>

        </div>

      </section>

    </main>
  );
}