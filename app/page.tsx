
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-32">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Your Message, Everywhere.
          </h1>

          <p className="mt-8 text-xl text-slate-600 max-w-4xl mx-auto">
            Professionele Digital Signage, Audio Oplossingen en Cloud Management
            voor moderne organisaties.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold"
            >
              Gratis Demo Aanvragen
            </a>

            <a
              href="/pricing"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold"
            >
              Bekijk Tarieven
            </a>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">

            <div className="bg-white rounded-2xl shadow p-6">
              ✓ Europese Cloud Hosting
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              ✓ 24/7 Monitoring
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              ✓ Nederlandse Support
            </div>

          </div>

        </div>

      </section>

      {/* WAAROM PIXELCAST */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Waarom PixelCast?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                Centrale Controle
              </h3>

              <p>
                Beheer al uw schermen, content en locaties vanuit één dashboard.
              </p>

            </div>

            <div className="border rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                24/7 Monitoring
              </h3>

              <p>
                Realtime inzicht in de status van uw complete signage netwerk.
              </p>

            </div>

            <div className="border rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                Schaalbaar
              </h3>

              <p>
                Van één scherm tot duizenden schermen wereldwijd.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* OPLOSSINGEN */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Onze Oplossingen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <a
              href="/digital-signage"
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                Digital Signage
              </h3>

              <p>
                Dynamische schermcommunicatie voor iedere branche.
              </p>
            </a>

            <a
              href="/audio-solutions"
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                Audio Oplossingen
              </h3>

              <p>
                Achtergrondmuziek, omroepsystemen en netwerk audio.
              </p>
            </a>

            <a
              href="/cloud"
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                PixelCast Cloud
              </h3>

              <p>
                Beheer al uw schermen centraal vanuit één cloudplatform.
              </p>
            </a>

          </div>

        </div>

      </section>

      {/* SECTOREN */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Sectoren
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <a href="/retail" className="border rounded-3xl p-8 text-center hover:shadow-lg transition">
              🛍️ Retail
            </a>

            <a href="/hospitality" className="border rounded-3xl p-8 text-center hover:shadow-lg transition">
              🏨 Hospitality
            </a>

            <a href="/healthcare" className="border rounded-3xl p-8 text-center hover:shadow-lg transition">
              🏥 Healthcare
            </a>

            <a href="/corporate" className="border rounded-3xl p-8 text-center hover:shadow-lg transition">
              🏢 Corporate
            </a>

          </div>

        </div>

      </section>

      {/* DASHBOARD */}

      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-6">
            PixelCast Cloud Dashboard
          </h2>

          <p className="text-center text-slate-300 mb-16 text-xl">
            Volledige controle over al uw schermen vanuit één centraal platform.
          </p>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-green-600 p-8 rounded-2xl">
              <h3 className="text-4xl font-bold">127</h3>
              <p>Online Schermen</p>
            </div>

            <div className="bg-red-600 p-8 rounded-2xl">
              <h3 className="text-4xl font-bold">2</h3>
              <p>Offline Schermen</p>
            </div>

            <div className="bg-blue-600 p-8 rounded-2xl">
              <h3 className="text-4xl font-bold">18</h3>
              <p>Locaties</p>
            </div>

            <div className="bg-purple-600 p-8 rounded-2xl">
              <h3 className="text-4xl font-bold">14</h3>
              <p>Actieve Campagnes</p>
            </div>

          </div>

        </div>

      </section>

      {/* PRICING */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            PixelCast Cloud Tarieven
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white border p-8 rounded-3xl">

              <h3 className="text-2xl font-bold">
                Basic
              </h3>

              <p className="text-5xl font-bold mt-6">
                €12,50
              </p>

              <p className="text-slate-500">
                per scherm / maand
              </p>

            </div>

            <div className="bg-white border-4 border-purple-500 p-8 rounded-3xl">

              <div className="bg-purple-600 text-white inline-block px-3 py-1 rounded-full text-sm mb-4">
                MEEST GEKOZEN
              </div>

              <h3 className="text-2xl font-bold">
                Professional
              </h3>

              <p className="text-5xl font-bold mt-6">
                €20,95
              </p>

              <p className="text-slate-500">
                per scherm / maand
              </p>

              <p className="mt-4 text-green-600 font-semibold">
                🎁 Gratis Android Player
              </p>

            </div>

            <div className="bg-white border p-8 rounded-3xl">

              <h3 className="text-2xl font-bold">
                Enterprise
              </h3>

              <p className="text-5xl font-bold mt-6">
                €29,95
              </p>

              <p className="text-slate-500">
                per scherm / maand
              </p>

            </div>

            <div className="bg-white border p-8 rounded-3xl">

              <h3 className="text-2xl font-bold">
                Enterprise+
              </h3>

              <p className="text-3xl font-bold mt-6">
                Op aanvraag
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Klaar Om Uw Communicatie Te Transformeren?
          </h2>

          <p className="text-xl mt-6">
            Neem contact op voor een vrijblijvende demonstratie.
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