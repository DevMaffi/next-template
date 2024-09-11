/**
 * @see https://eslint.org/docs/latest/rules
 * @type {import("eslint").Linter.Config[]}
 */
const config = [
    {
        rules: {
            // eslint

            "arrow-body-style": "error", // 💡 enforces no braces where they can be omitted
            "block-scoped-var": "error",
            "camelcase": "error",

            "array-callback-return": [
                "error",
                {
                    checkForEach: true,
                    allowVoid: true,
                },
            ],

            "capitalized-comments": [
                "warn",
                "always",
                { ignoreConsecutiveComments: true },
            ],

            "consistent-return": "error", // 💡 require return statements to either always or never specify values
            "curly": ["error", "multi-or-nest", "consistent"],
            "default-case": "error",
            "default-case-last": "error",
            "default-param-last": "error",

            "dot-notation": "error",
            "eqeqeq": "error",
            "func-name-matching": "error",
            "func-names": "off", // ❌ 💡 requires function expressions to have a name

            "func-style": [
                "error",
                "declaration",
                { allowArrowFunctions: true }, // ⚠️ prefer-arrow-callback
            ], // 💡 requires the use of function declarations instead of function expressions assigned to variables
        },
    },
]

export default config
