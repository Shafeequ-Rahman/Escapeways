import { useMemo, useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2, Phone, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { Reveal } from "@/components/Reveal";
import {
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY_DISPLAY,
  SERVICE_OPTIONS,
  TEL_PRIMARY,
  TEL_SECONDARY,
  waLink,
} from "@/lib/site";

const BUDGET_OPTIONS = [
  "Flexible",
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "Above ₹50,000",
] as const;

type Errors = Partial<Record<"name" | "phone" | "service" | "date", string>>;

function validate(values: { name: string; phone: string; service: string; date: string }): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!values.service) errors.service = "Please choose a service.";
  if (!values.date) errors.date = "Please pick a travel date.";
  return errors;
}

export function Contact() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const set = (field: keyof typeof values) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [field]: event.target.value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const lines = [
      "Hi Escapeways! Here's my trip enquiry:",
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Service: ${values.service}`,
      `Travel date: ${values.date}`,
      `Budget: ${values.budget || "Flexible"}`,
    ];
    if (values.message.trim()) lines.push(`Message: ${values.message.trim()}`);

    const url = waLink(lines.join("\n"));
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-forest-mist/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label mx-auto">Contact & Enquiry</p>
          <h2 className="section-title mt-4">
            Let's plan your <span className="italic text-primary">next escape</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach us directly on WhatsApp or by phone, or send your trip details below.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5 rounded-3xl bg-forest-deep p-7 text-primary-foreground sm:p-9">
              <div>
                <h3 className="font-display text-3xl">Talk to us directly</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                  WhatsApp is the fastest way to reach us — share your plan and we'll reply
                  with options.
                </p>
              </div>

              <div className="rounded-2xl bg-primary-foreground/8 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Primary WhatsApp & Contact
                </p>
                <a
                  href={TEL_PRIMARY}
                  className="mt-1 block font-display text-3xl tracking-wide"
                >
                  {PHONE_PRIMARY_DISPLAY}
                </a>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={waLink("Hi Escapeways! I'd like to enquire about a trip.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-forest-deep transition-opacity hover:opacity-90"
                  >
                    <WhatsAppIcon className="size-4" />
                    WhatsApp
                  </a>
                  <a
                    href={TEL_PRIMARY}
                    className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-forest-deep transition-opacity hover:opacity-90"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    Call Now
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-primary-foreground/8 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Secondary Contact
                </p>
                <a
                  href={TEL_SECONDARY}
                  className="mt-1 block font-display text-3xl tracking-wide"
                >
                  {PHONE_SECONDARY_DISPLAY}
                </a>
                <a
                  href={TEL_SECONDARY}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/35 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call Second Number
                </a>
              </div>

              <p className="mt-auto flex items-center gap-2 text-xs text-primary-foreground/60">
                <CalendarCheck className="size-4" aria-hidden="true" />
                We usually reply within a few hours.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-3">
            <div className="h-full rounded-3xl border border-border bg-card p-7 sm:p-9">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-secondary text-primary">
                    <CheckCircle2 className="size-9" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl">Enquiry received!</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Thanks, {values.name.trim() || "traveller"}! We've opened WhatsApp with
                    your trip details — just press send there and our team will get back to
                    you shortly.
                  </p>
                  {waUrl && (
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      <WhatsAppIcon className="size-4" />
                      Open WhatsApp again
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setValues({ name: "", phone: "", service: "", date: "", budget: "", message: "" });
                    }}
                    className="mt-4 text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display text-3xl">Send your trip details</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill this in and we'll continue your enquiry on WhatsApp.
                  </p>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium">Name</span>
                      <input
                        type="text"
                        value={values.name}
                        onChange={set("name")}
                        placeholder="Your name"
                        maxLength={80}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/25"
                      />
                      {errors.name && <span className="mt-1 block text-xs text-destructive">{errors.name}</span>}
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium">Phone number</span>
                      <input
                        type="tel"
                        value={values.phone}
                        onChange={set("phone")}
                        placeholder="Your phone number"
                        maxLength={16}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/25"
                      />
                      {errors.phone && <span className="mt-1 block text-xs text-destructive">{errors.phone}</span>}
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium">Service interested in</span>
                      <select
                        value={values.service}
                        onChange={set("service")}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/25"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.service && <span className="mt-1 block text-xs text-destructive">{errors.service}</span>}
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium">Travel date</span>
                      <input
                        type="date"
                        value={values.date}
                        min={today}
                        onChange={set("date")}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/25"
                      />
                      {errors.date && <span className="mt-1 block text-xs text-destructive">{errors.date}</span>}
                    </label>

                    <label className="block sm:col-span-2">
                      <span className="mb-1.5 block text-sm font-medium">Budget (optional)</span>
                      <select
                        value={values.budget}
                        onChange={set("budget")}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/25"
                      >
                        <option value="">Select a range (optional)</option>
                        {BUDGET_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block sm:col-span-2">
                      <span className="mb-1.5 block text-sm font-medium">Message (optional)</span>
                      <textarea
                        value={values.message}
                        onChange={set("message")}
                        placeholder="Tell us about your trip — destination ideas, group size, anything!"
                        rows={4}
                        maxLength={1000}
                        className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/25"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-forest-deep sm:w-auto"
                  >
                    <Send className="size-4" aria-hidden="true" />
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
