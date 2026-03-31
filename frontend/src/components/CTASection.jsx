import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <div className="glass p-10 text-center shadow-glow">
        <h2 className="mb-3 text-3xl font-bold">Ready to build your next MERN product?</h2>
        <p className="mb-6 text-slate-300">Let’s turn your idea into a high-performing web app that drives measurable growth.</p>
        <Link to="/contact" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
          Start a Project
        </Link>
      </div>
    </section>
  );
}
