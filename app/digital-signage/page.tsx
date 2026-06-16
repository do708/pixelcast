import Image from "next/image";

export default function DigitalSignagePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-bold mb-8">
            Digital Signage
          </h1>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Transformeer schermen in krachtige communicatiekanalen.
            Informeer bezoekers, promoot producten, verhoog betrokkenheid
            en beheer alle content centraal via PixelCast Cloud.
          </p>

          <div className="mt-12">

            <Image
              src="/images/digital-signage.png"
              alt="Digital Signage"
              width={1600}
              height={900}
              className="rounded-3xl shadow-2xl mx-auto"
            />

          </div>

        </div>

      </section>

      {/* WAT IS DIGITAL SIGNAGE */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-10">
            Wat is Digital Signage?
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Digital Signage maakt het mogelijk om informatie, advertenties,
            nieuws, dashboards, menu's en promoties dynamisch weer te geven
            op schermen. Met PixelCast beheert u alle schermen vanuit één
            centraal cloudplatform, ongeacht locatie of aantal schermen.
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
                🛍️ Retail
              </h3>

              <p>
                Promoties, aanbiedingen, productinformatie en klantcommunicatie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                🏨 Horeca
              </h3>

              <p>
                Menu boards, hotelinformatie en gastcommunicatie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                🏢 Corporate
              </h3>

              <p>
                Dashboards, bezoekersinformatie en interne communicatie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                ⚽ Sportclubs
              </h3>

              <p>
                Wedstrijdinformatie, sponsoruitingen, uitslagen en clubcommunicatie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                🎾 Tennis & Zwembaden
              </h3>

              <p>
                Baanplanning, evenementen, openingstijden en sponsorpresentaties.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                🍻 Kantines & Recreatie
              </h3>

              <p>
                Dagmenu's, evenementen, acties en bezoekersinformatie.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PIXELCAST CLOUD */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h2 className="text-5xl font-bold mb-8">
                Beheer Alles Vanuit PixelCast Cloud
              </h2>

              <ul className="space-y-4 text-lg">

                <li>✓ Centrale content planning</li>
                <li>✓ Schermen op afstand beheren</li>
                <li>✓ 24/7 monitoring</li>
                <li>✓ Remote reboot</li>
                <li>✓ Multi-locatie ondersteuning</li>
                <li>✓ Realtime statusmeldingen</li>

              </ul>

            </div>

            <div>

              <Image
                src="/images/dashboard.jpg"
                alt="PixelCast Dashboard"
                width={1920}
                height={1080}
                className="rounded-3xl shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* HARDWARE */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Professionele Hardware
          </h2>

          <p className="text-center text-slate-600 text-lg mb-12">
            PixelCast ondersteunt professionele displays,
            videowalls, LED-oplossingen en montagematerialen
            van toonaangevende fabrikanten.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              Samsung
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              LG
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              Dahua
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              Philips
            </div>

          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-8">

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              Vogels
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              Neomounts
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              Novastar
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center font-semibold">
              Datapath
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
            Ontdek hoe PixelCast uw organisatie kan helpen met professionele Digital Signage.
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