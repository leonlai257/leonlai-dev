import { CoreConfig } from '@config/app';
import { Html } from '@react-three/drei';

export interface ProjectProps extends CoreConfig {}

const ProjectCNS = (props: ProjectProps) => {
    return (
        <>
            <Html
                // fullscreen
                center
                style={{
                    pointerEvents: 'none',
                }}
            >
                <div className="m-auto pointer-events-auto inset-0">
                    <div>cns</div>
                </div>
            </Html>
        </>
    );
};

export default ProjectCNS;
