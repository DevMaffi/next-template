import reactHooks from "eslint-plugin-react-hooks"

/**
 * @type {import("typescript-eslint").ConfigWithExtends[]}
 */
const config = [
    {
        plugins: {
            "react-hooks": reactHooks,
        },

        rules: {
            // react-hooks

            ...reactHooks.configs.recommended.rules,
        },
    },
]

export default config
