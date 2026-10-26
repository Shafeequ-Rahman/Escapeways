import { Compass, MessageCircleHeart, Wallet, UsersRound } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const REASONS = [
  {
    icon: Compass,
    title: "Experiences for every traveller",
    text: "First-time campers, honeymooners, families or thrill-seeking friend groups — we shape each escape around the people taking it.",
  },
  {
    icon: Wallet,
    title: "Options for different budgets",
    text: "From simple weekend camps to premium villas, we suggest stays and plans that respect the budget you share with us.",
  },
  {
    icon: MessageCircleHeart,
    title: "Personalized travel assistance",
    text: "A real person helps you choose, plan and prepare — with suggestions based on what you actually enjoy.",
  },
  {
    icon: UsersRound,
    title: "Simple booking enquiries",
    text: "No long forms or waiting rooms. Message us on WhatsApp, tell us your plan, and we take it from there.",
  },
] as const;

export function WhyChoose() {
  return (
    <section id="why-us" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label mx-auto">Why Choose Escapeways?</p>
          <h2 className="section-title mt-4">
            Travel that feels <span className="italic text-primary">personally planned</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 110}>
              <div className="card-lift h-full rounded-3xl border border-border bg-card p-6">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <reason.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl leading-snug text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
