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
            "react/default-props-match-prop-types": "error",
            "react/boolean-prop-naming": [
                "error",
                { validateNested: true },
            ],
            "react/destructuring-assignment": [
                "error",
                "always",
                { destructureInSignature: "always" },
            ],

            "react/forward-ref-uses-ref": "error",
            "react/function-component-definition": "error",
            "react/hook-use-state": "error",
            "react/iframe-missing-sandbox": "error",
            "react/jsx-boolean-value": [
                "error",
                "never",
                { assumeUndefinedIsFalse: true },
            ],

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
                { indentLogicalExpressions: true },
            ],
            "react/jsx-key": [
                "error",
                {
                    checkFragmentShorthand: true,
                    checkKeyMustBeforeSpread: true,
                    warnOnDuplicates: true,
                },
            ], // ☑️
            "react/jsx-no-bind": [
                "error",
                {
                    allowArrowFunctions: true,
                    allowFunctions: true,
                },
            ],

            "react/jsx-no-constructed-context-values": "error",
            "react/jsx-no-literals": "off", // ❌
            "react/jsx-no-script-url": "error",
            "react/jsx-no-useless-fragment": "error",
            "react/jsx-no-leaked-render": [
                "error",
                { validStrategies: ["ternary"] }, // ✨
            ],

            "react/jsx-fragments": ["error", "element"], // ✨
            "react/jsx-props-no-spread-multi": "error",
            "react/no-invalid-html-attribute": "error",
            "react/no-adjacent-inline-elements": "error",
            "react/jsx-props-no-spreading": [
                "error",
                { html: "ignore" },
            ],

            "react/no-array-index-key": "warn",
            "react/no-danger": "error",
            "react/no-multi-comp": "error",
            "react/no-namespace": "error",
            "react/no-this-in-sfc": "error",

            "react/no-unstable-nested-components": "error",
            "react/no-unused-prop-types": "error",
            "react/no-object-type-as-default-prop": "error",
            "react/prefer-read-only-props": "off", // ❌
            "react/no-unknown-property": [
                "error",
                { requireDataLowercase: true },
            ], // ☑️

            "react/require-default-props": "off", // ❌
            "react/style-prop-object": "error",
            "react/void-dom-elements-no-children": "error",
        },
    },
]

export default config
