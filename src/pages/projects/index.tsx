import { CoreConfig } from '@config/app';
import { Line } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { TransitionWord } from '@src/components';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { useLocation } from 'wouter';

export interface ProjectProps extends CoreConfig {}

const projects = [
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
];

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
                position={[0, -index * (textSize + gap), 0]}
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

    const gap = 0.2;
    const textSize = 0.24;

    const camera = useThree((state) => state.camera);

    return (
        <>
            <group position={[0.2, 0, 0]}>
                {projects.map((project, i) => (
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
        </>
    );
};

export default ProjectList;
