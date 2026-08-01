"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

function useScrollReveal(amount: number = 0.2, once: boolean = true) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount, once });

  return { ref, inView };
}

function animatedVariants(inView: boolean, variants: Variants) {
  return {
    ...variants,
    visible: inView ? variants.visible : variants.hidden,
  };
}

export function FadeIn({
  children,
  className,
  inView: forceInView,
  amount,
  once,
}: {
  children: React.ReactNode;
  className?: string;
  inView?: boolean;
  amount?: number;
  once?: boolean;
}) {
  const { inView, ref } = useScrollReveal(amount ?? 0.2, once ?? true);
  const variants = animatedVariants(forceInView ?? inView, fadeIn);

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView || forceInView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

export function FadeInUp({
  children,
  className,
  inView: forceInView,
  amount,
  once,
}: {
  children: React.ReactNode;
  className?: string;
  inView?: boolean;
  amount?: number;
  once?: boolean;
}) {
  const { inView, ref } = useScrollReveal(amount ?? 0.2, once ?? true);
  const variants = animatedVariants(forceInView ?? inView, fadeInUp);

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView || forceInView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  className,
  inView: forceInView,
  amount,
  once,
}: {
  children: React.ReactNode;
  className?: string;
  inView?: boolean;
  amount?: number;
  once?: boolean;
}) {
  const { inView, ref } = useScrollReveal(amount ?? 0.2, once ?? true);
  const variants = animatedVariants(forceInView ?? inView, scaleIn);

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView || forceInView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

export { fadeIn, fadeInUp, scaleIn, staggerContainer };
