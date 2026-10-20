const who = [
  ["Small and medium e-commerce businesses", "Professional delivery operations without building a logistics team."],
  ["Direct-to-consumer brands and online retailers", "Consistent delivery performance behind your brand."],
  ["Social-commerce businesses and independent sellers", "Reliable shipping and clear cash settlement as you grow."],
  ["Merchants managing multiple courier companies", "One point of contact and one set of records instead of many."],
  ["Enterprises", "Better oversight of outsourced delivery operations."],
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="bg-mist">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">
        <div>
          <h2 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">Built for merchants who ship every day.</h2>
          <p className="mt-5 max-w-md text-lg text-slate2">Flexible, scalable and professionally managed delivery operations, for sellers at every stage.</p>
        </div>
        <ul className="divide-y divide-slate-300/70 border-y border-slate-300/70">
          {who.map(([t, d]) => (
            <li key={t} className="grid gap-1 py-6 sm:grid-cols-2 sm:gap-8">
              <h3 className="font-display text-lg font-bold">{t}</h3>
              <p className="text-slate2">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
