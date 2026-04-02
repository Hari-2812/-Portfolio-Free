import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Reveal from './Reveal';

const stats = [
  { label: 'Projects Completed', value: 4, suffix: '+', icon: '📁' },
  { label: 'Technologies Used', value: 10, suffix: '+', icon: '🧠' },
  { label: 'Happy Clients', value: 5, suffix: '+', icon: '😊' },
  { label: 'Team Members', value: 2, suffix: '', icon: '👨‍💻' }
];

const clientTypes = [
  { title: 'Startups', icon: '🚀', description: 'MVPs and rapid product launches for ambitious founders.' },
  { title: 'Small Businesses', icon: '🏪', description: 'Reliable websites that turn visits into paying customers.' },
  { title: 'Students', icon: '🎓', description: 'Portfolio and capstone platforms with clean UI and guidance.' },
  { title: 'Entrepreneurs', icon: '💼', description: 'Conversion-focused digital products built to scale fast.' }
];

const projectTypes = [
  'E-commerce Websites',
  'Learning Management Systems',
  'Booking Systems',
  'Business Websites',
  'Custom Web Applications'
];

const processSteps = [
  { title: 'Requirement Analysis', icon: '🔍' },
  { title: 'Design & Planning', icon: '🗺️' },
  { title: 'Development', icon: '⚙️' },
  { title: 'Testing', icon: '🧪' },
  { title: 'Deployment', icon: '🚀' }
];

const reasons = [
  { title: 'Clean and modern UI', icon: '✨' },
  { title: 'Fast and scalable backend', icon: '⚡' },
  { title: 'On-time delivery', icon: '⏱️' },
  { title: 'Client-focused approach', icon: '🤝' }
];

function CountUp({ target, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1300;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-3xl font-black text-white md:text-4xl">
      {count}
      {suffix}
    </span>
  );
}

export default function AgencyTrustSections() {
  const animation = useMemo(() => ({
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
    })
  }), []);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <Reveal>
          <h2 className="section-title">Achievements at a Glance</h2>
          <p className="section-subtitle">Real output, broad technical depth, and a delivery culture that clients can trust.</p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.article
              key={item.label}
              className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]"
              variants={animation}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-xl">
                {item.icon}
              </span>
              <div className="mb-2"><CountUp target={item.value} suffix={item.suffix} /></div>
              <p className="text-sm text-slate-300">{item.label}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <Reveal>
          <h2 className="section-title">Who We Work With</h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clientTypes.map((client, index) => (
            <motion.article
              key={client.title}
              className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_26px_rgba(34,211,238,0.35)]"
              variants={animation}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-3 text-2xl">{client.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{client.title}</h3>
              <p className="text-sm text-slate-300">{client.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <Reveal>
          <h2 className="section-title">What We Build</h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projectTypes.map((project, index) => (
            <motion.article
              key={project}
              className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/40 hover:shadow-[0_0_28px_rgba(255,106,0,0.3)]"
              variants={animation}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-slate-100">{project}</h3>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <Reveal>
          <h2 className="section-title">Our Work Process</h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              className="glass rounded-2xl p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(168,85,247,0.35)]"
              variants={animation}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-cyan-200">
                {index + 1}
              </span>
              <div className="mb-2 text-xl">{step.icon}</div>
              <h3 className="text-sm font-semibold text-slate-200">{step.title}</h3>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <Reveal>
          <h2 className="section-title">Why Choose Us</h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(56,189,248,0.33)]"
              variants={animation}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-3 text-2xl">{reason.icon}</div>
              <p className="font-medium text-slate-200">{reason.title}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
