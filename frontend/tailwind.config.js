/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm : '350px',
            md : '768px',
            lg : '976px',
            xl : '1280px',
            xxl: '1536px',
        },
    },
    daisyui: {
        themes: ['light', 'dark'],
    },
    plugins: [require('daisyui')],
}
