import {
    OrbitControls,
    PerspectiveCamera,
    Plane,
    Sky,
    Sphere,
} from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { createRef, useState } from 'react';
import * as THREE from 'three';
export interface MainProps {}

const Main = (props: MainProps) => {
    const { camera } = useThree();
    const cameraRef = createRef();

    const [fov] = useState(75);

    return (
        <>
            <Sky />

            <Sphere
                position={[0, 1, 0]}
                args={[1, 32, 32]}
                castShadow
                receiveShadow>
                <meshStandardMaterial attach="material" color="white" />
            </Sphere>
            <Plane
                rotation={[-Math.PI / 2, 0, 0]}
                args={[10, 10]}
                receiveShadow>
                <meshStandardMaterial
                    attach="material"
                    color="white"
                    side={THREE.DoubleSide}
                />
            </Plane>

            <PerspectiveCamera
                makeDefault
                ref={cameraRef}
                fov={fov}
                near={0.1}
                far={1000}
                position={[0, 0, 10]}
            />

            <OrbitControls enableZoom={true} enableRotate={true} />
        </>
    );
};

export default Main;
