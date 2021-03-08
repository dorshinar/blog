module.exports = {
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
    __PATH_PREFIX__: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:markdown/recommended",
    "plugin:mdx/recommended",
  ],
  plugins: ["import", "markdown"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  rules: {
    "react/prop-types": 0,
    "import/order": ["error", { "newlines-between": "always" }],
    "max-nested-callbacks": 0,
    "import/no-unresolved": "error",
  },
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx"] },
    },
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.md*/*"],
      rules: {
        "prettier/prettier": "off",
        "import/no-unresolved": "off",
      },
    },
    {
      files: ["**/*.md*/*.html"],
      rules: {
        "react/no-unknown-property": "off",
      },
    },
    {
      files: ["content/**/*.html"],
      rules: {
        "no-unused-expressions": 0,
        "react/react-in-jsx-scope": 0,
        "react/self-closing-comp": 0,
        "prettier/prettier": "off",
      },
    },
  ],
};
