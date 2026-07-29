"use client";

import LiquidEther from "./LiquidEther";

export default function HeroLiquidEther() {
  return (
    <div className="hero-liquid-layer" aria-hidden="true">
      <div style={{ width: "100%", height: 600, position: "relative" }}>
        <LiquidEther
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
          color0="#000000"
          color1="#ceacf5"
          color2="#000000"
        />
      </div>
    </div>
  );
}
