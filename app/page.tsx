import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVIGATION */}

      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          <Image
            src="/pixelcast-logo.png"
            alt="PixelCast"
            width={220}
            height={80}
            priority
          />

          <div className="hidden lg:flex items-center gap-8 text-slate-700 font-medium">

            <a href="/">Home</a>
            <a href="/digital-signage">Digital Signage</a>
            <a href="/audio-solutions">Audio Oplossingen</a>
            <a href="/cloud">PixelCast Cloud</a>
            <a href="/pricing">Tarieven</a>
            <a href="/contact">Contact</a>

            <div className="flex items-center gap-2 text-sm">
              <span>🇳🇱 NL</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-400">🇬🇧 EN</span>
            </div>

            <a
              href="/contact"
              className="bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700"
            >
              Demo Aanvragen
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-32">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Your Message, Everywhere.
          </h1>

          <p className="mt-8 text-xl text-slate-600 max-w-4xl mx-auto">
            Professionele Digital Signage, Audio Oplossingen en Cloud Management
            voor organisaties die hun communicatie naar een hoger niveau willen brengen.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold"
            >
              Gratis Demo
            </a>

            <a
              href="/pricing"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold"
            >
              Bekijk Tarieven
            </a>

          </div>

        </div>

      </section>

      {/* WAAROM PIXELCAST */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Waarom PixelCast?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Centrale Controle</h3>
              <p>
                Beheer alle schermen, content en locaties vanuit één centraal platform.
              </p>
            </div>

            <div className="border rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">24/7 Monitoring</h3>
              <p>
                Ontvang meldingen wanneer schermen offline gaan of storingen vertonen.
              </p>
            </div>

            <div className="border rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Nederlandse Support</h3>
              <p>
                Persoonlijke ondersteuning door ervaren specialisten.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* OPLOSSINGEN */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Onze Oplossingen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Digital Signage
              </h3>

              <p className="text-slate-600">
                Dynamische schermcommunicatie voor retail, horeca,
                kantoren, onderwijs en zorg.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Audio Oplossingen
              </h3>

              <p className="text-slate-600">
                Achtergrondmuziek, omroepinstallaties,
                DSP configuraties en multi-zone audio.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                PixelCast Cloud
              </h3>

              <p className="text-slate-600">
                Volledige controle over al uw schermen vanuit één cloudplatform.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SECTOREN */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Voor Welke Sectoren?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-3xl p-8">🛍️ Retail</div>
            <div className="border rounded-3xl p-8">🏨 Horeca</div>
            <div className="border rounded-3xl p-8">🏢 Kantoren</div>
            <div className="border rounded-3xl p-8">🏥 Zorg</div>
            <div className="border rounded-3xl p-8">🎓 Onderwijs</div>
            <div className="border rounded-3xl p-8">🏭 Industrie</div>

          </div>

        </div>

      </section>

      {/* VOORDELEN */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Wat Levert PixelCast Op?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white border rounded-2xl p-6">
              ✓ Professionele uitstraling
            </div>

            <div className="bg-white border rounded-2xl p-6">
              ✓ Hogere klantbetrokkenheid
            </div>

            <div className="bg-white border rounded-2xl p-6">
              ✓ Realtime content updates
            </div>

            <div className="bg-white border rounded-2xl p-6">
              ✓ Centrale controle over alle locaties
            </div>

            <div className="bg-white border rounded-2xl p-6">
              ✓ Minder beheer en onderhoud
            </div>

            <div className="bg-white border rounded-2xl p-6">
              ✓ Schaalbaar van 1 tot 1000+ schermen
            </div>

          </div>

        </div>

      </section>

      {/* DASHBOARD PREVIEW */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-4">
            Eén Dashboard Voor Al Uw Schermen
          </h2>

          <p className="text-center text-slate-600 text-xl mb-16">
            Volledige controle over uw complete signage netwerk.
          </p>

          <div className="bg-slate-900 rounded-3xl p-10 text-white">

            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-green-600 rounded-xl p-6">
                <h3 className="text-3xl font-bold">127</h3>
                <p>Online Schermen</p>
              </div>

              <div className="bg-red-600 rounded-xl p-6">
                <h3 className="text-3xl font-bold">2</h3>
                <p>Offline Schermen</p>
              </div>

              <div className="bg-blue-600 rounded-xl p-6">
                <h3 className="text-3xl font-bold">14</h3>
                <p>Actieve Campagnes</p>
              </div>

              <div className="bg-purple-600 rounded-xl p-6">
                <h3 className="text-3xl font-bold">18</h3>
                <p>Locaties</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TARIEVEN */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            PixelCast Cloud Tarieven
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white border p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">Basic</h3>
              <p className="text-5xl font-bold mt-6">€149</p>
              <p className="text-slate-500">per scherm / jaar</p>
            </div>

            <div className="bg-white border-4 border-purple-500 p-8 rounded-3xl">
              <div className="bg-purple-600 text-white inline-block px-3 py-1 rounded-full text-sm mb-4">
                MEEST GEKOZEN
              </div>
              <h3 className="text-2xl font-bold">Professional</h3>
              <p className="text-5xl font-bold mt-6">€249</p>
              <p className="text-slate-500">per scherm / jaar</p>
            </div>

            <div className="bg-white border p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-5xl font-bold mt-6">€349</p>
              <p className="text-slate-500">per scherm / jaar</p>
            </div>

            <div className="bg-white border p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">Enterprise+</h3>
              <p className="text-3xl font-bold mt-6">Op aanvraag</p>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-slate-900 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <Image
            src="/pixelcast-logo.png"
            alt="PixelCast"
            width={220}
            height={80}
            className="mx-auto"
          />

          <p className="mt-6 text-slate-400">
            Your Message, Everywhere.
          </p>

          <p className="mt-2 text-slate-400">
            info@pixelcast.eu
          </p>

          <p className="mt-6 text-slate-500">
            © 2026 PixelCast. Alle rechten voorbehouden.
          </p>

        </div>

      </footer>

    </main>
  );
}
