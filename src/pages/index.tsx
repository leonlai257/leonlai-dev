import { CoreConfig } from '@config/app';
import { Html, Line, PerspectiveCamera, useCursor } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { TransitionWord, Word } from '@src/components';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';

export interface MainProps extends CoreConfig {}

const Main = (props: MainProps) => {
    const { color } = props;

    const {
        textColor,
        backgroundColor,
        primaryColor,
        secondaryColor,
        accentColor,
    } = color;

    const [hovered, setHoverStatus] = useState(false);
    const [clicked, setClicked] = useState(false);

    useCursor(hovered);

    const camera = useThree((state) => state.camera);

    const ref = useRef<THREE.Group>(null!);

    useFrame(() => {
        if (clicked) {
            ref.current.position.x = THREE.MathUtils.lerp(
                ref.current.position.x,
                -8,
                0.02
            );
            ref.current.position.y = THREE.MathUtils.lerp(
                ref.current.position.y,
                8,
                0.02
            );

            camera.position.z = THREE.MathUtils.lerp(
                camera.position.z,
                20,
                0.02
            );

            if (camera.position.z > 19.9) {
                camera.position.z = 20;
            }
        }
    });

    return (
        <>
            <Suspense fallback={<Html></Html>}>
                <group
                    ref={ref}
                    position={[0, 0.2, 0]}
                    onClick={() => setClicked(!clicked)}
                >
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
                        <group position={[0.05, 0.05, 0.02]}>
                            <Word
                                color={backgroundColor}
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

                <PerspectiveCamera
                    makeDefault
                    near={0.1}
                    far={1000}
                    position={[0, 0, 10]}
                    // position={[0, 0, clicked ? 20 : 10]}
                />
            </Suspense>
        </>
    );
};

export default Main;
