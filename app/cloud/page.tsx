export default function CloudPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-32">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="inline-block bg-blue-500/20 border border-blue-400 px-4 py-2 rounded-full mb-8">
            PixelCast Cloud Platform
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Beheer Elk Scherm.
            <br />
            Overal.
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            PixelCast Cloud biedt volledige controle over uw complete
            Digital Signage netwerk vanuit één centraal dashboard.
          </p>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">

            <a
              href="/contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
            >
              Gratis Demo
            </a>

            <a
              href="/pricing"
              className="border border-white px-8 py-4 rounded-xl"
            >
              Bekijk Tarieven
            </a>

          </div>

        </div>

      </section>

      {/* DASHBOARD */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-6">
            Eén Dashboard Voor Alles
          </h2>

          <p className="text-center text-slate-600 text-xl mb-16">
            Realtime inzicht in al uw schermen, locaties en campagnes.
          </p>

          <div className="bg-slate-900 rounded-3xl p-10 text-white">

            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-green-600 rounded-2xl p-6">
                <h3 className="text-4xl font-bold">127</h3>
                <p>Online Schermen</p>
              </div>

              <div className="bg-red-600 rounded-2xl p-6">
                <h3 className="text-4xl font-bold">2</h3>
                <p>Offline Schermen</p>
              </div>

              <div className="bg-blue-600 rounded-2xl p-6">
                <h3 className="text-4xl font-bold">14</h3>
                <p>Actieve Campagnes</p>
              </div>

              <div className="bg-purple-600 rounded-2xl p-6">
                <h3 className="text-4xl font-bold">18</h3>
                <p>Locaties</p>
              </div>

            </div>

            <div className="mt-10 border border-slate-700 rounded-2xl p-8">

              <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-slate-800 rounded-xl p-6">
                  Amsterdam Store
                  <div className="text-green-400 mt-2">
                    ● Online
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl p-6">
                  Rotterdam Store
                  <div className="text-green-400 mt-2">
                    ● Online
                  </div>
                </div>

                <div className="bg-slate-800 rounded-xl p-6">
                  Utrecht Store
                  <div className="text-red-400 mt-2">
                    ● Offline
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Functionaliteiten
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                📺 Device Management
              </h3>

              <p>
                Beheer alle schermen vanuit één centraal dashboard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                📊 Health Monitoring
              </h3>

              <p>
                Controleer realtime de status van elk scherm.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                🔄 Remote Reboot
              </h3>

              <p>
                Herstart schermen op afstand zonder locatiebezoek.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                📅 Content Planning
              </h3>

              <p>
                Plan content op datum, tijd of locatie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                🏢 Multi Site Management
              </h3>

              <p>
                Beheer honderden locaties vanuit één omgeving.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                🚨 Alerts & Meldingen
              </h3>

              <p>
                Ontvang direct meldingen bij storingen.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Waarom PixelCast Cloud?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border rounded-2xl p-6">
              ✓ Minder storingen
            </div>

            <div className="border rounded-2xl p-6">
              ✓ Lagere beheerkosten
            </div>

            <div className="border rounded-2xl p-6">
              ✓ Volledige controle
            </div>

            <div className="border rounded-2xl p-6">
              ✓ Schaalbaar naar duizenden schermen
            </div>

            <div className="border rounded-2xl p-6">
              ✓ Nederlandse ondersteuning
            </div>

            <div className="border rounded-2xl p-6">
              ✓ Cloud gebaseerd platform
            </div>

          </div>

        </div>

      </section>

      {/* PRICING CTA */}

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Klaar Voor PixelCast Cloud?
          </h2>

          <p className="text-xl mt-6">
            Ontdek hoe eenvoudig centraal schermbeheer kan zijn.
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