import { CoreConfig } from '@config/app';
import {
    Html,
    PerspectiveCamera,
    Scroll,
    ScrollControls,
    useCursor,
} from '@react-three/drei';
import { Suspense, useState } from 'react';

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
