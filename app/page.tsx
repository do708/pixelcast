import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVIGATION */}

      <nav className="sticky top-0 z-50 bg-white border-b">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          <Image
            src="/pixelcast-logo.png"
            alt="PixelCast"
            width={220}
            height={80}
          />

          <div className="hidden md:flex gap-8 text-slate-700 font-medium">

            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#cloud">PixelCast Cloud</a>
            <a href="#contact">Contact</a>

          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-32">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Your Message,
            <br />
            Everywhere.
          </h1>

          <p className="mt-8 text-xl text-slate-600 max-w-4xl mx-auto">
            Professional Digital Signage, Audio Solutions and Cloud
            Management for retail, hospitality, healthcare,
            education and corporate environments.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold"
            >
              Request a Demo
            </a>

            <a
              href="#pricing"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold"
            >
              View Pricing
            </a>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">

            <div>
              <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
              <p className="text-slate-500 mt-2">
                Monitoring
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-purple-600">
                Cloud
              </h3>
              <p className="text-slate-500 mt-2">
                Managed
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-pink-600">
                EU
              </h3>
              <p className="text-slate-500 mt-2">
                Coverage
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="max-w-7xl mx-auto py-24 px-6"
      >

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-3xl border shadow-lg">

            <h3 className="text-2xl font-bold mb-4">
              Digital Signage
            </h3>

            <p className="text-slate-600">
              Professional display solutions for retail,
              hospitality, healthcare, education and
              corporate environments.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li>✓ Content Management</li>
              <li>✓ Remote Updates</li>
              <li>✓ Multi-site Deployment</li>
              <li>✓ Scheduling</li>
            </ul>

          </div>

          <div className="p-8 rounded-3xl border shadow-lg">

            <h3 className="text-2xl font-bold mb-4">
              Audio Solutions
            </h3>

            <p className="text-slate-600">
              Professional audio systems for stores,
              offices, schools and public spaces.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li>✓ Background Music</li>
              <li>✓ Public Address</li>
              <li>✓ DSP Configuration</li>
              <li>✓ Multi-Zone Audio</li>
            </ul>

          </div>

          <div className="p-8 rounded-3xl border shadow-lg">

            <h3 className="text-2xl font-bold mb-4">
              PixelCast Cloud
            </h3>

            <p className="text-slate-600">
              Centralized cloud platform to monitor and
              manage every screen from anywhere.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li>✓ Health Monitoring</li>
              <li>✓ Remote Reboot</li>
              <li>✓ Alerts</li>
              <li>✓ Device Management</li>
            </ul>

          </div>

        </div>

      </section>

      {/* WHY PIXELCAST */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why PixelCast?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-3xl font-bold text-blue-600">
                24/7
              </h3>
              <p className="mt-2">
                Monitoring
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-600">
                Cloud
              </h3>
              <p className="mt-2">
                Management
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-600">
                SLA
              </h3>
              <p className="mt-2">
                Support
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-600">
                EU
              </h3>
              <p className="mt-2">
                Coverage
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PRICING */}

      <section
        id="pricing"
        className="py-24"
      >

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            PixelCast Cloud Pricing
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-8 rounded-3xl border shadow">

              <h3 className="text-2xl font-bold">
                Basic
              </h3>

              <p className="text-5xl font-bold mt-6">
                €179
              </p>

              <p className="text-slate-500">
                per screen / year
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl border-4 border-purple-500 shadow-xl scale-105">

              <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm mb-4">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-bold">
                Premium
              </h3>

              <p className="text-5xl font-bold mt-6">
                €299
              </p>

              <p className="text-slate-500">
                per screen / year
              </p>

              <p className="mt-4 font-semibold text-green-600">
                🎁 Free Android Player Included
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl border shadow">

              <h3 className="text-2xl font-bold">
                Enterprise
              </h3>

              <p className="text-5xl font-bold mt-6">
                €479
              </p>

              <p className="text-slate-500">
                per screen / year
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl border shadow">

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

      {/* CLOUD */}

      <section
        id="cloud"
        className="bg-slate-900 text-white py-24"
      >

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            PixelCast Cloud
          </h2>

          <p className="mt-6 text-xl text-slate-300">
            Manage Every Screen. Everywhere.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <div>✓ Device Management</div>
            <div>✓ Health Monitoring</div>
            <div>✓ Remote Reboot</div>

            <div>✓ Content Scheduling</div>
            <div>✓ Multi-Site Management</div>
            <div>✓ Asset Management</div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="py-24 bg-slate-100"
      >

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Let's Talk
          </h2>

          <p className="text-xl text-slate-600 mt-6">
            Looking for Digital Signage, Audio Solutions
            or Cloud Management?
          </p>

          <div className="mt-10 space-y-2">

            <p className="text-xl">
              📧 info@pixelcast.eu
            </p>

            <p className="text-xl">
              🌍 www.pixelcast.eu
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-slate-900 text-white py-12">

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

          <p className="mt-4 text-slate-500">
            © 2026 PixelCast. All Rights Reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}