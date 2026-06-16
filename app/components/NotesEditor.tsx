"use client";

import { useState } from "react";

interface Props {
  leadId: number;
  initialNotes: string;
}

export default function NotesEditor({
  leadId,
  initialNotes,
}: Props) {
  const [notes, setNotes] = useState(
    initialNotes || ""
  );

  async function saveNotes() {
    await fetch("/api/leads/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: leadId,
        notes,
      }),
    });

    alert("Notities opgeslagen");
  }

  return (
    <div className="space-y-4">

      <textarea
        value={notes}
        onChange={(e) =>
          setNotes(e.target.value)
        }
        rows={8}
        className="w-full border rounded-xl p-4"
      />

      <button
        onClick={saveNotes}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Notities Opslaan
      </button>

    </div>
  );
}