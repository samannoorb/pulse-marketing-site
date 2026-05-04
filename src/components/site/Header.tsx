import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Activity, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass px-3 py-2 sm:px-4 md:px-6 md:py-2.5">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-base font-semibold transition-opacity hover:opacity-80 active:opacity-60"
        >
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[var(--brand)] shadow-[0_6px_20px_-8px_color-mix(in_oklab,var(--brand)_60%,transparent)]">
            <Activity className="h-4 w-4 text-primary-foreground" />
          </span>
          <span>
            Pulse<span className="hidden text-muted-foreground sm:inline"> Analytics</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground active:bg-white/15"
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-white/10 text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <Link to="/contact">Sign in</Link>
          </Button>
          <Button variant="hero" size="sm" asChild className="hidden sm:inline-flex">
            <Link to="/pricing">Start free</Link>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full text-foreground transition-colors hover:bg-white/10 active:bg-white/20 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] z-40 mx-4 origin-top transition-all duration-300 md:hidden",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
      >
        <div className="glass-strong rounded-3xl p-3">
          <nav className="flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-2xl px-4 py-3 text-base text-foreground/85 transition-colors hover:bg-white/10 hover:text-foreground active:bg-white/20"
                activeOptions={{ exact: true }}
                activeProps={{ className: "bg-white/10 text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-2 flex gap-2 px-1 pb-1 pt-2">
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link to="/contact">Sign in</Link>
            </Button>
            <Button variant="hero" size="sm" asChild className="flex-1">
              <Link to="/pricing">Start free</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
