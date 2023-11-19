import { Canvas } from '@react-three/fiber';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Route, Switch } from 'wouter';
import Main from '.';
import '../styles/globals.css';

export default function App({ pageProps }: AppProps) {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}>
            <Head>
                <title>React three.js Boilerplate</title>
                <meta
                    name="React three.js Boilerplate"
                    content="React three.js Boilerplate by Leon"
                />
            </Head>
            <Canvas shadows={'soft'}>
                <ambientLight castShadow intensity={0.1} />

                <directionalLight
                    intensity={0.5}
                    castShadow
                    shadow-mapSize-height={512}
                    shadow-mapSize-width={512}
                />
                <Switch>
                    <Route path="/">
                        <Main {...pageProps} />
                    </Route>
                </Switch>
            </Canvas>
        </div>
    );
}
