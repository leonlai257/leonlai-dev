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
                    height: '100vh',
                    width: '100vw',
                }}
            >
                <div className="scroll- m-auto flex flex-col pointer-events-auto w-[80%] max-w-[1440px]">
                    <div>{project}</div>
                </div>
            </Html>
        </>
    );
};

export default Project;
