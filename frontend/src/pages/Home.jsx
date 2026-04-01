import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useParallaxLayers from '../hooks/useParallaxLayers';
import MagneticButton from '../components/MagneticButton';
import Reveal from '../components/Reveal';
import DeveloperCards from '../components/DeveloperCards';
import SkillBars from '../components/SkillBars';
import ProjectGrid from '../components/ProjectGrid';
import CaseStudies from '../components/CaseStudies';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const particles = Array.from({ length: 16 }, (_, i) => i);

export default function Home() {
  const layers = useParallaxLayers();

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-20 md:px-8 md:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" style={layers.bg} />
          <div className="absolute right-[-6%] top-[8%] h-[26rem] w-[26rem] rounded-full bg-blue-500/20 blur-3xl" style={layers.mid} />
          <div className="absolute bottom-[-18%] left-1/3 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" style={layers.front} />
          {particles.map((id) => (
            <motion.span
              key={id}
              className="absolute h-3 w-3 rounded-full bg-white/40"
              style={{ left: `${(id * 13) % 100}%`, top: `${(id * 17) % 100}%` }}
              animate={{ y: [0, -16, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4 + (id % 4), repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="inline-block rounded-full border border-orange-300/35 bg-orange-300/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200 neon-outline">
              Awwwards-Level MERN Studio
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[1.05] md:text-7xl">
              <span className="gradient-text">CodeForge — Forging Digital Solutions</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-3xl text-lg text-slate-300 md:text-xl">
              We build scalable, high-performance MERN stack applications for modern businesses.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton as={Link} to="/contact" className="rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ff3c00] px-7 py-3 font-semibold text-white shadow-[0_0_32px_rgba(255,106,0,0.45)] hover:scale-105">
                Hire Us
              </MagneticButton>
              <MagneticButton as="a" href="#projects" className="rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold hover:border-orange-300/40 hover:scale-105">
                View Projects
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal><DeveloperCards /></Reveal>
      <Reveal><SkillBars /></Reveal>
      <Reveal><ProjectGrid /></Reveal>
      <Reveal><CaseStudies /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><CTASection /></Reveal>
    </>
  );
}
