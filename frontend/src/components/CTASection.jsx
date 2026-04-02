import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function CTASection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass neon-outline rounded-3xl p-10 text-center"
      >
        <h2 className="mb-3 text-3xl font-bold md:text-5xl">Let’s Build Your Next Project</h2>
        <p className="mx-auto mb-8 max-w-2xl text-slate-300">
          We design and ship business-ready products with clear timelines, high performance, and premium user experience.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            as={Link}
            to="/contact"
            className="rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ff3c00] px-7 py-3 font-semibold text-white shadow-[0_0_28px_rgba(255,106,0,0.45)] transition hover:shadow-[0_0_36px_rgba(255,106,0,0.7)]"
          >
            Hire Us
          </MagneticButton>
          <MagneticButton
            as={Link}
            to="/contact"
            className="rounded-full border border-cyan-300/45 bg-cyan-400/10 px-7 py-3 font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.2)] transition hover:bg-cyan-400/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.48)]"
          >
            Contact Us
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
