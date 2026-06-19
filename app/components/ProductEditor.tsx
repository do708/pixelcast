"use client";

import { useState } from "react";

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
  const [name, setName] =
    useState(initialName);

  const [category, setCategory] =
    useState(initialCategory);

  const [price, setPrice] =
    useState(initialPrice);

  const [loading, setLoading] =
    useState(false);

  async function saveProduct() {
    setLoading(true);

    try {
      const response =
        await fetch(
          `/api/products/${productId}/update`,
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

      if (result.success) {
        alert(
          "Product opgeslagen"
        );
      } else {
        alert(
          result.error ||
            "Opslaan mislukt"
        );
      }
    } catch {
      alert(
        "Opslaan mislukt"
      );
    }

    setLoading(false);
  }

  return (
    <div className="space-y-6">

      <div>

        <label className="block mb-2 font-medium">
          Productnaam
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        />

      </div>

      <div>

        <label className="block mb-2 font-medium">
          Categorie
        </label>

        <input
          type="text"
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        />

      </div>

      <div>

        <label className="block mb-2 font-medium">
          Prijs
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
          className="w-full border rounded-xl p-3"
        />

      </div>

      <button
        onClick={saveProduct}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
      >
        {loading
          ? "Opslaan..."
          : "Product Opslaan"}
      </button>

    </div>
  );
}