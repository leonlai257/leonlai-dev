/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

module.exports = {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ["'Ubuntu'", 'sans-serif'],
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
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
            },
            fontSize: {
                'welcome-lg': [
                    '112px',
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
                    '60px',
                    {
                        fontWeight: '700',
                    },
                ],
                'welcome-outline-lg': [
                    '108px',
                    {
                        fontWeight: '700',
                    },
                ],
                'welcome-outline-md': [
                    '72px',
                    {
                        fontWeight: '700',
                    },
                ],
                'welcome-outline-sm': [
                    '32px',
                    {
                        fontWeight: '700',
                    },
                ],
                'display-lg': [
                    '72x',
                    {
                        fontWeight: '700',
                    },
                ],
                'display-md': [
                    '64px',
                    {
                        fontWeight: '700',
                    },
                ],
                'display-sm': [
                    '56px',
                    {
                        fontWeight: '700',
                    },
                ],
                'headline-lg': [
                    '44px',
                    {
                        fontWeight: '700',
                    },
                ],
                'headline-md': [
                    '36px',
                    {
                        fontWeight: '700',
                    },
                ],
                'headline-sm': [
                    '32px',
                    {
                        fontWeight: '700',
                    },
                ],
                'title-lg': [
                    '32px',
                    {
                        fontWeight: '700',
                    },
                ],
                'title-md': [
                    '28px',
                    {
                        fontWeight: '700',
                    },
                ],
                'title-sm': [
                    '24px',
                    {
                        fontWeight: '700',
                    },
                ],
                'label-lg': [
                    '22px',
                    {
                        fontWeight: '700',
                    },
                ],
                'label-md': [
                    '20px',
                    {
                        fontWeight: '700',
                    },
                ],
                'label-sm': [
                    '18px',
                    {
                        fontWeight: '700',
                    },
                ],
                'body-lg': [
                    '20px',
                    {
                        fontWeight: '400',
                    },
                ],
                'body-md': [
                    '18px',
                    {
                        fontWeight: '400',
                    },
                ],
                'body-sm': [
                    '18px',
                    {
                        fontWeight: '400',
                    },
                ],
                'navigation-lg': [
                    '20px',
                    {
                        fontWeight: '400',
                    },
                ],
                'navigation-md': [
                    '18px',
                    {
                        fontWeight: '400',
                    },
                ],
                'navigation-sm': [
                    '16px',
                    {
                        fontWeight: '400',
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
                float: {
                    '0%': {
                        transform: 'translateY(0) translateX(0)',
                    },
                    '100%': { transform: 'translateY(-2%) translateX(-2%)' },
                },
            },
            animation: {
                fadeOut: 'fadeOut 1s forwards',
                fadeIn: 'fadeIn 1s forwards',
                float: 'float 0.6s forwards',
            },
            opacity: {
                hover: 0.8,
            },
            colors: {
                black: {
                    DEFAULT: '#1F1E24',
                    light: '#333333',
                    pure: '#000000',
                    textShadow: 'rgba(0, 0, 0, 0.15)',
                },
                text: {
                    DEFAULT: '#F0EADB',
                    grayscale: '#A292A4',
                },
                background: {
                    DEFAULT: '#515D80',
                    dark: '#222232',
                },
                primary: {
                    DEFAULT: '#EDEDC7',
                },
                secondary: {
                    DEFAULT: '#08083F',
                },
                accent: {
                    DEFAULT: '#D8E4F8',
                },
            },
        },
    },
};
