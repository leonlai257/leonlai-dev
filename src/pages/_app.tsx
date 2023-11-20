import { Canvas } from '@react-three/fiber';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Route, Switch, useLocation } from 'wouter';
import Main from '.';
import '../styles/globals.css';
import Projects from './projects';
import { Room } from '@src/components';

export default function App({ pageProps }: AppProps) {
    const globalStates = {
        color: {
            primaryColor: '#8294C4',
            secondaryColor: '#ACB1D6',
            tertiaryColor: '#DBDFEA',
            quaternaryColor: '#FFEAD2',
        },
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
            </Head>
            <Canvas>
                <ambientLight castShadow intensity={0.1} />
                <Room colorProfile={pageProps.color} />
                <Switch>
                    <Route path="/">
                        <Main {...pageProps} />
                    </Route>
                    <Route path="/projects">
                        <Projects {...pageProps} />
                    </Route>
                </Switch>
            </Canvas>
        </div>
    );
}
