import { Reveal } from "@/components/Reveal";
import { CASES } from "@/lib/content";

export function Experience() {
  return (
    <section
      className="section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <Reveal className="editorial">
          <div className="editorial__aside">
            <p className="eyebrow eyebrow--ruled">Experience</p>
            <h2 id="experience-title">Selected operating experience.</h2>
          </div>

          <p className="disclaimer">
            Examples from Matthew’s work as an owner and operator before
            Venturewright. These are not Venturewright client engagements.
          </p>
        </Reveal>

        <div className="cases">
          {CASES.map((entry) => (
            <Reveal as="article" className="case" key={entry.title}>
              <header className="case__head">
                <h3 className="case__title">{entry.title}</h3>
                <p className="case__sector">{entry.sector}</p>
              </header>

              <dl className="case__rows">
                {entry.rows.map((row) => (
                  <div className="case__row" key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.text}</dd>
                  </div>
                ))}
              </dl>

              <p className="case__note">{entry.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
