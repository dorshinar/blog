module.exports = {
  globals: { __PATH_PREFIX__: true },
  extends: [
    "eslint:recommended",
    "react",
    "react-app",
    "plugin:prettier/recommended",
    "prettier/react",
    "plugin:import/errors"
  ],
  plugins: ["import"],
  parserOptions: {
    sourceType: "module"
  },
  env: {
    es6: true,
    node: true
  },
  rules: {
    "react/prop-types": 0,
    "import/order": ["error", { "newlines-between": "always" }]
  },
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx"] }
    }
  }
};
