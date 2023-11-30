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
        // if (clicked && camera.position.z < 12) {

        if (clicked) {
            console.log('running');
            ref.current.position.x = THREE.MathUtils.lerp(
                ref.current.position.x,
                -3.4,
                0.02
            );
            ref.current.position.y = THREE.MathUtils.lerp(
                ref.current.position.y,
                4,
                0.02
            );

            camera.position.z = THREE.MathUtils.lerp(
                camera.position.z,
                12,
                0.02
            );

            ref.current.rotation.x = THREE.MathUtils.lerp(
                ref.current.rotation.x,
                Math.PI / 16,
                0.02
            );

            ref.current.rotation.y = THREE.MathUtils.lerp(
                ref.current.rotation.x,
                Math.PI / 16,
                0.02
            );

            ref.current.rotation.z = THREE.MathUtils.lerp(
                ref.current.rotation.x,
                Math.PI / 16,
                0.02
            );

            if (camera.position.z > 11.99) {
                camera.position.z = 12;
            }
        }
    });

    return (
        <>
            <Suspense fallback={<Html></Html>}>
                <group
                    ref={ref}
                    position={[0, 0.2, 0]}
                    // onClick={() => setClicked(!clicked)}
                    onClick={() => setClicked(true)}
                    onPointerOver={(e) => setHoverStatus(true)}
                    onPointerOut={(e) => setHoverStatus(false)}
                >
                    <group
                        scale={clicked ? 1 : 1.2}
                        // rotation={[
                        //     (Math.PI * 1) / 16,
                        //     (Math.PI * 1) / 16,
                        //     (Math.PI * 1) / 16,
                        // ]}
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
                    {clicked || (
                        <Line
                            points={[
                                [2.4, -0.48, 0],
                                [-2.4, -0.48, 0],
                            ]}
                            color={secondaryColor}
                            lineWidth={1.4}
                        />
                    )}

                    <group
                        scale={clicked ? 0.52 : 0.4}
                        position={[clicked ? 0.52 : 0, -0.76, -0.2]}
                    >
                        <Word color={hovered ? secondaryColor : primaryColor}>
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
