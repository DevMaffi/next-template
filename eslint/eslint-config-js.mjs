/**
 * @see https://eslint.org/docs/latest/rules
 * @type {import("typescript-eslint").ConfigWithExtends[]}
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
                    checkForEach: true, // 💡 report forEach callbacks that return a value
                    allowVoid: true, // 💡 allows void in forEach callbacks
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

            "guard-for-in": "off", // ❌
            "id-denylist": ["error", "z"], // TODO: complete list
            "init-declarations": "error",
            "logical-assignment-operators": ["error", "never"],
            "id-length": [
                "error",
                {
                    min: 3,
                    properties: "never",
                    exceptions: ["_"],
                },
            ],

            "no-alert": "error",
            "no-await-in-loop": "error",
            "no-bitwise": "error",
            "no-caller": "error",
            "new-cap": [
                "error",
                { capIsNew: false },
            ],

            "no-cond-assign": ["error", "always"], // ☑️
            "no-console": "error",
            "no-continue": "error",
            "no-div-regex": "error", // 💡 /= can be confused with a division assignment operator
            "no-duplicate-imports": [
                "error",
                { includeExports: true },
            ],

            "no-eq-null": "error", // 💡 eqeqeq
            "no-eval": "error",
            "no-extend-native": "error",
            "no-else-return": [
                "error",
                { allowElseIf: false },
            ],
            "no-empty-function": [
                "error",
                { allow: ["arrowFunctions"] },
            ],

            "no-extra-bind": "error",
            "no-implicit-globals": "error", // 💡 does not apply to ES and CommonJS modules since they have a module scope
            "no-implied-eval": "error",
            "no-extra-boolean-cast": [
                "error",
                { enforceForInnerExpressions: true },
            ], // ☑️
            "no-implicit-coercion": [
                "error",
                { disallowTemplateShorthand: true },
            ],

            "no-inline-comments": "off", // ❌
            "no-lone-blocks": "error",
            "no-lonely-if": "error", // 💡 disallows if statements as the only statement in else blocks
            "no-inner-declarations": [
                "error",
                "functions",
                { blockScopedFunctions: "disallow" },
            ],
            "no-invalid-this": [
                "error",
                { capIsConstructor: false },
            ],
        },
    },
]

export default config
