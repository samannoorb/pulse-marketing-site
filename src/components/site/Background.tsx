export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="glow-orb"
        style={{
          width: 600, height: 600, top: -200, left: -150,
          background: "radial-gradient(circle, var(--brand) 0%, transparent 60%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 500, height: 500, top: 200, right: -150,
          background: "radial-gradient(circle, var(--brand-2) 0%, transparent 60%)",
          opacity: 0.4,
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
