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
import { useRouter } from 'next/router';

export interface ProjectProps extends CoreConfig {}

const Project = (props: ProjectProps) => {
    const { project } = useRouter().query;

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
                    <div className="flex flex-col gap-2">{project}</div>
                </div>
            </Html>
        </>
    );
};

export default Project;
