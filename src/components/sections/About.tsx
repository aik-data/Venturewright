import { Reveal } from "@/components/Reveal";
import { FOUNDER_NAME } from "@/lib/site";

export function About() {
  return (
    <section
      className="section section--sunk"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container">
        <Reveal className="editorial">
          <div className="editorial__aside">
            <p className="eyebrow eyebrow--ruled eyebrow--accent">About</p>
            <h2 id="about-title">{FOUNDER_NAME}, Founder.</h2>
          </div>

          <div className="prose prose--tight">
            <p>
              Matthew has spent the past eight years building, scaling, and
              redesigning owner-led businesses from the inside. His operating
              work spans starting companies, organizational design, revenue
              systems, leadership development, decision-making structures,
              business-model design, and launching new ventures.
            </p>
            <p>
              Venturewright grew out of a repeated pattern. Business owners
              would bring him complex, scattered problems, and the work was to
              find what actually mattered and redesign the business around it.
            </p>
            <p>
              He brings an outside perspective with an operator’s judgment, and
              looks across the whole business (growth, operations, leadership,
              finance, and incentives) rather than a single function. His role
              is to help owners see the business clearly, decide what matters
              most, and design the changes that follow.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
