"use client";
import type { HTMLMotionProps } from "motion/react";

import { motion } from "motion/react";
import { useId } from "react";

import { cn } from "@/lib/utils";

export const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

export type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES;
  blurLayers?: number;
  className?: string;
  blurIntensity?: number;
} & HTMLMotionProps<"div">;

export function ProgressiveBlur({
  direction = "bottom",
  blurLayers = 8,
  className,
  blurIntensity = 0.25,
  ...props
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2);
  const segmentSize = 1 / (blurLayers + 1);
  const id = useId();

  const items = Array.from({ length: layers }, (_, i) => ({
    key: `${id}-layer-${i}`,
    layer: i,
  }));

  return (
    <div className={cn("relative", className)}>
      {items.map(({ key, layer }) => {
        const angle = GRADIENT_ANGLES[direction];
        const gradientStops = [
          layer * segmentSize,
          (layer + 1) * segmentSize,
          (layer + 2) * segmentSize,
          (layer + 3) * segmentSize,
        ].map(
          (pos, posIndex) =>
            `rgba(255, 255, 255, ${posIndex === 1 || posIndex === 2 ? 1 : 0}) ${pos * 100}%`,
        );

        const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(
          ", ",
        )})`;

        return (
          <motion.div
            key={key}
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              maskImage: gradient,
              WebkitMaskImage: gradient,
              backdropFilter: `blur(${layer * blurIntensity}px)`,
              WebkitBackdropFilter: `blur(${layer * blurIntensity}px)`,
            }}
            {...props}
          />
        );
      })}
    </div>
  );
}
