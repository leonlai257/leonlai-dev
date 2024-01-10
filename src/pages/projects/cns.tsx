import { Html } from '@react-three/drei';
import { ProjectProps } from '.';
import Image from 'next/image';

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
                <div className="m-auto flex flex-col pointer-events-auto py-20 px-12 gap-y-8 overflow-scroll">
                    <div className="flex flex-col justify-start">
                        <div className="text-display uppercase text-white">
                            Cardano Naming Service
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="text-title uppercase italic text-secondary">
                                Full Stack Developer
                            </div>
                            <div className="text-label uppercase italic text-secondary">
                                May 2023 - Nov 2023
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        {links.map((link) => {
                            return (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    className="hover:opacity-hover text-label uppercase bg-white text-primary rounded-lg px-2 py-1"
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                    {image && (
                        <div className="flex justify-center">
                            <Image
                                alt="Image"
                                src={image}
                                width={2000}
                                height={2000}
                                style={{
                                    width: '80%',
                                    height: 'auto',
                                }}
                            />
                        </div>
                    )}
                    {description && (
                        <div className="flex flex-col text-body gap-y-2 w-fit">
                            <div className="flex flex-col text-body gap-x-1 w-fit">
                                <div className="text-title uppercase text-secondary">
                                    Summary
                                </div>
                                <div className="w-full h-[2px] bg-text-grayscale" />
                            </div>
                            <div className="text-description">
                                {description}
                            </div>
                        </div>
                    )}
                </div>
            </Html>
        </>
    );
};

export default ProjectCNS;
