"use client";

export default function CreateInvoiceButton({
  quoteId,
  amount,
}: {
  quoteId: number;
  amount: number;
}) {

  async function createInvoice() {

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
            quoteId,
            amount,
          }),
        }
      );

    const result =
      await response.json();

    if (
      result.success
    ) {
      alert(
        "Factuur aangemaakt"
      );
    }
  }

  return (
    <button
      onClick={
        createInvoice
      }
      className="bg-orange-600 text-white px-5 py-3 rounded-xl"
    >
      Factuur maken
    </button>
  );
}