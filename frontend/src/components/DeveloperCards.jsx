import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { developers } from '../utils/data';
import TiltCard from './TiltCard';

export default function DeveloperCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
      <h2 className="section-title">Meet the Developers</h2>
      <p className="section-subtitle">Craft-focused specialists delivering elegant interfaces and production-grade engineering.</p>

      <div className="grid gap-8 md:grid-cols-2">
        {developers.map((dev, idx) => (
          <TiltCard key={dev.id} className="group">
            <Link to={`/${dev.id}`} className="glass relative block overflow-hidden p-6">
              <div className="absolute -inset-24 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex items-start gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.12 }}
                  className="relative"
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 blur-sm" />
                  <img src={dev.image} alt={dev.name} className="relative h-24 w-24 rounded-full object-cover transition duration-500 group-hover:scale-110" />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-semibold text-cyan-200">{dev.name}</h3>
                  <p className="mb-3 text-sm text-slate-300">{dev.role}</p>
                  <p className="text-slate-200">{dev.about}</p>

                  <div className="mt-4 flex gap-2 opacity-0 transition duration-500 group-hover:opacity-100">
                    {['GH', 'IN', 'WA', 'EM'].map((label) => (
                      <span key={label} className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/10 text-xs">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
