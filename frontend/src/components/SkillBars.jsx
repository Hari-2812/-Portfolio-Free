import { motion } from 'framer-motion';

const skills = [
  { name: 'React', value: 94 },
  { name: 'Node.js', value: 91 },
  { name: 'MongoDB', value: 89 }
];

export default function SkillBars() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <h2 className="section-title">Core MERN Skills</h2>
      <p className="section-subtitle">We build clean frontends, scalable APIs, and robust data models for growth-stage businesses.</p>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="glass p-4">
            <div className="mb-2 flex justify-between text-sm">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>
            <div className="h-3 rounded-full bg-slate-800">
              <motion.div
                className="h-3 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
