import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { NavBar, Room } from '@src/components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Route, Switch } from 'wouter';
import Main from '.';
import '../styles/globals.css';
import Contact from './contact';
import Projects from './projects';
import * as THREE from 'three';

export default function App({ pageProps }: AppProps) {
    const globalStates = {
        color: {
            textColor: '#090a06', // '#090a06',
            backgroundColor: '#FEEBD6', // '#FEEBD6',
            backgroundDark: '#222232', // '#222232',
            primaryColor: '#8294C4', // '#8294C4',
            secondaryColor: '#ACB1D6', // '#ACB1D6',
            accentColor: '#C9E8E5', // '#C9E8E5',
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

            <Canvas
                gl={{
                    toneMapping: THREE.NoToneMapping,
                }}
            >
                <ambientLight intensity={0.1} />
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
