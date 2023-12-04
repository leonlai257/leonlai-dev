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
    const [transition, setTransition] = useState(false);
    const [wiggle, setWiggle] = useState(false);

    useCursor(hovered);

    // const camera = useThree((state) => state.camera);

    const groupRef = useRef<THREE.Group>(null!);
    const postRef = useRef<THREE.Group>(null!);

    const { height, width } = useThree((state) => state.viewport);

    const camZ = 20;
    // const textX = -4.8;
    const textX = -width / 4.4;
    const textY = height / 3.4;
    const postY = -0.8;
    const postX = 0.5;
    const transitionSpeed = 0.04;
    const offset = 0.02;

    useFrame(() => {
        // if (clicked && camera.position.z < 12) {
        if (clicked) {
            if (postRef.current.position.y < postY) {
                postRef.current.position.y = THREE.MathUtils.lerp(
                    postRef.current.position.y,
                    postY,
                    transitionSpeed / 2
                );
                if (postRef.current.position.y + offset >= postY) {
                    postRef.current.position.y = postY;
                }
            } else if (groupRef.current.position.x > textX) {
                if (postRef.current.position.x < postX) {
                    postRef.current.position.x = THREE.MathUtils.lerp(
                        postRef.current.position.x,
                        postX,
                        transitionSpeed / 2
                    );
                    if (postRef.current.position.x + offset >= postX) {
                        postRef.current.position.x = postX;
                    }
                }
                groupRef.current.position.x = THREE.MathUtils.lerp(
                    groupRef.current.position.x,
                    textX,
                    transitionSpeed
                );
                if (groupRef.current.position.x - offset <= textX) {
                    groupRef.current.position.x = textX;
                }
            } else if (groupRef.current.position.y < textY) {
                groupRef.current.position.y = THREE.MathUtils.lerp(
                    groupRef.current.position.y,
                    textY,
                    transitionSpeed
                );
                if (groupRef.current.position.y + offset >= textY) {
                    groupRef.current.position.y = textY;
                    setTransition(true);
                }
            }

            // ref.current.rotation.x = THREE.MathUtils.lerp(
            //     ref.current.rotation.x,
            //     Math.PI / 16,
            //     0.02
            // );
            // ref.current.rotation.y = THREE.MathUtils.lerp(
            //     ref.current.rotation.x,
            //     Math.PI / 16,
            //     0.02
            // );
            // ref.current.rotation.z = THREE.MathUtils.lerp(
            //     ref.current.rotation.x,
            //     Math.PI / 16,
            //     0.02
            // );
        }
    });

    return (
        <>
            <Suspense fallback={<Html></Html>}>
                <group
                    ref={groupRef}
                    position={[0, 0.8, 0]}
                    onClick={() => {
                        if (transition) {
                            setWiggle(true);
                        } else {
                            setClicked(true);
                        }
                    }}
                    onPointerOver={(e) => setHoverStatus(true)}
                    onPointerOut={(e) => setHoverStatus(false)}
                >
                    <group scale={1.2}>
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
                        {clicked || (
                            <Line
                                points={[
                                    [2.4, -0.5, 0],
                                    [-2.4, -0.5, 0],
                                ]}
                                color={secondaryColor}
                                lineWidth={1.4}
                            />
                        )}
                    </group>

                    <group ref={postRef} scale={0.6} position={[0, -1, -0.2]}>
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
                />
            </Suspense>
        </>
    );
};

export default Main;
