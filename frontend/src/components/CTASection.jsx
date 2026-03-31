import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

export default function CTASection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 md:px-8">
      <div className="glass neon-outline p-10 text-center">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">Let’s launch your premium web product</h2>
        <p className="mb-7 text-slate-300">Design-forward frontend + scalable backend, shipped by a senior MERN duo.</p>
        <MagneticButton as={Link} to="/contact" className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-7 py-3 font-semibold text-white">
          Start a Project
        </MagneticButton>
      </div>
    </section>
  );
}
