import { BookingLink } from "@/components/BookingLink";
import { CATEGORY, FOUNDER_NAME } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div>
          <p className="eyebrow eyebrow--ruled eyebrow--accent">{CATEGORY}</p>
          <h1 className="hero__title" id="hero-title">
            <span>A stronger business.</span>{" "}
            <span>Less dependent on you.</span>
          </h1>
        </div>

        <div className="hero__body">
          <div className="hero__copy">
            <p className="hero__lead">
              Venturewright helps owners of established businesses identify
              what is holding them back and redesign the leadership, workflows,
              and decisions that need to change.
            </p>
            <p className="hero__founder">
              Founded and led by {FOUNDER_NAME}, an owner and operator who has
              spent eight years building and redesigning businesses from the
              inside.
            </p>
          </div>

          <div className="hero__actions">
            <BookingLink />
            <p className="hero__note">
              30-minute introductory conversation. No preparation required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
