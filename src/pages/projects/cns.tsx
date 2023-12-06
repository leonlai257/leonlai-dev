import { Html } from '@react-three/drei';
import { ProjectProps } from '.';

const ProjectCNS = ({ projects }: ProjectProps) => {
    const info = projects.find((p) => p.to === 'cns');
    const {
        title = '',
        date = '',
        links = [],
        description = '',
        role = '',
        image = '',
        tags = [],
    } = info || {};

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
                        <div className="text-display uppercase">
                            Cardano Naming Service
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="text-title uppercase italic">
                                Full Stack Developer
                            </div>
                            <div className="text-label uppercase italic">
                                May 2023 - Nov 2023
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        {links.map((link) => {
                            return (
                                <a
                                    href={link.url}
                                    target="_blank"
                                    className="hover:opacity-hover text-label uppercase bg-white text-primary rounded-lg px-2 py-1"
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                    <div className="flex flex-col text-body gap-x-1">
                        <div className="text-title uppercase italic">
                            Summary
                        </div>
                    </div>
                </div>
            </Html>
        </>
    );
};

export default ProjectCNS;
