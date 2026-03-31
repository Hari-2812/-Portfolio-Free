import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useMouseParallax from '../hooks/useMouseParallax';
import DeveloperCards from '../components/DeveloperCards';
import SkillBars from '../components/SkillBars';
import ProjectGrid from '../components/ProjectGrid';
import CaseStudies from '../components/CaseStudies';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

export default function Home() {
  const mouse = useMouseParallax();

  return (
    <>
      <section className="relative overflow-hidden px-4 py-20 md:px-8 md:py-28">
        <motion.div
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{ x: mouse.x, y: mouse.y }}
          transition={{ type: 'spring', stiffness: 70, damping: 20 }}
        />
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-sm text-cyan-200">
            Available for Freelance Work
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            We help businesses build fast, scalable web applications using MERN stack
          </h1>
          <p className="mt-6 max-w-2xl text-slate-300">
            We are a two-developer freelance team delivering modern web products with strong UI, secure backend architecture, and measurable business impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950">Hire Us</Link>
            <a href="#projects" className="rounded-full border border-white/30 px-5 py-2">Projects</a>
            <Link to="/contact" className="rounded-full border border-white/30 px-5 py-2">Contact</Link>
          </div>
        </div>
      </section>
      <DeveloperCards />
      <SkillBars />
      <ProjectGrid />
      <CaseStudies />
      <Services />
      <Testimonials />
      <CTASection />
    </>
  );
}
