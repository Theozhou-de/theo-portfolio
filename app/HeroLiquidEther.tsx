"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

interface LiquidEtherProps {
  className?: string;
  colors?: string[];
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  iterationsViscous?: number;
  iterationsPoisson?: number;
  resolution?: number;
  isBounce?: boolean;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  takeoverDuration?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
}

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
      {LiquidEther ? (
        <LiquidEther
          className="hero-liquid-ether"
          colors={["#B79CFF", "#E6D9FF", "#FFFBFF"]}
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
      ) : null}
    </div>
  );
}
