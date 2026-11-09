import { BookingLink } from "@/components/BookingLink";
import { EmailLink } from "@/components/EmailLink";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section
      className="final section--ink on-ink"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow eyebrow--ruled eyebrow--accent">Contact</p>
          <h2 className="final__title" id="contact-title">
            What would most change your business?
          </h2>
        </Reveal>

        <Reveal className="final__grid" delay={60}>
          <div className="prose prose--tight">
            <p>
              The first step is a 30-minute introductory conversation. You and
              Matthew will talk about your business, what you want to change,
              and whether an engagement makes sense.
            </p>
          </div>

          <div className="final__aside">
            <BookingLink />
            <p className="final__meta">
              <EmailLink className="link" />
              <br />
              <span className="final__note">No preparation required.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
