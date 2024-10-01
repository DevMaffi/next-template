import stylistic from "@stylistic/eslint-plugin"

/**
 * @see https://eslint.style/packages/default
 * @type {import("typescript-eslint").ConfigWithExtends[]}
 */
const config = [
    {
        plugins: {
            "@stylistic": stylistic,
        },

        rules: {
            // @stylistic

            "@stylistic/arrow-parens": ["error", "as-needed"],
            "@stylistic/arrow-spacing": "error",
            "@stylistic/array-bracket-newline": [
                "error",
                {
                    multiline: true,
                    minItems: 3,
                },
            ],
            "@stylistic/array-bracket-spacing": [
                "error",
                "never",
                { arraysInArrays: true },
            ],
            "@stylistic/array-element-newline": [
                "error",
                {
                    multiline: true,
                    minItems: 3,
                },
            ],

            "@stylistic/block-spacing": "error",
            "@stylistic/brace-style": ["error", "allman"],
            "@stylistic/comma-dangle": ["error", "always-multiline"],
            "@stylistic/comma-spacing": "error",
            "@stylistic/comma-style": "error",

            "@stylistic/computed-property-spacing": "error",
            "@stylistic/dot-location": ["error", "property"],
            "@stylistic/eol-last": "error",
            "@stylistic/func-call-spacing": "error",
            "@stylistic/function-call-argument-newline": "error",
        },
    },
]

export default config
