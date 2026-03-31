const testimonials = [
  {
    name: 'Startup Founder',
    quote: 'The team shipped our MVP in record time. Communication and code quality were excellent.'
  },
  {
    name: 'E-commerce Manager',
    quote: 'Our conversion improved immediately after launch. They understood both business and tech deeply.'
  }
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <h2 className="section-title">Testimonials</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="glass p-6">
            <p className="mb-3 text-slate-200">“{item.quote}”</p>
            <footer className="text-sm text-cyan-300">— {item.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
