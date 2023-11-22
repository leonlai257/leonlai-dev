/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ["'Noto Sans'", 'sans-serif'],
        },
        neumorphismColor: {
            white: {
                100: '#E3E7F0',
            },
        },
        extend: {
            borderRadius: {
                xs: '4px',
                sm: '8px',
                md: '12px',
                lg: '16px',
                xl: '28px',
                '2xl': '42px',
                circle: '50%',
            },
            keyframes: {
                fadeOut: {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                bgFadeOut: 'fadeOut 3s forwards',
                textBgFadeOut: 'fadeOut 1s forwards',
                textFadeIn: 'fadeIn 1s forwards',
            },
            space: {
                0.25: '0.675rem',
            },
            opacity: {
                hover: 0.8,
            },
            colors: {
                black: {
                    DEFAULT: '#1F1E24',
                    light: '#333333',
                    pure: '#000000',
                },
                primary: {
                    DEFAULT: '#8294C4',
                },
                secondary: {
                    DEFAULT: '#ACB1D6',
                },
                tertiary: {
                    DEFAULT: '#A7A7A7',
                },
                quaternary: {
                    DEFAULT: '#FFEAD2',
                },
                fifth: {
                    DEFAULT: '#4858A4',
                },
            },
        },
    },
};
