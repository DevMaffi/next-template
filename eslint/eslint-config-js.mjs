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

            "no-loop-func": "error",
            "no-magic-numbers": "off", // ❌
            "no-multi-assign": "error",
            "no-multi-str": "error",
            "no-negated-condition": "error",

            "no-nested-ternary": "error",
            "no-new": "off", // ❌
            "no-new-func": "error",
            "no-new-wrappers": "error",
            "no-object-constructor": "error",

            "no-plusplus": "off", // ❌
            "no-return-assign": ["error", "always"],
            "no-script-url": "error",
            "no-param-reassign": [
                "error",
                { props: true },
            ],
            "no-promise-executor-return": [
                "error",
                { allowVoid: true },
            ],

            "no-self-compare": "error",
            "no-sequences": "error",
            "no-template-curly-in-string": "error",
            "no-ternary": "off", // ❌
            "no-shadow": [
                "error",
                { hoist: "all" },
            ],

            "no-throw-literal": "error",
            "no-undef-init": "off", // ❌
            "no-undefined": "off", // ❌
            "no-underscore-dangle": "error",
            "no-unmodified-loop-condition": "off", // ❌

            "no-unreachable-loop": "off", // ❌
            "no-use-before-define": "error",
            "no-useless-assignment": "off", // ❌ ⚠️ init-declarations
            "no-unneeded-ternary": [
                "error",
                { defaultAssignment: false },
            ],
            "no-unsafe-optional-chaining": [
                "error",
                { disallowArithmeticOperators: true },
            ], // ☑️
        },
    },
]

export default config
