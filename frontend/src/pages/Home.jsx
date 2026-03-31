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

const particles = Array.from({ length: 24 }, (_, i) => i);

export default function Home() {
  const layers = useParallaxLayers();

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-20 md:px-8 md:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8%] top-[-12%] h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" style={layers.bg} />
          <div className="absolute right-[-6%] top-[6%] h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-3xl" style={layers.mid} />
          <div className="absolute bottom-[-18%] left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" style={layers.front} />
          {particles.map((id) => (
            <span
              key={id}
              className="floating absolute h-1.5 w-1.5 rounded-full bg-white/60"
              style={{ left: `${(id * 13) % 100}%`, top: `${(id * 19) % 100}%`, animationDelay: `${id * 0.18}s` }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <span className="inline-block rounded-full border border-cyan-300/35 bg-cyan-300/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 neon-outline">
              Available for Freelance Work
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[1.05] md:text-7xl">
              We craft <span className="gradient-text">high-converting</span> digital products with MERN precision.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-3xl text-lg text-slate-300 md:text-xl">
              Elite two-developer team blending frontend artistry with backend scalability to launch premium web experiences for ambitious brands.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-wrap gap-4">
              <MagneticButton as={Link} to="/contact" className="rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-7 py-3 font-semibold text-white shadow-[0_0_28px_rgba(77,201,240,0.45)]">
                Hire Us
              </MagneticButton>
              <MagneticButton as="a" href="#projects" className="rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold hover:border-cyan-300/40">
                Explore Projects
              </MagneticButton>
              <MagneticButton as={Link} to="/contact" className="rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold hover:border-purple-300/40">
                Contact
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
