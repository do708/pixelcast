
export default function HospitalityPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-br from-orange-600 via-red-600 to-purple-700 text-white py-32">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold mb-8">
            Digital Signage Voor Horeca
          </h1>

          <p className="text-xl text-orange-100 max-w-4xl mx-auto">
            Verbeter de gastbeleving met digitale menu's,
            promoties, hotelinformatie en interactieve communicatie.
          </p>

        </div>

      </section>

      {/* INTRO */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">
            Meer Beleving. Meer Omzet.
          </h2>

          <p className="text-xl text-slate-600">
            Moderne gasten verwachten actuele informatie,
            dynamische content en een professionele uitstraling.
            PixelCast helpt horecaondernemingen dit eenvoudig te realiseren.
          </p>

        </div>

      </section>

      {/* OPLOSSINGEN */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Horeca Oplossingen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                🍔 Digitale Menu Boards
              </h3>

              <p>
                Pas prijzen, acties en menu's realtime aan
                zonder nieuwe printkosten.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                🏨 Hotelinformatie
              </h3>

              <p>
                Welkomstschermen, evenementen,
                routeinformatie en gastcommunicatie.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                📢 Promoties
              </h3>

              <p>
                Presenteer aanbiedingen, arrangementen
                en speciale acties op professionele displays.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TOEPASSINGEN */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Perfect Voor
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border rounded-2xl p-8 text-center">
              🍽️ Restaurants
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🍟 Fastfood
            </div>

            <div className="border rounded-2xl p-8 text-center">
              ☕ Cafés
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🏨 Hotels
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🍸 Bars
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🎰 Casino's
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🎭 Evenementen
            </div>

            <div className="border rounded-2xl p-8 text-center">
              🏖️ Resorts
            </div>

          </div>

        </div>

      </section>

      {/* VOORDELEN */}

      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Waarom Horeca Kiest Voor PixelCast
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Centrale controle over meerdere locaties
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Direct prijzen aanpassen
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Hogere gastbeleving
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Minder printkosten
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ PixelCast Cloud beheer
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              ✓ Realtime promoties
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Klaar Voor Moderne Horeca Communicatie?
          </h2>

          <p className="text-xl mt-6">
            Ontdek hoe PixelCast uw gastenervaring kan verbeteren.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-white text-red-600 px-8 py-4 rounded-xl font-bold"
          >
            Vraag Een Demo Aan
          </a>

        </div>

      </section>

    </main>
  );
}