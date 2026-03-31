const services = [
  'Full-Stack Web App Development',
  'SaaS MVP Development',
  'API Integration & Automation',
  'Performance Optimization',
  'Maintenance & Scaling'
];

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <h2 className="section-title">Services</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div key={service} className="glass p-5 text-slate-100">{service}</div>
        ))}
      </div>
    </section>
  );
}
