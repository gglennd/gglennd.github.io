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
  rules: {
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
  },
});
