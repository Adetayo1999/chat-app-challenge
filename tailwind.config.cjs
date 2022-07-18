/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                gradient: "linear-gradient(to bottom right, #79A7E0, #59BDFC)",
            },
        },
    },
    plugins: [],
};
