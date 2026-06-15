"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "px-4 py-2 rounded-xl border border-purple-500 text-purple-600 font-semibold"
      : "px-4 py-2 text-slate-700 hover:text-purple-600";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        <a href="/">
          <Image
            src="/images/logo.png"
            alt="PixelCast"
            width={180}
            height={55}
            priority
          />
        </a>

        <div className="hidden lg:flex items-center gap-2">

          <a href="/" className={linkClass("/")}>
            Home
          </a>

          <a href="/digital-signage" className={linkClass("/digital-signage")}>
            Digital Signage
          </a>

          <a href="/audio-solutions" className={linkClass("/audio-solutions")}>
            Audio
          </a>

          <a href="/cloud" className={linkClass("/cloud")}>
            PixelCast Cloud
          </a>

          <a href="/pricing" className={linkClass("/pricing")}>
            Tarieven
          </a>

          <a href="/contact" className={linkClass("/contact")}>
            Contact
          </a>

          <a
            href="/contact"
            className="ml-4 bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Demo Aanvragen
          </a>

        </div>

      </div>

    </nav>
  );
}