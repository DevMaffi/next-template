import reactRefresh from "eslint-plugin-react-refresh"

/**
 * @see https://github.com/ArnaudBarre/eslint-plugin-react-refresh
 * @type {import("typescript-eslint").ConfigWithExtends[]}
 */
const config = [
    {
        plugins: {
            "react-refresh": reactRefresh,
        },

        rules: {
            // react-refresh

            "react-refresh/only-export-components": [
                "warn",
                { allowExportNames: ["metadata"] },
            ],
        },
    },
]

export default config
