import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      // Dev-only: tag JSX elements with their source location for the
      // ⌥-click inspector (src/components/dev/SourceInspector.tsx).
      "*.tsx": {
        condition: { all: ["development", { not: "foreign" }, { path: /^src\// }] },
        loaders: [path.join(process.cwd(), "dev/source-loader.cjs")],
      },
    },
  },
};

export default nextConfig;
