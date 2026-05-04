import { Link } from "@tanstack/react-router";
import { Activity, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 md:mt-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-base font-semibold transition-opacity hover:opacity-80 active:opacity-60"
          >
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-foreground text-background">
              <Activity className="h-4 w-4" />
            </span>
            Pulse Analytics
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            AI-powered metrics & weekly summaries for startups that move fast.
          </p>
          <div className="mt-5 flex gap-2 text-muted-foreground">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Twitter"
              className="rounded-full p-2 transition-colors hover:bg-white/10 hover:text-foreground active:bg-white/20"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="rounded-full p-2 transition-colors hover:bg-white/10 hover:text-foreground active:bg-white/20"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="rounded-full p-2 transition-colors hover:bg-white/10 hover:text-foreground active:bg-white/20"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/features" className="transition-colors hover:text-foreground">Features</Link></li>
            <li><Link to="/pricing" className="transition-colors hover:text-foreground">Pricing</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">Get in touch</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:hello@pulseanalytics.io" className="transition-colors hover:text-foreground">
                hello@pulseanalytics.io
              </a>
            </li>
            <li>
              <a href="mailto:sales@pulseanalytics.io" className="transition-colors hover:text-foreground">
                sales@pulseanalytics.io
              </a>
            </li>
            <li><Link to="/contact" className="transition-colors hover:text-foreground">Support</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pulse Analytics. Crafted for ambitious teams.
      </div>
    </footer>
  );
}
