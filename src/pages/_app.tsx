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
import * as THREE from 'three';

export default function App({ pageProps }: AppProps) {
    const globalStates = {
        color: {
            textColor: new THREE.Color('#090a06').convertSRGBToLinear(),
            backgroundColor: new THREE.Color(
                255,
                234,
                210
            ).convertSRGBToLinear(),
            backgroundDark: new THREE.Color('#222232').convertSRGBToLinear(),
            primaryColor: new THREE.Color('#8294C4').convertSRGBToLinear(),
            secondaryColor: new THREE.Color('#ACB1D6').convertSRGBToLinear(),
            accentColor: new THREE.Color('#C9E8E5').convertSRGBToLinear(),
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
                <ambientLight intensity={0} />
                <Room colorProfile={pageProps.color} />

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
