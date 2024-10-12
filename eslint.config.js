import js from "@eslint/js"
import tseslint from "typescript-eslint"
import globals from "globals"
import react from "eslint-plugin-react"

import jsConfig from "./eslint/eslint-config-js.mjs"
import misc from "./eslint/eslint-config-misc.mjs"
import stylistic from "./eslint/eslint-config-stylistic.mjs"
import reactConfig from "./eslint/eslint-config-react.mjs"

/**
 * @type {import("typescript-eslint").ConfigWithExtends[]}
 */
const combineConfigs = [
    ...jsConfig,
    ...reactConfig,
    ...misc,
    ...stylistic,
]

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    { ignores: ["node_modules", "coverage", ".next", "build"] },
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: globals.browser,
            parserOptions: react.configs.parserOptions,
        },
    },
    ...combineConfigs.map(config => ({
        files: ["**/*.{ts,tsx}"],
        ...config,
    })),
)
