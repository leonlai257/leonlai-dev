import { CoreConfig } from '@config/app';
import { Box, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';

export interface ProjectProps extends CoreConfig {}

const ProjectCNS = (props: ProjectProps) => {
    return (
        <>
            <Html fullscreen center zIndexRange={[1, 100]}>
                <div className="m-auto flex flex-col pointer-events-auto w-[80%] max-w-[1440px]">
                    <div>cns</div>
                    <div>cns</div>
                    <div>cns</div>
                    <div>cns</div>
                    <div>cns</div>
                    <div>cns</div>
                </div>
            </Html>
        </>
    );
};

export default ProjectCNS;
