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

            "@stylistic/function-paren-newline": ["error", "multiline-arguments"],
            "@stylistic/implicit-arrow-linebreak": "error",
            "@stylistic/indent": "error",
            "@stylistic/indent-binary-ops": ["error", 4],
            "@stylistic/jsx-child-element-spacing": "error",

            "@stylistic/jsx-closing-bracket-location": ["error", "line-aligned"],
            "@stylistic/jsx-closing-tag-location": "error",
            "@stylistic/jsx-curly-brace-presence": [
                "error",
                {
                    props: "always",
                    propElementValues: "always", // ⚠️
                },
            ],
            "@stylistic/jsx-curly-newline": [
                "error",
                { singleline: "forbid" },
            ],
            "@stylistic/jsx-curly-spacing": [
                "error",
                { children: true },
            ],

            "@stylistic/jsx-equals-spacing": "error",
            "@stylistic/jsx-first-prop-new-line": ["error", "multiline"],
            "@stylistic/jsx-function-call-newline": "error",
            "@stylistic/jsx-max-props-per-line": "error",
            "@stylistic/jsx-indent-props": [
                "error",
                { ignoreTernaryOperator: true },
            ],

            "@stylistic/jsx-one-expression-per-line": "error",
            "@stylistic/jsx-pascal-case": "error",
            "@stylistic/jsx-props-no-multi-spaces": "error",
            "@stylistic/jsx-quotes": "error",
            "@stylistic/jsx-newline": [
                "error",
                { prevent: true },
            ],

            "@stylistic/jsx-self-closing-comp": "error",
            "@stylistic/key-spacing": "error",
            "@stylistic/jsx-sort-props": [
                "error",
                {
                    callbacksLast: true,
                    shorthandLast: true,
                    noSortAlphabetically: true,
                    reservedFirst: true,
                },
            ],
            "@stylistic/jsx-tag-spacing": [
                "error",
                { beforeClosing: "never" },
            ],
            "@stylistic/jsx-wrap-multilines": [
                "error",
                {
                    declaration: "parens-new-line",
                    assignment: "parens-new-line",
                    return: "parens-new-line",
                    arrow: "parens-new-line",
                    condition: "parens-new-line",
                    logical: "parens-new-line",
                    prop: "parens-new-line",
                    propertyValue: "parens-new-line",
                },
            ],

            "@stylistic/keyword-spacing": "error",
            "@stylistic/line-comment-position": "error",
            "@stylistic/linebreak-style": "error",
            "@stylistic/lines-around-comment": [
                "error",
                {
                    beforeLineComment: true,
                    allowBlockStart: true,
                },
            ],
            "@stylistic/member-delimiter-style": [
                "error",
                {
                    multiline: { delimiter: "none" },
                    singleline: { delimiter: "comma" },
                },
            ],

            "@stylistic/multiline-comment-style": ["error", "separate-lines"],
            "@stylistic/multiline-ternary": ["error", "always-multiline"],
            "@stylistic/new-parens": "error",
            "@stylistic/newline-per-chained-call": "error",
            "@stylistic/no-confusing-arrow": "error",

            "@stylistic/no-extra-semi": "error",
            "@stylistic/no-floating-decimal": "error",
            "@stylistic/no-mixed-operators": "error",
            "@stylistic/no-mixed-spaces-and-tabs": "error",
            "@stylistic/no-extra-parens": [
                "error",
                "all",
                {
                    nestedBinaryExpressions: false,
                    ignoreJSX: "multi-line", // ⚠️ jsx-wrap-multilines
                    enforceForArrowConditionals: false, // ⚠️ no-confusing-arrow
                },
            ],
        },
    },
]

export default config
