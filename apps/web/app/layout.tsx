import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import { SiteMotion } from "../components/news/site-motion";
export const metadata: Metadata = {
  metadataBase: new URL("https://newsapi-ai-agent.vercel.app"),
  title: {
    default: "free newsAPI agent — A community launchpad for news-powered AI",
    template: "%s · free newsAPI agent",
  },
  description:
    "A community-built home for NewsAPI.ai’s official MCP server, n8n workflows, SDKs, and guides. Start with the one-time free allowance and build something useful.",
  openGraph: {
    title: "free newsAPI agent",
    description:
      "Your agent. Meet the world. An independent community launchpad for NewsAPI.ai tools.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteMotion>{children}</SiteMotion>
      </body>
    </html>
  );
}
