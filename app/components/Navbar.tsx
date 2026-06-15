
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <a href="/">
          <Image
            src="/pixelcast-logo.png"
            alt="PixelCast"
            width={220}
            height={70}
            priority
          />
        </a>

        <div className="hidden lg:flex items-center gap-8 font-medium text-slate-700">

          <a href="/">Home</a>

          <a href="/digital-signage">
            Digital Signage
          </a>

          <a href="/audio-solutions">
            Audio
          </a>

          <a href="/cloud">
            PixelCast Cloud
          </a>

          <a href="/pricing">
            Tarieven
          </a>

          <a href="/contact">
            Contact
          </a>

          <a
            href="/contact"
            className="bg-purple-600 text-white px-5 py-3 rounded-xl"
          >
            Demo Aanvragen
          </a>

        </div>

      </div>
    </nav>
  );
}
