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
                '2xl': '50px',
            },
            fontSize: {
                '3xs': '0.5rem',
                '2xs': '0.65rem',
                'welcome-lg': [
                    '110px',
                    {
                        lineHeight: '110px',
                        fontWeight: '600',
                    },
                ],
                'welcome-md': [
                    '72px',
                    {
                        lineHeight: '60px',
                        fontWeight: '600',
                    },
                ],
                'welcome-sm': [
                    '32px',
                    {
                        lineHeight: '48px',
                        fontWeight: '600',
                    },
                ],
                'display-xl': [
                    '80px',
                    {
                        lineHeight: '84px',
                        fontWeight: '600',
                    },
                ],
                'display-lg': [
                    '3.563rem',
                    {
                        lineHeight: '3.563rem',
                        fontWeight: '600',
                    },
                ],
                'display-md': [
                    '2.813rem',
                    {
                        lineHeight: '3.25rem',
                        fontWeight: '600',
                    },
                ],
                'display-sm': [
                    '2.25rem',
                    {
                        lineHeight: '2.625rem',
                        fontWeight: '600',
                    },
                ],
                'headline-lg': [
                    '2rem',
                    {
                        lineHeight: '2.5rem',
                        fontWeight: '600',
                    },
                ],
                'headline-md': [
                    '1.75rem',
                    {
                        lineHeight: '2.25rem',
                        fontWeight: '600',
                    },
                ],
                'headline-sm': [
                    '1.5rem',
                    {
                        lineHeight: '2rem',
                        fontWeight: '600',
                    },
                ],
                'title-lg': [
                    '1.375rem',
                    {
                        lineHeight: '1.75rem',
                        fontWeight: '600',
                    },
                ],
                'title-md': [
                    '1rem',
                    {
                        lineHeight: '1.5rem',
                        fontWeight: '600',
                    },
                ],
                'title-sm': [
                    '0.875rem',
                    {
                        lineHeight: '1.25rem',
                        fontWeight: '600',
                    },
                ],
                'label-lg': [
                    '0.875rem',
                    {
                        lineHeight: '1.25rem',
                        fontWeight: '700',
                    },
                ],
                'label-md': [
                    '0.75rem',
                    {
                        lineHeight: '1rem',
                        fontWeight: '700',
                    },
                ],
                'label-sm': [
                    '0.688rem',
                    {
                        lineHeight: '1rem',
                        fontWeight: '700',
                    },
                ],
                'body-lg': [
                    '1rem',
                    {
                        lineHeight: '1.5rem',
                        fontWeight: '500',
                    },
                ],
                'body-md': [
                    '0.875rem',
                    {
                        lineHeight: '1.25rem',
                        fontWeight: '500',
                    },
                ],
                'body-sm': [
                    '0.75rem',
                    {
                        lineHeight: '1rem',
                        fontWeight: '500',
                    },
                ],
                'team-md': [
                    '1.125rem',
                    {
                        lineHeight: '1.25rem',
                        fontWeight: '700',
                    },
                ],
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
