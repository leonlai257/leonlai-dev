import {
    Box,
    Html,
    Line,
    OrbitControls,
    PerspectiveCamera,
    Text,
    useCursor,
} from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { CoreConfig } from '@config/app';
import type { NextPage } from 'next';
import { ReactNode, Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export interface ProjectProps extends CoreConfig {}

const Projects = (props: ProjectProps) => {
    const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor } =
        props;

    const [hovered, setHoverStatus] = useState(false);
    useCursor(hovered);

    return (
        <>
            <Suspense fallback={<Html></Html>}>
                <Box args={[100, 100, 100]}>
                    <meshBasicMaterial
                        color={quaternaryColor}
                        side={THREE.DoubleSide}
                    />
                    <group
                        onPointerOver={(e) => setHoverStatus(true)}
                        onPointerOut={(e) => setHoverStatus(false)}
                    >
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
                            // outlineWidth={0.02}
                            outlineColor={
                                hovered ? secondaryColor : primaryColor
                            }
                        >
                            Full Stack Developer
                        </Text>
                    </group>
                </Box>
                <PerspectiveCamera near={0.1} far={1000} />
            </Suspense>
        </>
    );
};

export default Projects;
