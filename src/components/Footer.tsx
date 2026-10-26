import { InstagramIcon, WhatsAppIcon } from "@/components/BrandIcons";
import logoLockup from "@/assets/escapeways-logo-lockup_white.asset.json";
import {
  INSTAGRAM_URL,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY_DISPLAY,
  TAGLINE,
  TEL_PRIMARY,
  TEL_SECONDARY,
  waLink,
} from "@/lib/site";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-forest-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3 md:gap-8">
        <div>
          <a href="#top" className="inline-block" aria-label="Escapeways home">
            <img
              src={logoLockup.url}
              alt="Escapeways — Go Beyond the Usual"
              className="h-auto w-56 sm:w-64"
            />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            {TAGLINE}
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
          >
            <InstagramIcon className="size-4" />
            @escapeways__
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex gap-4 text-sm text-primary-foreground/60">
            <li>
              <a href="/privacy" className="transition-colors hover:text-primary-foreground">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="transition-colors hover:text-primary-foreground">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={TEL_PRIMARY} className="text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                {PHONE_PRIMARY_DISPLAY} <span className="text-primary-foreground/50">(Primary)</span>
              </a>
            </li>
            <li>
              <a href={TEL_SECONDARY} className="text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                {PHONE_SECONDARY_DISPLAY} <span className="text-primary-foreground/50">(Secondary)</span>
              </a>
            </li>
          </ul>
          <a
            href={waLink("Hi Escapeways! I'd like to enquire about a trip.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-forest-deep transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="size-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/55">
        © 2026 Escapeways. All rights reserved.
      </div>
    </footer>
  );
}
