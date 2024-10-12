import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import next from "@next/eslint-plugin-next"
import jsxA11y from "eslint-plugin-jsx-a11y"

/**
 * @type {import("typescript-eslint").ConfigWithExtends[]}
 */
const config = [
    {
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "@next/next": next,
            "jsx-a11y": jsxA11y,
        },

        rules: {
            // react-hooks
            ...reactHooks.configs.recommended.rules,

            // react-refresh
            "react-refresh/only-export-components": [
                "warn",
                { allowExportNames: ["metadata"] },
            ],

            // @next/next
            ...next.configs.recommended.rules,
            "@next/next/no-duplicate-head": "off", // ❌ ☑️ ⚠️

            // jsx-a11y
            ...jsxA11y.configs.recommended.rules,
        },
    },
]

export default config
