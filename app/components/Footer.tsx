export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* PixelCast */}

          <div>

            <h3 className="text-3xl font-bold mb-4">
              PixelCast
            </h3>

            <p className="text-slate-400">
              Your Message, Everywhere.
            </p>

            <p className="mt-4 text-slate-500 leading-relaxed">
              Professionele Digital Signage,
              Audio Solutions en Cloud Management
              voor moderne organisaties.
            </p>

          </div>

          {/* Oplossingen */}

          <div>

            <h4 className="font-bold text-lg mb-4">
              Oplossingen
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a
                  href="/digital-signage"
                  className="hover:text-white transition"
                >
                  Digital Signage
                </a>
              </li>

              <li>
                <a
                  href="/audio-solutions"
                  className="hover:text-white transition"
                >
                  Audio Solutions
                </a>
              </li>

              <li>
                <a
                  href="/cloud"
                  className="hover:text-white transition"
                >
                  PixelCast Cloud
                </a>
              </li>

              <li>
                <a
                  href="/pricing"
                  className="hover:text-white transition"
                >
                  Tarieven
                </a>
              </li>

            </ul>

          </div>

          {/* Sectoren */}

          <div>

            <h4 className="font-bold text-lg mb-4">
              Sectoren
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a
                  href="/retail"
                  className="hover:text-white transition"
                >
                  Retail
                </a>
              </li>

              <li>
                <a
                  href="/hospitality"
                  className="hover:text-white transition"
                >
                  Hospitality
                </a>
              </li>

              <li>
                <a
                  href="/sports"
                  className="hover:text-white transition"
                >
                  Sportclubs
                </a>
              </li>

              <li>
                <a
                  href="/corporate"
                  className="hover:text-white transition"
                >
                  Corporate
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="font-bold text-lg mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition"
                >
                  Contactformulier
                </a>
              </li>

              <li>
                info@pixelcast.eu
              </li>

              <li>
                www.pixelcast.eu
              </li>

              <li>
                Nederland
              </li>

            </ul>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-500 text-sm">
              © 2026 PixelCast. Alle rechten voorbehouden.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-slate-500">

              <a href="#" className="hover:text-white transition">
                Privacybeleid
              </a>

              <a href="#" className="hover:text-white transition">
                Algemene Voorwaarden
              </a>

              <a href="#" className="hover:text-white transition">
                Cookiebeleid
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}