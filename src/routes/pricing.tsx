import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Pulse Analytics" },
      { name: "description", content: "Simple, transparent pricing. Start free, upgrade as you grow. Three plans: Starter, Growth and Scale." },
      { property: "og:title", content: "Pricing — Pulse Analytics" },
      { property: "og:description", content: "Three simple plans for every stage." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    blurb: "For solo founders validating an idea.",
    features: ["Up to 10k events / month", "3 dashboards", "1 team member", "Basic AI insights", "Community support"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Growth",
    monthly: 49,
    yearly: 39,
    blurb: "For teams ready to scale with confidence.",
    features: ["1M events / month", "Unlimited dashboards", "10 team members", "AI insights & forecasts", "Weekly AI summaries", "Slack & email alerts", "All integrations"],
    cta: "Start 14-day trial",
    highlight: true,
  },
  {
    name: "Scale",
    monthly: 199,
    yearly: 169,
    blurb: "For companies that need governance.",
    features: ["Unlimited events", "Unlimited team members", "SAML SSO + SCIM", "Audit logs", "Region pinning (EU/US)", "Dedicated success manager", "SLA & priority support"],
    cta: "Talk to sales",
    highlight: false,
  },
];

function PricingPage() {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="pt-10 md:pt-20">
      <SectionHeading
        eyebrow="Pricing"
        title={<>Simple plans. <span className="gradient-text">Real outcomes.</span></>}
        subtitle="Start free. Upgrade when you outgrow it. Cancel anytime."
      />

      <div className="mt-10 flex justify-center">
        <div className="glass inline-flex items-center gap-1 rounded-full p-1 text-sm">
          <button
            onClick={() => setYearly(false)}
            className={cn("rounded-full px-4 py-1.5 transition", !yearly ? "bg-white/10 text-foreground" : "text-muted-foreground")}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={cn("rounded-full px-4 py-1.5 transition", yearly ? "bg-white/10 text-foreground" : "text-muted-foreground")}
          >
            Yearly <span className="ml-1 text-xs gradient-text">−20%</span>
          </button>
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {tiers.map((t) => {
          const price = yearly ? t.yearly : t.monthly;
          return (
            <div
              key={t.name}
              className={cn(
                "relative flex flex-col rounded-3xl p-8",
                t.highlight ? "glass-strong gradient-border" : "glass",
              )}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[linear-gradient(120deg,var(--brand),var(--brand-2))] px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tight">${price}</span>
                <span className="text-sm text-muted-foreground">/ month</span>
              </div>
              {yearly && t.monthly > 0 && (
                <p className="mt-1 text-xs text-muted-foreground">billed yearly · save ${(t.monthly - t.yearly) * 12}/yr</p>
              )}
              <Button variant={t.highlight ? "hero" : "outline"} size="lg" className="mt-6" asChild>
                <Link to={t.name === "Scale" ? "/contact" : "/"}>{t.cta}</Link>
              </Button>
              <ul className="mt-8 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_30%,transparent),color-mix(in_oklab,var(--brand-2)_30%,transparent))]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <section className="mt-28">
        <SectionHeading title="Common questions" />
        <div className="mx-auto mt-12 grid max-w-3xl gap-4">
          {[
            { q: "Can I switch plans later?", a: "Yes — upgrade or downgrade at any time. We'll prorate the difference automatically." },
            { q: "What counts as an event?", a: "Any tracked user action or metric data point. Most early-stage startups use under 100k events / month." },
            { q: "Do you offer a startup discount?", a: "Yes. Pre-seed and seed teams get 50% off Growth for the first year. Reach out via Contact." },
            { q: "Is my data secure?", a: "Absolutely. We're SOC 2 Type II certified, with encryption in transit and at rest, and optional region pinning." },
          ].map((f) => (
            <div key={f.q} className="glass rounded-2xl p-6">
              <h4 className="font-semibold">{f.q}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
