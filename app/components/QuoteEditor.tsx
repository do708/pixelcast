"use client";

import { useMemo, useState } from "react";

interface QuoteEditorProps {
  quote: any;
  quoteItems: any[];
  products: any[];
}

export default function QuoteEditor({
  quote,
  quoteItems,
  products,
}: QuoteEditorProps) {

  const [items, setItems] = useState(
    quoteItems.map((item) => ({
      product_id: item.product_id,
      quantity: item.quantity || 1,
      unit_price: Number(item.unit_price),
      name:
        item.products?.name ||
        "Onbekend Product",
    }))
  );

  const [saving, setSaving] =
    useState(false);

  const total = useMemo(() => {

    return items.reduce(
      (sum, item) =>
        sum +
        item.quantity *
          item.unit_price,
      0
    );

  }, [items]);

  function updateQuantity(
    index: number,
    quantity: number
  ) {

    const updated = [...items];

    updated[index].quantity =
      quantity < 1 ? 1 : quantity;

    setItems(updated);
  }

  function removeItem(
    index: number
  ) {

    const updated = [...items];

    updated.splice(index, 1);

    setItems(updated);
  }

  function addProduct(
    productId: number
  ) {

    const product =
      products.find(
        (p) =>
          p.id === productId
      );

    if (!product) return;

    const existingIndex =
      items.findIndex(
        (item) =>
          item.product_id ===
          product.id
      );

    if (
      existingIndex >= 0
    ) {

      const updated =
        [...items];

      updated[
        existingIndex
      ].quantity += 1;

      setItems(updated);

      return;
    }

    setItems([
      ...items,
      {
        product_id:
          product.id,
        quantity: 1,
        unit_price:
          Number(
            product.price
          ),
        name:
          product.name,
      },
    ]);
  }

  async function saveQuote() {

    try {

      setSaving(true);

      const response =
        await fetch(
          `/api/quotes/${quote.id}/update`,
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              items,
              total,
            }),
          }
        );

      const result =
        await response.json();

      if (
        result.success
      ) {

        alert(
          "Offerte opgeslagen"
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

    setSaving(false);
  }

  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold">
          {quote.quote_number}
        </h2>

        <p className="text-slate-600 mt-2">
          {quote.leads?.company}
        </p>

      </div>

      <div className="space-y-4">

        {items.map(
          (
            item,
            index
          ) => {

            const subtotal =
              item.quantity *
              item.unit_price;

            return (

              <div
                key={item.product_id}
                className="border rounded-2xl p-5"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-slate-500">
                      €
                      {item.unit_price.toFixed(
                        2
                      )}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      removeItem(
                        index
                      )
                    }
                    className="text-red-600"
                  >
                    Verwijderen
                  </button>

                </div>

                <div className="mt-4">

                  <label className="block text-sm mb-2">
                    Aantal
                  </label>

                  <input
                    type="number"
                    min={1}
                    value={
                      item.quantity
                    }
                    onChange={(
                      e
                    ) =>
                      updateQuantity(
                        index,
                        Number(
                          e.target
                            .value
                        )
                      )
                    }
                    className="border rounded-xl p-3 w-32"
                  />

                </div>

                <div className="mt-4 font-semibold">

                  Subtotaal: €

                  {subtotal.toFixed(
                    2
                  )}

                </div>

              </div>

            );
          }
        )}

      </div>

      <div>

        <label className="block mb-2 font-semibold">
          Product toevoegen
        </label>

        <select
          className="border rounded-xl p-3"
          onChange={(e) => {

            if (
              e.target.value
            ) {

              addProduct(
                Number(
                  e.target.value
                )
              );

              e.target.value =
                "";
            }
          }}
        >

          <option value="">
            Selecteer product
          </option>

          {products.map(
            (
              product
            ) => (

              <option
                key={
                  product.id
                }
                value={
                  product.id
                }
              >
                {product.name}
              </option>

            )
          )}

        </select>

      </div>

      <div className="bg-slate-100 rounded-2xl p-6">

        <div className="flex justify-between">

          <span className="text-2xl font-bold">
            Totaal
          </span>

          <span className="text-3xl font-bold text-green-700">

            €
            {total.toFixed(
              2
            )}

          </span>

        </div>

      </div>

      <button
        onClick={saveQuote}
        disabled={saving}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl"
      >

        {saving
          ? "Opslaan..."
          : "Offerte Opslaan"}

      </button>

    </div>
  );
}