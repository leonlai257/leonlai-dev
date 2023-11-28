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
    project: {
        title: string;
        time: string;
    };
};

const ProjectItem = ({ project }: ItemProps) => {
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
                            <ProjectItem key={i} project={project} />
                        ))}
                    </div>
                </div>
            </Html>
        </>
    );
};

export default Projects;
