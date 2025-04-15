import { ProjectItem } from '@src/libs/config';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export interface ProjectNavigationProps {
    projects: ProjectItem[];
}

export const ProjectNavigation = ({ projects }: ProjectNavigationProps) => {
    const [selected, setSelected] = useState('/thumbnail/cns.png');

    return (
        <div className="w-full h-full flex items-start gap-4 flex-col md:flex-row">
            <div className="flex gap-2 flex-col justify-center items-start md:basis-1/3 px-4 py-1 z-[50]">
                {projects.map((project, i) => (
                    <Link
                        key={i}
                        className={`w-fit px-4 py-2 h-fit relative text-title uppercase focus:outline-none
                whitespace-nowrap ${project.thumbnail === selected
                                ? 'text-background bg-primary'
                                : 'text-primary'
                            }`}
                        href={'/projects/' + project.to}
                        onMouseOver={() => setSelected(project.thumbnail || '')}
                    >
                        {project.navTitle}

                        {selected == project.thumbnail || (
                            <div className="as-shadow px-4 py-2">
                                {project.navTitle}
                            </div>
                        )}
                    </Link>
                ))}
            </div>
            <div className="relative flex aspect-square flex-col md:basis-2/3 w-fit justify-center object-cover">
                {selected && (
                    <>
                        <div className="relative flex h-full justify-center z-10 object-cover sepia border border-4  border-secondary rounded-[1.25rem] w-fit">
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
                                    objectPosition: '0 0',
                                }}
                            />
                        </div>
                        {/* <div className="absolute top-0 left-0 flex h-full border border-4 border-primary rounded-[1rem] w-fit animate-[spin_60s_linear_infinite]">
                            <Image
                                src={selected}
                                alt={'previewImage-border'}
                                width={20}
                                height={20}
                                style={{
                                    width: 'auto',
                                    height: '100%',
                                    borderRadius: '1rem',
                                    opacity: 0
                                }}
                            />
                        </div> */}
                    </>
                )}
            </div>
        </div >
    );
};
