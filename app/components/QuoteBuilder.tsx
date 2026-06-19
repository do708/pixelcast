"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

interface QuoteBuilderProps {
  leads: any[];
  products: any[];
  defaultLeadId?: string;
}

export default function QuoteBuilder({
  leads,
  products,
  defaultLeadId = "",
}: QuoteBuilderProps) {
  const router = useRouter();

  const [leadId, setLeadId] =
    useState(defaultLeadId);

  const [loading, setLoading] =
    useState(false);

  const [items, setItems] =
    useState<any[]>([]);

  function addProduct(
    product: any
  ) {
    const existing =
      items.find(
        (item) =>
          item.product_id ===
          product.id
      );

    if (existing) {
      const updated =
        items.map((item) =>
          item.product_id ===
          product.id
            ? {
                ...item,
                quantity:
                  item.quantity +
                  1,
              }
            : item
        );

      setItems(updated);
      return;
    }

    setItems([
      ...items,
      {
        product_id:
          product.id,
        name:
          product.name,
        quantity: 1,
        price:
          Number(
            product.price
          ),
      },
    ]);
  }

  function updateQuantity(
    productId: number,
    quantity: number
  ) {
    const updated =
      items.map((item) =>
        item.product_id ===
        productId
          ? {
              ...item,
              quantity:
                quantity < 1
                  ? 1
                  : quantity,
            }
          : item
      );

    setItems(updated);
  }

  function removeProduct(
    productId: number
  ) {
    setItems(
      items.filter(
        (item) =>
          item.product_id !==
          productId
      )
    );
  }

  const total = useMemo(() => {
    return items.reduce(
      (sum, item) =>
        sum +
        item.quantity *
          item.price,
      0
    );
  }, [items]);

  async function createQuote() {
    if (!leadId) {
      alert(
        "Selecteer eerst een klant."
      );
      return;
    }

    if (items.length === 0) {
      alert(
        "Voeg minimaal één product toe."
      );
      return;
    }

    setLoading(true);

    try {
      const response =
        await fetch(
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
              products:
                items.map(
                  (item) => ({
                    id:
                      item.product_id,
                    quantity:
                      item.quantity,
                    price:
                      item.price,
                  })
                ),
            }),
          }
        );

      const result =
        await response.json();

      if (
        result.success
      ) {
        router.push(
          `/admin/quotes/${result.quoteId}`
        );
      } else {
        alert(
          "Offerte aanmaken mislukt."
        );
      }
    } catch {
      alert(
        "Er ging iets fout."
      );
    }

    setLoading(false);
  }

  return (
    <div className="space-y-8">

      <div>

        <label className="block font-semibold mb-2">
          Klant
        </label>

        <select
          value={leadId}
          onChange={(e) =>
            setLeadId(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-4"
        >
          <option value="">
            Selecteer klant
          </option>

          {leads.map(
            (lead) => (
              <option
                key={lead.id}
                value={lead.id}
              >
                {lead.company ||
                  lead.name}
              </option>
            )
          )}
        </select>

      </div>

      <div>

        <label className="block font-semibold mb-3">
          Product toevoegen
        </label>

        <select
          onChange={(e) => {
            const product =
              products.find(
                (p) =>
                  String(
                    p.id
                  ) ===
                  e.target.value
              );

            if (product) {
              addProduct(
                product
              );
            }

            e.target.value =
              "";
          }}
          className="w-full border rounded-xl p-4"
        >
          <option value="">
            Kies product
          </option>

          {products.map(
            (product) => (
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

      {items.length > 0 && (

        <div className="bg-white border rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-6">
            Productregels
          </h3>

          <div className="space-y-4">

            {items.map(
              (item) => (

                <div
                  key={
                    item.product_id
                  }
                  className="grid grid-cols-12 gap-4 items-center"
                >

                  <div className="col-span-5">
                    {item.name}
                  </div>

                  <div className="col-span-2">

                    <input
                      type="number"
                      min="1"
                      value={
                        item.quantity
                      }
                      onChange={(
                        e
                      ) =>
                        updateQuantity(
                          item.product_id,
                          Number(
                            e
                              .target
                              .value
                          )
                        )
                      }
                      className="w-full border rounded-lg p-2"
                    />

                  </div>

                  <div className="col-span-2">

                    €
                    {item.price.toFixed(
                      2
                    )}

                  </div>

                  <div className="col-span-2 font-semibold">

                    €
                    {(
                      item.quantity *
                      item.price
                    ).toFixed(
                      2
                    )}

                  </div>

                  <div className="col-span-1">

                    <button
                      onClick={() =>
                        removeProduct(
                          item.product_id
                        )
                      }
                      className="text-red-600"
                    >
                      ✕
                    </button>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      )}

      <div className="bg-green-50 border border-green-200 rounded-2xl p-6">

        <div className="flex justify-between">

          <span className="text-xl font-bold">
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
        onClick={
          createQuote
        }
        disabled={
          loading
        }
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl"
      >
        {loading
          ? "Aanmaken..."
          : "Offerte Aanmaken"}
      </button>

    </div>
  );
}