import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../../components/news/shell";
import { FREE_PLAN_COPY, REGISTER, REPO } from "../../lib/community";
export const metadata: Metadata = {
  title: "Getting started",
  description:
    "A community guide to building your first NewsAPI.ai agent or workflow, with clear free-plan details.",
};
export default function Docs() {
  return (
    <>
      <Header active="docs" />
      <main id="main" className="wrap guide-main">
        <div className="page-intro">
          <div className="eyebrow">COMMUNITY FIELD GUIDE</div>
          <h1>
            From a curious idea
            <br />
            <span>to your first news query.</span>
          </h1>
          <p>
            A practical starting point for NewsAPI.ai. This guide connects you
            to the provider’s tools and documentation; your API account stays
            with NewsAPI.ai.
          </p>
        </div>
        <div className="field-guide">
          <aside>
            <nav aria-label="Guide sections">
              <a href="#account">01 · Get a key</a>
              <a href="#path">02 · Pick a path</a>
              <a href="#query">03 · Try a question</a>
              <a href="#allowance">04 · Know the allowance</a>
              <a href="#faq">Common questions</a>
            </nav>
            <a className="text-button" href="https://newsapi.ai/documentation">
              Official documentation ↗
            </a>
          </aside>
          <div className="field-content">
            <section id="account">
              <span className="chapter">01 / YOUR ACCOUNT</span>
              <h2>Start at the source.</h2>
              <p>
                <a href={REGISTER}>Register on NewsAPI.ai</a> to get your API
                key. You can explore this community site without an account;
                running queries requires a provider account.
              </p>
              <p>
                Keep the key in your client’s configuration, an n8n credential,
                or a server environment variable. Do not commit a real key to
                GitHub or put it into browser-side application code.
              </p>
            </section>
            <section id="path">
              <span className="chapter">02 / YOUR CONNECTION</span>
              <h2>Choose what you’re building.</h2>
              <div className="guide-choice">
                <Link href="/connect#mcp">
                  <strong>An assistant → MCP</strong>
                  <span>Connect a compatible client to newsapi-mcp.</span>
                </Link>
                <Link href="/connect#n8n">
                  <strong>An automation → n8n</strong>
                  <span>
                    Use HTTP Request nodes and the official walkthroughs.
                  </span>
                </Link>
                <Link href="/connect#code">
                  <strong>An application → SDK or REST</strong>
                  <span>Add news retrieval to your own code.</span>
                </Link>
              </div>
            </section>
            <section id="query">
              <span className="chapter">03 / YOUR FIRST EXPERIMENT</span>
              <h2>Ask for something specific.</h2>
              <p>
                For an MCP assistant, start with a narrow topic and a recent
                time window. Here is an example prompt to adapt:
              </p>
              <blockquote>
                Find five recent articles about AI regulation from the past
                week. Summarize the main developments, include each source URL
                and publication date, and point out any conflicting reporting.
              </blockquote>
              <p>
                This is a prompt idea, not a live result. Inspect the returned
                articles before relying on the summary. A date, an original
                link, and a clear distinction between reporting and inference
                make the output more useful.
              </p>
              <p>
                If your tools do not appear, check Node.js, the API key setting,
                and your client’s MCP logs against the{" "}
                <a href="https://github.com/EventRegistry/newsapi-mcp">
                  official server README
                </a>
                . For n8n, begin with a manual execution and inspect the HTTP
                Request node output.
              </p>
            </section>
            <section id="allowance">
              <span className="chapter">04 / YOUR FREE ALLOWANCE</span>
              <h2>Free to start. Clear about limits.</h2>
              <p className="guide-quote">{FREE_PLAN_COPY}</p>
              <p>
                The MCP project describes this as a one-time allocation of 2,000
                API tokens. These are NewsAPI.ai usage credits, separate from
                language-model tokens. Request type and pagination affect how
                much you use.
              </p>
              <p>
                Review the{" "}
                <a href="https://newsapi.ai/plans">official plan details</a> and
                account usage before running repeated or scheduled queries.
                Registration, credit allocation, upgrades, and billing are
                managed by NewsAPI.ai.
              </p>
            </section>
            <section id="faq">
              <span className="chapter">A FEW USEFUL ANSWERS</span>
              <h2>Before you build.</h2>
              <div className="faq-list">
                <details>
                  <summary>Is this the official NewsAPI.ai website?</summary>
                  <p>
                    No. This is an independent community contribution with an
                    original text identity. The API and official integrations
                    belong to NewsAPI.ai / Event Registry. For product support
                    and account questions, visit{" "}
                    <a href="https://newsapi.ai">NewsAPI.ai</a>.
                  </p>
                </details>
                <details>
                  <summary>What is free?</summary>
                  <p>
                    This community website and its MIT-licensed source code are
                    free to use. NewsAPI.ai offers a one-time free allowance;
                    continued API use after that requires a paid provider plan.
                    Your assistant, model, or automation host may have separate
                    costs.
                  </p>
                </details>
                <details>
                  <summary>Do I need a hosted MCP URL?</summary>
                  <p>
                    The setup featured here uses the official{" "}
                    <code>newsapi-mcp</code> package as a local process launched
                    by your MCP client. This community project does not operate
                    an MCP service. Follow the provider’s documentation for
                    supported connection methods.
                  </p>
                </details>
                <details>
                  <summary>Can I use this with an OpenRouter model?</summary>
                  <p>
                    You can build an application that retrieves news using the
                    official tools and supplies it to a model. Model access and
                    tool execution are configured in your application. We do not
                    claim a published or verified OpenRouter integration.
                  </p>
                </details>
                <details>
                  <summary>How can I contribute?</summary>
                  <p>
                    Open a resource suggestion or pull request in{" "}
                    <a href={REPO}>our GitHub repository</a>. Helpful
                    contributions include official links, clearer setup notes,
                    and reproducible examples with placeholder credentials.
                  </p>
                </details>
              </div>
            </section>
            <p className="source-note">
              Sources:{" "}
              <a href="https://github.com/EventRegistry/newsapi-mcp">
                official MCP README
              </a>
              ,{" "}
              <a href="https://newsapi.ai/documentation?tab=n8n_overview">
                n8n documentation
              </a>
              , and <a href="https://newsapi.ai/plans">NewsAPI.ai plans</a>.
              References reviewed September 13, 2026.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
