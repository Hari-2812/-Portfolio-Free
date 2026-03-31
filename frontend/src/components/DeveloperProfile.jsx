import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function DeveloperProfile({ developer }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <div className="glass overflow-hidden p-6 md:p-10">
        <div className="grid items-center gap-10 md:grid-cols-[320px_1fr]">
          <div className="relative mx-auto w-fit">
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-b from-cyan-400 to-purple-500 blur-md opacity-80" />
            <img src={developer.image} alt={developer.name} className="relative h-80 w-72 rounded-[2rem] object-cover" />
          </div>

          <div>
            <h1 className="font-display text-4xl font-bold md:text-5xl">{developer.name}</h1>
            <p className="mb-4 mt-1 text-cyan-200">{developer.role}</p>
            <p className="mb-8 max-w-2xl text-slate-300">{developer.about}</p>

            <h2 className="mb-3 text-xl font-semibold">Skill Strength</h2>
            <div className="mb-8 space-y-3">
              {developer.skills.slice(0, 4).map((skill, idx) => (
                <div key={skill}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{skill}</span>
                    <span>{92 - idx * 4}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${92 - idx * 4}%` }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mb-3 text-xl font-semibold">Projects Contributed</h2>
            <ul className="mb-8 list-disc pl-5 text-slate-300">
              {developer.projects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <MagneticButton as="a" href={developer.resumeUrl} className="rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-5 py-2.5 font-semibold">
                Download Resume
              </MagneticButton>
              <a href={`mailto:${developer.email}`} className="rounded-full border border-white/20 px-4 py-2">Email</a>
              <a href={developer.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2">WhatsApp</a>
              <a href={developer.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2">GitHub</a>
              <a href={developer.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
