/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-text': '#333333',
                'secondary-text': '#777777',
                'primary-color': '#E31C58',
                'secondary-color': '#333333',
            },
        },
        plugins: [],
    }
}

