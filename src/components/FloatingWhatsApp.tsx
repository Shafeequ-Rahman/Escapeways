import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { waLink } from "@/lib/site";

/**
 * Floating WhatsApp button, visible on every screen size across the site.
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink("Hi Escapeways! I'm interested in your travel packages. Could you share more details?")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Escapeways on WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-forest-deep shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-all duration-500 hover:scale-110 sm:bottom-7 sm:right-7 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
