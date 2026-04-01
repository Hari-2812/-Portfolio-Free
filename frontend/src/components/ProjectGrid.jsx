import { motion } from 'framer-motion';
import { projects } from '../utils/data';
import TiltCard from './TiltCard';
import SafeImage from './SafeImage';

const buttonBase = 'inline-flex cursor-pointer items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:border-orange-300/60 hover:text-white';

export default function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">Production-grade platforms crafted for growth and measurable outcomes.</p>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <TiltCard key={project.title}>
            <motion.article
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="glass group relative overflow-hidden border border-orange-400/15 shadow-[0_0_0_rgba(255,106,0,0)] transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(255,106,0,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <SafeImage
                src={project.image}
                fallback={project.fallbackImage}
                alt={project.title}
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 transition duration-500 group-hover:opacity-100"
              >
                <span className="rounded-full border border-orange-300/60 bg-black/60 px-5 py-2 text-sm font-semibold text-orange-200">View Live Project</span>
              </motion.div>

              <div className="relative z-10 space-y-4 p-6">
                <h3 className="text-xl font-semibold text-orange-200">{project.title}</h3>
                <p className="text-slate-200">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-orange-300/35 bg-orange-400/10 px-3 py-1 text-xs text-orange-100 shadow-[0_0_18px_rgba(255,106,0,0.2)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonBase} bg-orange-500/20 hover:bg-orange-500/30`}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileTap={{ scale: 0.96 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonBase} bg-white/5 hover:bg-white/10`}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.article>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
