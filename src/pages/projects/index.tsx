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
    Center,
    Line,
} from '@react-three/drei';
import { Suspense, useState, useRef } from 'react';
import { proxy, ref, useSnapshot } from 'valtio';
import { easing } from 'maath';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useRouter } from 'next/router';
import { useLocation, useRoute } from 'wouter';
import { TransitionWord } from '@src/components';

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
            title: 'MeshJS - Contributor',
            to: 'mesh',
        },
        {
            title: 'Cardano Naming Service',
            to: 'cns',
        },
        {
            title: 'Bubstal.io',
            to: 'bubstal',
        },
        {
            title: 'Foodiverse',
            to: 'foodiverse',
        },
        {
            title: 'thisisgusto.com',
            to: 'gusto',
        },
        {
            title: 'CoReality',
            to: 'coreality',
        },
        {
            title: 'Jarvix Pay',
            to: 'jarvix-pay',
        },
        {
            title: 'Mixed Reality laboratory',
            to: 'mr-lab',
        },
    ],
});

type ProjectItemProps = {
    index: number;
    project: {
        title: string;
        to: string;
    };
    gap: number;
    textSize: number;
    color: THREE.Color;
} & any;

const ProjectItem = ({
    index,
    project,
    gap,
    color,
    textSize,
    ...props
}: ProjectItemProps) => {
    const { title = '', to } = project;
    const [_, push] = useLocation();

    const ref = useRef<THREE.Mesh>(null!);

    const [hovered, setHover] = useState(false);

    useFrame(() => {
        if (hovered) {
        }
    });

    return (
        <>
            <group
                {...props}
                position={[0, index * (textSize + gap), 0]}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <TransitionWord
                    ref={ref}
                    anchorX="left"
                    primaryColor={'white'}
                    transitionColor={color}
                    scale={textSize}
                    onClick={() => push('/projects/' + to)}
                >
                    {title}
                </TransitionWord>
                <Line
                    color={'white'}
                    lineWidth={2}
                    points={[
                        [-0.04, (textSize + gap) * 0.48, 0],
                        [10, (textSize + gap) * 0.48, 0],
                    ]}
                />
            </group>
        </>
    );
};

const ProjectList = (props: ProjectProps) => {
    const { color } = props;
    const {
        textColor,
        backgroundColor,
        primaryColor,
        secondaryColor,
        accentColor,
    } = color;
    const [hovered, setHoverStatus] = useState(false);
    const [target, setTarget] = useState([0, 0, 0]);
    useCursor(hovered);

    const { projects } = useSnapshot(state);
    const gap = 0.2;
    const textSize = 0.24;

    const camera = useThree((state) => state.camera);

    return (
        <>
            {/* <Html
                fullscreen
                zIndexRange={[100, 0]}
                style={{
                    pointerEvents: 'none',
                }}
            >
                <div className="w-4/5 mt-12 m-auto pointer-events-auto">
                    <div className="flex flex-col gap-2"> */}
            <group position={[0.2, -3, 0]}>
                {projects.toReversed().map((project, i) => (
                    <ProjectItem
                        key={i}
                        index={i}
                        project={project}
                        gap={gap}
                        textSize={textSize}
                        color={primaryColor}
                    />
                ))}
            </group>

            {/* </div>
                </div>
            </Html> */}
        </>
    );
};

export default ProjectList;
