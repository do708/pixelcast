export default function PricingPage() {
return ( <main className="min-h-screen bg-white">


  <section className="py-24 bg-white">

    <div className="max-w-7xl mx-auto px-6">

      <h1 className="text-5xl font-bold text-center mb-16">
        Vergelijk Onze Pakketten
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-slate-100">

              <th className="p-4 text-left">
                Functionaliteit
              </th>

              <th className="p-4">
                Basic
              </th>

              <th className="p-4">
                Professional
              </th>

              <th className="p-4">
                Enterprise
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b">
              <td className="p-4">Cloud CMS</td>
              <td className="text-center">✓</td>
              <td className="text-center">✓</td>
              <td className="text-center">✓</td>
            </tr>

            <tr className="border-b">
              <td className="p-4">Content Planning</td>
              <td className="text-center">✓</td>
              <td className="text-center">✓</td>
              <td className="text-center">✓</td>
            </tr>

            <tr className="border-b">
              <td className="p-4">Monitoring</td>
              <td className="text-center">—</td>
              <td className="text-center">✓</td>
              <td className="text-center">✓</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </section>

</main>


);
}