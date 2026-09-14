"use client";
import { useState } from "react";
import {
  ArrowRight,
  Bell,
  ChartNoAxesCombined,
  Check,
  FileText,
  Pause,
  Play,
  Search,
  Sparkles,
} from "lucide-react";
const examples = [
  {
    id: "research",
    label: "Research briefs",
    icon: FileText,
    question: "What changed in AI regulation this week?",
    topic: "AI regulation",
    filters: ["Past 7 days", "Multiple sources", "Original links"],
    title: "A briefing you can trace.",
    description:
      "Find relevant reporting, connect related developments, and give your agent the sources behind the story.",
    output: [
      "Developments grouped by event",
      "Publication dates and source links",
      "Context for your agent’s summary",
    ],
    footer: "RESEARCH AGENT",
    outcome: "From a broad question to a focused briefing.",
  },
  {
    id: "alerts",
    label: "News alerts",
    icon: Bell,
    question: "Keep me informed about supply chain disruptions.",
    topic: "Supply chains",
    filters: ["Recent events", "New coverage", "Scheduled checks"],
    title: "An agent that keeps watch.",
    description:
      "Follow a topic over time. Connect news retrieval to an n8n workflow and deliver relevant developments where you work.",
    output: [
      "Events matching your topic",
      "New and updated event coverage",
      "Inputs for an email or workflow",
    ],
    footer: "MONITORING WORKFLOW",
    outcome: "From repeated searches to an automated watchlist.",
  },
  {
    id: "intelligence",
    label: "Market context",
    icon: ChartNoAxesCombined,
    question: "How is the media covering the semiconductor industry?",
    topic: "Semiconductors",
    filters: ["Company entities", "Source filters", "Sentiment"],
    title: "See more than a headline.",
    description:
      "Explore coverage around companies, industries, and locations. Bring sentiment and related events into your research.",
    output: [
      "Reporting around selected entities",
      "Sentiment data for exploration",
      "Source coverage for comparison",
    ],
    footer: "INTELLIGENCE ASSISTANT",
    outcome: "From scattered headlines to a clearer picture.",
  },
];
export function NewsCapabilities() {
  const [selected, setSelected] = useState("research");
  const [paused, setPaused] = useState(false);
  const example = examples.find((item) => item.id === selected)!;
  return (
    <div className="capabilities-demo" id="see-it-work" data-paused={paused}>
      <div className="demo-toolbar">
        <div
          role="group"
          aria-label="Explore an example workflow"
          className="demo-tabs"
        >
          {examples.map(({ id, label, icon: Icon }) => (
            <button
              type="button"
              key={id}
              aria-pressed={selected === id}
              aria-controls="demo-content"
              onClick={() => setSelected(id)}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>
        <button
          className="motion-toggle"
          type="button"
          onClick={() => setPaused(!paused)}
          aria-label={
            paused ? "Play decorative motion" : "Pause decorative motion"
          }
          aria-pressed={paused}
        >
          {paused ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </div>
      <div className="demo-flow" id="demo-content" key={example.id}>
        <div className="demo-query">
          <span className="demo-label">
            <Search size={13} />
            THE QUESTION
          </span>
          <p>{example.question}</p>
          <div className="query-filters">
            {example.filters.map((filter) => (
              <span key={filter}>{filter}</span>
            ))}
          </div>
        </div>
        <div className="flow-connector" aria-hidden="true">
          <span />
          <ArrowRight size={15} />
        </div>
        <div className="demo-engine">
          <div className="engine-icon">
            <Sparkles size={24} />
          </div>
          <strong>NewsAPI.ai</strong>
          <span>News → context</span>
          <div className="engine-meter" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="flow-connector" aria-hidden="true">
          <span />
          <ArrowRight size={15} />
        </div>
        <div className="demo-result">
          <span className="demo-label">{example.footer}</span>
          <h3>{example.title}</h3>
          <ul>
            {example.output.map((item) => (
              <li key={item}>
                <Check size={14} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="demo-caption">
        <span>
          <span className="status-dot" />
          {example.outcome}
        </span>
        <small>ILLUSTRATIVE WORKFLOW</small>
      </div>
      <p className="demo-description">{example.description}</p>
    </div>
  );
}
