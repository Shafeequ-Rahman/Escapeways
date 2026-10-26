import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { FeaturedExperiences, InstagramGallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Escapeways — Escape the Ordinary. Discover More." },
      {
        name: "description",
        content:
          "Unforgettable camping experiences, travel packages, resorts & villas, group trips and customized getaways with Escapeways. Plan your next escape today.",
      },
      { property: "og:title", content: "Escapeways — Escape the Ordinary. Discover More." },
      {
        property: "og:description",
        content:
          "Camping experiences, travel packages, beautiful stays and personalized getaways with Escapeways.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <FeaturedExperiences />
        <InstagramGallery />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
