import path from "node:path";
import { fileURLToPath } from "node:url";
const nextConfig = { distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next", reactStrictMode: true, outputFileTracingRoot: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..") };
export default nextConfig;
