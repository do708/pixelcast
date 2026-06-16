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

      {/* CONTACT */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* FORMULIER */}

            <div>

              <h2 className="text-4xl font-bold mb-8">
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

            {/* CONTACT INFO */}

            <div>

              <h2 className="text-4xl font-bold mb-8">
                Contactgegevens
              </h2>

              <div className="grid md:grid-cols-3 gap-6">

                {/* EMAIL */}

                <a
                  href="mailto:info@pixelcast.eu"
                  className="bg-slate-50 rounded-3xl p-8 text-center hover:shadow-lg transition"
                >

                  <div className="text-4xl mb-4">
                    📧
                  </div>

                  <h3 className="font-bold text-xl mb-2">
                    E-mail
                  </h3>

                  <p className="text-blue-600 break-all">
                    info@pixelcast.eu
                  </p>

                </a>

                {/* WEBSITE */}

                <a
                  href="/"
                  className="bg-slate-50 rounded-3xl p-8 text-center hover:shadow-lg transition"
                >

                  <div className="text-4xl mb-4">
                    🌍
                  </div>

                  <h3 className="font-bold text-xl mb-2">
                    Website
                  </h3>

                  <p className="text-blue-600">
                    pixelcast.eu
                  </p>

                </a>

                {/* PLATFORM */}

                <a
                  href="https://cms.pixelcast.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-50 rounded-3xl p-8 text-center hover:shadow-lg transition"
                >

                  <div className="text-4xl mb-4">
                    ☁️
                  </div>

                  <h3 className="font-bold text-xl mb-2">
                    Platform
                  </h3>

                  <p className="text-blue-600">
                    PixelCast Cloud
                  </p>

                  <p className="text-xs text-slate-500 mt-2">
                    Binnenkort beschikbaar
                  </p>

                </a>

              </div>

              {/* FAQ */}

              <div className="bg-slate-50 rounded-3xl p-10 mt-8">

                <h3 className="text-2xl font-bold mb-6">
                  Veelgestelde Vraag
                </h3>

                <h4 className="font-semibold mb-2">
                  Kan ik bestaande schermen gebruiken?
                </h4>

                <p className="text-slate-600">
                  Vaak kunnen bestaande schermen of systemen worden hergebruikt.
                  Wij komen graag bij u op locatie om de huidige situatie te beoordelen
                  en geven een eerlijk advies over de meest geschikte en
                  kostenefficiënte oplossing.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Klaar om te starten?
          </h2>

          <p className="text-xl mt-6">
            Neem vandaag nog contact op voor een vrijblijvend gesprek
            of demonstratie van PixelCast.
          </p>

          <a
            href="mailto:info@pixelcast.eu"
            className="inline-block mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold"
          >
            Mail Ons Direct
          </a>

        </div>

      </section>

    </main>
  );
}