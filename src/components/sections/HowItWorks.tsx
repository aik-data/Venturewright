import { Reveal } from "@/components/Reveal";
import { STEPS } from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      className="section section--ink on-ink"
      id="how-it-works"
      aria-labelledby="how-title"
    >
      <div className="container">
        <Reveal className="editorial">
          <div className="editorial__aside">
            <p className="eyebrow eyebrow--ruled eyebrow--accent">
              How it works
            </p>
            <h2 id="how-title">How working together starts.</h2>
          </div>

          <div className="prose prose--tight">
            <p>
              Every engagement begins with the business itself, not a
              predetermined package. The work moves in four steps.
            </p>
          </div>
        </Reveal>

        <Reveal as="ol" className="method" delay={60}>
          {STEPS.map((step, index) => (
            <li className="method__step" key={step.term}>
              <span className="method__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="method__term">{step.term}</h3>
              <p className="method__q">{step.text}</p>
            </li>
          ))}
        </Reveal>

        <Reveal className="prose prose--tight method__after" delay={80}>
          <p>
            Before an engagement begins, you and Matthew agree on its scope,
            who is responsible for what, and how progress will be measured.
            Some businesses need one focused change; others need a broader
            redesign. Venturewright is intentionally small, and Matthew works
            directly with each owner.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
