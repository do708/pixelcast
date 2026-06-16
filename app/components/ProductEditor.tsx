"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProductEditorProps {
  productId: number;
  initialName: string;
  initialCategory: string;
  initialPrice: number;
}

export default function ProductEditor({
  productId,
  initialName,
  initialCategory,
  initialPrice,
}: ProductEditorProps) {
  const router = useRouter();

  const [name, setName] = useState(initialName);
  const [category, setCategory] = useState(initialCategory);
  const [price, setPrice] = useState(initialPrice);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function saveProduct() {
    setSaving(true);

    try {
      const response = await fetch(
        "/api/products/update",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            id: productId,
            name,
            category,
            price,
          }),
        }
      );

      const result =
        await response.json();

      if (result.success) {
        alert(
          "✅ Product opgeslagen"
        );
      } else {
        alert(
          "❌ Opslaan mislukt"
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "❌ Er ging iets fout"
      );
    }

    setSaving(false);
  }

  async function deleteProduct() {
    const confirmed =
      confirm(
        "Weet je zeker dat je dit product wilt verwijderen?"
      );

    if (!confirmed) return;

    setDeleting(true);

    try {
      const response = await fetch(
        "/api/products/delete",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            id: productId,
          }),
        }
      );

      const result =
        await response.json();

      if (result.success) {
        alert(
          "✅ Product verwijderd"
        );

        router.push(
          "/admin/products"
        );
      } else {
        alert(
          "❌ Verwijderen mislukt"
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "❌ Er ging iets fout"
      );
    }

    setDeleting(false);
  }

  return (
    <div className="space-y-6">

      <div>

        <label className="block font-semibold mb-2">
          Productnaam
        </label>

        <input
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-4"
        />

      </div>

      <div>

        <label className="block font-semibold mb-2">
          Categorie
        </label>

        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-4"
        >
          <option>
            Software
          </option>

          <option>
            Hardware
          </option>

          <option>
            Dienst
          </option>

          <option>
            Audio
          </option>

          <option>
            Digital Signage
          </option>

        </select>

      </div>

      <div>

        <label className="block font-semibold mb-2">
          Prijs (€)
        </label>

        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) =>
            setPrice(
              Number(
                e.target.value
              )
            )
          }
          className="w-full border rounded-xl p-4"
        />

      </div>

      <div className="flex gap-4 pt-4">

        <button
          onClick={saveProduct}
          disabled={saving}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl"
        >
          {saving
            ? "Opslaan..."
            : "Product Opslaan"}
        </button>

        <button
          onClick={deleteProduct}
          disabled={deleting}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl"
        >
          {deleting
            ? "Verwijderen..."
            : "Product Verwijderen"}
        </button>

      </div>

    </div>
  );
}