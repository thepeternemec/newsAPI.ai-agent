import Link from "next/link";
import { ArrowUpRight, Radio } from "lucide-react";

export function Brand() {
  return <Link href="/" className="brand" aria-label="NewsAPI.ai Agent home">
    <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
    <span className="brand-name">news<span>api.ai</span></span>
    <span className="brand-label">AGENT</span>
  </Link>;
}
export function Header({ active }: { active?: string }) {
  return <header className="header">
    <Brand />
    <nav aria-label="Main navigation">
      <Link aria-current={active === "news" ? "page" : undefined} href="/dashboard">Explore news</Link>
      <Link aria-current={active === "connect" ? "page" : undefined} href="/connect">Integrations</Link>
      <Link aria-current={active === "docs" ? "page" : undefined} href="/docs">Documentation</Link>
    </nav>
    <Link className="button button-small" href="/connect">Connect your agent <ArrowUpRight size={16} /></Link>
  </header>;
}
export function Footer() {
  return <footer className="footer">
    <div className="footer-top"><Brand /><p>The world’s news.<br />A little closer to your agent.</p>
      <div><Link href="/dashboard">Explore</Link><Link href="/connect">Integrations</Link><Link href="/docs">Documentation</Link></div>
    </div>
    <div className="footer-bottom"><span>NewsAPI.ai Agent · News with context.</span><a href="https://github.com/thepeternemec/newsAPI.ai-agent">Built in the open <ArrowUpRight size={14} /></a></div>
  </footer>;
}
export function StatusPill({ children }: { children: React.ReactNode }) {
  return <span className="status-pill"><Radio size={14} />{children}</span>;
}
