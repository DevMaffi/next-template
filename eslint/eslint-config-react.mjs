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
                { allowFunctions: true },
            ],

            "react/jsx-no-literals": "off", // ❌
            "react/jsx-no-script-url": "error",
            "react/jsx-no-useless-fragment": "error",
            "react/jsx-one-expression-per-line": "error",
            "react/jsx-no-leaked-render": [
                "error",
                { validStrategies: ["ternary"] },
            ],
        },
    },
]

export default config
