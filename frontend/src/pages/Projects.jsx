import Reveal from '../components/Reveal';
import ProjectGrid from '../components/ProjectGrid';
import CaseStudies from '../components/CaseStudies';
import CTASection from '../components/CTASection';

export default function Projects() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
        <Reveal>
          <h1 className="section-title">Project Showcase</h1>
          <p className="section-subtitle">A curated collection of premium products designed and developed with modern MERN excellence.</p>
        </Reveal>
      </section>
      <ProjectGrid />
      <CaseStudies />
      <CTASection />
    </>
  );
}
