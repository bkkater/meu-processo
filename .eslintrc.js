module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    camelcase: "off",
    "prettier/prettier": "error",
    "react/no-danger": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "react/prop-types": "off",
    "react/function-component-definition": "off",
    "react/jsx-no-constructed-context-values": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["~", "./src"]],
        extensions: [".js", ".jsx", ".json"],
      },
    },
  },
};
