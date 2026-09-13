# Contributing

Help another developer go from an idea to a working NewsAPI.ai integration. Useful contributions include official resources, clearer explanations, accessibility improvements, and examples with reproducible setup notes.

## Work locally

1. Fork this repository and create a branch.
2. Run `npm ci` and `npm run dev:web` (Node.js 20+).
3. Make a focused change in `apps/web`.
4. Run `npm run check:resources` and `npm run build:web`.
5. Open a pull request describing the user-facing change and what you checked.

## Add a resource

Edit `apps/web/data/resources.json`. Every entry needs:

- `id`: stable, unique, lowercase identifier.
- `title` and `description`: concise, original wording.
- `category`: MCP, n8n, SDK & REST, API reference, Account & plans, or Community.
- `url`: direct HTTPS link with no credentials or tracking parameters.
- `source`: accurate attribution, such as Official documentation or Community repository.
- `reviewedAt`: date you actually reviewed the source, formatted YYYY-MM-DD.

Use NewsAPI.ai, EventRegistry repositories, or the official npm package for first-party resources. For community projects, identify the author and license and explain the value in your pull request. If a new first-party domain is needed, update the validator with evidence of ownership.

## Documentation standards

- Describe the existing official integrations. Do not invent endpoints, tool schemas, partnerships, or certification.
- The free allowance is one-time, not recurring or unlimited. Link to the current provider plans and explain variable API token costs when relevant.
- Never put real API keys into examples, screenshots, issues, commits, or browser code.
- Distinguish a source review from an executed integration test. If you tested a client, record the version, date, steps, and result without credentials or private data.
- Keep the original text wordmark; do not copy the NewsAPI.ai logo or website design.
- Keep inherited experimental backend code outside site-only changes.

## Report a problem

Use a GitHub issue for broken links, confusing instructions, and website defects. Include the page, expected result, and reproduction steps. Follow SECURITY.md for sensitive reports.
