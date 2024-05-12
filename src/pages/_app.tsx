import { NavBar } from '@src/components';
import { baseConfig } from '@src/config/app';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Main from '.';
import '../styles/globals.css';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import Project from './projects/[...project]';
import ProjectCNS from './projects/cns';
import ProjectFoodiverse from './projects/foodiverse';
import ProjectMR from './projects/mr';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                minHeight: '100vh',
                height: '100%',
                overflow: 'hidden',
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
            <div className="relative inset-x-0 m-auto flex w-full flex-col items-center justify-center overflow-x-hidden overflow-y-hidden pt-[32px] md:pt-[53px] lg:pt-[59px]">
                <div className="relative min-h-screen w-full max-w-[1440px]">
                    <Component {...pageProps} />
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    );
}
