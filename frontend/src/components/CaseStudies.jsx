import { projects } from '../utils/data';

export default function CaseStudies() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="section-title">Case Studies</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={`${project.title}-case`} className="glass p-6">
            <h3 className="mb-4 text-xl font-semibold text-cyan-200">{project.title}</h3>
            <div className="space-y-3 text-sm text-slate-200">
              <p><span className="text-purple-300">Problem:</span> {project.problem}</p>
              <p><span className="text-cyan-300">Solution:</span> {project.solution}</p>
              <p><span className="text-emerald-300">Result:</span> {project.result}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
