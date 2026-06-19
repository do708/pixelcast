import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase-server";
import SubscriptionEditor from "../../../../components/SubscriptionEditor";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function EditSubscriptionPage({
  params,
}: PageProps) {

  const { id } =
    await params;

  const {
    data: subscription,
  } = await supabaseServer
    .from("subscriptions")
    .select("*")
    .eq(
      "id",
      Number(id)
    )
    .single();

  if (!subscription) {
    notFound();
  }

  const {
    data: lead,
  } = await supabaseServer
    .from("leads")
    .select("*")
    .eq(
      "id",
      subscription.lead_id
    )
    .single();

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="py-16">

        <div className="max-w-5xl mx-auto px-6">

          <SubscriptionEditor
            subscription={
              subscription
            }
            lead={lead}
          />

        </div>

      </section>

    </main>
  );
}