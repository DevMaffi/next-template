import react from "eslint-plugin-react"

/**
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules
 * @type {import("typescript-eslint").ConfigWithExtends[]}
 */
const config = [
    {
        plugins: {
            "react": react,
        },

        settings: {
            "react": {
                version: "detect",
            },
        },

        rules: {
            // react

            ...react.configs.recommended.rules,

            "react/button-has-type": "error",
            "react/checked-requires-onchange-or-readonly": "error",
            "react/forward-ref-uses-ref": "error",
            "react/boolean-prop-naming": [
                "error",
                { validateNested: true },
            ],
            "react/destructuring-assignment": [
                "error",
                "always",
                { destructureInSignature: "always" },
            ],

            "react/function-component-definition": "error",
            "react/hook-use-state": "error",
            "react/iframe-missing-sandbox": "error",
            "react/jsx-child-element-spacing": "error",
            "react/jsx-boolean-value": [
                "error",
                "never",
                { assumeUndefinedIsFalse: true },
            ],

            "react/jsx-closing-bracket-location": ["error", "line-aligned"],
            "react/jsx-closing-tag-location": ["error", "line-aligned"],
            "react/jsx-equals-spacing": "error",
            "react/jsx-curly-spacing": [
                "error",
                {
                    attributes: { allowMultiline: false },
                    children: true,
                },
            ],
            "react/jsx-curly-newline": [
                "error",
                { singleline: "forbid" },
            ],

            "react/jsx-first-prop-new-line": ["error", "multiline"],
            "react/jsx-filename-extension": [
                "error",
                {
                    allow: "as-needed",
                    extensions: [".tsx"],
                },
            ],
            "react/jsx-handler-names": [
                "error",
                {
                    checkLocalVariables: true,
                    checkInlineFunction: true,
                },
            ],
            "react/jsx-indent": [
                "error",
                4,
                {
                    checkAttributes: true,
                    indentLogicalExpressions: true,
                },
            ],
            "react/jsx-indent-props": [
                "error",
                { ignoreTernaryOperator: true },
            ],

            "react/jsx-max-props-per-line": "error",
            "react/jsx-no-constructed-context-values": "error",
            "react/jsx-key": [
                "error",
                {
                    checkFragmentShorthand: true,
                    checkKeyMustBeforeSpread: true,
                    warnOnDuplicates: true,
                },
            ], // ☑️
            "react/jsx-newline": [
                "error",
                { prevent: true },
            ],
            "react/jsx-no-bind": [
                "error",
                {
                    allowArrowFunctions: true,
                    allowFunctions: true,
                },
            ],

            "react/jsx-no-literals": "off", // ❌
            "react/jsx-no-script-url": "error",
            "react/jsx-no-useless-fragment": "error",
            "react/jsx-one-expression-per-line": "error",
            "react/jsx-no-leaked-render": [
                "error",
                { validStrategies: ["ternary"] },
            ],

            "react/jsx-pascal-case": "error",
            "react/jsx-fragments": ["error", "element"],
            "react/jsx-props-no-multi-spaces": "error",
            "react/jsx-curly-brace-presence": [
                "error",
                { props: "always" },
            ],
            "react/jsx-props-no-spreading": [
                "error",
                { html: "ignore" },
            ],

            "react/jsx-props-no-spread-multi": "error",
            "react/no-invalid-html-attribute": "error",
            "react/jsx-sort-props": [
                "error",
                {
                    callbacksLast: true,
                    shorthandLast: true,
                    noSortAlphabetically: true,
                    reservedFirst: true,
                },
            ],
            "react/jsx-tag-spacing": [
                "error",
                { beforeClosing: "never" },
            ],
            "react/jsx-wrap-multilines": [
                "error",
                {
                    declaration: "parens-new-line",
                    assignment: "parens-new-line",
                    return: "parens-new-line",
                    arrow: "parens-new-line",
                    condition: "parens-new-line",
                    logical: "parens-new-line",
                    prop: "parens-new-line",
                },
            ],

            "react/no-access-state-in-setstate": "error",
            "react/no-adjacent-inline-elements": "error",
            "react/no-array-index-key": "warn",
            "react/no-danger": "error",
            "react/no-multi-comp": "error",
        },
    },
]

export default config
