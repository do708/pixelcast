
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* PixelCast */}

          <div>

            <h3 className="text-3xl font-bold mb-4">
              PixelCast
            </h3>

            <p className="text-slate-400">
              Your Message, Everywhere.
            </p>

            <p className="mt-4 text-slate-500">
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
                <a href="/digital-signage">
                  Digital Signage
                </a>
              </li>

              <li>
                <a href="/audio-solutions">
                  Audio Solutions
                </a>
              </li>

              <li>
                <a href="/cloud">
                  PixelCast Cloud
                </a>
              </li>

              <li>
                <a href="/pricing">
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
                <a href="/retail">
                  Retail
                </a>
              </li>

              <li>
                <a href="/hospitality">
                  Hospitality
                </a>
              </li>

              <li>
                <a href="/healthcare">
                  Healthcare
                </a>
              </li>

              <li>
                <a href="/corporate">
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
                <a href="/contact">
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

            <div className="flex gap-6 text-sm text-slate-500">

              <a href="#">
                Privacybeleid
              </a>

              <a href="#">
                Algemene Voorwaarden
              </a>

              <a href="#">
                Cookiebeleid
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}