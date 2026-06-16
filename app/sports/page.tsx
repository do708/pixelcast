import Image from "next/image";

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold mb-8">
            Digital Signage voor Sportclubs
          </h1>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Informeer leden, bezoekers en sponsoren met professionele
            schermcommunicatie. Perfect voor voetbalverenigingen,
            tennisparken, zwembaden, sporthallen en clubhuizen.
          </p>

          <div className="mt-12">

            <Image
              src="/images/sports.png"
              alt="Sports Digital Signage"
              width={1600}
              height={900}
              className="rounded-3xl shadow-2xl mx-auto"
              priority
            />

          </div>

        </div>

      </section>

      {/* WAAROM */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Waarom Digital Signage voor Sportclubs?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                📢 Clubcommunicatie
              </h3>

              <p>
                Informeer leden direct over trainingen,
                wedstrijden, evenementen en mededelingen.
              </p>

            </div>

            <div className="border rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                🤝 Sponsorpresentatie
              </h3>

              <p>
                Geef sponsoren meer zichtbaarheid met
                dynamische advertenties en promoties.
              </p>

            </div>

            <div className="border rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                💰 Extra Inkomsten
              </h3>

              <p>
                Creëer nieuwe sponsorinkomsten door
                schermtijd commercieel aan te bieden.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TOEPASSINGEN */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Toepassingen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                ⚽ Voetbalverenigingen
              </h3>

              <p>
                Wedstrijdschema's, uitslagen,
                sponsoren en clubnieuws.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                🎾 Tennisverenigingen
              </h3>

              <p>
                Baanplanning, evenementen,
                toernooien en sponsorcommunicatie.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                🏊 Zwembaden
              </h3>

              <p>
                Openingstijden, lessen,
                veiligheidsinformatie en evenementen.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                🏑 Hockeyclubs
              </h3>

              <p>
                Clubinformatie, wedstrijden,
                evenementen en sponsorpresentaties.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                🏋️ Fitnesscentra
              </h3>

              <p>
                Lesroosters, aanbiedingen,
                nieuws en instructievideo's.
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                🍻 Kantines & Clubhuizen
              </h3>

              <p>
                Menu's, acties,
                evenementen en sponsoruitingen.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PIXELCAST CLOUD */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h2 className="text-5xl font-bold mb-8">
                Beheer Alles Vanuit PixelCast Cloud
              </h2>

              <ul className="space-y-4 text-lg">

                <li>✓ Centrale content planning</li>
                <li>✓ Schermen op afstand beheren</li>
                <li>✓ Sponsorcampagnes plannen</li>
                <li>✓ Wedstrijdinformatie realtime wijzigen</li>
                <li>✓ Multi-locatie ondersteuning</li>
                <li>✓ Monitoring & meldingen</li>

              </ul>

            </div>

            <div>

              <Image
                src="/images/dashboard.jpg"
                alt="PixelCast Dashboard"
                width={1920}
                height={1080}
                className="rounded-3xl shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* VOORDELEN */}

      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Voordelen voor Uw Vereniging
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-800 rounded-2xl p-8">
              ✓ Meer zichtbaarheid voor sponsoren
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
              ✓ Professionele uitstraling
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
              ✓ Realtime communicatie
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
              ✓ Extra sponsorinkomsten
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
              ✓ Eenvoudig centraal beheer
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
              ✓ Schaalbaar van 1 tot 100+ schermen
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Klaar om uw vereniging digitaal te versterken?
          </h2>

          <p className="text-xl mt-6">
            Ontdek hoe PixelCast uw club kan helpen met professionele
            schermcommunicatie en sponsorbeheer.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold"
          >
            Vraag Een Demo Aan
          </a>

        </div>

      </section>

    </main>
  );
}