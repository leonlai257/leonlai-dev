import { CoreConfig } from '@config/app';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export interface ProjectProps extends CoreConfig {}

const ProjectList = ({ projects = [] }: ProjectProps) => {
    const gap = 0.2;
    const textSize = 0.24;

    const [selected, setSelected] = useState('/projects/sidan.png');

    return (
        <>
            <div className="w-full h-full flex flex-col justify-end pb-[88px]">
                <div className="flex overflow-hidden w-full h-full p-12 justify-center relative z-10 object-cover">
                    {selected && (
                        <div className="flex w-full h-full justify-center relative z-10 object-cover">
                            <Image
                                src={selected}
                                alt={'previewImage'}
                                width={2000}
                                height={2000}
                                style={{
                                    width: 'auto',
                                    height: '100%',
                                    borderRadius: '1rem',
                                    objectFit: 'cover',
                                }}
                            />
                            <Image
                                src={selected}
                                alt={'bloomImage'}
                                width={200}
                                height={200}
                                style={{
                                    filter: 'blur(20px)',
                                    zIndex: -1,
                                    position: 'absolute',
                                    width: 'auto',
                                    height: '100%',
                                }}
                            />
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap px-8 gap-4 justify-center items-start">
                    {projects.map((project, i) => (
                        <Link
                            key={i}
                            className="w-fit btn rounded-lg bg-secondary p-2 px-4 h-fit relative"
                            href={'/projects/' + project.to}
                            onMouseOver={() => setSelected(project.image || '')}
                        >
                            <div className="absolute w-fit btn rounded-lg bg-accent p-2 px-4 h-fit bloom">
                                <div className="text-headline uppercase text-white">
                                    {project.navTitle}
                                </div>
                            </div>
                            <div className="text-headline uppercase text-black">
                                {project.navTitle}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectList;
