import js from "@eslint/js"
import globals from "globals"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      // Vite + React 17+
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",

      // Keep JSX aligned/consistent on save via ESLint fixes
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],

      // Keep JS indentation consistent without fighting JSX indentation rules
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
          ignoredNodes: [
            "JSXElement",
            "JSXElement *",
            "JSXFragment",
            "JSXFragment *",
            "JSXAttribute",
          ],
        },
      ],

      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
]
