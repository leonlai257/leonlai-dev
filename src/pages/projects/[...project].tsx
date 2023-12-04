import { CoreConfig } from '@config/app';
import { Html } from '@react-three/drei';
import { useRouter } from 'next/router';

export interface ProjectProps extends CoreConfig {}

const Project = (props: ProjectProps) => {
    const router = useRouter();
    const { project } = router.query;
    console.log(project);
    return (
        <>
            <Html
                fullscreen
                zIndexRange={[100, 0]}
                style={{
                    pointerEvents: 'none',
                }}
            >
                <div className="w-4/5 m-auto pointer-events-auto">
                    <div>{project}</div>
                </div>
            </Html>
        </>
    );
};

export default Project;
