"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Braces, Plug, Workflow } from "lucide-react";
import { CodeBlock } from "./code-block";
const connections = [
  {
    id: "mcp",
    name: "MCP",
    icon: Plug,
    code: "npx -y newsapi-mcp",
    label: "Terminal · Node.js 18+",
    note: "Connect your assistant with the official MCP package. Add NEWSAPI_KEY in your client configuration.",
    href: "/connect#mcp",
    link: "Full MCP setup",
  },
  {
    id: "n8n",
    name: "n8n",
    icon: Workflow,
    code: '{ "body": { "apiKey": "YOUR_API_KEY" } }',
    label: "n8n · Custom Auth credential",
    note: "Use a native HTTP Request node with an Event Registry credential. Replace the placeholder in n8n.",
    href: "/connect#n8n",
    link: "n8n setup guide",
  },
  {
    id: "python",
    name: "Python",
    icon: Braces,
    code: "pip install eventregistry",
    label: "Terminal · Official Python SDK",
    note: "Install the provider’s library, then configure your API key in your own server or development environment.",
    href: "/connect#code",
    link: "SDKs & REST guide",
  },
];
export function QuickStart() {
  const [selected, setSelected] = useState("mcp");
  const current = connections.find((connection) => connection.id === selected)!;
  return (
    <div className="quick-start">
      <div
        className="quick-start-tabs"
        role="group"
        aria-label="Choose a setup example"
      >
        {connections.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            type="button"
            aria-pressed={selected === id}
            onClick={() => setSelected(id)}
          >
            <Icon size={16} />
            {name}
          </button>
        ))}
        <span className="quick-start-source">OFFICIAL TOOLS</span>
      </div>
      <CodeBlock key={current.id} code={current.code} label={current.label} />
      <div className="quick-start-bottom">
        <p>{current.note}</p>
        <Link href={current.href}>
          {current.link}
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
