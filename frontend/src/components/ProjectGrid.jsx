import { projects } from '../utils/data';
import TiltCard from './TiltCard';

export default function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">Polished platforms built for engagement, reliability, and growth.</p>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <TiltCard key={project.title}>
            <article className="glass group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-cyan-200">{project.title}</h3>
                <p className="text-slate-200">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100 shadow-[0_0_18px_rgba(76,201,240,0.2)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  <a href={project.demo} className="rounded-full border border-white/20 px-4 py-1.5 hover:border-cyan-300/40">Live Demo</a>
                  <a href={project.code} className="rounded-full border border-white/20 px-4 py-1.5 hover:border-purple-300/40">Source</a>
                </div>
              </div>
            </article>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
