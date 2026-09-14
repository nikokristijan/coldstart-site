"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Primary trigger: reveal once the element actually scrolls into view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);

    // Safety net: browsers throttle or delay IntersectionObserver
    // callbacks for a tab that loads without focus — common when a link
    // is tapped from Instagram/TikTok/an in-app browser. Real content
    // must never stay stuck invisible, so force it in after a beat
    // regardless of what the observer does.
    const timer = window.setTimeout(() => setVisible(true), 1000);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
