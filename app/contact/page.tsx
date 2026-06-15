export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-32">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold mb-8">
            Vraag Een Demo Aan
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            Ontdek hoe PixelCast uw communicatie kan verbeteren met
            Digital Signage, Audio Oplossingen en PixelCast Cloud.
          </p>

        </div>

      </section>

      {/* FORMULIER */}

      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white border rounded-3xl shadow-lg p-10">

            <h2 className="text-4xl font-bold mb-10 text-center">
              Vraag Een Vrijblijvende Demo Aan
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block mb-2 font-medium">
                  Bedrijfsnaam
                </label>

                <input
                  type="text"
                  className="w-full border rounded-xl p-4"
                  placeholder="Uw bedrijfsnaam"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Naam Contactpersoon
                </label>

                <input
                  type="text"
                  className="w-full border rounded-xl p-4"
                  placeholder="Voor- en achternaam"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  E-mailadres
                </label>

                <input
                  type="email"
                  className="w-full border rounded-xl p-4"
                  placeholder="naam@bedrijf.nl"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Telefoonnummer
                </label>

                <input
                  type="tel"
                  className="w-full border rounded-xl p-4"
                  placeholder="+31"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Aantal Schermen
                </label>

                <select className="w-full border rounded-xl p-4">

                  <option>1 - 5 schermen</option>
                  <option>5 - 25 schermen</option>
                  <option>25 - 100 schermen</option>
                  <option>100+ schermen</option>

                </select>

              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Gewenste Oplossing
                </label>

                <select className="w-full border rounded-xl p-4">

                  <option>Digital Signage</option>
                  <option>Audio Oplossingen</option>
                  <option>PixelCast Cloud</option>
                  <option>Combinatie van meerdere oplossingen</option>

                </select>

              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Bericht
                </label>

                <textarea
                  rows={6}
                  className="w-full border rounded-xl p-4"
                  placeholder="Vertel ons meer over uw project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl text-lg"
              >
                Demo Aanvragen
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* CONTACTGEGEVENS */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Contactgegevens
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border rounded-3xl p-8 text-center">

              <h3 className="text-2xl font-bold mb-4">
                📧 E-mail
              </h3>

              <p>
                info@pixelcast.eu
              </p>

            </div>

            <div className="bg-white border rounded-3xl p-8 text-center">

              <h3 className="text-2xl font-bold mb-4">
                🌍 Website
              </h3>

              <p>
                www.pixelcast.eu
              </p>

            </div>

            <div className="bg-white border rounded-3xl p-8 text-center">

              <h3 className="text-2xl font-bold mb-4">
                ☁️ Platform
              </h3>

              <p>
                PixelCast Cloud
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Veelgestelde Vragen
          </h2>

          <div className="space-y-6">

            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                Is de demo gratis?
              </h3>

              <p className="mt-2 text-slate-600">
                Ja, een eerste demonstratie is volledig vrijblijvend.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                Kan PixelCast meerdere locaties beheren?
              </h3>

              <p className="mt-2 text-slate-600">
                Ja, PixelCast Cloud ondersteunt onbeperkt meerdere locaties.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-xl">
                Kan ik bestaande schermen gebruiken?
              </h3>

              <p className="mt-2 text-slate-600">
                In veel gevallen kunnen bestaande Android- of Windows-schermen worden hergebruikt.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}