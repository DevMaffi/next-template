/**
 * @see https://tailwindcss.com/docs/guides/nextjs
 * @type {import("tailwindcss").Config}
 */
const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },

    plugins: [],
}

export default config
