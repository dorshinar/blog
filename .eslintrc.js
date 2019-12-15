module.exports = {
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
    __PATH_PREFIX__: true
  },
  extends: [
    "eslint:recommended",
    "react",
    "react-app",
    "plugin:prettier/recommended",
    "prettier/react",
    "plugin:import/errors"
  ],
  plugins: ["import", "markdown"],
  parserOptions: {
    sourceType: "module"
  },
  env: {
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    "react/prop-types": 0,
    "import/order": ["error", { "newlines-between": "always" }],
    "max-nested-callbacks": 0
  },
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx"] }
    }
  },
  overrides: [
    {
      files: ["**/*.md"],
      rules: {
        "no-undef": 0,
        "react/jsx-no-undef": 0,
        "no-unused-vars": 0,
        "react/react-in-jsx-scope": 0,
        "import/no-unresolved": 0,
        "import/order": 0
      }
    }
  ]
};
