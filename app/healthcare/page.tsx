
export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-br from-teal-700 via-cyan-700 to-blue-800 text-white py-32">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold mb-8">
            Digital Signage Voor De Zorg
          </h1>

          <p className="text-xl text-cyan-100 max-w-4xl mx-auto">
            Verbeter patiëntcommunicatie, bewegwijzering en informatievoorziening
            met professionele Digital Signage oplossingen van PixelCast.
          </p>

        </div>

      </section>

      {/* INTRO */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">
            Betere Communicatie Voor Patiënten En Bezoekers
          </h2>

          <p className="text-xl text-slate-600">
            In zorginstellingen is duidelijke communicatie essentieel.
            PixelCast helpt organisaties om informatie snel, duidelijk
            en centraal beschikbaar te maken.
          </p>

        </div>

      </section>

      {/* OPLOSSINGEN */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Zorg Oplossingen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                🏥 Wachtruimte Informatie
              </h3>

              <p>
                Toon actuele informatie, wachttijden,
                gezondheidsinformatie en nieuws.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                🧭 Bewegwijzering
              </h3>

              <p>
                Help bezoekers eenvoudig hun bestemming
                binnen uw gebouw te vinden.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                📢 Interne Communicatie
              </h3>

              <p>
                Deel belangrijke mededelingen met personeel
                en bezoekers in realtime.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TOEPASSINGEN */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Geschikt Voor
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border rounded-2xl p-8 text-center">
              🏥 Ziekenhuizen
            </div>

            <div className="border rounded-2xl p-8 text-center">
              👨‍⚕️ Huisartsen
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🦷 Tandartspraktijken
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🏨 Klinieken
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🧠 GGZ
            </div>

            <div className="border rounded-2xl p-8 text-center">
              ♿ Revalidatie
            </div>

            <div className="border rounded-2xl p-8 text-center">
              👵 Zorginstellingen
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🏡 Verpleeghuizen
            </div>

          </div>

        </div>

      </section>

      {/* VOORDELEN */}

      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Waarom Zorginstellingen Voor PixelCast Kiezen
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Betere patiëntinformatie
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Centrale contentbeheer
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Realtime communicatie
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Minder drukwerk
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ PixelCast Cloud monitoring
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Schaalbaar voor meerdere locaties
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Moderne Zorgcommunicatie Begint Hier
          </h2>

          <p className="text-xl mt-6">
            Ontdek hoe PixelCast zorginstellingen ondersteunt
            met professionele communicatieoplossingen.
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