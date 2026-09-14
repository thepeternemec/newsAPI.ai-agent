import Link from "next/link";
import { MotionToggle } from "./site-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { REGISTER, REPO } from "../../lib/community";
export function Brand() {
  return (
    <Link href="/" className="wordmark" aria-label="free newsAPI agent home">
      <span className="wordmark-main">
        newsAPI<span className="wordmark-slash">/</span>
        <span className="wordmark-agent">agent</span>
      </span>
      <span className="wordmark-free">FREE</span>
    </Link>
  );
}
export function Header({ active }: { active?: string }) {
  return (
    <>
      <div className="announcement">
        <span>A community contribution to NewsAPI.ai.</span>
        <Link href="/resources">
          Explore the toolkit <ArrowUpRight size={13} />
        </Link>
      </div>
      <header className="header">
        <Brand />
        <nav aria-label="Main navigation">
          <Link
            aria-current={active === "resources" ? "page" : undefined}
            href="/resources"
          >
            Resources
          </Link>
          <Link
            aria-current={active === "connect" ? "page" : undefined}
            href="/connect"
          >
            Integrations
          </Link>
          <Link
            aria-current={active === "docs" ? "page" : undefined}
            href="/docs"
          >
            Docs
          </Link>
        </nav>
        <div className="header-actions">
          <a className="github-link" href={REPO}>
            <GitBranch size={16} />
            <span>GitHub</span>
          </a>
          <a className="button button-small" href={REGISTER}>
            Start for free <ArrowUpRight size={14} />
          </a>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Brand />
          <p>
            News context for your next idea.
            <br />
            Built by developers, for developers.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <span>BUILD</span>
            <Link href="/connect#mcp">MCP server</Link>
            <Link href="/connect#n8n">n8n workflows</Link>
            <Link href="/connect#code">SDKs & REST</Link>
          </div>
          <div>
            <span>EXPLORE</span>
            <Link href="/resources">Resource library</Link>
            <Link href="/docs">Getting started</Link>
            <a href={REPO}>GitHub ↗</a>
          </div>
          <div>
            <span>NEWSAPI.AI</span>
            <a href="https://newsapi.ai/documentation">Official docs ↗</a>
            <a href="https://newsapi.ai/plans">Plans & usage ↗</a>
            <a href={REGISTER}>Get an API key ↗</a>
          </div>
        </div>
      </div>
      <div className="community-disclosure">
        An independent, open-source community project for{" "}
        <a href="https://newsapi.ai">NewsAPI.ai</a>. NewsAPI.ai / Event Registry
        provides the API, accounts, and official integrations.
      </div>
      <div className="footer-bottom">
        <span>© 2026 free newsAPI agent</span>
        <MotionToggle />
        <a href={`${REPO}/blob/main/LICENSE`}>
          Open source · MIT license <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
}
