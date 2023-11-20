import { CoreConfig } from '@config/app';
import {
    Box,
    Html,
    Line,
    PerspectiveCamera,
    Scroll,
    ScrollControls,
    Text,
    useCursor,
} from '@react-three/drei';
import { Suspense, useState } from 'react';
import * as THREE from 'three';

export interface ProjectProps extends CoreConfig {}

const Projects = (props: ProjectProps) => {
    const { color } = props;
    const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor } =
        color;
    const [hovered, setHoverStatus] = useState(false);
    useCursor(hovered);

    return (
        <>
            <Suspense fallback={<Html></Html>}>
                <PerspectiveCamera near={0.1} far={1000} />

                <ScrollControls>
                    <Scroll>{/* <Box args={[1, 1, 1]}></Box> */}</Scroll>
                </ScrollControls>
            </Suspense>
        </>
    );
};

export default Projects;
