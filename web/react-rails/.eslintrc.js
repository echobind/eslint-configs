module.exports = {
  parser: "babel-eslint", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["react", "jest"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  "env": {
    "browser": true,
    "jest/globals": true,
    "commonjs": true,
    "es6": true,
    "jquery": true
  },
  rules: {
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "any", prev: ["const", "let"], next: "*" },
      { blankLine: "any", prev: ["const", "let"], next: ["const", "let"] },
      { blankLine: "always", prev: "multiline-block-like", next: "*" },
      { blankLine: "always", prev: "multiline-expression", next: "*" },
      { blankLine: "always", prev: "multiline-const", next: "*" },
      { blankLine: "always", prev: "multiline-let", next: "*" },
      { blankLine: "always", prev: "*", next: "multiline-const" },
      { blankLine: "always", prev: "*", next: "multiline-let" },
      { blankLine: "always", prev: "*", next: "multiline-block-like" }
    ]
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
