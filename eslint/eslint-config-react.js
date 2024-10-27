import react from "eslint-plugin-react"

/**
 * @type {import("typescript-eslint").TSESLint.FlatConfig.Config["rules"]}
 */
const components = {
    "react/forward-ref-uses-ref": "error",
    "react/function-component-definition": "error",
    "react/no-multi-comp": "error",
    "react/no-namespace": "error",
    "react/jsx-filename-extension": [
        "error",
        {
            allow: "as-needed",
            extensions: [".tsx"],
        },
    ],

    "react/no-this-in-sfc": "error",
    "react/no-unstable-nested-components": "error",
}

/**
 * @type {import("typescript-eslint").TSESLint.FlatConfig.Config["rules"]}
 */
const props = {
    "react/default-props-match-prop-types": "error",
    "react/boolean-prop-naming": [
        "warn",
        { validateNested: true },
    ],
    "react/destructuring-assignment": [
        "error",
        "always",
        { destructureInSignature: "always" },
    ],
    "react/jsx-boolean-value": [
        "error",
        "never",
        { assumeUndefinedIsFalse: true },
    ],
    "react/jsx-key": [
        "error",
        {
            checkFragmentShorthand: true,
            checkKeyMustBeforeSpread: true,
            warnOnDuplicates: true,
        },
    ], // ☑️

    "react/jsx-props-no-spread-multi": "error",
    "react/no-danger": "warn",
    "react/no-unused-prop-types": "error",
    "react/jsx-props-no-spreading": "off", // ❌
    "react/no-unknown-property": [
        "error",
        { requireDataLowercase: true },
    ], // ☑️

    "react/no-object-type-as-default-prop": "error",
    "react/prefer-read-only-props": "off", // ❌
    "react/require-default-props": "off", // ❌
    "react/style-prop-object": "error",
}

/**
 * @type {import("typescript-eslint").TSESLint.FlatConfig.Config["rules"]}
 */
const attributes = {
    "react/button-has-type": "error",
    "react/checked-requires-onchange-or-readonly": "error",
    "react/iframe-missing-sandbox": "error",
    "react/no-invalid-html-attribute": "error",
}

/**
 * @type {import("typescript-eslint").TSESLint.FlatConfig.Config["rules"]}
 */
const state = {
    "react/hook-use-state": "error",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-handler-names": [
        "warn",
        {
            checkLocalVariables: true,
            checkInlineFunction: true,
        },
    ],
}

/**
 * @type {import("typescript-eslint").TSESLint.FlatConfig.Config["rules"]}
 */
const jsx = {
    "react/jsx-no-literals": "off", // ❌
    "react/jsx-no-script-url": "error",
    "react/jsx-indent": [
        "error",
        4,
        { indentLogicalExpressions: true },
    ],
    "react/jsx-no-bind": [
        "error",
        {
            allowArrowFunctions: true,
            allowFunctions: true,
        },
    ],
    "react/jsx-no-leaked-render": [
        "error",
        { validStrategies: ["ternary"] }, // ✨
    ],

    "react/no-adjacent-inline-elements": "error",
    "react/no-array-index-key": "warn",
    "react/void-dom-elements-no-children": "error",
}

/**
 * @type {import("typescript-eslint").TSESLint.FlatConfig.Config["rules"]}
 */
const fragments = {
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-fragments": ["error", "element"], // ✨
}

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

            ...components,
            ...props,
            ...attributes,
            ...state,
            ...jsx,
            ...fragments,
        },
    },
]

export default config
