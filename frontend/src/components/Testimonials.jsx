const testimonials = [
  {
    name: 'Startup Founder',
    quote: 'The best freelance team we have worked with. Premium execution and speed.'
  },
  {
    name: 'E-commerce Director',
    quote: 'Our product feels world-class now. Their UI and backend quality are exceptional.'
  }
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
      <h2 className="section-title">Testimonials</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="glass p-6">
            <p className="mb-3 text-lg text-slate-200">“{item.quote}”</p>
            <footer className="text-sm text-cyan-300">— {item.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
