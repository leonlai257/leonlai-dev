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
import ProjectFoodiverse from './projects/foodiverse';
import ProjectMR from './projects/mr';
import About from './about';

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
            <Loader />

            <NavBar />

            <Canvas
                gl={{
                    toneMapping: THREE.NoToneMapping,
                }}
            >
                <ambientLight intensity={0.1} />
                <Room colorProfile={pageProps.color} />

                <Switch>
                    <Route path="/">
                        <Main {...pageProps} />
                    </Route>
                    <Route path="/contact">
                        <Contact {...pageProps} />
                    </Route>
                    <Route path="/about">
                        <About {...pageProps} />
                    </Route>
                    <Route path="/projects">
                        <Projects {...pageProps} />
                    </Route>
                    <Route path="/projects/cns">
                        <ProjectCNS {...pageProps} />
                    </Route>
                    <Route path="/projects/foodiverse">
                        <ProjectFoodiverse {...pageProps} />
                    </Route>
                    <Route path="/projects/mr">
                        <ProjectMR {...pageProps} />
                    </Route>
                    <Route path="/projects/:project">
                        <Project {...pageProps} />
                    </Route>
                </Switch>
            </Canvas>
        </div>
    );
}
