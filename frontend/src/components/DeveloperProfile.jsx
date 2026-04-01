import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import SafeImage from './SafeImage';

export default function DeveloperProfile({ developer }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <div className="glass overflow-hidden p-6 md:p-10">
        <div className="grid items-center gap-10 md:grid-cols-[340px_1fr]">
          <motion.div whileHover={{ rotate: -1.5, scale: 1.02 }} className="relative mx-auto w-fit">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-b from-orange-500 to-purple-600 blur-md opacity-80" />
            <SafeImage src={developer.image} fallback={developer.fallbackImage} alt={developer.name} className="relative h-[28rem] w-80 rounded-[2rem] object-cover transition duration-500 hover:scale-[1.02]" />
          </motion.div>

          <div>
            <h1 className="font-display text-4xl font-bold md:text-5xl">{developer.name}</h1>
            <p className="mb-4 mt-1 text-orange-200">{developer.role}</p>
            <p className="mb-8 max-w-2xl text-slate-300">{developer.about}</p>

            <h2 className="mb-3 text-xl font-semibold">Skills</h2>
            <div className="mb-8 space-y-3">
              {developer.skills.map((skill, idx) => (
                <div key={skill}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{skill}</span>
                    <span>{93 - idx * 4}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ff3c00]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${93 - idx * 4}%` }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mb-3 text-xl font-semibold">Projects Handled</h2>
            <ul className="mb-6 list-disc pl-5 text-slate-300">
              {developer.projects.map((project) => <li key={project}>{project}</li>)}
            </ul>

            <h2 className="mb-3 text-xl font-semibold">Achievements</h2>
            <ul className="mb-8 list-disc pl-5 text-slate-300">
              {developer.achievements.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <div className="flex flex-wrap gap-3">
              <MagneticButton as="a" href={developer.resumeUrl} className="rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ff3c00] px-5 py-2.5 font-semibold shadow-[0_0_30px_rgba(255,106,0,.35)]">
                View Resume
              </MagneticButton>
              <a href={`mailto:${developer.email}`} className="rounded-full border border-white/20 px-4 py-2 hover:border-orange-300/40">Email</a>
              <a href={developer.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 hover:border-green-300/40">WhatsApp</a>
              <a href={developer.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 hover:border-purple-300/40">GitHub</a>
              <a href={developer.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 hover:border-blue-300/40">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
