/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#3B82F6",
                secondary: "#8B5CF6",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                sans: ['var(--font-inter)'],
                space: ['var(--font-space)'],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
