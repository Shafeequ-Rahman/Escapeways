import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { INSTAGRAM_URL, waLink } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Escapeways" },
      {
        name: "description",
        content: "Terms for using the Escapeways website and enquiry service.",
      },
      { property: "og:title", content: "Terms & Conditions — Escapeways" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:opacity-80"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>
        <h1 className="section-title mt-6">Terms & Conditions</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <div>
            <h2 className="font-display text-xl text-foreground">About this website</h2>
            <p className="mt-2">
              This website introduces Escapeways' services and lets you send travel enquiries.
              It does not process online payments or confirm bookings by itself — all bookings
              are arranged directly with our team.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-foreground">Enquiries</h2>
            <p className="mt-2">
              Submitting an enquiry through the form or messaging us on WhatsApp is a request
              for information, not a confirmed reservation. Final details, availability and
              prices are always confirmed by our team before any trip is booked.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-foreground">Accuracy</h2>
            <p className="mt-2">
              We work hard to keep the information here current, but destinations, stays and
              availability can change. Specifics for your trip are confirmed at the time of
              planning.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-foreground">Contact</h2>
            <p className="mt-2">
              For any questions about these terms, reach us on{" "}
              <a
                href={waLink("Hi Escapeways! I have a question about your terms.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                WhatsApp
              </a>{" "}
              or via our{" "}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
                Instagram
              </a>
              .
            </p>
          </div>
          <p className="text-xs">Last updated: October 2026</p>
        </div>
      </div>
    </div>
  );
}
