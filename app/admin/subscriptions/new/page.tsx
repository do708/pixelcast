"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NewSubscriptionPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [leads, setLeads] =
    useState<any[]>([]);

  const [form, setForm] =
    useState({
      leadId: "",
      description: "",
      monthlyAmount: "",
      startDate: "",
    });

  useEffect(() => {

    async function loadLeads() {

      try {

        const response =
          await fetch(
            "/api/leads/list"
          );

        const result =
          await response.json();

        if (
          result.success
        ) {
          setLeads(
            result.leads
          );
        }

      } catch (
        error
      ) {
        console.error(
          error
        );
      }

    }

    loadLeads();

  }, []);

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    if (
      !form.leadId ||
      !form.description ||
      !form.monthlyAmount
    ) {

      alert(
        "Vul alle verplichte velden in."
      );

      return;
    }

    setLoading(true);

    try {

      const response =
        await fetch(
          "/api/subscriptions/create",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              leadId:
                Number(
                  form.leadId
                ),
              description:
                form.description,
              monthlyAmount:
                Number(
                  form.monthlyAmount
                ),
              startDate:
                form.startDate ||
                null,
            }),
          }
        );

      const result =
        await response.json();

      if (
        result.success
      ) {

        alert(
          "Abonnement aangemaakt"
        );

        router.push(
          "/admin/subscriptions"
        );

      } else {

        alert(
          result.error ||
            "Opslaan mislukt"
        );

      }

    } catch (
      error
    ) {

      console.error(
        error
      );

      alert(
        "Opslaan mislukt"
      );

    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-4xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                Nieuw Abonnement
              </h1>

              <p className="text-slate-600 mt-2">
                Voeg een nieuw maandelijks abonnement toe.
              </p>

            </div>

            <button
              onClick={() =>
                router.push(
                  "/admin/subscriptions"
                )
              }
              className="bg-slate-900 text-white px-5 py-3 rounded-xl"
            >
              Terug
            </button>

          </div>

          <form
            onSubmit={
              handleSubmit
            }
            className="bg-white rounded-3xl shadow p-10 space-y-6"
          >

            <div>

              <label className="block font-semibold mb-2">
                Klant
              </label>

              <select
                value={
                  form.leadId
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    leadId:
                      e.target
                        .value,
                  })
                }
                className="w-full border rounded-xl p-4"
                required
              >

                <option value="">
                  Selecteer klant
                </option>

                {leads.map(
                  (lead) => (

                    <option
                      key={
                        lead.id
                      }
                      value={
                        lead.id
                      }
                    >

                      {lead.company ||
                        lead.name}

                    </option>

                  )
                )}

              </select>

            </div>

            <div>

              <label className="block font-semibold mb-2">
                Omschrijving
              </label>

              <input
                type="text"
                value={
                  form.description
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    description:
                      e.target
                        .value,
                  })
                }
                placeholder="Bijv. Digital Signage Licentie"
                className="w-full border rounded-xl p-4"
                required
              />

            </div>

            <div>

              <label className="block font-semibold mb-2">
                Bedrag per maand (€)
              </label>

              <input
                type="number"
                step="0.01"
                value={
                  form.monthlyAmount
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    monthlyAmount:
                      e.target
                        .value,
                  })
                }
                className="w-full border rounded-xl p-4"
                required
              />

            </div>

            <div>

              <label className="block font-semibold mb-2">
                Startdatum
              </label>

              <input
                type="date"
                value={
                  form.startDate
                }
                onChange={(e) =>
                  setForm({
                    ...form,
                    startDate:
                      e.target
                        .value,
                  })
                }
                className="w-full border rounded-xl p-4"
              />

            </div>

            <div className="pt-4">

              <button
                type="submit"
                disabled={
                  loading
                }
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white px-8 py-4 rounded-xl"
              >

                {loading
                  ? "Opslaan..."
                  : "Abonnement Aanmaken"}

              </button>

            </div>

          </form>

        </div>

      </section>

    </main>
  );
}