"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  /** "auto" abbreviates >= 10,000 to K notation; "raw" displays exact number */
  format?: "auto" | "raw";
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2200,
  format = "auto",
}: Props) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  const display = (): string => {
    if (format === "raw") return count.toLocaleString();
    if (count >= 1_000_000) return (count / 1_000_000).toFixed(1) + "M";
    if (count >= 10_000) return (count / 1_000).toFixed(1) + "K";
    return count.toLocaleString();
  };

  return (
    <span ref={ref}>
      {prefix}
      {display()}
      {suffix}
    </span>
  );
}
