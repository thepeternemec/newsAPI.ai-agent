import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  GitBranch,
  Globe2,
  Newspaper,
  Plug,
  Workflow,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { Header, Footer } from "../components/news/shell";
import { CodeBlock } from "../components/news/code-block";
import { FREE_PLAN_COPY, REGISTER, REPO } from "../lib/community";
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="community-hero">
          <div className="wrap hero-grid">
            <div className="hero-content">
              <div className="eyebrow hero-badge">
                <span className="signal-dot" /> A COMMUNITY PROJECT FOR
                NEWSAPI.AI
              </div>
              <h1>
                Your agent.
                <br />
                Meet <span>the world.</span>
              </h1>
              <p className="hero-copy">
                Give your AI projects a connection to the news. Discover
                NewsAPI.ai’s MCP server, n8n workflows, and developer tools—all
                in one open-source launchpad.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/connect">
                  Find your connection <ArrowRight size={17} />
                </Link>
                <a className="text-button" href={REPO}>
                  Explore GitHub <ArrowUpRight size={16} />
                </a>
              </div>
              <p className="community-caption">
                Built by the community. Powered by your NewsAPI.ai account.
              </p>
            </div>
            <div className="launchpad">
              <div className="launchpad-top">
                <span>THE BUILDER’S STARTER KIT</span>
                <span>001 / NEWS</span>
              </div>
              <div className="launchpad-title">
                <Globe2 size={33} strokeWidth={1.3} />
                <h2>
                  A little more
                  <br />
                  world-aware.
                </h2>
              </div>
              <Link className="kit-row" href="/connect#mcp">
                <span className="kit-number">01</span>
                <Plug size={21} />
                <div>
                  <strong>News for your assistant</strong>
                  <span>Official MCP server</span>
                </div>
                <ArrowUpRight size={18} />
              </Link>
              <Link className="kit-row" href="/connect#n8n">
                <span className="kit-number">02</span>
                <Workflow size={21} />
                <div>
                  <strong>News for your workflows</strong>
                  <span>n8n + Event Registry</span>
                </div>
                <ArrowUpRight size={18} />
              </Link>
              <Link className="kit-row" href="/connect#code">
                <span className="kit-number">03</span>
                <Braces size={21} />
                <div>
                  <strong>News for your next app</strong>
                  <span>Python · Node.js · REST</span>
                </div>
                <ArrowUpRight size={18} />
              </Link>
              <div className="kit-bottom">
                <span>Open tools. Practical guides.</span>
                <GitBranch size={17} />
              </div>
            </div>
          </div>
        </section>
        <div className="community-ribbon">
          <div className="wrap">
            <span>
              <span className="ribbon-dot" /> OPEN SOURCE, OPEN INVITATION
            </span>
            <p>Your shortcut from “what if” to a news-powered project.</p>
            <Link href="/resources">
              Browse the library <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <section className="wrap section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">CHOOSE YOUR STARTING POINT</div>
              <h2>
                Three ways in.
                <br />
                Plenty of room to build.
              </h2>
            </div>
            <p>
              Use the tools NewsAPI.ai already maintains. We bring the links,
              setup notes, and ideas together so you can get going.
            </p>
          </div>
          <div className="benefit-grid">
            <article className="benefit-card">
              <div className="benefit-top">
                <span className="icon-tile violet">
                  <Plug />
                </span>
                <span>01 / ASSISTANTS</span>
              </div>
              <h3>Connect with MCP.</h3>
              <p>
                Add news tools to a compatible client, including Claude Desktop
                or Cursor, through the official newsapi-mcp package.
              </p>
              <Link href="/connect#mcp">
                Set up your assistant <ArrowRight size={16} />
              </Link>
            </article>
            <article className="benefit-card">
              <div className="benefit-top">
                <span className="icon-tile mint">
                  <Workflow />
                </span>
                <span>02 / AUTOMATION</span>
              </div>
              <h3>Make news a workflow.</h3>
              <p>
                Connect n8n to Event Registry using HTTP Request nodes. Start
                with the provider’s research, alert, and sentiment examples.
              </p>
              <Link href="/connect#n8n">
                Build an n8n workflow <ArrowRight size={16} />
              </Link>
            </article>
            <article className="benefit-card">
              <div className="benefit-top">
                <span className="icon-tile peach">
                  <Braces />
                </span>
                <span>03 / DEVELOPERS</span>
              </div>
              <h3>Build it your way.</h3>
              <p>
                Explore the official Python and Node.js libraries, query
                articles and events, and prototype requests in the API sandbox.
              </p>
              <Link href="/connect#code">
                Explore SDKs & REST <ArrowRight size={16} />
              </Link>
            </article>
          </div>
        </section>
        <section className="wrap">
          <div className="free-section">
            <div>
              <div className="eyebrow">YOUR FIRST EXPERIMENT STARTS HERE</div>
              <h2>
                Big idea?
                <br />
                Start small. <em>Start free.</em>
              </h2>
              <p className="free-plan-copy">{FREE_PLAN_COPY}</p>
              <div className="hero-actions">
                <a className="button" href={REGISTER}>
                  Get your free API key <ArrowUpRight size={17} />
                </a>
                <a className="text-button" href="https://newsapi.ai/plans">
                  See official plan details ↗
                </a>
              </div>
            </div>
            <div className="allowance">
              <span className="allowance-label">NEWSAPI.AI FREE PLAN</span>
              <strong>
                2,000<span>searches to get started</span>
              </strong>
              <div className="allowance-rule" />
              <p>
                One-time 2,000-token allowance.
                <br />
                No credit card required.
              </p>
              <small>
                API token use varies by request. Event searches, archive
                queries, and additional result pages can use the allowance
                differently.
              </small>
            </div>
          </div>
        </section>
        <section className="wrap section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">A SHORT PATH TO YOUR FIRST QUERY</div>
              <h2>
                Less setup.
                <br />
                More “what’s happening?”
              </h2>
            </div>
            <Link className="text-button" href="/docs">
              Read the getting-started guide <ArrowRight size={17} />
            </Link>
          </div>
          <div className="start-grid">
            <div className="start-notes">
              <div>
                <span>1</span>
                <section>
                  <h3>Bring your API key</h3>
                  <p>
                    Create an account at NewsAPI.ai. Keep your key in your own
                    client or server.
                  </p>
                </section>
              </div>
              <div>
                <span>2</span>
                <section>
                  <h3>Choose a tool</h3>
                  <p>
                    MCP for an assistant, n8n for a workflow, or an SDK for your
                    application.
                  </p>
                </section>
              </div>
              <div>
                <span>3</span>
                <section>
                  <h3>Ask a focused question</h3>
                  <p>
                    Start with a recent topic. Ask for dates and original links,
                    then review the sources.
                  </p>
                </section>
              </div>
            </div>
            <div className="terminal-card">
              <div className="terminal-caption">
                <Plug size={17} />
                <span>OFFICIAL MCP PACKAGE</span>
                <a href="https://www.npmjs.com/package/newsapi-mcp">npm ↗</a>
              </div>
              <CodeBlock
                label="Package command · Node.js 18+"
                code="npx -y newsapi-mcp"
              />
              <p>
                The command starts the local server. Your MCP client also needs
                the NEWSAPI_KEY environment variable.
              </p>
              <Link className="text-button" href="/connect#mcp">
                Copy the full client configuration <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        <section className="idea-section">
          <div className="wrap section">
            <div className="section-heading">
              <div>
                <div className="eyebrow">TAKE AN IDEA AND RUN WITH IT</div>
                <h2>What will you build?</h2>
              </div>
              <p>Community project ideas to make the tools your own.</p>
            </div>
            <div className="topic-grid">
              <Link className="topic-card violet" href="/connect#mcp">
                <div className="topic-category">
                  RESEARCH <ArrowUpRight size={17} />
                </div>
                <BookOpen
                  className="topic-emblem"
                  size={34}
                  strokeWidth={1.5}
                />
                <h3>A briefing with receipts.</h3>
                <p className="idea-copy">
                  Ask your assistant for a topic summary with dates and source
                  links.
                </p>
                <div className="topic-action">
                  Start with MCP <ArrowRight size={14} />
                </div>
              </Link>
              <a
                className="topic-card mint"
                href="https://newsapi.ai/documentation?tab=n8n_news_alert_system"
              >
                <div className="topic-category">
                  AUTOMATION <ArrowUpRight size={17} />
                </div>
                <Newspaper
                  className="topic-emblem"
                  size={34}
                  strokeWidth={1.5}
                />
                <h3>The right news, on cue.</h3>
                <p className="idea-copy">
                  Explore an n8n workflow that checks for news around your
                  interests.
                </p>
                <div className="topic-action">
                  See the official walkthrough <ArrowRight size={14} />
                </div>
              </a>
              <a
                className="topic-card peach"
                href="https://newsapi.ai/documentation?tab=n8n_sentiment_dashboard"
              >
                <div className="topic-category">
                  EXPLORATION <ArrowUpRight size={17} />
                </div>
                <Sparkles
                  className="topic-emblem"
                  size={34}
                  strokeWidth={1.5}
                />
                <h3>A view beyond headlines.</h3>
                <p className="idea-copy">
                  Use sentiment data as a starting point for exploring coverage.
                </p>
                <div className="topic-action">
                  Explore the dashboard example <ArrowRight size={14} />
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="closing-section">
          <div className="wrap">
            <div className="eyebrow">BUILT IN THE OPEN</div>
            <h2>
              A resource for builders.
              <br />
              <span>Better with you.</span>
            </h2>
            <a className="button" href={REPO}>
              Contribute on GitHub <GitBranch size={17} />
            </a>
            <p>
              Share a useful resource, improve a guide, or suggest your next
              project idea.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
