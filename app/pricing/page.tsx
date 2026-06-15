export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-32">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold mb-8">
            PixelCast Cloud Tarieven
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            Transparante jaarlijkse licenties voor elk type organisatie.
            Geen verborgen kosten. Geen maandelijkse contracten.
          </p>

          <div className="mt-8 inline-block bg-white/20 px-5 py-3 rounded-full">
            Jaarlijkse facturatie
          </div>

        </div>

      </section>

      {/* PRICING */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-4 gap-8">

            {/* BASIC */}

            <div className="border rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Basic
              </h3>

              <p className="text-6xl font-bold">
                €149
              </p>

              <p className="text-slate-500 mt-2">
                per scherm / jaar
              </p>

              <ul className="mt-8 space-y-4">

                <li>✓ Content Management</li>
                <li>✓ Content Planning</li>
                <li>✓ Remote Updates</li>
                <li>✓ Cloud Platform</li>
                <li>✓ Standaard Support</li>

              </ul>

              <a
                href="/contact"
                className="block mt-10 text-center bg-slate-900 text-white py-4 rounded-xl"
              >
                Offerte Aanvragen
              </a>

            </div>

            {/* PROFESSIONAL */}

            <div className="border-4 border-purple-600 rounded-3xl p-8 relative shadow-xl">

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
                MEEST GEKOZEN
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Professional
              </h3>

              <p className="text-6xl font-bold">
                €249
              </p>

              <p className="text-slate-500 mt-2">
                per scherm / jaar
              </p>

              <ul className="mt-8 space-y-4">

                <li>✓ Alles uit Basic</li>
                <li>✓ Health Monitoring</li>
                <li>✓ Remote Reboot</li>
                <li>✓ Prioriteit Support</li>
                <li>✓ Meldingen & Alerts</li>
                <li>✓ Gratis Android Player</li>

              </ul>

              <a
                href="/contact"
                className="block mt-10 text-center bg-purple-600 text-white py-4 rounded-xl"
              >
                Demo Aanvragen
              </a>

            </div>

            {/* ENTERPRISE */}

            <div className="border rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-4">
                Enterprise
              </h3>

              <p className="text-6xl font-bold">
                €349
              </p>

              <p className="text-slate-500 mt-2">
                per scherm / jaar
              </p>

              <ul className="mt-8 space-y-4">

                <li>✓ Alles uit Professional</li>
                <li>✓ Multi Site Management</li>
                <li>✓ SLA Ondersteuning</li>
                <li>✓ Geavanceerde Rapportages</li>
                <li>✓ Gebruikersbeheer</li>
                <li>✓ API Voorbereid</li>

              </ul>

              <a
                href="/contact"
                className="block mt-10 text-center bg-slate-900 text-white py-4 rounded-xl"
              >
                Offerte Aanvragen
              </a>

            </div>

            {/* ENTERPRISE+ */}

            <div className="border rounded-3xl p-8 bg-slate-900 text-white">

              <h3 className="text-2xl font-bold mb-4">
                Enterprise+
              </h3>

              <p className="text-4xl font-bold">
                Op Aanvraag
              </p>

              <p className="text-slate-400 mt-2">
                Volledig maatwerk
              </p>

              <ul className="mt-8 space-y-4">

                <li>✓ Alles uit Enterprise</li>
                <li>✓ Dedicated Accountmanager</li>
                <li>✓ API Integraties</li>
                <li>✓ Custom Development</li>
                <li>✓ Onboarding Op Locatie</li>
                <li>✓ Internationale Uitrol</li>

              </ul>

              <a
                href="/contact"
                className="block mt-10 text-center bg-white text-slate-900 py-4 rounded-xl font-bold"
              >
                Contact Sales
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURE MATRIX */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Functionaliteiten
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full bg-white rounded-3xl overflow-hidden">

              <thead className="bg-slate-900 text-white">

                <tr>
                  <th className="p-5 text-left">Functie</th>
                  <th className="p-5">Basic</th>
                  <th className="p-5">Professional</th>
                  <th className="p-5">Enterprise</th>
                  <th className="p-5">Enterprise+</th>
                </tr>

              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="p-5">Content Management</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>

                <tr className="border-b">
                  <td className="p-5">Health Monitoring</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>

                <tr className="border-b">
                  <td className="p-5">Remote Reboot</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>

                <tr className="border-b">
                  <td className="p-5">Multi Site Management</td>
                  <td className="text-center">—</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>

                <tr>
                  <td className="p-5">API Integraties</td>
                  <td className="text-center">—</td>
                  <td className="text-center">—</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✓</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Klaar Om Te Starten?
          </h2>

          <p className="text-xl mt-6">
            Vraag vandaag nog een vrijblijvende demonstratie aan.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold"
          >
            Demo Aanvragen
          </a>

        </div>

      </section>

    </main>
  );
}