import { Link } from "@tanstack/react-router";
import { Activity, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/5">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display text-base font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-[linear-gradient(135deg,var(--brand),var(--brand-2))]">
              <Activity className="h-4 w-4 text-primary-foreground" />
            </span>
            Pulse Analytics
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            AI-powered metrics & weekly summaries for startups that move fast.
          </p>
          <div className="mt-5 flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Twitter" className="rounded-full p-2 hover:bg-white/5 hover:text-foreground"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="GitHub" className="rounded-full p-2 hover:bg-white/5 hover:text-foreground"><Github className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-white/5 hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/features" className="hover:text-foreground">Features</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><a href="#" className="hover:text-foreground">Changelog</a></li>
            <li><a href="#" className="hover:text-foreground">Roadmap</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pulse Analytics. Crafted for ambitious teams.
      </div>
    </footer>
  );
}
