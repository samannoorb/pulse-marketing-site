import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in oklab, var(--brand) 35%, transparent), transparent 60%)",
        }}
      />
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Error 404</p>
      <h1 className="mt-6 font-display text-7xl font-semibold tracking-tight md:text-9xl">
        <span className="gradient-text">Lost</span> in the data.
      </h1>
      <p className="mx-auto mt-6 max-w-md text-base text-muted-foreground md:text-lg">
        The page you're looking for doesn't exist, was moved, or never crossed our pulse.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button variant="hero" size="lg" asChild>
          <Link to="/">
            <Home /> Back home
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/contact">
            <ArrowLeft /> Contact support
          </Link>
        </Button>
      </div>
    </div>
  );
}
