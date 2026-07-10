import { useScroll, useTransform, motion } from "framer-motion";

const AmbientOrbs = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="orb orb-drift"
        style={{
          width: 520,
          height: 520,
          top: "-120px",
          left: "-100px",
          background: "radial-gradient(circle, hsl(166 72% 26% / 0.35), transparent 70%)",
          y: y1,
        }}
      />
      <motion.div
        className="orb orb-drift"
        style={{
          width: 480,
          height: 480,
          top: "40%",
          right: "-140px",
          background: "radial-gradient(circle, hsl(71 100% 68% / 0.15), transparent 70%)",
          animationDelay: "-6s",
          y: y2,
        }}
      />
      <motion.div
        className="orb orb-drift"
        style={{
          width: 560,
          height: 560,
          bottom: "-160px",
          left: "30%",
          background: "radial-gradient(circle, hsl(166 80% 20% / 0.4), transparent 70%)",
          animationDelay: "-12s",
          y: y3,
        }}
      />
    </div>
  );
};

export default AmbientOrbs;
