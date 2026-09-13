# Community news integration guide

This document is a community reference, not an official installed skill or a hosted MCP server.

Use the official NewsAPI.ai MCP package: https://www.npmjs.com/package/newsapi-mcp
Source, tool schemas, supported clients, and setup: https://github.com/EventRegistry/newsapi-mcp
Official research skill: https://github.com/EventRegistry/newsapi-mcp/tree/main/skill

Configure the official package in your MCP client with Node.js 18+ and the NEWSAPI_KEY environment variable. Keep real credentials out of prompts, public repositories, and browser code. Follow the current official README rather than assuming tool schemas from this community guide.

Begin with a focused, recent-news question. Ask for source links and publication dates. Inspect the original reporting before relying on generated summaries.

For automation, consult https://newsapi.ai/documentation?tab=n8n_overview.
For SDK and REST integration, consult https://newsapi.ai/documentation.
For allowance and billing, consult https://newsapi.ai/plans. The free allowance is one-time; different API requests use different numbers of tokens.

Community website: https://newsapi-ai-agent.vercel.app
Community repository: https://github.com/thepeternemec/newsAPI.ai-agent
