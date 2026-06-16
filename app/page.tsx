import Image from "next/image";

export default function Home() {
return ( <main className="min-h-screen bg-white">

  {/* HERO */}

  <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">

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
            Beheer al uw schermen, content en locaties vanuit één centraal dashboard.
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
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
        >
          <Image
            src="/images/digital-signage.png"
            alt="Digital Signage"
            width={1600}
            height={900}
            className="w-full h-56 object-cover"
          />

          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">
              Digital Signage
            </h3>

            <p>
              Dynamische schermcommunicatie voor iedere branche.
            </p>
          </div>
        </a>

        <a
          href="/audio-solutions"
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
        >
          <Image
            src="/images/audio.png"
            alt="Audio Solutions"
            width={1600}
            height={900}
            className="w-full h-56 object-cover"
          />

          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">
              Audio Solutions
            </h3>

            <p>
              Achtergrondmuziek, omroepinstallaties en multi-zone audio.
            </p>
          </div>
        </a>

        <a
          href="/cloud"
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
        >
          <Image
            src="/images/dashboard.jpg"
            alt="PixelCast Cloud"
            width={1600}
            height={900}
            className="w-full h-56 object-cover"
          />

          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">
              PixelCast Cloud
            </h3>

            <p>
              Volledige controle over al uw schermen vanuit één cloudplatform.
            </p>
          </div>
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

      <div className="grid md:grid-cols-3 gap-8">

        <a
          href="/retail"
          className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
        >
          <Image
            src="/images/retail.png"
            alt="Retail"
            width={1600}
            height={900}
            className="w-full h-64 object-cover"
          />

          <div className="bg-white p-6">
            <h3 className="text-2xl font-bold">
              Retail
            </h3>
          </div>
        </a>

        <a
          href="/sports"
          className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
        >
          <Image
            src="/images/sports.png"
            alt="Sports"
            width={1600}
            height={900}
            className="w-full h-64 object-cover"
          />

          <div className="bg-white p-6">
            <h3 className="text-2xl font-bold">
              Sports
            </h3>
          </div>
        </a>

        <a
          href="/corporate"
          className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
        >
          <Image
            src="/images/corporate.png"
            alt="Corporate"
            width={1600}
            height={900}
            className="w-full h-64 object-cover"
          />

          <div className="bg-white p-6">
            <h3 className="text-2xl font-bold">
              Corporate
            </h3>
          </div>
        </a>

      </div>

    </div>

  </section>

  {/* CLOUD DASHBOARD */}

  <section className="bg-slate-900 text-white py-24">

    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-5xl font-bold text-center mb-6">
        PixelCast Cloud Dashboard
      </h2>

      <p className="text-center text-slate-300 text-xl mb-16">
        Beheer alle schermen centraal vanuit één intuïtief platform.
      </p>

      <Image
        src="/images/dashboard.jpg"
        alt="PixelCast Dashboard"
        width={1920}
        height={1080}
        className="rounded-3xl shadow-2xl"
      />

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
