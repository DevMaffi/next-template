import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import next from "@next/eslint-plugin-next"

/**
 * @type {import("typescript-eslint").ConfigWithExtends[]}
 */
const config = [
    {
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "@next/next": next,
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
            "@next/next/no-duplicate-head": "off", // ❌ ☑️
        },
    },
]

export default config
