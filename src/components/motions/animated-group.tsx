"use client";
import type { Variants } from "motion/react";

import { motion } from "motion/react";
import * as React from "react";

export type PresetType
  = | "fade"
    | "slide"
    | "scale"
    | "blur"
    | "blur-slide"
    | "zoom"
    | "flip"
    | "bounce"
    | "rotate"
    | "swing";

export type AnimatedGroupProps = {
  children: React.ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: "fade" | "slide" | "scale" | "blur" | "blur-slide" | "zoom";
  as?: keyof React.JSX.IntrinsicElements;
  asChild?: keyof React.JSX.IntrinsicElements;
};

function normalizeChildren(children: React.ReactNode): readonly (React.ReactElement | string | number)[] {
  if (children == null)
    return [];
  if (Array.isArray(children)) {
    const result: (React.ReactElement | string | number)[] = [];
    for (const child of children) {
      if (React.isValidElement(child)) {
        result.push(child);
      }
      else if (typeof child === "string" || typeof child === "number") {
        result.push(child);
      }
    }
    return result;
  }
  if (React.isValidElement(children))
    return [children];
  if (typeof children === "string" || typeof children === "number")
    return [children];
  return [];
}

const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  "fade": {},
  "slide": {
    hidden: { y: 20 },
    visible: { y: 0 },
  },
  "scale": {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
  },
  "blur": {
    hidden: { filter: "blur(4px)" },
    visible: { filter: "blur(0px)" },
  },
  "blur-slide": {
    hidden: { filter: "blur(4px)", y: 20 },
    visible: { filter: "blur(0px)", y: 0 },
  },
  "zoom": {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  },
  "flip": {
    hidden: { rotateX: -90 },
    visible: {
      rotateX: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  },
  "bounce": {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  },
  "rotate": {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  },
  "swing": {
    hidden: { rotate: -10 },
    visible: {
      rotate: 0,
      transition: { type: "spring", stiffness: 300, damping: 8 },
    },
  },
};

function addDefaultVariants(variants: Variants) {
  return {
    hidden: { ...defaultItemVariants.hidden, ...variants.hidden },
    visible: { ...defaultItemVariants.visible, ...variants.visible },
  };
}

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  as = "div",
  asChild = "div",
}: AnimatedGroupProps) {
  const selectedVariants = {
    item: addDefaultVariants(preset ? presetVariants[preset] : {}),
    container: addDefaultVariants(defaultContainerVariants),
  };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  type MotionElement = typeof motion.div;
  const MotionContainer = motion[as as keyof typeof motion] as MotionElement;
  const MotionItem = motion[asChild as keyof typeof motion] as MotionElement;

  const childrenArray = normalizeChildren(children) as readonly (React.ReactElement | string | number)[];
  const id = React.useId();

  return (
    <MotionContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={className}
    >
      {childrenArray.map((child) => {
        const key = `${id}-${childrenArray.indexOf(child)}`;
        return (
          <MotionItem key={key} variants={itemVariants}>
            {child}
          </MotionItem>
        );
      })}
    </MotionContainer>
  );
}

export { AnimatedGroup };
