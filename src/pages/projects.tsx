import { CoreConfig } from '@config/app';
import {
    Html,
    PerspectiveCamera,
    Scroll,
    ScrollControls,
    useCursor,
    useScroll,
    Image,
    Box,
    Text,
} from '@react-three/drei';
import { Suspense, useState, useRef } from 'react';
import { proxy, useSnapshot } from 'valtio';
import { easing } from 'maath';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

export interface ProjectProps extends CoreConfig {}

const material = new THREE.LineBasicMaterial({ color: 'white' });
const geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -0.5, 0),
    new THREE.Vector3(0, 0.5, 0),
]);
const state = proxy({
    clicked: null,
    urls: [1, 2, 3, 4].map((u) => `/${u}.jpg`),
});

function Item({ index, position, scale, c = new THREE.Color(), ...props }) {
    const ref = useRef();
    const scroll = useScroll();
    const { clicked, urls } = useSnapshot(state);
    const [hovered, hover] = useState(false);
    const click = () => (state.clicked = index === clicked ? null : index);
    const over = () => hover(true);
    const out = () => hover(false);
    useFrame((state, delta) => {
        const y = scroll.curve(
            index / urls.length - 1.5 / urls.length,
            4 / urls.length
        );
        // easing.damp3(
        //     ref.current.scale,
        //     [
        //         clicked === index ? 4.7 : scale[0],
        //         clicked === index ? 5 : 4 + y,
        //         1,
        //     ],
        //     0.15,
        //     delta
        // );
        // ref.current.material.scale[0] = ref.current.scale.x;
        // ref.current.material.scale[1] = ref.current.scale.y;
        // if (clicked !== null && index < clicked)
        //     easing.damp(
        //         ref.current.position,
        //         'x',
        //         position[0] - 2,
        //         0.15,
        //         delta
        //     );
        // if (clicked !== null && index > clicked)
        //     easing.damp(
        //         ref.current.position,
        //         'x',
        //         position[0] + 2,
        //         0.15,
        //         delta
        //     );
        // if (clicked === null || clicked === index)
        //     easing.damp(ref.current.position, 'x', position[0], 0.15, delta);
        // easing.damp(
        //     ref.current.material,
        //     'grayscale',
        //     hovered || clicked === index ? 0 : Math.max(0, 1 - y),
        //     0.15,
        //     delta
        // );
        // easing.dampC(
        //     ref.current.material.color,
        //     hovered || clicked === index ? 'white' : '#aaa',
        //     hovered ? 0.3 : 0.15,
        //     delta
        // );
    });
    return (
        <group
            position={[2, 0, 0]}
            scale={scale}
            onClick={click}
            onPointerOver={over}
            onPointerOut={out}
        >
            {/* <Image
                ref={ref}
                {...props}
                position={position}
                scale={scale}
                onClick={click}
                onPointerOver={over}
                onPointerOut={out}
            > */}
            <Html center>
                Cat <div>123</div>
            </Html>

            {/* </Image> */}
        </group>
    );
}

const Projects = (props: ProjectProps) => {
    const { color } = props;
    const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor } =
        color;
    const [hovered, setHoverStatus] = useState(false);
    useCursor(hovered);

    const { urls } = useSnapshot(state);
    const { height } = useThree((state) => state.viewport);
    const h = 0.7;
    const gap = 0.15;
    const xH = h + gap;

    return (
        <>
            <Suspense fallback={<Html></Html>}>
                <PerspectiveCamera near={0.1} far={1000} />
                <ScrollControls
                    damping={0.1}
                    pages={(height - xH + urls.length * xH) / height}
                >
                    <Html>123</Html>
                    <Text>123</Text>
                    <Scroll>
                        {urls.map((url, i) => (
                            <Item
                                key={i}
                                index={i}
                                position={[i * xH, 0, 0]}
                                scale={[h, 4, 1]}
                                url={url}
                            />
                        ))}
                    </Scroll>
                </ScrollControls>
            </Suspense>
        </>
    );
};

export default Projects;
