export default function DeveloperProfile({ developer }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <div className="glass p-8">
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <img src={developer.image} alt={developer.name} className="h-56 w-56 rounded-2xl object-cover" />
          <div>
            <h1 className="text-3xl font-bold text-cyan-300">{developer.name}</h1>
            <p className="mb-4 text-slate-300">{developer.role}</p>
            <p className="mb-6 text-slate-200">{developer.about}</p>

            <h2 className="mb-2 text-xl font-semibold">Skills</h2>
            <div className="mb-6 flex flex-wrap gap-2">
              {developer.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-sm">{skill}</span>
              ))}
            </div>

            <h2 className="mb-2 text-xl font-semibold">Projects Contributed</h2>
            <ul className="mb-6 list-disc pl-5 text-slate-200">
              {developer.projects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>

            <div className="mb-4 flex flex-wrap gap-3">
              <a href={developer.resumeUrl} className="rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-950">Download Resume</a>
              <a href={`mailto:${developer.email}`} className="rounded-full border border-white/30 px-4 py-2">Email</a>
              <a href={developer.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-4 py-2">WhatsApp</a>
              <a href={developer.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-4 py-2">GitHub</a>
              <a href={developer.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-4 py-2">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
