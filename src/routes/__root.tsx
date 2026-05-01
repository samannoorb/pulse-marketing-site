import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Background } from "@/components/site/Background";
import { NotFound } from "@/routes/not-found";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pulse Analytics — AI-powered metrics for startups" },
      { name: "description", content: "Track key business metrics, get AI insights and weekly summaries delivered to your inbox. Built for fast-moving startups." },
      { name: "author", content: "Pulse Analytics" },
      { property: "og:title", content: "Pulse Analytics — AI-powered metrics for startups" },
      { property: "og:description", content: "Metrics, insights & weekly summaries for startups." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://rsms.me/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Background />
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
