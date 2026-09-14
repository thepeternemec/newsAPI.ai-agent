# free newsAPI agent

**Your agent. Meet the world.**

An independent, open-source community launchpad for developers building with **[NewsAPI.ai](https://newsapi.ai)**. Find the official MCP server, n8n walkthroughs, SDKs, and API documentation in one place.

[Visit the website](https://newsapi-ai-agent.vercel.app) · [Browse resources](https://newsapi-ai-agent.vercel.app/resources) · [Connection guide](https://newsapi-ai-agent.vercel.app/connect) · [Contribute](CONTRIBUTING.md)

## Start building

| Your project | Official starting point |
| --- | --- |
| AI assistant | [newsapi-mcp on npm](https://www.npmjs.com/package/newsapi-mcp) · [Source and client setup](https://github.com/EventRegistry/newsapi-mcp) |
| n8n automation | [Integration overview](https://newsapi.ai/documentation?tab=n8n_overview) |
| Python application | [Python SDK](https://github.com/EventRegistry/event-registry-python) |
| JavaScript application | [Node.js SDK](https://github.com/EventRegistry/event-registry-node-js) |
| Custom API integration | [Official documentation](https://newsapi.ai/documentation) · [Sandbox](https://newsapi.ai/documentation/sandbox?tab=introduction) |

NewsAPI.ai already provides these tools. This project helps developers discover and use them; it does not operate a replacement news API, hosted MCP service, or provider account system.

## Free to try

> Your free plan includes 2,000 searches. Once they’re used, upgrade to a paid plan to keep going.

Source: [NewsAPI.ai plans](https://newsapi.ai/plans). The [official MCP project](https://github.com/EventRegistry/newsapi-mcp) describes a **one-time 2,000-token allowance**. API tokens are usage credits, separate from LLM tokens. Request type, archive access, and pagination affect consumption. Registration and billing are handled by NewsAPI.ai. Other services you choose, such as model access or n8n hosting, may have their own costs.

[Create your NewsAPI.ai account](https://newsapi.ai/register).

## Run the community website

Requires Node.js 20+ for this repository (CI uses Node.js 22) and npm. The official MCP package separately requires Node.js 18+.

```sh
npm ci
npm run dev:web
```

Open http://localhost:3000. **No API key, database, or environment file is required to run this resource website.** It does not send live news queries or accept credentials.

```sh
npm run check:resources
npm run build:web
```

These checks validate the resource catalog and build/type-check the site. Full repository checks remain available through `npm run build`, `npm test`, and the existing CI workflow.

## Project map

```text
apps/web/app/                 Pages: home, resources, connect, docs
apps/web/components/news/     Shared layout, resource search, copyable code
apps/web/data/resources.json  Curated resource catalog
apps/web/public/llms.txt      Discovery index for agents
scripts/check-community-resources.mjs
.github/ISSUE_TEMPLATE/       Resource and bug report templates
```

The website uses Next.js App Router, React, and an original text-only wordmark. The directory filters resources locally. Setup examples contain placeholders; users configure keys in their own tools. The old `/dashboard` URL redirects to the resource library.

### Repository history

This repository began as a fork of [Pleiades](https://github.com/thepeternemec/pleiades). Experimental backend applications, packages, Supabase functions, and earlier architecture documents remain for provenance and compatibility. They are **not the NewsAPI.ai service and are not used by the current community website**. Their package names retain the Pleiades prefix. See [the archive note](docs/README.md) before using those materials.

Vercel serves `apps/web` from the `main` branch. Site contributions should stay in that directory unless they need catalog checks or repository documentation.

## Keep the library useful

Resource entries include a title, description, category, canonical URL, source attribution, and review date. Prefer first-party sources and original descriptions. Do not label a community project official or call a client integration verified without a reproducible test record.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution workflow and [SECURITY.md](SECURITY.md) for credential and vulnerability handling. Link review dates record source review, not certification of every client installation.

## Independence and license

This is an independent developer-community contribution. It is not an official NewsAPI.ai / Event Registry product. Provider names identify the services being documented; the provider’s logo is not used. NewsAPI.ai terms govern use of its API and content.

Code is [MIT licensed](LICENSE). Existing upstream copyright notices are preserved. Linked projects and news content retain their own licenses and terms.

### Interface motion

The website activates [Sona UI](https://www.sonaui.com/components) Magnetic Button, Fluid Tabs, Expanding Action, and Stagger Text. Lenis provides smooth scrolling; subtle background motion and scroll reveals support the feature sections. The footer motion control and device reduced-motion preference disable decorative movement. Source component licensing is documented in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
