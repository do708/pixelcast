"use client";

export default function QuoteStatusSelect({
  quoteId,
  status,
}: {
  quoteId: number;
  status: string;
}) {
  async function updateStatus(
    value: string
  ) {
    await fetch(
      `/api/quotes/${quoteId}/status`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          status: value,
        }),
      }
    );

    location.reload();
  }

  return (
    <select
      value={status}
      onChange={(e) =>
        updateStatus(
          e.target.value
        )
      }
      className="border rounded-xl p-3"
    >
      <option>
        Concept
      </option>

      <option>
        Verstuurd
      </option>

      <option>
        Geaccepteerd
      </option>

      <option>
        Afgewezen
      </option>

      <option>
        Factureren
      </option>
    </select>
  );
}