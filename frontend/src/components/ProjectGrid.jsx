import { projects } from '../utils/data';
import TiltCard from './TiltCard';
import SafeImage from './SafeImage';

export default function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">Production-grade platforms crafted for growth and measurable outcomes.</p>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <TiltCard key={project.title}>
            <article className="glass group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <SafeImage src={project.image} fallback={project.fallbackImage} alt={project.title} className="h-56 w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 transition duration-500 group-hover:opacity-100">
                <span className="rounded-full border border-orange-300/60 bg-black/50 px-4 py-1.5 text-sm font-semibold text-orange-200">View Project</span>
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-orange-200">{project.title}</h3>
                <p className="text-slate-200">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-orange-300/35 bg-orange-400/10 px-3 py-1 text-xs text-orange-100 shadow-[0_0_18px_rgba(255,106,0,0.2)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
