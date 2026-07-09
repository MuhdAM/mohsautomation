const AmbientOrbs = () => (
  <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div
      className="orb orb-drift"
      style={{
        width: 520,
        height: 520,
        top: "-120px",
        left: "-100px",
        background: "radial-gradient(circle, hsl(216 100% 55% / 0.55), transparent 70%)",
      }}
    />
    <div
      className="orb orb-drift"
      style={{
        width: 480,
        height: 480,
        top: "40%",
        right: "-140px",
        background: "radial-gradient(circle, hsl(262 83% 62% / 0.45), transparent 70%)",
        animationDelay: "-6s",
      }}
    />
    <div
      className="orb orb-drift"
      style={{
        width: 560,
        height: 560,
        bottom: "-160px",
        left: "30%",
        background: "radial-gradient(circle, hsl(160 84% 45% / 0.4), transparent 70%)",
        animationDelay: "-12s",
      }}
    />
  </div>
);

export default AmbientOrbs;
