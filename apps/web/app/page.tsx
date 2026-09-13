import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Code2, Fingerprint, Globe2, Layers3, Link2, Plug, Radar, Rss, Sparkles, Workflow } from "lucide-react";
import { Footer, Header } from "@/components/news/shell";

const topics = [
  { name: "NVIDIA", category: "Technology", icon: Layers3, color: "violet" },
  { name: "Federal Reserve", category: "Economy", icon: Globe2, color: "mint" },
  { name: "EU AI Act", category: "Policy", icon: Fingerprint, color: "peach" },
];

export default function Home() {
  return <>
    <Header />
    <main id="main">
      <section className="landing-hero">
        <div className="hero-grid wrap">
          <div className="hero-content">
            <div className="eyebrow hero-badge"><span className="signal-dot" /> NEWS CONTEXT FOR THE AGENT ERA</div>
            <h1>The world moves.<br />Give your agent<br /><span>the full picture.</span></h1>
            <p className="hero-copy">Turn the news into useful context. Discover the stories that matter, keep the original sources, and pick up where you left off.</p>
            <div className="hero-actions">
              <Link className="button" href="/connect">Connect your agent <ArrowUpRight size={18} /></Link>
              <Link className="text-button" href="/dashboard">Explore the news <ArrowRight size={18} /></Link>
            </div>
            <div className="hero-note"><span><Check size={14} /> Source-linked articles</span><span><Check size={14} /> Built for MCP</span></div>
          </div>
          <div className="hero-stage">
            <div className="stage-caption"><span><Workflow size={14} /> FROM QUESTION TO CONTEXT</span><span>WORKFLOW EXAMPLE</span></div>
            <div className="agent-preview">
              <div className="preview-bar"><span className="preview-dots"><i /><i /><i /></span><span>NewsAPI.ai Agent</span><span className="preview-mode">Research workspace</span></div>
              <div className="preview-body">
                <div className="question"><span className="question-icon"><Sparkles size={18} /></span><p>What’s happening in the world of AI?</p><ArrowUpRight size={16} /></div>
                <div className="tool-path"><span className="path-icon"><Radar size={17} /></span><div><strong>Find the right topics</strong><span>Companies, technology, and policy</span></div><span className="path-number">01</span></div>
                <div className="preview-topics">{topics.filter(t => t.name !== "Federal Reserve").map(t => <Link key={t.name} href={`/dashboard?q=${encodeURIComponent(t.name)}`}><t.icon size={14} />{t.name}<ArrowUpRight size={12} /></Link>)}</div>
                <div className="tool-path"><span className="path-icon mint"><Rss size={17} /></span><div><strong>Bring back the reporting</strong><span>Article excerpts with original sources</span></div><span className="path-number">02</span></div>
                <div className="source-preview"><div><Link2 size={14} /><span>Publisher link</span><span>Publication time</span></div><div className="text-bars" aria-hidden="true"><i /><i /></div><span className="source-foot"><Check size={12} /> Context your agent can cite</span></div>
                <div className="tool-path last"><span className="path-icon peach"><Fingerprint size={17} /></span><div><strong>Remember where you left off</strong><span>A saved cursor for the next news check</span></div><span className="path-number">03</span></div>
              </div>
              <div className="preview-footer"><span className="signal-dot" /> One connection. Three news tools.<Link href="/docs">See how it works <ArrowRight size={14} /></Link></div>
            </div>
            <div className="floating-note"><span><Link2 size={18} /></span><div><strong>Every story has a source.</strong><p>Keep it in the conversation.</p></div></div>
          </div>
        </div>
        <div className="connection-strip wrap"><p>NEWS THAT FITS<br /><strong>THE WAY YOU BUILD</strong></p><span><Plug /> MCP clients</span><span><Code2 /> TypeScript</span><span><Workflow /> OpenRouter apps</span><Link href="/connect">Find your connection <ArrowUpRight size={17} /></Link></div>
      </section>

      <section className="section wrap" id="how-it-works">
        <div className="section-heading"><div><span className="eyebrow">LESS SEARCHING. MORE UNDERSTANDING.</span><h2>From a noisy world<br />to a <span className="accent-text">clearer answer.</span></h2></div><p>Give your agent the building blocks for a better briefing: relevant reporting, reliable updates, and a trail back to the source.</p></div>
        <div className="benefit-grid">
          <article className="benefit-card"><div className="benefit-top"><span className="icon-tile violet"><Radar /></span><span>01 / DISCOVER</span></div><h3>Your interests.<br />Your corner of the world.</h3><p>Find a company, a policy, or a technology in the topic catalog. Start with the coverage that matters to your question.</p><Link href="/dashboard">Find a topic <ArrowUpRight size={17} /></Link></article>
          <article className="benefit-card"><div className="benefit-top"><span className="icon-tile mint"><Layers3 /></span><span>02 / STAY CURRENT</span></div><h3>New developments.<br />Less repetition.</h3><p>Save your place and ask for the next page of articles. Source URL deduplication keeps repeated results out of the stream.</p><Link href="/docs#changes">Meet reliable updates <ArrowUpRight size={17} /></Link></article>
          <article className="benefit-card"><div className="benefit-top"><span className="icon-tile peach"><Link2 /></span><span>03 / GO DEEPER</span></div><h3>A useful answer.<br />A source behind it.</h3><p>Publisher links, excerpts, and timestamps travel together. Follow the reporting and see when coverage was last checked.</p><Link href="/docs#freshness">Understand the context <ArrowUpRight size={17} /></Link></article>
        </div>
      </section>

      <section className="agent-section wrap">
        <div className="agent-section-copy"><span className="eyebrow">BRING YOUR OWN AGENT</span><h2>A new perspective.<br />In the tools<br />you already use.</h2><p>Connect a compatible MCP client, build with the TypeScript SDK, or give your OpenRouter app news tools. Same news. Your workflow.</p><Link href="/connect" className="button button-white">Choose your integration <ArrowUpRight size={18} /></Link></div>
        <div className="integration-stack">
          <Link href="/connect" className="stack-card"><span className="stack-icon"><Plug size={24} /></span><div><span>FOR ASSISTANTS</span><h3>MCP connection</h3><p>News tools, directly in your agent.</p></div><ArrowUpRight size={22} /></Link>
          <Link href="/connect" className="stack-card"><span className="stack-icon"><Code2 size={24} /></span><div><span>FOR BUILDERS</span><h3>TypeScript client</h3><p>A small client for your next big idea.</p></div><ArrowUpRight size={22} /></Link>
          <Link href="/connect" className="stack-card"><span className="stack-icon"><Workflow size={24} /></span><div><span>FOR AGENT WORKFLOWS</span><h3>OpenRouter tools</h3><p>Let your model ask for news context.</p></div><ArrowUpRight size={22} /></Link>
        </div>
      </section>

      <section className="section wrap topics-section"><div className="section-heading"><div><span className="eyebrow">FOLLOW YOUR CURIOSITY</span><h2>Start with a topic.<br />See where it takes you.</h2></div><Link className="text-button" href="/dashboard">Explore the catalog <ArrowRight size={18} /></Link></div>
        <div className="topic-grid">{topics.map(t => <Link href={`/dashboard?q=${encodeURIComponent(t.name)}`} key={t.name} className={`topic-card ${t.color}`}><span className="topic-category">{t.category}<ArrowUpRight size={20} /></span><t.icon className="topic-emblem" size={40} strokeWidth={1.4} /><h3>{t.name}</h3><span className="topic-action">Explore coverage <ArrowRight size={16} /></span></Link>)}</div>
        <p className="catalog-note">The pilot covers selected English-language topics. Check the explorer for availability and freshness.</p>
      </section>
      <section className="closing-section"><div className="wrap"><span className="eyebrow">A LITTLE CONTEXT CHANGES EVERYTHING</span><h2>Give your agent<br /><span>a window on the world.</span></h2><Link href="/connect" className="button">Make the connection <ArrowUpRight size={18} /></Link><p>Explore the setup guide. Find the connection that fits.</p></div></section>
    </main><Footer />
  </>;
}
