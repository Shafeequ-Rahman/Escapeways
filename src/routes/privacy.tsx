import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PHONE_PRIMARY_DISPLAY, PHONE_SECONDARY_DISPLAY, TEL_PRIMARY, TEL_SECONDARY } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Escapeways" },
      {
        name: "description",
        content: "How Escapeways handles the information you share through enquiries and messages.",
      },
      { property: "og:title", content: "Privacy Policy — Escapeways" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function PrivacyPage() {
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
        <h1 className="section-title mt-6">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Escapeways respects your privacy. This policy explains what we do with the
            information you share when you contact us.
          </p>
          <div>
            <h2 className="font-display text-xl text-foreground">What we collect</h2>
            <p className="mt-2">
              When you message us on WhatsApp, call us, or fill in the enquiry form, we receive
              the details you choose to share — typically your name, phone number, preferred
              service, travel dates and budget.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-foreground">How we use it</h2>
            <p className="mt-2">
              We use your details only to plan and respond to your travel enquiry. We do not
              sell your information or use it for unrelated marketing.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-foreground">Where it goes</h2>
            <p className="mt-2">
              Enquiries submitted through the website are passed to our team over WhatsApp.
              Messages and calls are handled directly by us on our official numbers
              ({PHONE_PRIMARY_DISPLAY} and {PHONE_SECONDARY_DISPLAY}).
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-foreground">Your choices</h2>
            <p className="mt-2">
              You can ask us to delete your enquiry details at any time by messaging us on{" "}
              <a href={TEL_PRIMARY} className="text-primary underline underline-offset-2">
                {PHONE_PRIMARY_DISPLAY}
              </a>{" "}
              or{" "}
              <a href={TEL_SECONDARY} className="text-primary underline underline-offset-2">
                {PHONE_SECONDARY_DISPLAY}
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
