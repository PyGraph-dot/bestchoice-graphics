import nextConfig from "eslint-config-next"

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  ...nextConfig,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
]

export default config

