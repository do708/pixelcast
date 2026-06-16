"use client";

import { useState } from "react";

export default function NewProductPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);

    try {
      const formData = new FormData(form);

      const response = await fetch(
        "/api/products/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            category: formData.get("category"),
            price: Number(
              formData.get("price")
            ),
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("✅ Product opgeslagen");
        form.reset();
      } else {
        alert("❌ Fout bij opslaan");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Er ging iets fout");
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
                Voeg een product toe aan de PixelCast catalogus.
              </p>

            </div>

            <a
              href="/admin/products"
              className="bg-slate-900 text-white px-5 py-3 rounded-xl"
            >
              ← Terug
            </a>

          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow p-10 space-y-6"
          >

            <div>

              <label className="block font-semibold mb-2">
                Productnaam
              </label>

              <input
                name="name"
                required
                placeholder="PixelCast Professional"
                className="w-full border rounded-xl p-4"
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

                <option value="Software">
                  Software
                </option>

                <option value="Hardware">
                  Hardware
                </option>

                <option value="Dienst">
                  Dienst
                </option>

                <option value="Audio">
                  Audio
                </option>

                <option value="Digital Signage">
                  Digital Signage
                </option>
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
                required
                placeholder="24.95"
                className="w-full border rounded-xl p-4"
              />

            </div>

            <div className="pt-4">

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-8 py-4 rounded-xl font-semibold"
              >
                {loading
                  ? "Opslaan..."
                  : "Product Opslaan"}
              </button>

            </div>

          </form>

        </div>

      </section>

    </main>
  );
}