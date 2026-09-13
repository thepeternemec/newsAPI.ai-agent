import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Plug, Workflow, Braces } from "lucide-react";
import { Header, Footer } from "../../components/news/shell";
import { CodeBlock } from "../../components/news/code-block";
import {
  MCP_CONFIG,
  MCP_REPO,
  N8N_CREDENTIAL,
  REGISTER,
} from "../../lib/community";
export const metadata: Metadata = {
  title: "Connect your agent",
  description:
    "Community setup notes for the official NewsAPI.ai MCP server, n8n integration, and SDKs.",
};
export default function Connect() {
  return (
    <>
      <Header active="connect" />
      <main id="main" className="wrap guide-main">
        <div className="page-intro">
          <div className="eyebrow">PICK YOUR CONNECTION</div>
          <h1>
            The news tools exist.
            <br />
            <span>Let’s put them to work.</span>
          </h1>
          <p>
            Bring your NewsAPI.ai key. Choose your assistant, automation, or
            codebase. Follow the official tool’s setup with a little help from
            this community guide.
          </p>
        </div>
        <nav className="connection-jumps" aria-label="Setup paths">
          <a href="#mcp">
            <Plug size={18} /> MCP assistants
          </a>
          <a href="#n8n">
            <Workflow size={18} /> n8n workflows
          </a>
          <a href="#code">
            <Braces size={18} /> SDKs & REST
          </a>
        </nav>
        <section id="mcp" className="setup-section">
          <div className="setup-intro">
            <div className="eyebrow">01 / MCP</div>
            <h2>
              A news toolkit
              <br />
              for your assistant.
            </h2>
            <p>
              The official{" "}
              <a href="https://www.npmjs.com/package/newsapi-mcp">
                newsapi-mcp
              </a>{" "}
              package runs locally and connects to NewsAPI.ai. Use a compatible
              MCP client and Node.js 18 or newer.
            </p>
            <a className="text-button" href={MCP_REPO}>
              Official setup & supported clients <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="setup-body">
            <ol className="setup-steps">
              <li>
                <strong>Get your API key.</strong>{" "}
                <a href={REGISTER}>Register at NewsAPI.ai</a> and find your key
                in your account.
              </li>
              <li>
                <strong>Configure your client.</strong> The example below uses
                the <code>mcpServers</code> format for Claude Desktop and
                Cursor. Merge it into your client’s MCP configuration; keep any
                existing servers.
              </li>
              <li>
                <strong>Replace the placeholder locally.</strong> Set{" "}
                <code>NEWSAPI_KEY</code> to your key in your own configuration,
                then restart or reconnect your client.
              </li>
              <li>
                <strong>Try a small request.</strong> Ask for recent articles on
                a specific topic, with dates and original links.
              </li>
            </ol>
            <CodeBlock
              label="Claude Desktop / Cursor · MCP configuration"
              code={MCP_CONFIG}
            />
            <div className="guide-callout">
              This community website never needs your API key. Configure
              credentials only in your own client, workflow, or server.
            </div>
            <h3 className="minor-title">Using Claude Code?</h3>
            <CodeBlock
              label="Claude Code · add MCP server"
              code="claude mcp add newsapi -e NEWSAPI_KEY=YOUR_API_KEY -- npx -y newsapi-mcp"
            />
            <p className="setup-small">
              Use the <a href={MCP_REPO}>official README</a> for VS Code, Gemini
              CLI, Windsurf, and other supported clients. Their configuration
              locations and formats can differ.
            </p>
            <details className="tool-details">
              <summary>What tools does the official server expose?</summary>
              <ul>
                <li>
                  <code>suggest</code> — resolve entities for filters
                </li>
                <li>
                  <code>search_articles</code> — retrieve matching reporting
                </li>
                <li>
                  <code>search_events</code> — find clusters of related coverage
                </li>
                <li>
                  <code>get_topic_page_articles</code> — read saved-topic
                  articles
                </li>
                <li>
                  <code>get_topic_page_events</code> — read saved-topic events
                </li>
                <li>
                  <code>get_api_usage</code> — inspect account usage
                </li>
              </ul>
              <a href={`${MCP_REPO}/tree/main/skill`}>
                Explore the official news research skill ↗
              </a>
            </details>
          </div>
        </section>
        <section id="n8n" className="setup-section">
          <div className="setup-intro">
            <div className="eyebrow">02 / N8N</div>
            <h2>
              Your workflow.
              <br />A news connection.
            </h2>
            <p>
              NewsAPI.ai’s n8n guides use native HTTP Request nodes with Event
              Registry credentials. Start with an n8n Cloud account or your own
              n8n instance.
            </p>
            <a
              className="text-button"
              href="https://newsapi.ai/documentation?tab=n8n_overview"
            >
              Open the official n8n guide <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="setup-body">
            <ol className="setup-steps">
              <li>
                <strong>Create a credential in n8n.</strong> Open Credentials,
                add a <em>Custom Auth</em> credential, and name it “Event
                Registry API”.
              </li>
              <li>
                <strong>Add your API key.</strong> Use the JSON below in the
                credential, replacing the placeholder inside n8n.
              </li>
              <li>
                <strong>Connect an HTTP Request node.</strong> Set
                Authentication to <em>Generic Credential Type</em>, choose{" "}
                <em>Custom Auth</em>, and select your credential.
              </li>
              <li>
                <strong>Follow an official workflow.</strong> Start with a
                manual run. Check your output and account usage before
                scheduling it.
              </li>
            </ol>
            <CodeBlock
              label="n8n · Custom Auth credential"
              code={N8N_CREDENTIAL}
            />
            <div className="workflow-links">
              <a href="https://newsapi.ai/documentation?tab=n8n_content_research">
                <span>01</span>
                <div>
                  <strong>Content research assistant</strong>
                  <p>Turn a topic into an email research digest.</p>
                </div>
                <ArrowUpRight size={18} />
              </a>
              <a href="https://newsapi.ai/documentation?tab=n8n_news_alert_system">
                <span>02</span>
                <div>
                  <strong>News alert system</strong>
                  <p>Follow the official alert workflow example.</p>
                </div>
                <ArrowUpRight size={18} />
              </a>
              <a href="https://newsapi.ai/documentation?tab=n8n_sentiment_dashboard">
                <span>03</span>
                <div>
                  <strong>Sentiment dashboard</strong>
                  <p>Explore news sentiment in an n8n workflow.</p>
                </div>
                <ArrowUpRight size={18} />
              </a>
            </div>
            <p className="setup-small">
              NewsAPI.ai’s allowance covers its API usage. Your n8n hosting and
              any model services have their own plans.
            </p>
          </div>
        </section>
        <section id="code" className="setup-section">
          <div className="setup-intro">
            <div className="eyebrow">03 / SDKS & REST</div>
            <h2>
              Make room for news
              <br />
              in your codebase.
            </h2>
            <p>
              Use the provider’s libraries or call the REST API from your
              server. The official sandbox helps you explore filters before
              writing an integration.
            </p>
          </div>
          <div className="setup-body">
            <div className="workflow-links">
              <a href="https://github.com/EventRegistry/event-registry-python">
                <span>Py</span>
                <div>
                  <strong>Python SDK</strong>
                  <p>Official package, examples, and source code.</p>
                </div>
                <ArrowUpRight size={18} />
              </a>
              <a href="https://github.com/EventRegistry/event-registry-node-js">
                <span>JS</span>
                <div>
                  <strong>Node.js SDK</strong>
                  <p>Official JavaScript library for articles and events.</p>
                </div>
                <ArrowUpRight size={18} />
              </a>
              <a href="https://newsapi.ai/documentation/sandbox?tab=introduction">
                <span>{"{}"}</span>
                <div>
                  <strong>REST API sandbox</strong>
                  <p>Build a request and inspect its parameters.</p>
                </div>
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="guide-callout">
              For an OpenRouter-powered app, your application can retrieve news
              through these tools and pass the results to its chosen model. This
              site does not provide an OpenRouter app listing or a hosted MCP
              endpoint.
            </div>
            <Link className="text-button" href="/resources">
              See the full resource library <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
