"use client";

import {
  useEffect,
  useState,
} from "react";

export default function SendQuotePage() {

  const [email, setEmail] =
    useState("");

  const [subject, setSubject] =
    useState(
      "Uw PixelCast offerte"
    );

  const [message, setMessage] =
    useState(`Beste klant,

In de bijlage vindt u onze offerte.

Met vriendelijke groet,

PixelCast`);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    async function loadLead() {

      const quoteId =
        window.location.pathname
          .split("/")[3];

      const response =
        await fetch(
          `/api/quotes/${quoteId}/recipient`
        );

      const result =
        await response.json();

      if (
        result.success
      ) {
        setEmail(
          result.email
        );
      }
    }

    loadLead();

  }, []);

  async function sendMail() {

    setLoading(true);

    try {

      const quoteId =
        window.location.pathname
          .split("/")[3];

      const response =
        await fetch(
          "/api/quotes/send",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              quoteId,
              to: email,
              subject,
              message,
              pdfUrl:
                `${window.location.origin}/api/quotes/${quoteId}/pdf`,
            }),
          }
        );

      const result =
        await response.json();

      if (
        result.success
      ) {
        alert(
          "Offerte verzonden"
        );
      }

    } catch {

      alert(
        "Verzenden mislukt"
      );

    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-3xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow p-10">

            <h1 className="text-4xl font-bold mb-8">
              Offerte Versturen
            </h1>

            <div className="space-y-6">

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                value={subject}
                onChange={(e) =>
                  setSubject(
                    e.target.value
                  )
                }
                className="w-full border rounded-xl p-4"
              />

              <textarea
                rows={10}
                value={message}
                onChange={(e) =>
                  setMessage(
                    e.target.value
                  )
                }
                className="w-full border rounded-xl p-4"
              />

              <button
                onClick={
                  sendMail
                }
                disabled={
                  loading
                }
                className="bg-purple-600 text-white px-8 py-4 rounded-xl"
              >
                Versturen
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}