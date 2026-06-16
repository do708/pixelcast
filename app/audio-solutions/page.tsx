import Image from "next/image";

export default function AudioSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold mb-8">
            Audio Solutions
          </h1>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Professionele audio-oplossingen voor horeca, sportclubs,
            kantoren, retail, recreatie en evenementen.
            Van achtergrondmuziek tot complete DSP- en omroepsystemen.
          </p>

          <div className="mt-12">

            <Image
              src="/images/audio.png"
              alt="Audio Solutions"
              width={1600}
              height={900}
              className="rounded-3xl shadow-2xl mx-auto"
              priority
            />

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-10">
            Professionele Audio Voor Iedere Omgeving
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Audio bepaalt de beleving van uw bezoekers.
            PixelCast levert complete oplossingen voor achtergrondmuziek,
            omroepinstallaties, DSP-configuratie, Dante-netwerken,
            sportaccommodaties, kantines, vergaderruimtes en publieke ruimtes.
          </p>

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
                🏨 Horeca
              </h3>

              <p>
                Achtergrondmuziek, omroepinstallaties en multi-zone audio
                voor restaurants, cafés en hotels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                🏢 Corporate
              </h3>

              <p>
                Vergaderruimtes, presentatiesystemen en bedrijfsomroep.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                🛍️ Retail
              </h3>

              <p>
                Muziekbeleving, klantcommunicatie en promotionele audio.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                ⚽ Sportclubs
              </h3>

              <p>
                Omroepinstallaties, wedstrijdinformatie, sponsoruitingen
                en clubcommunicatie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                🏊 Zwembaden & Recreatie
              </h3>

              <p>
                Publieksomroep, achtergrondmuziek en veiligheidsmeldingen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                🎤 Evenementen
              </h3>

              <p>
                Professionele audio voor evenementen,
                presentaties en tijdelijke installaties.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* DIENSTEN */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Onze Audio Diensten
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                🎵 Achtergrondmuziek
              </h3>

              <p>
                Professionele muziekoplossingen voor iedere omgeving.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                📢 Omroepinstallaties
              </h3>

              <p>
                Duidelijke communicatie voor bezoekers en personeel.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                🎚 DSP Configuratie
              </h3>

              <p>
                Professionele afregeling voor optimale verstaanbaarheid.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                🌐 Dante Netwerken
              </h3>

              <p>
                Moderne netwerk-audio infrastructuren.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                🔊 Multi-Zone Audio
              </h3>

              <p>
                Verschillende audiozones met individuele aansturing.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                🛠 Service & Onderhoud
              </h3>

              <p>
                Onderhoud, monitoring en technische ondersteuning.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SPECIALISMEN */}

      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-16">
            Onze Specialismen
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Achtergrondmuziek
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Omroepinstallaties
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ DSP Configuratie
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Dante Netwerken
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Multi-Zone Audio
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Sportkantines & Clubhuizen
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Vergaderruimtes
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Hotels & Horeca
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Zwembaden & Recreatie
            </div>

          </div>

        </div>

      </section>

      {/* HARDWARE */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Professionele Audio Hardware
          </h2>

          <p className="text-center text-slate-600 text-lg mb-12">
            PixelCast werkt uitsluitend met professionele audio-oplossingen van bewezen fabrikanten.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              TOA
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              Apart Audio
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              Biamp
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              JBL Professional
            </div>

          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-8">

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              Bose Professional
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              Shure
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              Powersoft
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              MAG Audio
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Klaar om uw audio naar een hoger niveau te brengen?
          </h2>

          <p className="text-xl mt-6">
            Ontdek hoe PixelCast professionele audio-oplossingen kan leveren
            voor uw organisatie, sportvereniging of locatie.
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