import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, MapPin, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pulse Analytics" },
      { name: "description", content: "Get in touch with the Pulse Analytics team. Sales, support, partnerships and press inquiries." },
      { property: "og:title", content: "Contact — Pulse Analytics" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-10 md:pt-20">
      <SectionHeading
        eyebrow="Contact"
        title={<>Let's <span className="gradient-text">talk.</span></>}
        subtitle="Whether you're evaluating Pulse, scaling up, or just curious — we'd love to hear from you. We reply within one business day."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-5">
        {/* Info */}
        <div className="space-y-4 md:col-span-2">
          {[
            { icon: Mail, title: "Email", value: "hello@pulseanalytics.io", sub: "Sales, support and everything else" },
            { icon: MessageSquare, title: "Live chat", value: "Available 9–18 CET", sub: "Click the bubble in your dashboard" },
            { icon: MapPin, title: "Office", value: "Stockholm, Sweden", sub: "Hornsgatan 12 · 118 20" },
          ].map((i) => (
            <div key={i.title} className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_30%,transparent),color-mix(in_oklab,var(--brand-2)_30%,transparent))]">
                  <i.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{i.title}</div>
                  <div className="mt-1 font-medium">{i.value}</div>
                  <div className="text-sm text-muted-foreground">{i.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="glass-strong gradient-border space-y-5 rounded-3xl p-8 md:col-span-3"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" name="name" placeholder="Ada Lovelace" required />
            <Field label="Email" name="email" type="email" placeholder="ada@startup.com" required />
          </div>
          <Field label="Company" name="company" placeholder="Northwind Inc." />
          <div>
            <Label>Topic</Label>
            <select className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[color-mix(in_oklab,var(--brand)_50%,transparent)]">
              <option className="bg-background">Sales inquiry</option>
              <option className="bg-background">Technical support</option>
              <option className="bg-background">Partnerships</option>
              <option className="bg-background">Press</option>
            </select>
          </div>
          <div>
            <Label>Message</Label>
            <textarea
              required
              rows={5}
              placeholder="Tell us a bit about what you're working on…"
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color-mix(in_oklab,var(--brand)_50%,transparent)]"
            />
          </div>

          {sent ? (
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-2))]">
                <Check className="h-4 w-4 text-primary-foreground" />
              </span>
              Thanks — we'll be in touch within one business day.
            </div>
          ) : (
            <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
              Send message <Send />
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-widest text-muted-foreground">{children}</label>;
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color-mix(in_oklab,var(--brand)_50%,transparent)]"
      />
    </div>
  );
}
