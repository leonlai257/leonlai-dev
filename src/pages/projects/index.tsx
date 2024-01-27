import { CoreConfig } from '@config/app';
import { Html, Line } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { TransitionWord } from '@src/components';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { useLocation } from 'wouter';

export interface ProjectProps extends CoreConfig {}

type ProjectItemProps = {
    index: number;
    display: string;
    to: string;
    gap: number;
    textSize: number;
    color: THREE.Color;
} & any;

const ProjectItem = ({
    index,
    display,
    to,
    gap,
    color,
    textSize,
    ...props
}: ProjectItemProps) => {
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
                    {display}
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

const ProjectList = ({ projects = [], color }: ProjectProps) => {
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
    const [selected, setSelected] = useState('');

    return (
        <>
            <Html zIndexRange={[0, 100]} fullscreen>
                <div className="w-full h-full flex flex-col justify-end pb-[88px]">
                    <div className="flex overflow-hidden w-full h-full p-12 justify-center relative z-10">
                        {selected && (
                            <div className="flex w-full h-full justify-center relative z-10">
                                <Image
                                    src={selected}
                                    alt={'previewImage'}
                                    width={2000}
                                    height={2000}
                                    style={{
                                        width: 'auto',
                                        height: '100%',
                                    }}
                                />
                                <Image
                                    src={selected}
                                    alt={'bloomImage'}
                                    width={200}
                                    height={200}
                                    style={{
                                        filter: 'blur(20px)',
                                        zIndex: -1,
                                        position: 'absolute',
                                        width: 'auto',
                                        height: '100%',
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap px-8 gap-4 justify-center items-start">
                        {projects.map((project, i) => (
                            <Link
                                key={i}
                                className="w-fit btn rounded-lg bg-secondary p-2 px-4 h-fit relative"
                                href={'/projects/' + project.to}
                                onMouseOver={() =>
                                    setSelected(project.image || '')
                                }
                            >
                                <div className="absolute w-fit btn rounded-lg bg-accent p-2 px-4 h-fit bloom">
                                    <div className="text-headline uppercase text-white">
                                        {project.navTitle}
                                    </div>
                                </div>
                                <div className="text-headline uppercase text-black">
                                    {project.navTitle}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Html>

            {/* <group position={[0.2, 0.4, 0]}>
                {projects.map((project, i) => (
                    <ProjectItem
                        onPointerOver={() => setSelected(project.image || '')}
                        onPointerOut={() => setSelected('')}
                        key={i}
                        index={i}
                        display={project.navTitle}
                        to={project.to}
                        gap={gap}
                        textSize={textSize}
                        color={primaryColor}
                    />
                ))}
            </group> */}
        </>
    );
};

export default ProjectList;
