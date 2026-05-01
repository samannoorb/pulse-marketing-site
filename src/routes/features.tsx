import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Brain, LineChart, Bell, Workflow, Zap, Shield, Database, Mail, GitBranch, Users, Globe, Sparkles } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Pulse Analytics" },
      { name: "description", content: "AI insights, weekly summaries, real-time metrics, integrations and enterprise security — every Pulse Analytics feature in detail." },
      { property: "og:title", content: "Features — Pulse Analytics" },
      { property: "og:description", content: "Every feature inside Pulse Analytics." },
    ],
  }),
  component: FeaturesPage,
});

const groups = [
  {
    title: "Intelligence",
    items: [
      { icon: Brain, title: "AI insights engine", desc: "Detects anomalies, correlations and growth opportunities — explained in plain English." },
      { icon: Sparkles, title: "Forecasts", desc: "Predict MRR, churn and runway with confidence intervals trained on your data." },
      { icon: Mail, title: "Weekly summaries", desc: "A beautifully written digest delivered every Monday morning." },
    ],
  },
  {
    title: "Metrics & data",
    items: [
      { icon: LineChart, title: "Unified dashboard", desc: "MRR, churn, activation, NPS, LTV — every key metric in one elegant place." },
      { icon: Workflow, title: "No-code segments", desc: "Slice users by behavior, revenue, plan or cohort — without SQL." },
      { icon: Database, title: "120+ integrations", desc: "Connect Stripe, Postgres, Mixpanel, GA4, HubSpot, Segment and more." },
    ],
  },
  {
    title: "Real-time & alerts",
    items: [
      { icon: Zap, title: "Sub-second ingestion", desc: "Stream events with our edge SDKs — see them on your dashboard instantly." },
      { icon: Bell, title: "Smart alerts", desc: "Get notified in Slack or email the moment a metric drifts off-trend." },
      { icon: GitBranch, title: "Experiments", desc: "Run A/B tests with built-in significance and power analysis." },
    ],
  },
  {
    title: "Team & security",
    items: [
      { icon: Users, title: "Roles & SSO", desc: "Granular permissions, SAML SSO and SCIM provisioning on Business+." },
      { icon: Shield, title: "SOC 2 Type II", desc: "Encryption at rest & in transit, with region pinning for EU and US." },
      { icon: Globe, title: "Edge-native", desc: "Deployed across 30+ regions for low-latency queries worldwide." },
    ],
  },
];

function FeaturesPage() {
  return (
    <div className="pt-10 md:pt-20">
      <Reveal>
        <SectionHeading
          eyebrow="Features"
          title={<>Everything you need.<br /><span className="gradient-text">Nothing you don't.</span></>}
          subtitle="Pulse is opinionated. We pick the best defaults so you can answer the question: what should we do this week?"
        />
      </Reveal>

      <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
        {groups.map((g) => (
          <div key={g.title}>
            <Reveal>
              <div className="mb-6 flex items-baseline gap-4 md:mb-8">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{g.title}</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {g.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--brand)_30%,transparent)]">
                    <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_30%,transparent),color-mix(in_oklab,var(--brand-2)_30%,transparent))] transition-transform group-hover:scale-110">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
