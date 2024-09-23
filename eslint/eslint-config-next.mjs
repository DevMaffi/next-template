import next from "@next/eslint-plugin-next"

/**
 * @see https://nextjs.org/docs/app/building-your-application/configuring/eslint
 * @type {import("typescript-eslint").ConfigWithExtends[]}
 */
const config = [
    {
        plugins: {
            "@next/next": next,
        },

        rules: {
            // next

            ...next.configs.recommended.rules,

            "@next/next/no-duplicate-head": "off", // ❌
        },
    },
]

export default config
