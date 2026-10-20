const principles = [
  ["Connectivity", "Bringing merchants and courier partners together through coordinated processes."],
  ["Visibility", "Better access to shipment information and operational performance data."],
  ["Accountability", "Clear service expectations, escalation procedures and performance monitoring."],
  ["Efficiency", "Controlling logistics costs and reducing administrative complexity."],
  ["Continuous Improvement", "Using operational insights to find gaps, resolve bottlenecks and improve outcomes."],
];

export default function Approach() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
      <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
        Logistics is about every participant, process and decision working together.
      </h2>
      <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
        {principles.map(([t, d]) => (
          <div key={t} className="relative border-t-2 border-navy pt-6">
            <span className="absolute -top-[7px] left-0 h-3 w-3 rounded-full bg-ucsred" />
            <h3 className="font-display text-xl font-bold">{t}</h3>
            <p className="mt-2 leading-relaxed text-slate2">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
