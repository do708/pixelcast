"use client";

export default function DeleteQuoteButton({
  quoteId,
}: {
  quoteId: number;
}) {
  async function remove() {

    if (
      !confirm(
        "Offerte verwijderen?"
      )
    ) {
      return;
    }

    const response =
      await fetch(
        `/api/quotes/${quoteId}/delete`,
        {
          method:
            "DELETE",
        }
      );

    const result =
      await response.json();

    if (
      result.success
    ) {
      window.location.href =
        "/admin/quotes";
    }
  }

  return (
    <button
      onClick={remove}
      className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl"
    >
      Verwijderen
    </button>
  );
}