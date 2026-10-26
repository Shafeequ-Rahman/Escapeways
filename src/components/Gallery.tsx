import { ArrowUpRight } from "lucide-react";
import mountainsImg from "@/assets/gallery-mountains.jpg";
import cabinImg from "@/assets/gallery-cabin.jpg";
import waterfallImg from "@/assets/gallery-waterfall.jpg";
import beachImg from "@/assets/gallery-beach.jpg";
import nightImg from "@/assets/gallery-night.jpg";
import groupImg from "@/assets/service-group.jpg";
import campingImg from "@/assets/service-camping.jpg";
import packagesImg from "@/assets/service-packages.jpg";
import { InstagramIcon } from "@/components/BrandIcons";
import { Reveal } from "@/components/Reveal";
import { INSTAGRAM_URL } from "@/lib/site";

const EXPERIENCES = [
  { image: mountainsImg, label: "Mountain Escapes", alt: "Misty green mountain ridges at dawn" },
  { image: nightImg, label: "Camping Nights", alt: "Glowing tents under a starry sky" },
  { image: cabinImg, label: "Nature Stays", alt: "A cozy wooden cabin in a misty pine forest" },
  { image: beachImg, label: "Weekend Getaways", alt: "A hammock between palms on a golden beach" },
  { image: waterfallImg, label: "Hidden Waterfalls", alt: "A waterfall in a lush green forest" },
  { image: groupImg, label: "Campfire Evenings", alt: "Friends around a campfire in the mountains" },
  { image: packagesImg, label: "Scenic Journeys", alt: "A road winding through tea plantations" },
  { image: campingImg, label: "Forest Campsites", alt: "A campsite with string lights by a stream" },
] as const;

const INSTAGRAM_TILES = [beachImg, nightImg, waterfallImg, groupImg, cabinImg, packagesImg];

export function FeaturedExperiences() {
  return (
    <section id="experiences" className="bg-forest-mist/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label mx-auto">Featured Experiences</p>
          <h2 className="section-title mt-4">
            Moments our travellers <span className="italic text-primary">chase</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Camping under starry skies, mountain mornings, waterfall trails and slow weekends
            by the water — this is what an Escapeways trip feels like.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[170px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:grid-cols-4">
          {EXPERIENCES.map((item, i) => (
            <Reveal
              key={item.label}
              delay={(i % 4) * 90}
              className={
                i === 0 || i === 5
                  ? "col-span-2 row-span-2"
                  : i === 7
                    ? "col-span-2"
                    : ""
              }
            >
              <figure className="group relative h-full min-h-40 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1200}
                  height={912}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/75 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 left-0 flex w-full items-center justify-between p-4 text-primary-foreground">
                  <span className="font-display text-lg leading-tight sm:text-xl">{item.label}</span>
                  <span className="size-8 shrink-0 rounded-full bg-primary-foreground/15 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="m-auto size-4" aria-hidden="true" />
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InstagramGallery() {
  return (
    <section id="gallery" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label mx-auto">Instagram Gallery</p>
          <h2 className="section-title mt-4">
            Follow the journeys on <span className="italic text-primary">@escapeways__</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            New destinations, campsite mornings and stay recommendations — straight from the road.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {INSTAGRAM_TILES.map((image, i) => (
            <Reveal key={image} delay={(i % 3) * 100}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl"
                aria-label="View Escapeways on Instagram"
              >
                <img
                  src={image}
                  alt="A travel moment from Escapeways' Instagram"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1200}
                  height={912}
                />
                <span className="absolute inset-0 flex items-center justify-center bg-forest-deep/0 transition-colors duration-300 group-hover:bg-forest-deep/45">
                  <InstagramIcon className="size-7 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest-deep px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <InstagramIcon className="size-4" />
            Follow @escapeways__
          </a>
        </Reveal>
      </div>
    </section>
  );
}
