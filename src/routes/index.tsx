import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight, Sparkles, LineChart, Bell, Brain, Zap, Shield, Workflow } from "lucide-react";
import dashboardImg from "@/assets/dashboard-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pulse Analytics — AI-powered metrics for startups" },
      { name: "description", content: "Track every key metric, get AI insights, and receive a beautiful weekly summary every Monday. Built for startups." },
      { property: "og:title", content: "Pulse Analytics — AI-powered metrics for startups" },
      { property: "og:description", content: "Metrics, insights & weekly summaries for startups." },
    ],
  }),
  component: LandingPage,
});

const logos = ["Linear", "Vercel", "Notion", "Stripe", "Framer", "Loom"];

const features = [
  { icon: Brain, title: "AI insights", desc: "GPT-grade analysis spots anomalies, trends and growth levers automatically." },
  { icon: Bell, title: "Weekly summaries", desc: "A beautifully written digest of what changed and what to do — every Monday." },
  { icon: LineChart, title: "Unified metrics", desc: "Pipe Stripe, Postgres, GA4 & Mixpanel into one elegant dashboard." },
  { icon: Workflow, title: "No-code segments", desc: "Slice users, revenue and funnels in seconds — no SQL required." },
  { icon: Zap, title: "Real-time", desc: "Sub-second event ingestion with anomaly alerts to Slack & email." },
  { icon: Shield, title: "SOC 2 ready", desc: "Encryption at rest & in transit. Region pinning for EU and US data." },
];

const testimonials = [
  { quote: "Pulse replaced three tools and a half-built internal dashboard in a weekend. The Monday summary is now my favorite email.", name: "Maya Chen", role: "Co-founder, Northwind" },
  { quote: "Our team finally agrees on the numbers. The AI insights catch things we would've missed for weeks.", name: "Daniel Okafor", role: "Head of Growth, Lumen" },
  { quote: "It feels like having a senior data analyst on call 24/7 — for less than the price of one lunch.", name: "Sofía Reyes", role: "CEO, Briskly" },
];

function LandingPage() {
  return (
    <div className="pt-10 md:pt-20">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow><Sparkles className="h-3 w-3" /> New: AI weekly summaries</Eyebrow>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Your startup's <span className="gradient-text">pulse</span>,<br />read in seconds.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Pulse Analytics tracks every key metric, surfaces AI-powered insights, and delivers a beautiful weekly summary — so you can stop digging and start deciding.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button variant="hero" size="lg" asChild>
              <Link to="/pricing">Start free <ArrowRight /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/features">See how it works</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">No credit card · 14-day Pro trial · Setup in 4 minutes</p>
        </div>

        {/* Dashboard visual */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            className="absolute -inset-8 -z-10 rounded-[3rem] opacity-60 blur-3xl"
            style={{ background: "radial-gradient(ellipse at center, var(--brand) 0%, transparent 60%)" }}
          />
          <div className="glass gradient-border overflow-hidden rounded-3xl">
            <img
              src={dashboardImg}
              alt="Pulse Analytics dashboard showing real-time metrics, AI insights, charts and KPIs"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Logos */}
        <div className="mx-auto mt-20 max-w-4xl">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Trusted by ambitious teams</p>
          <div className="mt-6 grid grid-cols-3 items-center justify-items-center gap-y-6 opacity-60 md:grid-cols-6">
            {logos.map((l) => (
              <span key={l} className="font-display text-lg font-semibold tracking-tight">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-32">
        <SectionHeading
          eyebrow="Everything in one place"
          title={<>Built for the metrics that <span className="gradient-text">actually matter</span></>}
          subtitle="From MRR to activation, retention to NPS — Pulse turns raw data into clear next steps."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="glass group relative rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_30%,transparent),color-mix(in_oklab,var(--brand-2)_30%,transparent))]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mt-32">
        <SectionHeading
          eyebrow="Loved by founders"
          title={<>The Monday email founders <span className="gradient-text">actually open</span></>}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass flex flex-col rounded-2xl p-6">
              <blockquote className="text-base leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-2))] font-semibold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32">
        <div className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-24">
          <div
            className="glow-orb"
            style={{ width: 500, height: 500, top: -200, left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, var(--brand) 0%, transparent 60%)" }}
          />
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Stop guessing.<br /><span className="gradient-text">Start shipping with signal.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Join hundreds of founders who let Pulse handle the numbers — so they can focus on the product.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/pricing">Start free trial <ArrowRight /></Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">Talk to sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
