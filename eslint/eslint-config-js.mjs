/**
 * @see https://eslint.org/docs/latest/rules
 * @type {import("typescript-eslint").ConfigWithExtends[]}
 */
const config = [
    {
        rules: {
            // eslint

            "arrow-body-style": "error",
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

            "consistent-return": "error",
            "curly": ["error", "multi-or-nest", "consistent"],
            "default-case": "error",
            "default-case-last": "error",
            "default-param-last": "error",

            "dot-notation": "error",
            "eqeqeq": "error",
            "func-name-matching": "error",
            "func-names": ["error", "as-needed"],
            "func-style": [
                "error",
                "declaration",
                { allowArrowFunctions: true }, // ⚠️ prefer-arrow-callback
            ],

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
            "no-div-regex": "error",
            "no-duplicate-imports": [
                "error",
                { includeExports: true },
            ],

            "no-eq-null": "error",
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
            "no-implicit-globals": "error",
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
            "no-lonely-if": "error",
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
