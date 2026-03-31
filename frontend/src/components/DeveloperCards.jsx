import { Link } from 'react-router-dom';
import { developers } from '../utils/data';

export default function DeveloperCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <h2 className="section-title">About Our Team</h2>
      <p className="section-subtitle">Two specialized MERN developers delivering complete product experiences from UI to deployment.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {developers.map((dev) => (
          <Link key={dev.id} to={`/${dev.id}`} className="glass group p-6 transition hover:shadow-glow">
            <img src={dev.image} alt={dev.name} className="mb-4 h-40 w-full rounded-xl object-cover" />
            <h3 className="text-xl font-semibold text-cyan-300">{dev.name}</h3>
            <p className="mb-3 text-sm text-slate-300">{dev.role}</p>
            <p className="text-slate-200">{dev.about}</p>
            <span className="mt-4 inline-block text-sm text-cyan-200 group-hover:translate-x-1 transition">View profile →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
