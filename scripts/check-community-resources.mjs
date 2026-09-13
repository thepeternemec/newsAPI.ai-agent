import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const entries = JSON.parse(
  await readFile(
    new URL("../apps/web/data/resources.json", import.meta.url),
    "utf8",
  ),
);
const ids = new Set();
const urls = new Set();
const categories = new Set([
  "MCP",
  "n8n",
  "SDK & REST",
  "API reference",
  "Account & plans",
  "Community",
]);
for (const entry of entries) {
  for (const key of [
    "id",
    "title",
    "description",
    "url",
    "source",
    "reviewedAt",
  ])
    assert.ok(
      typeof entry[key] === "string" && entry[key].trim(),
      `${entry.id}: missing ${key}`,
    );
  assert.ok(!ids.has(entry.id), `Duplicate resource id: ${entry.id}`);
  ids.add(entry.id);
  assert.ok(!urls.has(entry.url), `Duplicate resource URL: ${entry.url}`);
  urls.add(entry.url);
  assert.ok(
    categories.has(entry.category),
    `Unknown category: ${entry.category}`,
  );
  const url = new URL(entry.url);
  assert.equal(url.protocol, "https:");
  assert.ok(
    !url.username && !url.password && !url.searchParams.has("apiKey"),
    `Credential in URL: ${entry.id}`,
  );
  const official =
    url.hostname === "newsapi.ai" ||
    (url.hostname === "github.com" &&
      url.pathname.startsWith("/EventRegistry/")) ||
    (url.hostname === "www.npmjs.com" &&
      url.pathname === "/package/newsapi-mcp");
  assert.equal(
    entry.source.startsWith("Official"),
    official,
    `Source attribution mismatch: ${entry.id}`,
  );
  assert.match(entry.reviewedAt, /^\d{4}-\d{2}-\d{2}$/);
}
assert.ok(entries.some((entry) => entry.id === "mcp"));
assert.ok(entries.some((entry) => entry.id === "n8n"));
assert.ok(entries.some((entry) => entry.id === "plans"));
console.log(
  `Validated ${entries.length} community resource records. Live URL availability is not tested.`,
);
