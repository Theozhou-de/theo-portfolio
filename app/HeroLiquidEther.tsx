"use client";

import { lazy, Suspense } from "react";

const LiquidEther = lazy(() => import("./LiquidEther"));

export default function HeroLiquidEther() {
  return (
    <div className="hero-liquid-layer" aria-hidden="true">
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
          autoDemo={false}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </Suspense>
    </div>
  );
}
