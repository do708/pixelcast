"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface QuoteBuilderProps {
  leads: any[];
  products: any[];
}

export default function QuoteBuilder({
  leads,
  products,
}: QuoteBuilderProps) {
  const router = useRouter();

  const [leadId, setLeadId] = useState("");
  const [loading, setLoading] = useState(false);

  const [selectedProducts, setSelectedProducts] =
    useState<number[]>([]);

  function toggleProduct(productId: number) {
    setSelectedProducts((current) =>
      current.includes(productId)
        ? current.filter(
            (id) => id !== productId
          )
        : [...current, productId]
    );
  }

  const chosenProducts = products.filter(
    (product) =>
      selectedProducts.includes(product.id)
  );

  const total = chosenProducts.reduce(
    (sum, product) =>
      sum + Number(product.price),
    0
  );

  async function createQuote() {
    if (!leadId) {
      alert("Selecteer eerst een klant.");
      return;
    }

    if (chosenProducts.length === 0) {
      alert(
        "Selecteer minimaal één product."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "/api/quotes/create",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            leadId,
            total,

            products: chosenProducts.map(
              (product) => ({
                id: product.id,
                price: product.price,
              })
            ),
          }),
        }
      );

      const result =
        await response.json();

      if (result.success) {
        router.push(
          `/admin/quotes/${result.quoteId}`
        );
      } else {
        alert(
          "Offerte kon niet worden aangemaakt."
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Er ging iets fout."
      );
    }

    setLoading(false);
  }

  return (
    <div className="space-y-8">

      {/* Klant */}

      <div>

        <label className="block font-semibold mb-2">
          Klant
        </label>

        <select
          value={leadId}
          onChange={(e) =>
            setLeadId(e.target.value)
          }
          className="w-full border rounded-xl p-4"
        >

          <option value="">
            Selecteer klant
          </option>

          {leads.map((lead) => (

            <option
              key={lead.id}
              value={lead.id}
            >
              {lead.name}
              {lead.company
                ? ` - ${lead.company}`
                : ""}
            </option>

          ))}

        </select>

      </div>

      {/* Producten */}

      <div>

        <label className="block font-semibold mb-4">
          Producten
        </label>

        <div className="space-y-3">

          {products.map((product) => (

            <label
              key={product.id}
              className="flex justify-between items-center border rounded-xl p-4 hover:bg-slate-50 cursor-pointer"
            >

              <div>

                <input
                  type="checkbox"
                  checked={selectedProducts.includes(
                    product.id
                  )}
                  onChange={() =>
                    toggleProduct(product.id)
                  }
                  className="mr-3"
                />

                {product.name}

                <span className="ml-2 text-sm text-slate-500">
                  ({product.category})
                </span>

              </div>

              <div className="font-semibold">

                €
                {Number(
                  product.price
                ).toFixed(2)}

              </div>

            </label>

          ))}

        </div>

      </div>

      {/* Geselecteerde producten */}

      {chosenProducts.length > 0 && (

        <div className="bg-slate-100 rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-4">
            Geselecteerde Producten
          </h3>

          <div className="space-y-2">

            {chosenProducts.map(
              (product) => (

                <div
                  key={product.id}
                  className="flex justify-between"
                >

                  <span>
                    {product.name}
                  </span>

                  <span>

                    €
                    {Number(
                      product.price
                    ).toFixed(2)}

                  </span>

                </div>

              )
            )}

          </div>

        </div>

      )}

      {/* Totaal */}

      <div className="bg-green-50 border border-green-200 rounded-2xl p-6">

        <div className="flex justify-between items-center">

          <span className="text-xl font-semibold">
            Totaal
          </span>

          <span className="text-3xl font-bold text-green-700">

            €
            {total.toFixed(2)}

          </span>

        </div>

      </div>

      {/* Actie */}

      <button
        onClick={createQuote}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-8 py-4 rounded-xl font-semibold"
      >
        {loading
          ? "Offerte aanmaken..."
          : "Offerte Aanmaken"}
      </button>

    </div>
  );
}