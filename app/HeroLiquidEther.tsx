"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import type { LiquidEtherProps } from "./LiquidEther";

export default function HeroLiquidEther() {
  const [LiquidEther, setLiquidEther] =
    useState<ComponentType<LiquidEtherProps> | null>(null);

  useEffect(() => {
    let active = true;

    import("./LiquidEther").then((module) => {
      if (active) {
        setLiquidEther(() => module.default);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="hero-liquid-layer" aria-hidden="true">
      <div className="hero-liquid-canvas">
        {LiquidEther ? (
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
        ) : null}
      </div>
    </div>
  );
}
