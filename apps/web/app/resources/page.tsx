import type { Metadata } from "next";
import { Header, Footer } from "../../components/news/shell";
import { ResourceLibrary } from "../../components/news/resource-library";
import { REPO } from "../../lib/community";
export const metadata: Metadata = {
  title: "Resource library",
  description:
    "Official NewsAPI.ai MCP, n8n, Python, Node.js, and API resources, curated by the community.",
};
export default function Resources() {
  return (
    <>
      <Header active="resources" />
      <main id="main" className="wrap library-main">
        <div className="page-intro">
          <div className="eyebrow">THE BUILDER’S BOOKMARKS</div>
          <h1>
            Good tools.
            <br />
            <span>All within reach.</span>
          </h1>
          <p>
            A community-curated library of official NewsAPI.ai resources. Pick
            your path and go straight to the source.
          </p>
        </div>
        <ResourceLibrary />
        <div className="library-note">
          <span>
            Resource references reviewed September 13, 2026. Client
            installations are not certified by this community project.
          </span>
          <a href={`${REPO}/issues/new?template=resource.yml`}>
            Suggest a resource ↗
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
