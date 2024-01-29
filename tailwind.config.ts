/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ["'Noto Sans'", 'sans-serif'],
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
            fontSize: {
                'welcome-lg': [
                    '110px',
                    {
                        fontWeight: '700',
                    },
                ],
                'welcome-md': [
                    '72px',
                    {
                        fontWeight: '700',
                    },
                ],
                'welcome-sm': [
                    '32px',
                    {
                        fontWeight: '700',
                    },
                ],
                'display-lg': [
                    '56x',
                    {
                        fontWeight: '700',
                    },
                ],
                'display-md': [
                    '44px',
                    {
                        fontWeight: '700',
                    },
                ],
                'display-sm': [
                    '36px',
                    {
                        fontWeight: '700',
                    },
                ],
                'headline-lg': [
                    '32px',
                    {
                        fontWeight: '700',
                    },
                ],
                'headline-md': [
                    '28px',
                    {
                        fontWeight: '700',
                    },
                ],
                'headline-sm': [
                    '24px',
                    {
                        fontWeight: '700',
                    },
                ],
                'title-lg': [
                    '28px',
                    {
                        fontWeight: '700',
                    },
                ],
                'title-md': [
                    '24px',
                    {
                        fontWeight: '700',
                    },
                ],
                'title-sm': [
                    '20px',
                    {
                        fontWeight: '700',
                    },
                ],
                'label-lg': [
                    '14px',
                    {
                        fontWeight: '700',
                    },
                ],
                'label-md': [
                    '12px',
                    {
                        fontWeight: '700',
                    },
                ],
                'label-sm': [
                    '11px',
                    {
                        fontWeight: '700',
                    },
                ],
                'body-lg': [
                    '18px',
                    {
                        fontWeight: '400',
                    },
                ],
                'body-md': [
                    '16px',
                    {
                        fontWeight: '400',
                    },
                ],
                'body-sm': [
                    '14px',
                    {
                        fontWeight: '400',
                    },
                ],
            },
            keyframes: {
                projectFade: {
                    '0%': { backgroundColor: '#8294C4' },
                    '100%': { backgroundColor: 'transparent', color: 'white' },
                },
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
                projectFade: 'projectFade 0.24s ease-in-out forwards',
                bgFadeOut: 'fadeOut 3s forwards',
                textBgFadeOut: 'fadeOut 1s forwards',
                textFadeIn: 'fadeIn 1s forwards',
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
                text: {
                    DEFAULT: '#090a06',
                    grayscale: '#A292A4',
                },
                background: {
                    DEFAULT: '#FFEAD2',
                    dark: '#222232',
                },
                primary: {
                    DEFAULT: '#8294C4',
                },
                secondary: {
                    DEFAULT: '#ACB1D6',
                },
                accent: {
                    DEFAULT: '#93d1cb',
                },
            },
        },
    },
};
