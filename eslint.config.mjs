import js from "@eslint/js"
import tseslint from "typescript-eslint"
import globals from "globals"

import jsConfig from "./eslint/eslint-config-js.mjs"

/**
 * @type {import("typescript-eslint").ConfigWithExtends[]}
 */
const combineConfigs = [
    ...jsConfig,
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
            parserOptions: ["tsconfig.json"],
        },
    },
    ...combineConfigs.map(config => ({
        files: ["**/*.{ts,tsx}"],
        ...config,
    })),
)
