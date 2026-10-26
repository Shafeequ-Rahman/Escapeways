import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { TAGLINE, waLink } from "@/lib/site";
import logoWhite from "@/assets/escapeways-logo-wm_white.asset.json";
import logoForest from "@/assets/escapeways-logo-wm_forest.asset.json";
import logoLockup from "@/assets/escapeways-logo-lockup_white.asset.json";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 shadow-[0_8px_30px_-18px_color-mix(in_oklab,var(--forest-deep)_50%,transparent)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-20">
        <a href="#top" className="flex items-center gap-2" aria-label="Escapeways home">
          <span
            className={`flex size-9 items-center justify-center rounded-full transition-colors duration-500 ${
              scrolled ? "bg-primary text-primary-foreground" : "bg-primary-foreground/15 text-primary-foreground backdrop-blur-sm"
            }`}
          >
            <Mountain className="size-5" aria-hidden="true" />
          </span>
          <span
            className={`font-display text-2xl tracking-wide transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Escapeways
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                  scrolled ? "text-foreground/80" : "text-primary-foreground/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={waLink(`Hi Escapeways! ${TAGLINE.replace(/\.$/, "")} — I'd like to plan a trip. Could you help me?`)}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all sm:inline-flex ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-primary-foreground/95 text-forest-deep hover:bg-primary-foreground"
            }`}
          >
            <WhatsAppIcon className="size-4" />
            Plan Your Trip
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`inline-flex size-10 items-center justify-center rounded-full lg:hidden ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-forest-deep text-primary-foreground lg:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <span className="font-display text-2xl tracking-wide">Escapeways</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-10 items-center justify-center rounded-full"
            >
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col items-center justify-center gap-6 px-6 pb-20">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="w-full text-center">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href={waLink("Hi Escapeways! I'd like to plan a trip. Could you help me?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-forest-deep"
              >
                <WhatsAppIcon className="size-4" />
                Plan Your Trip
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
