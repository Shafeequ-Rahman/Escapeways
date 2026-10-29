import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { waLink } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92svh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Guests gathered around a bonfire under warm string lights at an Escapeways night camp"
        className="animate-kenburns absolute inset-0 size-full object-cover object-center"
        width={1080}
        height={1350}
        fetchPriority="high"
      />
      {/* Subtle dark vignette — keeps the vibrant amber bonfire glow visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-28 text-primary-foreground sm:px-6">
        <p className="animate-rise mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium tracking-[0.18em] uppercase backdrop-blur-sm">
          <MapPin className="size-3.5 text-gold" aria-hidden="true" />
          Premium travel &amp; camping experiences
        </p>
        <h1
          className="animate-rise max-w-3xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          style={{ animationDelay: "120ms" }}
        >
          Escape the Ordinary.
          <span className="block text-gold italic">Discover More.</span>
        </h1>
        <p
          className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg"
          style={{ animationDelay: "240ms" }}
        >
          Discover unforgettable camping experiences, exciting travel packages, beautiful
          stays, and personalized getaways with Escapeways.
        </p>
        <div
          className="animate-rise mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-forest-deep transition-all hover:bg-gold hover:text-forest-deep"
          >
            Explore Our Services
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href={waLink("Hi Escapeways! I'd like to plan a trip. Could you share more details?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            Plan Your Trip
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="animate-drift absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/80"
      >
        <ChevronDown className="size-7" aria-hidden="true" />
      </a>
    </section>
  );
}
