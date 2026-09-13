import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { REGISTER, REPO } from "../../lib/community";
export function Brand() {
  return (
    <Link href="/" className="wordmark" aria-label="free newsAPI agent home">
      <span className="wordmark-free">free</span>{" "}
      <span className="wordmark-main">newsAPI</span>{" "}
      <span className="wordmark-agent">agent</span>
    </Link>
  );
}
export function Header({ active }: { active?: string }) {
  return (
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
          Connect
        </Link>
        <Link
          aria-current={active === "docs" ? "page" : undefined}
          href="/docs"
        >
          Start here
        </Link>
        <a href={REPO}>
          GitHub <ArrowUpRight size={12} />
        </a>
      </nav>
      <a className="button button-small" href={REGISTER}>
        Get a free API key <ArrowUpRight size={15} />
      </a>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Brand />
        <p>
          A small contribution.
          <br />A world of possibilities.
        </p>
        <div>
          <Link href="/resources">Resources</Link>
          <Link href="/docs">Guide</Link>
          <a href={REPO}>Contribute ↗</a>
        </div>
      </div>
      <div className="community-disclosure">
        An independent, open-source community project for developers using{" "}
        <a href="https://newsapi.ai">NewsAPI.ai</a>. NewsAPI.ai / Event Registry
        provides the API, accounts, and integrations. This site is not an
        official NewsAPI.ai product.
      </div>
      <div className="footer-bottom">
        <span>Made for curious builders. Open source under MIT.</span>
        <a href={REPO}>
          Built in the open <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}
