import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import SafeImage from './SafeImage';

const skillCategories = [
  { label: 'Frontend (React, Tailwind)', value: 92 },
  { label: 'Backend (Node.js, Express)', value: 88 },
  { label: 'Database (MongoDB)', value: 85 },
];

const quickStats = [
  'Experience: Fresher / Internship Experience',
  'Projects: 4+ Completed',
  'Tech Stack: MERN Stack',
];

const highlights = [
  'Built 4+ full stack applications',
  'Experience with REST APIs',
  'Strong UI/UX focus',
  'Responsive design expertise',
];

const sectionAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function DeveloperProfile({ developer }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <motion.div
        variants={sectionAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="glass overflow-hidden p-6 md:p-10"
      >
        <div className="grid items-center gap-10 md:grid-cols-[340px_1fr]">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="relative mx-auto w-fit">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-b from-orange-500 to-purple-600 blur-md opacity-80" />
            <SafeImage
              src={developer.image}
              fallback={developer.fallbackImage}
              alt={developer.name}
              className="relative h-[28rem] w-80 rounded-[2rem] object-cover transition duration-500 hover:scale-[1.03]"
            />
          </motion.div>

          <div>
            <h1 className="font-display text-4xl font-bold md:text-5xl">{developer.name}</h1>
            <p className="mt-2 text-lg font-semibold text-orange-200">Full Stack MERN Developer</p>
            <p className="mb-6 mt-2 text-slate-300">Building scalable, high-performance web applications</p>

            <div className="mb-8 flex flex-wrap gap-2">
              {quickStats.map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-200">
                  {item}
                </span>
              ))}
            </div>

            <motion.div variants={sectionAnimation} className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <h2 className="mb-3 text-xl font-semibold">About Me</h2>
              <p className="text-slate-300">
                I am a passionate MERN stack developer with experience in building full-stack applications including e-commerce platforms, LMS systems, and booking solutions. I focus on clean UI, efficient backend systems, and delivering scalable applications.
              </p>
            </motion.div>

            <motion.div variants={sectionAnimation} className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <h2 className="mb-4 text-xl font-semibold">Skills</h2>
              <div className="space-y-4">
                {skillCategories.map((skill) => (
                  <motion.div key={skill.label} whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ff3c00]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={sectionAnimation} className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <h2 className="mb-4 text-xl font-semibold">Project Contributions</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {developer.projects.map((project) => (
                  <motion.div key={project} whileHover={{ y: -2 }} className="rounded-xl border border-orange-400/20 bg-orange-500/5 p-3 text-sm text-slate-200">
                    {project}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={sectionAnimation} className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <h2 className="mb-4 text-xl font-semibold">Achievements / Highlights</h2>
              <ul className="grid gap-2 text-slate-300 md:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm">{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={sectionAnimation} className="mb-6 flex flex-wrap gap-3">
              <MagneticButton
                as="a"
                href={developer.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ff3c00] px-5 py-2.5 font-semibold shadow-[0_0_26px_rgba(255,106,0,.35)] hover:scale-105"
              >
                View Resume
              </MagneticButton>
              <MagneticButton
                as="a"
                href={developer.resumeDownloadUrl || developer.resumeUrl}
                download
                className="rounded-full border border-orange-300/40 bg-orange-400/10 px-5 py-2.5 font-semibold text-orange-100 shadow-[0_0_20px_rgba(255,106,0,.2)] hover:scale-105"
              >
                Download Resume
              </MagneticButton>
            </motion.div>

            <motion.div variants={sectionAnimation} className="flex flex-wrap gap-3">
              <a href={`mailto:${developer.email}`} className="rounded-full border border-white/20 px-4 py-2 transition hover:scale-105 hover:border-orange-300/40">Email</a>
              <a href={developer.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 transition hover:scale-105 hover:border-green-300/40">WhatsApp</a>
              <a href={developer.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 transition hover:scale-105 hover:border-purple-300/40">GitHub</a>
              <a href={developer.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 transition hover:scale-105 hover:border-blue-300/40">LinkedIn</a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
