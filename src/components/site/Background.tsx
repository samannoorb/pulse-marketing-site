import { useEffect, useState } from "react";

export function Background() {
  const [y, setY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="glow-orb"
        style={{
          width: 600,
          height: 600,
          top: -200,
          left: -150,
          transform: `translate3d(0, ${y * 0.18}px, 0)`,
          background: "radial-gradient(circle, var(--brand) 0%, transparent 60%)",
          opacity: 0.28,
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 500,
          height: 500,
          top: 200,
          right: -150,
          transform: `translate3d(0, ${y * -0.12}px, 0)`,
          background: "radial-gradient(circle, var(--brand-2) 0%, transparent 60%)",
          opacity: 0.2,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at top, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}
