"use client";

import { useState } from "react";

const statuses = [
  "Nieuw",
  "Contact opgenomen",
  "Demo gepland",
  "Offerte verstuurd",
  "Gewonnen",
  "Verloren",
];

interface Props {
  leadId: number;
  currentStatus: string;
}

export default function StatusDropdown({
  leadId,
  currentStatus,
}: Props) {
  const [status, setStatus] = useState(
    currentStatus || "Nieuw"
  );

  async function updateStatus(
    newStatus: string
  ) {
    setStatus(newStatus);

    await fetch("/api/leads/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: leadId,
        status: newStatus,
      }),
    });
  }

  return (
    <select
      value={status}
      onChange={(e) =>
        updateStatus(e.target.value)
      }
      className="border rounded-xl px-4 py-2"
    >
      {statuses.map((item) => (
        <option
          key={item}
          value={item}
        >
          {item}
        </option>
      ))}
    </select>
  );
}