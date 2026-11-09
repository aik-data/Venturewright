import { Reveal } from "@/components/Reveal";
import { SITUATIONS } from "@/lib/content";

export function Situations() {
  return (
    <section
      className="section section--ruled-inset"
      id="when"
      aria-labelledby="when-title"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--ruled">When to bring Matthew in</p>
          <h2 id="when-title" className="section__title section__title--wide">
            Owners usually reach out when one of these is true.
          </h2>
        </Reveal>

        <div className="pillars">
          {SITUATIONS.map((item, index) => (
            <Reveal
              as="article"
              className="pillar"
              key={item.title}
              delay={index * 60}
            >
              <div className="pillar__meta">
                <span className="pillar__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="pillar__title">{item.title}</h3>
              </div>
              <div className="prose prose--tight">
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="editorial owner-note" delay={60}>
          <p className="eyebrow eyebrow--ruled">Owner independence</p>
          <div className="prose prose--tight">
            <p>
              Owner dependence usually develops because the owner is highly
              capable: the fastest decision-maker, the person with the most
              context, the one everyone trusts to resolve uncertainty. Over
              time, the business learns to rely on that. The aim is not to make
              you irrelevant. It is to build a business that runs well without
              you in every decision, so your time goes where you choose.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
