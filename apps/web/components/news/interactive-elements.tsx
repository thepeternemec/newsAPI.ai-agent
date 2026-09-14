"use client";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Magnetic from "../ui/magnetic-button/magnetic-button";
import StaggerText from "../ui/stagger-text/stagger-text";
import ExpandingAction from "../ui/expanding-action/expanding-action";
import { useSiteMotion } from "./site-motion";
export function HeroTitle() {
  const { enabled } = useSiteMotion();
  return (
    <h1 aria-label="Fresh news. Smarter agents.">
      Fresh news.
      <br />
      {enabled ? (
        <StaggerText
          as="span"
          className="hero-stagger"
          text="Smarter agents."
        />
      ) : (
        <span>Smarter agents.</span>
      )}
    </h1>
  );
}
export function MagneticLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const { enabled } = useSiteMotion();
  const link = (
    <a className="button" href={href}>
      {children}
    </a>
  );
  return enabled ? (
    <Magnetic
      className="magnetic-cta"
      magneticIntensity={0.18}
      magneticRange={60}
      springConfig={{ stiffness: 160, damping: 20, mass: 0.5 }}
    >
      {link}
    </Magnetic>
  ) : (
    <div className="magnetic-cta">{link}</div>
  );
}
export function HeroBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <i />
      <i />
      <div className="ambient-grid" />
    </div>
  );
}
export function ConnectionAction() {
  const router = useRouter();
  const { enabled } = useSiteMotion();
  return (
    <ExpandingAction
      disableMotion={!enabled}
      trigger="Choose your connection"
      triggerIcon={<ArrowRight size={16} />}
      className="connection-action"
      items={[
        { value: "mcp", label: "MCP" },
        { value: "n8n", label: "n8n" },
        { value: "code", label: "SDKs" },
      ]}
      onValueSelect={(value) => router.push(`/connect#${value}`)}
    />
  );
}
