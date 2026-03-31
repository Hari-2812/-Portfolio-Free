import ProjectGrid from '../components/ProjectGrid';
import CaseStudies from '../components/CaseStudies';
import CTASection from '../components/CTASection';

export default function Projects() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-8">
        <h1 className="section-title">Projects Portfolio</h1>
        <p className="section-subtitle">Explore the full set of products we designed, developed, and optimized for business growth.</p>
      </section>
      <ProjectGrid />
      <CaseStudies />
      <CTASection />
    </>
  );
}
