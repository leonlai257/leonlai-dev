import { ProjectItem } from '@src/config/app';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export interface ProjectNavigationProps {
    projects: ProjectItem[];
}

export const ProjectNavigation = ({ projects }: ProjectNavigationProps) => {
    const [selected, setSelected] = useState('/thumbnail/cns.png');

    return (
        <div className="w-full h-full flex items-start gap-4 flex-col md:flex-row">
            <div className="flex gap-2 flex-col justify-center items-start md:basis-1/3 px-4 py-1">
                {projects.map((project, i) => (
                    <Link
                        key={i}
                        className={`w-fit px-4 py-2 h-fit relative text-title uppercase z-10 focus:outline-none
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
            <div className="flex overflow-hidden aspect-square flex-col md:basis-2/3 w-full justify-center relative z-10 object-cover">
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
                                objectPosition: '0 0',
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
