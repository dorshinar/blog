module.exports = {
  root: true,
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
    __PATH_PREFIX__: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: [],
  parserOptions: {
    ecmaVersion: 2021,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  rules: {
    "react/prop-types": 0,
    "import/order": ["error", { "newlines-between": "always" }],
    "max-nested-callbacks": "off",
    "import/no-unresolved": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
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
        "import/no-unresolved": "off",
        "no-undef": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-no-undef": "off",
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
      },
    },
    {
      files: ["**/*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
