"use client";

import { lazy, Suspense, useEffect, useRef } from "react";

const LiquidEther = lazy(() => import("./LiquidEther"));

export default function HeroLiquidEther() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    let frame = 0;
    const updatePointer = (event: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = layer.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        ) {
          return;
        }

        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        layer.style.setProperty("--liquid-pointer-x", `${x}%`);
        layer.style.setProperty("--liquid-pointer-y", `${y}%`);
      });
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", updatePointer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={layerRef} className="hero-liquid-layer" aria-hidden="true">
      <div className="hero-liquid-base" />
      <Suspense fallback={null}>
        <LiquidEther
          className="hero-liquid-ether"
          colors={["#5227FF", "#FF9FFC", "#B497CF"]}
          mouseForce={13}
          cursorSize={45}
          isViscous
          viscous={34}
          iterationsViscous={39}
          iterationsPoisson={37}
          resolution={0.45}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={600}
          autoRampDuration={0.6}
        />
      </Suspense>
    </div>
  );
}
