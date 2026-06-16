"use client";

export default function TestPage() {
  async function testApi() {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Dominic",
          company: "PixelCast",
          email: "info@pixelcast.eu",
          phone: "0612345678",
          interest: "Digital Signage",
          screens: 10,
          message: "Testbericht",
        }),
      });

      const result = await response.json();

      console.log(result);

      alert(JSON.stringify(result, null, 2));
    } catch (error) {
      console.error(error);

      alert("API ERROR");
    }
  }

  return (
    <main className="p-20">
      <button
        onClick={testApi}
        className="bg-blue-600 text-white px-6 py-4 rounded-xl"
      >
        API Test
      </button>
    </main>
  );
}