import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal';

const testimonials = [
  {
    name: 'Ava Thompson',
    role: 'Founder, NovaFit',
    quote: 'Professional team, delivered high-quality work on time.',
    rating: 5
  },
  {
    name: 'Liam Parker',
    role: 'Product Lead, ShopEase',
    quote: 'Excellent UI and backend performance.',
    rating: 5
  },
  {
    name: 'Sophia Grant',
    role: 'Operations Manager, Bookly',
    quote: 'Great communication and support throughout the project.',
    rating: 5
  },
  {
    name: 'Noah Reed',
    role: 'CEO, LearnBridge',
    quote: 'Their process is clear, fast, and highly reliable for scaling.',
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
      <Reveal>
        <h2 className="section-title">Client Reviews</h2>
        <p className="section-subtitle">Trusted by teams that need premium quality, speed, and long-term support.</p>
      </Reveal>

      <div className="relative overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={testimonials[current].name}
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -48 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="glass neon-outline min-h-[260px] p-8 md:min-h-[220px] md:p-10"
          >
            <p className="mb-6 text-2xl tracking-wide text-amber-300">{'⭐'.repeat(testimonials[current].rating)}</p>
            <p className="mb-6 text-xl leading-relaxed text-slate-100 md:text-2xl">“{testimonials[current].quote}”</p>
            <footer>
              <p className="font-semibold text-cyan-300">{testimonials[current].name}</p>
              <p className="text-sm text-slate-400">{testimonials[current].role}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-5 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-7 rounded-full transition-all duration-300 ${
                index === current ? 'bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.7)]' : 'bg-white/20 hover:bg-white/45'
              }`}
              aria-label={`View testimonial from ${item.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
