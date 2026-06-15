
export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-32">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold mb-8">
            Corporate Digital Signage
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Versterk interne communicatie, verbeter bezoekerservaringen
            en maak realtime bedrijfsinformatie zichtbaar binnen uw organisatie.
          </p>

        </div>

      </section>

      {/* INTRO */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">
            Communicatie Die Werkt
          </h2>

          <p className="text-xl text-slate-600">
            Moderne organisaties hebben behoefte aan snelle,
            centrale en betrouwbare communicatie. PixelCast helpt
            bedrijven om medewerkers, bezoekers en klanten beter te informeren.
          </p>

        </div>

      </section>

      {/* OPLOSSINGEN */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Corporate Oplossingen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                📊 KPI Dashboards
              </h3>

              <p>
                Toon realtime bedrijfsresultaten, productiecijfers
                en operationele prestaties.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                👥 Interne Communicatie
              </h3>

              <p>
                Deel nieuws, veiligheidsmeldingen,
                evenementen en bedrijfsupdates.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                🏢 Bezoekersinformatie
              </h3>

              <p>
                Professionele ontvangstschermen,
                wayfinding en bezoekersregistratie.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TOEPASSINGEN */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Ideaal Voor
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border rounded-2xl p-8 text-center">
              🏢 Kantoren
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🏭 Productiebedrijven
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🚚 Logistiek
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🏦 Financiële Instellingen
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🏛️ Overheid
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🏫 Onderwijs
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🏢 Hoofdkantoren
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🌍 Internationale Organisaties
            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Waarom PixelCast?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Centrale contentdistributie
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ PixelCast Cloud beheer
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Multi-site ondersteuning
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Realtime dashboards
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Beveiligde cloudomgeving
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Schaalbaar van 1 tot 1000+ schermen
            </div>

          </div>

        </div>

      </section>

      {/* PIXELCAST CLOUD */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">
            Volledig Beheerd Met PixelCast Cloud
          </h2>

          <p className="text-xl text-slate-600 mb-16">
            Beheer schermen, content, locaties en gebruikers
            vanuit één centraal dashboard.
          </p>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border rounded-2xl p-6">
              📺 Device Management
            </div>

            <div className="border rounded-2xl p-6">
              📊 Monitoring
            </div>

            <div className="border rounded-2xl p-6">
              🔄 Remote Reboot
            </div>

            <div className="border rounded-2xl p-6">
              📅 Planning
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Klaar Voor Slimmere Bedrijfscommunicatie?
          </h2>

          <p className="text-xl mt-6">
            Ontdek hoe PixelCast uw organisatie kan ondersteunen
            met professionele Digital Signage oplossingen.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
          >
            Vraag Een Demo Aan
          </a>

        </div>

      </section>

    </main>
  );
}