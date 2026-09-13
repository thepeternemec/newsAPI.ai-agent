"use client";
import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import resources from "../../data/resources.json";
const categories = [
  "All",
  "MCP",
  "n8n",
  "SDK & REST",
  "API reference",
  "Account & plans",
  "Community",
];
export function ResourceLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const needle = query.trim().toLowerCase();
  const filtered = resources.filter(
    (r) =>
      (category === "All" || r.category === category) &&
      `${r.title} ${r.description} ${r.category}`
        .toLowerCase()
        .includes(needle),
  );
  return (
    <>
      <div className="resource-toolbar">
        <label className="resource-search">
          <Search size={19} />
          <span className="sr-only">Search resources</span>
          <input
            type="search"
            placeholder="Find a tool, guide, or workflow…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <span role="status" aria-live="polite">
          {filtered.length} resources
        </span>
      </div>
      <div
        className="resource-filters"
        role="group"
        aria-label="Filter resources by category"
      >
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="resource-grid">
        {filtered.map((r) => (
          <a className="resource-card" key={r.id} href={r.url}>
            <div className="resource-card-top">
              <span>{r.category}</span>
              <ArrowUpRight size={17} />
            </div>
            <h2>{r.title}</h2>
            <p>{r.description}</p>
            <div className="resource-source">{r.source}</div>
          </a>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="resource-empty">
          <h2>No resources found.</h2>
          <p>Try a different word or browse the full library.</p>
          <button
            className="button button-small"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
