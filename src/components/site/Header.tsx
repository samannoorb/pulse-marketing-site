import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-4 py-2.5 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-base font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[linear-gradient(135deg,var(--brand),var(--brand-2))] shadow-[0_8px_30px_-8px_color-mix(in_oklab,var(--brand)_70%,transparent)]">
            <Activity className="h-4 w-4 text-primary-foreground" />
          </span>
          <span>Pulse<span className="text-muted-foreground"> Analytics</span></span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-white/10 text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Sign in</Button>
          <Button variant="hero" size="sm">Start free</Button>
        </div>
      </div>
    </header>
  );
}
