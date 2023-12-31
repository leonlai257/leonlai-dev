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
import Project from './projects/[...project]';
import ProjectCNS from './projects/cns';
import { baseConfig } from '@src/config/app';

export default function App({ pageProps }: AppProps) {
    const globalStates = {};

    pageProps = {
        ...baseConfig,
        ...globalStates,
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
                    <Route path="/projects/cns">
                        <ProjectCNS {...pageProps} />
                    </Route>
                    <Route path="/projects/:project">
                        <Project {...pageProps} />
                    </Route>
                </Switch>
            </Canvas>
        </div>
    );
}
