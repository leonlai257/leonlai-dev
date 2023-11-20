import { CoreConfig } from '@config/app';
import {
    Box,
    Html,
    Line,
    PerspectiveCamera,
    Text,
    useCursor,
} from '@react-three/drei';
import { Word } from '@src/components';
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
                <group
                    // rotation={[
                    //     (Math.PI * -2) / 16,
                    //     (Math.PI * -2) / 16,
                    //     (Math.PI * -1) / 16,
                    // ]}
                    onPointerOver={(e) => setHoverStatus(true)}
                    onPointerOut={(e) => setHoverStatus(false)}
                >
                    <Word
                        originalColor={primaryColor}
                        transitionColor={secondaryColor}
                    >
                        Leon Lai
                    </Word>
                    <group position={[0.05, 0.05, 0.00001]}>
                        <Text
                            color={quaternaryColor}
                            outlineWidth={0.02}
                            outlineColor={
                                hovered ? secondaryColor : primaryColor
                            }
                        >
                            Leon Lai
                        </Text>
                    </group>
                </group>
                <Line
                    points={[
                        [2.4, -0.36, 0],
                        [-2.4, -0.36, 0],
                    ]}
                    color={secondaryColor}
                    lineWidth={1.4}
                />
                <group scale={0.4} position={[0, -0.7, -0.2]}>
                    <Text
                        color={primaryColor}
                        outlineColor={hovered ? secondaryColor : primaryColor}
                    >
                        Full Stack Developer
                    </Text>
                </group>
                <PerspectiveCamera near={0.1} far={1000} />
            </Suspense>
        </>
    );
};

export default Main;
