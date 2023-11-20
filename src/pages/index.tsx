import { CoreConfig } from '@config/app';
import {
    Box,
    Html,
    Line,
    PerspectiveCamera,
    Text,
    useCursor,
} from '@react-three/drei';
import { TransitionWord, Word } from '@src/components';
import { Suspense, useState } from 'react';
import * as THREE from 'three';

export interface MainProps extends CoreConfig {}

const Main = (props: MainProps) => {
    const { color } = props;

    const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor } =
        color;

    const [hovered, setHoverStatus] = useState(false);
    useCursor(hovered);

    return (
        <>
            <Suspense fallback={<Html></Html>}>
                <group position={[0, 0.2, 0]}>
                    <group
                        // rotation={[
                        //     (Math.PI * -2) / 16,
                        //     (Math.PI * -2) / 16,
                        //     (Math.PI * -1) / 16,
                        // ]}
                        onPointerOver={(e) => setHoverStatus(true)}
                        onPointerOut={(e) => setHoverStatus(false)}
                    >
                        <TransitionWord
                            originalColor={primaryColor}
                            transitionColor={secondaryColor}
                        >
                            Leon Lai
                        </TransitionWord>
                        <group position={[0.05, 0.05, 0.00001]}>
                            <Word
                                color={quaternaryColor}
                                outlineWidth={0.02}
                                outlineColor={
                                    hovered ? secondaryColor : primaryColor
                                }
                            >
                                Leon Lai
                            </Word>
                        </group>
                    </group>
                    <Line
                        points={[
                            [2.4, -0.48, 0],
                            [-2.4, -0.48, 0],
                        ]}
                        color={secondaryColor}
                        lineWidth={1.4}
                    />
                    <group scale={0.4} position={[0, -0.76, -0.2]}>
                        <Word
                            color={primaryColor}
                            outlineColor={
                                hovered ? secondaryColor : primaryColor
                            }
                        >
                            Full Stack Developer
                        </Word>
                    </group>
                </group>

                <PerspectiveCamera near={0.1} far={1000} />
            </Suspense>
        </>
    );
};

export default Main;
