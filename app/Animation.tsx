"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.95, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 1.05, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 1.15, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 160, damping: 20, mass: 0.5 });
  const rotateY = useSpring(x, { stiffness: 160, damping: 20, mass: 0.5 });

  return (
    <motion.article
      className={`${className} tilt-card`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease }}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - rect.left) / rect.width - 0.5) * 10);
        y.set(-((event.clientY - rect.top) / rect.height - 0.5) * 10);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.article>
  );
}

export function CursorGlow() {
  const target = useRef({ x: -240, y: -240 });
  const x = useMotionValue(-240);
  const y = useMotionValue(-240);
  const springX = useSpring(x, { stiffness: 85, damping: 22, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 85, damping: 22, mass: 0.45 });

  useEffect(() => {
    let frame = 0;
    const update = (event: PointerEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(() => {
        x.set(target.current.x);
        y.set(target.current.y);
        frame = 0;
      });
    };
    window.addEventListener("pointermove", update, { passive: true });
    return () => { window.removeEventListener("pointermove", update); if (frame) cancelAnimationFrame(frame); };
  }, [x, y]);

  return <motion.div className="cursor-glow" style={{ x: springX, y: springY }} aria-hidden="true" />;
}
