export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <h2 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
        Bridging all the links to form a seamless logistics chain.
      </h2>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <p className="max-w-xl text-lg leading-relaxed text-slate2">
          At Unilink Courier Solutions (UCS), we believe logistics works best when every link in the delivery chain is connected, coordinated and working toward a common goal. We are building a managed courier aggregation and e-commerce logistics management company that brings merchants and multiple courier providers together through a centralized management framework.
        </p>
        <p className="max-w-xl text-lg leading-relaxed text-slate2">
          Our focus is not simply on securing competitive courier rates. It is on helping merchants improve the overall economics of successful deliveries through better coordination, informed decisions and consistent performance management.
        </p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl bg-navy p-8 text-white sm:p-10">
          <h3 className="font-display text-2xl font-bold">Our mission</h3>
          <p className="mt-4 leading-relaxed text-white/80">To bridge the gaps between e-commerce businesses and courier networks through integrated logistics management, operational transparency and performance-driven delivery solutions.</p>
        </div>
        <div className="rounded-2xl bg-brand-soft p-8 sm:p-10">
          <h3 className="font-display text-2xl font-bold">Our vision</h3>
          <p className="mt-4 leading-relaxed text-navy/80">To become a trusted logistics management partner for e-commerce businesses, creating a more connected, efficient and accountable delivery ecosystem.</p>
        </div>
      </div>
    </section>
  );
}
