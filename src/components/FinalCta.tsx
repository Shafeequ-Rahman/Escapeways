import { ArrowRight } from "lucide-react";
import ctaImage from "@/assets/gallery-night.jpg";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { Reveal } from "@/components/Reveal";
import { waLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <img
        src={ctaImage}
        alt="Glowing tents under a starry mountain sky"
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
        width={1200}
        height={912}
      />
      <div className="absolute inset-0 bg-forest-deep/80" />
      <Reveal className="relative mx-auto max-w-3xl px-4 text-center text-primary-foreground sm:px-6">
        <h2 className="section-title">
          Your Next Escape <span className="italic text-gold">Starts Here.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          Tell us your travel plans, and let's find your perfect getaway.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={waLink("Hi Escapeways! I'd like to chat about planning a trip.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-semibold text-forest-deep transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="size-4" />
            Chat on WhatsApp
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            Contact Us
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
