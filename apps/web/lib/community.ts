export const REPO = "https://github.com/thepeternemec/newsAPI.ai-agent";
export const REGISTER = "https://newsapi.ai/register";
export const MCP_REPO = "https://github.com/EventRegistry/newsapi-mcp";
export const MCP_CONFIG = JSON.stringify(
  {
    mcpServers: {
      newsapi: {
        command: "npx",
        args: ["-y", "newsapi-mcp"],
        env: { NEWSAPI_KEY: "YOUR_API_KEY" },
      },
    },
  },
  null,
  2,
);
export const N8N_CREDENTIAL = JSON.stringify(
  { body: { apiKey: "YOUR_API_KEY" } },
  null,
  2,
);
export const FREE_PLAN_COPY =
  "Your free plan includes 2,000 searches. Once they’re used, upgrade to a paid plan to keep going.";
