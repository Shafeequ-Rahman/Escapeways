import { Compass } from "lucide-react";
import aboutMain from "@/assets/gallery-mountains.jpg";
import aboutInset from "@/assets/service-camping.jpg";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="section-label">About Us</p>
          <h2 className="section-title mt-4">
            Turning travel dreams into <span className="italic text-primary">real escapes</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            At Escapeways, we help you discover new destinations, memorable experiences, and
            beautiful places to stay. From outdoor adventures to relaxing getaways, we make
            planning your next escape easier.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm font-medium text-primary">
            <Compass className="size-5" aria-hidden="true" />
            Camping · Stays · Group trips · Custom planning
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="relative">
            <img
              src={aboutMain}
              alt="Layered green mountains in the mist at dawn"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--forest-deep)_55%,transparent)]"
              loading="lazy"
              width={1200}
              height={912}
            />
            <img
              src={aboutInset}
              alt="A warm campsite beside a forest stream at dusk"
              className="absolute -bottom-8 -right-4 hidden w-2/5 rounded-2xl border-4 border-background object-cover shadow-xl sm:block md:-right-8"
              loading="lazy"
              width={1200}
              height={912}
            />
            <div className="absolute -left-3 -top-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-lg sm:-left-6">
              <p className="font-display text-xl leading-none text-primary">Your escape,</p>
              <p className="text-xs font-medium tracking-wide text-muted-foreground">planned for you</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
