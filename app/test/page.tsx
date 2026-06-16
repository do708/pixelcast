"use client";

import { useState } from "react";

export default function TestPage() {
  const [loading, setLoading] = useState(false);

async function sendLead() {
  try {
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Dominic de Beer",
        company: "PixelCast",
        email: "info@pixelcast.eu",
        phone: "0612345678",
        interest: "Digital Signage",
        screens: 10,
        message: "Dit is een testbericht",
      }),
    });

    const result = await response.json();

    console.log(result);

    alert(
      result.success
        ? "Lead opgeslagen!"
        : "Er ging iets fout"
    );
  } catch (error) {
    console.error(error);
    alert("API fout");
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="p-20">
      <button
        onClick={sendLead}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-4 rounded-xl"
      >
        Test Lead Opslaan
      </button>
    </main>
  );
}