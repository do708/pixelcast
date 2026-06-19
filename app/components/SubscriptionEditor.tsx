"use client";

interface Props {
  subscription: any;
  lead: any;
}

export default function SubscriptionEditor({
  subscription,
  lead,
}: Props) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Abonnement Bewerken
      </h2>

      <div className="space-y-4">

        <div>
          <strong>Klant:</strong>{" "}
          {lead?.company}
        </div>

        <div>
          <strong>Omschrijving:</strong>{" "}
          {subscription.description}
        </div>

        <div>
          <strong>Bedrag:</strong> €
          {Number(
            subscription.monthly_amount || 0
          ).toFixed(2)}
        </div>

      </div>

    </div>
  );
}