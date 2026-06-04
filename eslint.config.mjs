import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  formatters: true,
  typescript: true,
  react: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
}, {
  files: ["**/*.{ts,tsx}"],
  rules: {
    "perfectionist/sort-imports": ["error", {
      tsconfig: {
        rootDir: ".",
      },
    }],
    "ts/consistent-type-definitions": ["off"],
    "react-refresh/only-export-components": ["off"],
    "react/no-context-provider": ["off"],
    "react/no-use-context": ["off"],
  },
});
