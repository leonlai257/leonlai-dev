import { NavBar } from '@src/components';
import { baseConfig } from '@src/config/app';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    const config = {
        ...baseConfig,
        pageProps,
    };

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                minHeight: '100vh',
                height: '100%',
            }}
        >
            <Head>
                <title>Leon Lai</title>
                <meta name="Leon Lai" content="Leon Lai" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <NavBar />
            <div className="relative inset-x-0 m-auto flex w-full flex-col items-center justify-center overflow-x-hidden overflow-y-scroll bg-background pt-10 md:pt-[64px]">
                <div className="relative min-h-screen w-full max-w-[1440px] text-primary px-4">
                    <Component {...config} />
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    );
}
