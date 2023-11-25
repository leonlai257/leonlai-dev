import { Canvas } from '@react-three/fiber';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Route, Switch, useLocation } from 'wouter';
import Main from '.';
import '../styles/globals.css';
import Projects from './projects';
import { Room, NavBar } from '@src/components';
import { Html, OrbitControls, Loader, Box } from '@react-three/drei';
import Contact from './contact';

export default function App({ pageProps }: AppProps) {
    const globalStates = {
        color: {
            primaryColor: '#8294C4',
            secondaryColor: '#ACB1D6',
            tertiaryColor: '#DBDFEA',
            quaternaryColor: '#FFEAD2',
            projectColor: '#F5F5F5',
        },
        nav: [
            {
                name: 'Home',
                url: '/',
            },
            {
                name: 'Contact',
                url: '/contact',
            },
            {
                name: 'Projects',
                url: '/projects',
            },
        ],
        contact: [
            {
                name: 'Github',
                url: 'https://github.com/leonlai257',
                alias: 'leonlai257',
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/leonlai257/',
                alias: 'leonlai257',
            },
            {
                name: 'Email',
                url: 'mailto:leonlai257@gmail.com',
                alias: 'leonlai257@gmail.com',
            },
        ],
    };

    pageProps = {
        ...pageProps,
        ...globalStates,
    };

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}
        >
            <Head>
                <title>Leon Lai</title>
                <meta name="Leon Lai" content="Leon Lai" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Roboto+Mono:wght@600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Loader />

            <NavBar />

            <Canvas>
                <ambientLight castShadow intensity={0.1} />
                <Room colorProfile={pageProps.color} />
                {/* <fog
                    attach="fog"
                    args={[pageProps.color.primaryColor, 10, 160]}
                /> */}
                {/* <OrbitControls /> */}

                <Switch>
                    <Route path="/">
                        <Main {...pageProps} />
                    </Route>
                    <Route path="/contact">
                        <Contact {...pageProps} />
                    </Route>
                    <Route path="/projects">
                        <Projects {...pageProps} />
                    </Route>
                </Switch>
            </Canvas>
        </div>
    );
}
