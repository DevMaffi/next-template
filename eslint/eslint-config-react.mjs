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
                {
                    multiline: "consistent", // ⚠️ react/jsx-curly-spacing
                    singleline: "forbid",
                },
            ],
        },
    },
]

export default config
