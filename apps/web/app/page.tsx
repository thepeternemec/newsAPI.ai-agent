import Link from "next/link";
import {
  HeroTitle,
  HeroBackground,
  MagneticLink,
  ConnectionAction,
} from "../components/news/interactive-elements";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  GitBranch,
  Terminal,
  Plug,
  Workflow,
  FileText,
  Rss,
  Check,
  Search,
  Globe2,
  Layers,
  Bell,
  ChartNoAxesCombined,
} from "lucide-react";
import { Header, Footer } from "../components/news/shell";
import { NewsCapabilities } from "../components/news/news-capabilities";
import { FREE_PLAN_COPY, REGISTER } from "../lib/community";
function SectionIndex({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-index">
      <span>[ {number} / 03 ]</span>
      <span>{children}</span>
      <span aria-hidden="true">+</span>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="site-frame">
        <section className="dev-hero features-hero">
          <HeroBackground />
          <div className="hero-inner">
            <a className="trial-badge" href="https://newsapi.ai/plans">
              <span className="status-dot" />
              2,000 free searches. Your first idea starts here.
              <ArrowRight size={13} />
            </a>
            <HeroTitle />
            <p className="hero-description">
              Turn today’s news into your agent’s next great answer.
              <br className="desktop-break" />
              Search reporting, follow breaking stories, and build useful
              briefings with NewsAPI.ai’s MCP server, n8n workflows, and SDKs.
            </p>
            <div className="hero-actions">
              <MagneticLink href={REGISTER}>
                Start with 2,000 free searches
                <ArrowUpRight size={16} />
              </MagneticLink>
              <a className="button button-light" href="#see-it-work">
                See what’s possible
                <ArrowRight size={16} />
              </a>
            </div>
            <p className="hero-fine-print">
              One-time free allowance · No credit card required
            </p>
          </div>
          <NewsCapabilities />
        </section>
        <section
          className="stack-strip"
          aria-label="Supported integration paths"
        >
          <span>NEWS FOR THE TOOLS YOU BUILD WITH</span>
          <div>
            <Link href="/connect#mcp">
              <Plug size={19} />
              Claude
            </Link>
            <Link href="/connect#mcp">
              <Terminal size={19} />
              Cursor
            </Link>
            <Link href="/connect#n8n">
              <Workflow size={19} />
              n8n
            </Link>
            <Link href="/connect#code">
              <Braces size={19} />
              Python
            </Link>
            <Link href="/connect#code">
              <Braces size={19} />
              Node.js
            </Link>
          </div>
        </section>
        <SectionIndex number="01">FROM NEWS TO UNDERSTANDING</SectionIndex>
        <section className="dev-section">
          <div className="section-title">
            <div className="eyebrow">// CONTEXT YOUR AGENT CAN WORK WITH</div>
            <h2>
              Find the story.
              <br />
              <span>Understand what’s behind it.</span>
            </h2>
            <p>
              Give your agent more than a headline.
              <br />
              Search reporting, connect events, and keep the original sources in
              view.
            </p>
          </div>
          <div className="feature-bento">
            <article className="feature-wide">
              <div className="feature-copy">
                <span className="feature-icon">
                  <Search size={22} />
                </span>
                <h3>Find the news that matters to you.</h3>
                <p>
                  Focus on a company, a topic, or a place. Combine keywords,
                  entities, dates, languages, and sources to bring relevant
                  reporting into your agent’s next answer.
                </p>
                <div className="feature-tags">
                  <span>Topics & entities</span>
                  <span>Date ranges</span>
                  <span>Sources & languages</span>
                </div>
              </div>
              <div className="search-visual" aria-hidden="true">
                <span className="visual-query">
                  <Search size={15} />
                  renewable energy<span>↵</span>
                </span>
                <div className="filter-orbit">
                  <span>companies</span>
                  <span>English</span>
                  <span>this week</span>
                </div>
                <div className="visual-match">
                  <FileText size={17} />
                  <span>
                    Relevant articles
                    <small>Titles, dates, and original URLs</small>
                  </span>
                  <Check size={15} />
                </div>
                <div className="visual-match">
                  <Globe2 size={17} />
                  <span>
                    Across news sources
                    <small>Filter for the coverage you need</small>
                  </span>
                  <Check size={15} />
                </div>
              </div>
            </article>
            <article>
              <span className="feature-icon">
                <Layers size={22} />
              </span>
              <h3>Connect the coverage.</h3>
              <p>
                Explore events that group articles about the same development.
                Help your agent follow a story across sources and see the
                broader context.
              </p>
              <div className="event-cluster" aria-hidden="true">
                <span>Article</span>
                <span>Article</span>
                <span>Article</span>
                <div>
                  <Layers size={17} />
                  One event
                </div>
              </div>
            </article>
            <article>
              <span className="feature-icon">
                <FileText size={22} />
              </span>
              <h3>Keep the sources close.</h3>
              <p>
                Work with article content, publication dates, and source URLs.
                Build briefings that let readers go from a generated summary to
                the original reporting.
              </p>
              <div className="source-fields" aria-hidden="true">
                <span>
                  <i>title</i> The original reporting
                </span>
                <span>
                  <i>date</i> Publication date
                </span>
                <span>
                  <i>url</i> A link to the source ↗
                </span>
              </div>
            </article>
          </div>
        </section>
        <SectionIndex number="02">WHAT WILL YOU BUILD?</SectionIndex>
        <section className="dev-section possibilities">
          <div className="section-title">
            <div className="eyebrow">// MAKE THE NEWS USEFUL</div>
            <h2>
              One news connection.
              <br />
              <span>A whole new set of possibilities.</span>
            </h2>
          </div>
          <div className="possibility-grid">
            <article>
              <span className="possibility-number">01</span>
              <FileText size={27} />
              <h3>
                Your morning briefing,
                <br />
                already researched.
              </h3>
              <p>
                Build an assistant that finds recent reporting on your
                interests, groups the main developments, and prepares a summary
                with dates and source links.
              </p>
              <span className="possibility-tag">RESEARCH & BRIEFINGS</span>
            </article>
            <article>
              <span className="possibility-number">02</span>
              <Bell size={27} />
              <h3>
                The topics you follow.
                <br />
                An agent on the lookout.
              </h3>
              <p>
                Connect scheduled news checks to an n8n workflow. Follow new and
                updated events, then send relevant developments to your inbox or
                another tool.
              </p>
              <span className="possibility-tag">MONITORING & ALERTS</span>
            </article>
            <article>
              <span className="possibility-number">03</span>
              <ChartNoAxesCombined size={27} />
              <h3>
                A clearer view
                <br />
                of your industry.
              </h3>
              <p>
                Explore news around companies and sectors. Compare coverage and
                sentiment to give your research, dashboards, or internal
                assistants more context.
              </p>
              <span className="possibility-tag">
                MARKET & MEDIA INTELLIGENCE
              </span>
            </article>
          </div>
          <div className="connection-note">
            <span>
              <Plug size={18} />
              Build with the official MCP server, n8n workflows, or SDKs.
            </span>
            <ConnectionAction />
          </div>
        </section>
        <SectionIndex number="03">YOUR FIRST 2,000 SEARCHES</SectionIndex>
        <section className="dev-section trial-section feature-trial">
          <div>
            <div className="eyebrow">// FREE TO START EXPLORING</div>
            <h2>
              Your next idea.
              <br />
              <span>Your first searches, free.</span>
            </h2>
            <p>{FREE_PLAN_COPY}</p>
            <a className="button" href={REGISTER}>
              Get my free API key
              <ArrowUpRight size={16} />
            </a>
            <a className="trial-details" href="https://newsapi.ai/plans">
              See the official free plan
              <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="credit-card">
            <div className="credit-card-head">
              <span>NEWSAPI.AI / FREE PLAN</span>
              <span>ONE TIME</span>
            </div>
            <div className="credit-number">
              2,000<span>free searches to bring your idea to life</span>
            </div>
            <div className="credit-benefits">
              <span>
                <Check size={15} />
                No credit card required
              </span>
              <span>
                <Check size={15} />
                Your own NewsAPI.ai account
              </span>
              <span>
                <Check size={15} />
                Use with your agent or workflow
              </span>
            </div>
            <p>
              One-time 2,000-token allowance. Request type and pagination affect
              API token usage. Searches can return multiple articles.
            </p>
          </div>
        </section>
        <div className="community-signoff">
          <GitBranch size={16} />
          <span>
            A community contribution. Built for everyone building with news.
          </span>
          <Link href="/docs">
            Start building
            <ArrowRight size={14} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
