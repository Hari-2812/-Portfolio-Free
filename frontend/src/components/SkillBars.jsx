import { motion } from 'framer-motion';

const skills = [
  { name: 'React', value: 95 },
  { name: 'Node.js', value: 92 },
  { name: 'MongoDB', value: 90 },
];

export default function SkillBars() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-20 md:px-8">
      <h2 className="section-title">High-Impact MERN Expertise</h2>
      <p className="section-subtitle">Animations, architecture, and scalability engineered to production standards.</p>
      <div className="space-y-6">
        {skills.map((skill, idx) => (
          <div key={skill.name} className="glass p-5">
            <div className="mb-2 flex justify-between text-sm">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>
            <div className="h-3 rounded-full bg-white/10">
              <motion.div
                className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
