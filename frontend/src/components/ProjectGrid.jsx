import { projects } from '../utils/data';

export default function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">Real-world products designed to improve conversions, workflows, and revenue.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="glass overflow-hidden">
            <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
            <div className="space-y-4 p-5">
              <h3 className="text-xl font-semibold text-cyan-300">{project.title}</h3>
              <p className="text-slate-200">{project.description}</p>
              <p className="text-sm text-slate-400">Stack: {project.stack.join(', ')}</p>
              <div className="flex gap-4 text-sm">
                <a href={project.demo} className="text-cyan-300 hover:underline">Live Demo</a>
                <a href={project.code} className="text-cyan-300 hover:underline">Source Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
