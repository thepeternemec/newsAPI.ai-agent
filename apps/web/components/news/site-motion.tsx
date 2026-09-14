"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { MotionConfig, useReducedMotion } from "motion/react";
import { Pause, Play } from "lucide-react";
import { usePathname } from "next/navigation";
import SmoothScroll from "../smooth-scroll";
const MotionContext = createContext({
  enabled: false,
  toggle: () => {},
  reduced: false,
});
export const useSiteMotion = () => useContext(MotionContext);
export function SiteMotion({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const pathname = usePathname();
  const enabled = ready && !paused && !reduced;
  useEffect(() => setReady(true), []);
  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "on" : "off";
    if (!enabled) return;
    const elements = document.querySelectorAll<HTMLElement>(
      ".section-title, .feature-bento > article, .possibility-grid > article, .trial-section > div, .resource-card",
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    elements.forEach((el, i) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.style.setProperty("--reveal-delay", `${(i % 3) * 65}ms`);
      el.classList.add("motion-reveal");
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
      elements.forEach((el) =>
        el.classList.remove("motion-reveal", "motion-revealed"),
      );
    };
  }, [enabled, pathname]);
  return (
    <MotionContext.Provider
      value={{
        enabled,
        toggle: () => setPaused((p) => !p),
        reduced: !!reduced,
      }}
    >
      <MotionConfig reducedMotion={enabled ? "user" : "always"}>
        <SmoothScroll enabled={enabled} />
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  );
}
export function MotionToggle() {
  const { enabled, toggle, reduced } = useSiteMotion();
  return (
    <button
      type="button"
      className="site-motion-toggle"
      onClick={toggle}
      disabled={reduced}
      aria-pressed={!enabled}
      aria-label={
        reduced
          ? "Reduced motion enabled by your device"
          : enabled
            ? "Pause site motion"
            : "Enable site motion"
      }
    >
      {enabled ? <Pause size={13} /> : <Play size={13} />}
      <span>
        {reduced ? "Reduced motion" : enabled ? "Motion on" : "Motion off"}
      </span>
    </button>
  );
}
