import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="flex justify-between items-center px-10 py-6 border-b bg-white sticky top-0 z-50">

        <Image
          src="/pixelcast-logo.png"
          alt="PixelCast"
          width={220}
          height={80}
        />

        <div className="hidden md:flex gap-8 font-medium text-slate-700">
          <a href="#">Home</a>
          <a href="#">Digital Signage</a>
          <a href="#">Audio Solutions</a>
          <a href="#">PixelCast Cloud</a>
          <a href="#">Contact</a>
        </div>

      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-32">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Your Message, Everywhere.
          </h1>

          <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto">
            Professional Digital Signage, Audio Solutions and Cloud Management
            for modern businesses.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">
              Request a Demo
            </button>

            <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold">
              Get a Quote
            </button>

          </div>

          <div className="grid grid-cols-3 gap-10 mt-20 max-w-2xl mx-auto">

            <div>
              <h3 className="text-4xl font-bold text-blue-600">
                24/7
              </h3>
              <p className="text-slate-500">
                Monitoring
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-purple-600">
                Cloud
              </h3>
              <p className="text-slate-500">
                Managed
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-pink-600">
                EU
              </h3>
              <p className="text-slate-500">
                Coverage
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Services */}

      <section className="max-w-7xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-3xl shadow-lg border">

            <h3 className="text-2xl font-bold mb-4">
              Digital Signage
            </h3>

            <p className="text-slate-600">
              Professional display solutions for retail, hospitality,
              education, healthcare and corporate environments.
            </p>

          </div>

          <div className="p-8 rounded-3xl shadow-lg border">

            <h3 className="text-2xl font-bold mb-4">
              Audio Solutions
            </h3>

            <p className="text-slate-600">
              Background music, public address systems, multi-zone audio,
              DSP configuration and network audio solutions.
            </p>

          </div>

          <div className="p-8 rounded-3xl shadow-lg border">

            <h3 className="text-2xl font-bold mb-4">
              PixelCast Cloud
            </h3>

            <p className="text-slate-600">
              Monitor and manage all displays remotely from a single cloud
              dashboard with alerts and health monitoring.
            </p>

          </div>

        </div>

      </section>

      {/* Pricing */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            PixelCast Cloud Pricing
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-8 rounded-3xl shadow">

              <h3 className="text-2xl font-bold">
                Basic
              </h3>

              <p className="text-5xl font-bold mt-6">
                €149
              </p>

              <p className="text-slate-500">
                per screen / year
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-purple-500 scale-105">

              <div className="bg-purple-600 text-white inline-block px-3 py-1 rounded-full text-sm mb-4">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-bold">
                Professional
              </h3>

              <p className="text-5xl font-bold mt-6">
                €249
              </p>

              <p className="text-slate-500">
                per screen / year
              </p>

              <p className="mt-4 text-green-600 font-semibold">
                🎁 Free Android Player Included
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow">

              <h3 className="text-2xl font-bold">
                Enterprise
              </h3>

              <p className="text-5xl font-bold mt-6">
                €349
              </p>

              <p className="text-slate-500">
                per screen / year
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow">

              <h3 className="text-2xl font-bold">
                Enterprise+
              </h3>

              <p className="text-4xl font-bold mt-6">
                Custom
              </p>

              <p className="text-slate-500">
                Contact Sales
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready to Transform Your Communication?
          </h2>

          <p className="text-xl mt-6">
            Let's discuss your Digital Signage, Audio and Cloud Management
            requirements.
          </p>

          <button className="mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold">
            Request a Demo
          </button>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-slate-900 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h3 className="text-3xl font-bold">
            PixelCast
          </h3>

          <p className="mt-4 text-slate-400">
            Your Message, Everywhere.
          </p>

          <p className="mt-2 text-slate-500">
            © 2026 PixelCast. All Rights Reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}