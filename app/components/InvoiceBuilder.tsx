"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  customers: any[];
}

export default function InvoiceBuilder({
  customers,
}: Props) {

  const router =
    useRouter();

  const [loading, setLoading] =
    useState(false);

  const [customerId, setCustomerId] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [dueDate, setDueDate] =
    useState("");

  async function createInvoice() {

    if (!customerId) {
      alert(
        "Selecteer een klant"
      );
      return;
    }

    if (!amount) {
      alert(
        "Voer een bedrag in"
      );
      return;
    }

    setLoading(true);

    try {

      const response =
        await fetch(
          "/api/invoices/create",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              customerId,
              amount,
              dueDate,
            }),
          }
        );

      const result =
        await response.json();

      if (
        result.success
      ) {

        router.push(
          `/admin/invoices/${result.invoiceId}`
        );

      } else {

        alert(
          result.error
        );

      }

    } catch {

      alert(
        "Factuur aanmaken mislukt"
      );

    }

    setLoading(false);
  }

  return (
    <div className="space-y-6">

      <div>

        <label className="block font-semibold mb-2">
          Klant
        </label>

        <select
          value={customerId}
          onChange={(e) =>
            setCustomerId(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-4"
        >

          <option value="">
            Selecteer klant
          </option>

          {customers.map(
            (customer) => (

              <option
                key={customer.id}
                value={customer.id}
              >
                {customer.company}
              </option>

            )
          )}

        </select>

      </div>

      <div>

        <label className="block font-semibold mb-2">
          Bedrag
        </label>

        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) =>
            setAmount(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-4"
        />

      </div>

      <div>

        <label className="block font-semibold mb-2">
          Vervaldatum
        </label>

        <input
          type="date"
          value={dueDate}
          onChange={(e) =>
            setDueDate(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-4"
        />

      </div>

      <button
        onClick={
          createInvoice
        }
        disabled={
          loading
        }
        className="bg-blue-600 text-white px-8 py-4 rounded-xl"
      >

        {loading
          ? "Aanmaken..."
          : "Factuur Aanmaken"}

      </button>

    </div>
  );
}