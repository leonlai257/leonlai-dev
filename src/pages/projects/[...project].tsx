import { Html } from '@react-three/drei';
import { useRouter } from 'next/router';
import { ProjectProps } from '.';
import { useFrame } from '@react-three/fiber';
import { useParams } from 'wouter';

const Project = (props: ProjectProps) => {
    const { project } = useParams();

    return (
        <>
            <Html
                fullscreen
                zIndexRange={[1000, 100]}
                style={{
                    pointerEvents: 'none',
                    overflow: 'scroll',
                }}
            >
                <div className="m-auto flex flex-col pointer-events-auto pt-20 px-12 gap-y-8">
                    <div className="flex flex-col justify-start">
                        <div className="text-display uppercase">{project}</div>
                        <div className="flex w-full justify-between">
                            <div className="text-title uppercase italic">
                                Full Stack Developer
                            </div>
                            {/* <div className="text-label uppercase italic">
                                May 2023 - Nov 2023
                            </div> */}
                        </div>
                    </div>
                </div>
            </Html>
        </>
    );
};

export default Project;
