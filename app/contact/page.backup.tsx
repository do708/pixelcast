export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold mb-8">
            Contact
          </h1>

          <p className="text-xl text-slate-600">
            Heeft u vragen over Digital Signage, Audio Solutions of PixelCast Cloud?
            Neem vrijblijvend contact met ons op.
          </p>

        </div>

      </section>

      {/* CONTACT FORMULIER */}

      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Neem Contact Op
          </h2>

          <form className="space-y-6">

            <div>
              <label className="block font-semibold mb-2">
                Naam *
              </label>

              <input
                type="text"
                placeholder="Uw naam"
                className="w-full border rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Bedrijfsnaam
              </label>

              <input
                type="text"
                placeholder="Bedrijfsnaam"
                className="w-full border rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                E-mailadres *
              </label>

              <input
                type="email"
                placeholder="naam@bedrijf.nl"
                className="w-full border rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Telefoonnummer
              </label>

              <input
                type="tel"
                placeholder="+31 6 12345678"
                className="w-full border rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Interesse In
              </label>

              <select className="w-full border rounded-xl p-4">
                <option>Digital Signage</option>
                <option>Audio Solutions</option>
                <option>PixelCast Cloud</option>
                <option>Combinatie</option>
                <option>Anders</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Aantal Schermen
              </label>

              <input
                type="number"
                placeholder="Bijvoorbeeld 5"
                className="w-full border rounded-xl p-4"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Bericht
              </label>

              <textarea
                rows={6}
                placeholder="Vertel ons iets over uw project..."
                className="w-full border rounded-xl p-4"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Verstuur Aanvraag
            </button>

          </form>

        </div>

      </section>

      {/* CONTACTGEGEVENS */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Contactgegevens
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <a
              href="mailto:info@pixelcast.eu"
              className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition p-8 text-center"
            >
              <div className="text-5xl mb-4">
                📧
              </div>

              <h3 className="text-2xl font-bold mb-2">
                E-mail
              </h3>

              <p className="text-slate-600">
                info@pixelcast.eu
              </p>
            </a>

            <a
              href="/"
              className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition p-8 text-center"
            >
              <div className="text-5xl mb-4">
                🌍
              </div>

              <h3 className="text-2xl font-bold mb-2">
                Website
              </h3>

              <p className="text-slate-600">
                pixelcast.eu
              </p>
            </a>

            <a
              href="https://cms.pixelcast.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition p-8 text-center"
            >
              <div className="text-5xl mb-4">
                ☁️
              </div>

              <h3 className="text-2xl font-bold mb-2">
                Platform
              </h3>

              <p className="text-slate-600">
                PixelCast Cloud
              </p>

              <p className="text-xs text-slate-400 mt-2">
                Binnenkort beschikbaar
              </p>
            </a>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Veelgestelde Vragen
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                📺 Kan ik bestaande schermen gebruiken?
              </h3>

              <p className="text-slate-600">
                Vaak kunnen bestaande schermen of systemen worden hergebruikt.
                Wij beoordelen graag de mogelijkheden op locatie.
              </p>

            </div>

            <div className="border rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                🌍 Kan PixelCast meerdere locaties beheren?
              </h3>

              <p className="text-slate-600">
                Ja. Met PixelCast Cloud beheert u eenvoudig één of honderden
                locaties vanuit één centraal dashboard.
              </p>

            </div>

            <div className="border rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                🎯 Is een demonstratie mogelijk?
              </h3>

              <p className="text-slate-600">
                Ja. Wij verzorgen graag een vrijblijvende demonstratie
                op locatie of online.
              </p>

            </div>

            <div className="border rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                ☁️ Wat is PixelCast Cloud?
              </h3>

              <p className="text-slate-600">
                PixelCast Cloud biedt centrale controle,
                contentplanning en monitoring van uw complete signage netwerk.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}