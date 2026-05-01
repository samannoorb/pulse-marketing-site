import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Heart, Compass, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pulse Analytics" },
      { name: "description", content: "We're a small team building the metrics tool we always wished existed. Learn about our mission, values and the people behind Pulse." },
      { property: "og:title", content: "About — Pulse Analytics" },
      { property: "og:description", content: "Our story, mission and team." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Compass, title: "Clarity over noise", desc: "Numbers without narrative are just numbers. We translate data into decisions." },
  { icon: Heart, title: "Founder empathy", desc: "We've started companies. We know what it's like to fly blind at 2am." },
  { icon: Sparkles, title: "Craft", desc: "Every pixel, every word, every alert — designed with care." },
  { icon: Users, title: "Customer-led", desc: "Half our roadmap comes directly from the people using Pulse every day." },
];

const team = [
  { name: "Ava Lindqvist", role: "Co-founder & CEO", initial: "A" },
  { name: "Marcus Tan", role: "Co-founder & CTO", initial: "M" },
  { name: "Priya Raman", role: "Head of Design", initial: "P" },
  { name: "Jonas Müller", role: "Lead AI Engineer", initial: "J" },
];

const stats = [
  { v: "1.2k+", l: "Startups onboarded" },
  { v: "$3.4B", l: "Revenue tracked" },
  { v: "99.99%", l: "Uptime in 2025" },
  { v: "11", l: "Humans on the team" },
];

function AboutPage() {
  return (
    <div className="pt-10 md:pt-20">
      <Reveal>
        <SectionHeading
          eyebrow="About us"
          title={<>We build the tool we<br /><span className="gradient-text">wished existed.</span></>}
          subtitle="Pulse Analytics started in 2023 in a tiny Stockholm apartment. We were tired of stitching together spreadsheets, half-broken dashboards, and Slack threads to answer one question: 'how are we actually doing?'"
        />
      </Reveal>

      {/* Stats */}
      <div className="mt-14 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 80}>
            <div className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--brand)_35%,transparent)]">
              <div className="font-display text-3xl font-semibold gradient-text md:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Story */}
      <section className="mt-24 grid gap-12 md:mt-28 md:grid-cols-2 md:items-center">
        <Reveal>
          <div>
            <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">A small team, an opinionated product.</h3>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>We believe most analytics tools are built for analysts — not for the founders, operators and PMs who need answers right now.</p>
              <p>So we built Pulse around three ideas: defaults that just work, AI that explains itself, and a weekly summary you'd actually look forward to reading.</p>
              <p>Today, over 1,200 startups use Pulse to make sharper decisions, faster. We're just getting started.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="glass relative aspect-square overflow-hidden rounded-3xl p-2">
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse at top left, color-mix(in oklab, var(--brand) 50%, transparent), transparent 60%), radial-gradient(ellipse at bottom right, color-mix(in oklab, var(--brand-2) 50%, transparent), transparent 60%)" }}
            />
            <div className="relative grid h-full grid-cols-2 grid-rows-2 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl bg-white/5 backdrop-blur-md" />
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="mt-24 md:mt-28">
        <Reveal>
          <SectionHeading eyebrow="Our values" title="What we stand for" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--brand)_30%,transparent)]">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_30%,transparent),color-mix(in_oklab,var(--brand-2)_30%,transparent))]">
                  <v.icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold">{v.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mt-24 md:mt-28">
        <Reveal>
          <SectionHeading eyebrow="The team" title="A few of the humans behind Pulse" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div className="glass h-full rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--brand-2)_30%,transparent)]">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-2))] font-display text-2xl font-semibold text-primary-foreground transition-transform duration-300 hover:scale-110">
                  {m.initial}
                </div>
                <h4 className="mt-4 font-semibold">{m.name}</h4>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
