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
    Plane,
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
    projects: [
        {
            title: 'Cardano Naming Service',
            time: 'Feb 2023 - Present',
        },
        {
            title: 'Gusto Collective website',
            time: 'Feb 2023 - Present',
        },
        {
            title: 'Bubstal websites',
            time: 'Feb 2023 - Present',
        },
        {
            title: 'Jarvix Pay',
            time: 'Feb 2023 - Present',
        },
    ],
});

type ItemProps = {
    index: number;
    project: {
        title: string;
        time: string;
    };
    gap: number;
    position: [number, number, number];
    scale: [number, number, number];
    largeScale: [number, number, number];
    url: string;
    color: string;
    setTarget: (target: [number, number, number]) => void;
} & any;

// const Item = ({
//     index,
//     project,
//     gap,
//     position,
//     scale,
//     largeScale,
//     setTarget,
//     color = '#aaa',
//     ...props
// }: ItemProps) => {
//     const ref = useRef<THREE.Mesh>(null!);
//     const scroll = useScroll();
//     const { clicked, projects } = useSnapshot(state);
//     const [hovered, hover] = useState(false);
//     const click = () => {
//         state.clicked = index === clicked ? null : index;
//         setTarget(index === clicked ? [0, 0, 0] : [0, position[1], 0]);
//     };
//     const over = () => hover(true);
//     const out = () => hover(false);
//     useFrame((state, delta) => {
//         const y = scroll.curve(
//             index / projects.length - 1.5 / projects.length,
//             4 / projects.length
//         );

//         easing.damp3(
//             ref.current.scale,
//             [
//                 clicked === index ? largeScale[0] : scale[0],
//                 clicked === index ? largeScale[1] : scale[1],
//                 1,
//             ],
//             0.15,
//             delta
//         );
//         if (clicked !== null && index < clicked)
//             easing.damp(
//                 ref.current.position,
//                 'y',
//                 position[1] - (largeScale[1] / 2 + gap),
//                 0.15,
//                 delta
//             );
//         if (clicked !== null && index > clicked)
//             easing.damp(
//                 ref.current.position,
//                 'y',
//                 position[1] + (largeScale[1] / 2 + gap),
//                 0.15,
//                 delta
//             );
//         if (clicked === null || clicked === index)
//             easing.damp(ref.current.position, 'y', position[1], 0.15, delta);

//         easing.dampC(
//             ref.current.material.color,
//             hovered || clicked === index ? 'white' : color,
//             hovered ? 0.3 : 0.15,
//             delta
//         );
//     });
//     return (
//         <>
//             <Plane
//                 ref={ref}
//                 {...props}
//                 position={position}
//                 scale={scale}
//                 onClick={click}
//                 onPointerOver={over}
//                 onPointerOut={out}
//             >
//                 <meshBasicMaterial attach="material" color="white" />
//                 {clicked != index && (
//                     <Text
//                         position={[-scale[0] / 10, -scale[1] / 10, 0]}
//                         anchorX="left"
//                         scale={[
//                             clicked === index ? 1 : scale[1],
//                             clicked === index ? 1 : scale[0],
//                             1,
//                         ]}
//                         font={'/fonts/NotoSans-Bold.ttf'}
//                         color={'black'}
//                         fontSize={0.12}
//                     >
//                         {project.title}
//                     </Text>
//                 )}
//                 {clicked === index && (
//                     <Html>
//                         <h1>{project.title}</h1>
//                     </Html>
//                     // <group>
//                     //     <Text>clicked</Text>
//                     // </group>
//                 )}
//             </Plane>
//         </>
//     );
// };

const ProjectItem = ({
    index,
    project,
    gap,
    position,
    scale,
    largeScale,
    setTarget,
    color = '#aaa',
}: ItemProps) => {
    return (
        <>
            <div className="flex cursor-pointer item-center hover:animate-projectFade text-black bg-secondary  border-secondary border-[1px] px-4 py-2">
                {project.title}
            </div>
        </>
    );
};

const Projects = (props: ProjectProps) => {
    const { color } = props;
    const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor } =
        color;
    const [hovered, setHoverStatus] = useState(false);
    const [target, setTarget] = useState([0, 0, 0]);
    useCursor(hovered);

    const { projects } = useSnapshot(state);
    const { height } = useThree((state) => state.viewport);
    const scale = [4.6, 0.7, 1];
    const largeScale = [scale[0] * 1.16, (height * 9) / 10, 1];
    const gap = 0.15;
    const xH = scale[1] + gap;
    const camera = useThree((state) => state.camera);

    useFrame(() => {
        if (target[1] !== 0 && camera.position.y !== target[1]) {
            console.log(target);
            camera.position.y = THREE.MathUtils.lerp(
                camera.position.y,
                target[1],
                0.05
            );
            if (camera.position.y > target[1] - 0.1) {
                camera.position.y = target[1];
                setTarget([0, target[1], 0]);
            }
        }
    });

    return (
        <>
            <Html
                fullscreen
                zIndexRange={[100, 0]}
                style={{
                    pointerEvents: 'none',
                }}
            >
                <div className="w-4/5 mt-12 m-auto pointer-events-auto">
                    <div className="flex flex-col gap-2">
                        {projects.map((project, i) => (
                            <ProjectItem
                                key={i}
                                index={i}
                                gap={gap}
                                position={[0, -2.4 * scale[1] + i * xH, 0]}
                                scale={scale}
                                largeScale={largeScale}
                                setTarget={setTarget}
                                color={quaternaryColor}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </Html>
            {/* <Suspense fallback={<Html></Html>}>
                <PerspectiveCamera near={0.1} far={1000} />
                <ScrollControls
                    damping={0.1}
                    pages={(height - xH + projects.length * xH) / height}
                >
                    <Scroll>
                        {projects.map((project, i) => (
                            <Item
                                key={i}
                                index={i}
                                gap={gap}
                                position={[0, -2.4 * scale[1] + i * xH, 0]}
                                scale={scale}
                                largeScale={largeScale}
                                setTarget={setTarget}
                                color={quaternaryColor}
                                project={project}
                            />
                        ))}
                    </Scroll>
                </ScrollControls>
            </Suspense> */}
        </>
    );
};

export default Projects;
