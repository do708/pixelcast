"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    if (
      email === "admin@pixelcast.eu" &&
      password === "PixelCast2026!"
    ) {
      document.cookie =
        "pixelcast-auth=true; path=/; max-age=86400";

      router.push("/admin");
    } else {
      alert("Ongeldige inloggegevens");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="text-center mb-8">

            <h1 className="text-5xl font-bold mb-3">
              PixelCast
            </h1>

            <p className="text-slate-600">
              CRM & Beheerportaal
            </p>

          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-6"
          >

            <div>

              <label className="block font-semibold mb-2">
                E-mailadres
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="admin@pixelcast.eu"
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

            </div>

            <div>

              <label className="block font-semibold mb-2">
                Wachtwoord
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="••••••••"
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white py-4 rounded-xl font-semibold transition"
            >
              {loading
                ? "Inloggen..."
                : "Inloggen"}
            </button>

          </form>

          <div className="mt-8 pt-8 border-t text-center">

            <p className="text-sm text-slate-500">
              PixelCast Cloud Management Platform
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}