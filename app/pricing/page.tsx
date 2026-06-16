export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold mb-6">
            PixelCast Cloud Tarieven
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transparante prijzen. Geen verborgen kosten.
            Schaalbaar van één scherm tot complete internationale netwerken.
          </p>

        </div>

      </section>

      {/* PRIJSKAARTEN */}

<section className="py-24">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid lg:grid-cols-3 gap-8">

      {/* BASIC */}

      <div className="bg-white border rounded-3xl p-8 shadow-sm flex flex-col min-h-[700px]">

        <h3 className="text-3xl font-bold">
          Basic
        </h3>

        <p className="text-slate-500 mt-2">
          Voor kleine installaties
        </p>

        <div className="mt-8">

          <span className="text-6xl font-bold">
            €17,95
          </span>

          <p className="text-slate-500 mt-2">
            per scherm / maand
          </p>

          <p className="text-sm text-slate-400">
            Jaarlijks gefactureerd
          </p>

        </div>

        <ul className="mt-8 space-y-4 flex-grow">

          <li>✓ Cloud CMS</li>
          <li>✓ Content Planning</li>
          <li>✓ Afbeeldingen & Video</li>
          <li>✓ Playlists</li>
          <li>✓ Schermplanning</li>
          <li>✓ E-mail Support</li>

        </ul>

        <a
          href="/contact"
          className="mt-auto text-center bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
        >
          Demo Aanvragen
        </a>

      </div>

      {/* PROFESSIONAL */}

      <div className="bg-white border-4 border-purple-500 rounded-3xl p-8 shadow-xl flex flex-col min-h-[700px]">

        <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          MEEST GEKOZEN
        </div>

        <h3 className="text-3xl font-bold">
          Professional
        </h3>

        <p className="text-slate-500 mt-2">
          Voor professionele organisaties
        </p>

        <div className="mt-8">

          <span className="text-6xl font-bold">
            €24,95
          </span>

          <p className="text-slate-500 mt-2">
            per scherm / maand
          </p>

          <p className="text-sm text-slate-400">
            Jaarlijks gefactureerd
          </p>

        </div>

        <ul className="mt-8 space-y-4 flex-grow">

          <li>✓ Alles uit Basic</li>
          <li>✓ 24/7 Monitoring</li>
          <li>✓ Remote Reboot</li>
          <li>✓ Statusmeldingen</li>
          <li>✓ Android Player Inclusief</li>
          <li>✓ Prioriteit Support</li>

        </ul>

        <a
          href="/contact"
          className="mt-auto text-center bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-semibold transition"
        >
          Demo Aanvragen
        </a>

      </div>

      {/* ENTERPRISE */}

      <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl flex flex-col min-h-[700px]">

        <h3 className="text-3xl font-bold">
          Enterprise
        </h3>

        <p className="text-slate-300 mt-2">
          Voor grotere organisaties
        </p>

        <div className="mt-8">

          <span className="text-6xl font-bold">
            €34,95
          </span>

          <p className="text-slate-300 mt-2">
            per scherm / maand
          </p>

          <p className="text-sm text-slate-400">
            Jaarlijks gefactureerd
          </p>

        </div>

        <ul className="mt-8 space-y-4 flex-grow">

          <li>✓ Alles uit Professional</li>
          <li>✓ API Integraties</li>
          <li>✓ Multi-Locatie Beheer</li>
          <li>✓ Gebruikersrollen</li>
          <li>✓ Rapportages</li>
          <li>✓ SLA Support</li>

        </ul>

        <a
          href="/contact"
          className="mt-auto text-center bg-white text-slate-900 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
        >
          Contact Opnemen
        </a>

      </div>

    </div>

    <p className="text-center text-slate-500 mt-10">
      Alle prijzen zijn exclusief BTW en worden jaarlijks gefactureerd.
    </p>

  </div>

</section>
      {/* VERGELIJKINGSTABEL */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Vergelijk Onze Pakketten
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full bg-white rounded-3xl overflow-hidden shadow-lg">

              <thead className="bg-slate-100">

                <tr>
                  <th className="p-5 text-left">Functionaliteit</th>
                  <th className="p-5">Basic</th>
                  <th className="p-5">Professional</th>
                  <th className="p-5">Enterprise</th>
                </tr>

              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="p-5">Cloud CMS</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>

                <tr className="border-b">
                  <td className="p-5">Content Planning</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>

                <tr className="border-b">
                  <td className="p-5">Playlists</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>

                <tr className="border-b">
                  <td className="p-5">24/7 Monitoring</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>

                <tr className="border-b">
                  <td className="p-5">Remote Reboot</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>

                <tr className="border-b">
                  <td className="p-5">Android Player Inclusief</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✓</td>
                  <td className="text-center">✓</td>
                </tr>

                <tr className="border-b">
                  <td className="p-5">API Integraties</td>
                  <td className="text-center">—</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✓</td>
                </tr>

                <tr className="border-b">
                  <td className="p-5">Multi-Locatie Beheer</td>
                  <td className="text-center">—</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✓</td>
                </tr>

                <tr>
                  <td className="p-5">SLA Support</td>
                  <td className="text-center">—</td>
                  <td className="text-center">—</td>
                  <td className="text-center">✓</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </main>
  );
}