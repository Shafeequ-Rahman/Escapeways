import { ArrowUpRight } from "lucide-react";
import campingImg from "@/assets/service-camping.jpg";
import packagesImg from "@/assets/service-packages.jpg";
import resortsImg from "@/assets/service-resorts.jpg";
import villaImg from "@/assets/service-villa.jpg";
import groupImg from "@/assets/service-group.jpg";
import planningImg from "@/assets/service-planning.jpg";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { Reveal } from "@/components/Reveal";
import { enquiryMessage, waLink } from "@/lib/site";

const SERVICES = [
  {
    title: "Camping Experiences",
    description:
      "Scenic campsites under open skies — bonfires, stargazing and quiet time away from the noise.",
    image: campingImg,
    alt: "A bell tent campsite beside a forest stream at dusk",
    topic: "camping experiences",
  },
  {
    title: "Travel Packages",
    description:
      "Ready-to-go itineraries to beautiful destinations, planned end to end so you can just show up.",
    image: packagesImg,
    alt: "A winding road through green tea plantation hills",
    topic: "travel packages",
  },
  {
    title: "Resorts & Hotels",
    description:
      "Handpicked stays with the comfort, views and warm hospitality your trip deserves.",
    image: resortsImg,
    alt: "A resort infinity pool overlooking forested hills at sunset",
    topic: "resorts and hotels",
  },
  {
    title: "Villas & Private Pool Stays",
    description:
      "Private villas and pool stays for slow weekends, celebrations and time with your people.",
    image: villaImg,
    alt: "A modern villa with a private infinity pool at dusk",
    topic: "villas and private pool stays",
  },
  {
    title: "Group Trips & Getaways",
    description:
      "Join like-minded travellers or bring your own crew — trips made for shared memories.",
    image: groupImg,
    alt: "Friends around a campfire at a mountain campsite at twilight",
    topic: "group trips and getaways",
  },
  {
    title: "Customized Trip Planning",
    description:
      "Tell us your dates, budget and vibe — we plan every detail of the journey around you.",
    image: planningImg,
    alt: "A travel itinerary notebook beside a map and compass",
    topic: "customized trip planning",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="bg-forest-mist/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label justify-center after:absolute after:relative">
            Our Services
          </p>
          <h2 className="section-title mt-4">
            One team for <span className="italic text-primary">every kind of escape</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Camping trips, curated packages, beautiful stays and fully personalized plans —
            pick what fits, and we handle the rest.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 120}>
              <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    width={1200}
                    height={912}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-forest-deep/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl leading-snug text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <a
                    href={waLink(enquiryMessage(service.topic))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-between rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon className="size-4" />
                      Enquire on WhatsApp
                    </span>
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
