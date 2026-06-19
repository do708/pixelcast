"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface AcceptQuoteButtonProps {
  quoteId: number;
}

export default function AcceptQuoteButton({
  quoteId,
}: AcceptQuoteButtonProps) {

  const router =
    useRouter();

  const [loading, setLoading] =
    useState(false);

  async function acceptQuote() {

    const confirmed =
      confirm(
        "Weet je zeker dat je deze offerte wilt accepteren?"
      );

    if (!confirmed) {
      return;
    }

    try {

      setLoading(true);

      const response =
        await fetch(
          "/api/quotes/accept",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              quoteId,
            }),
          }
        );

      const result =
        await response.json();

      if (
        result.success
      ) {

        alert(
          "Offerte geaccepteerd en klant aangemaakt."
        );

        router.refresh();

      } else {

        alert(
          result.error ||
            "Er ging iets fout."
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
    <button
      onClick={acceptQuote}
      disabled={loading}
      className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl"
    >

      {loading
        ? "Verwerken..."
        : "Offerte Accepteren"}

    </button>
  );
}