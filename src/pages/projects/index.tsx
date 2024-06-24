import { CoreConfig } from '@config/app';
import { ProjectNavigation } from '@src/components';
import { useState } from 'react';

export interface ProjectProps extends CoreConfig {}

const ProjectList = ({ projects = [] }: ProjectProps) => {
    const [selected, setSelected] = useState('/projects/cns.png');

    return (
        <div className="w-full h-full flex flex-col justify-end gap-4 pb-[88px]">
            <div className="flex flex-col">
                <div className="relative z-10 text-headline uppercase ml-1">
                    <div className="text-accent">Projects</div>
                    <div className="as-shadow left-[0.4%] top-[4.2%]">
                        Projects
                    </div>
                </div>
                <div className="flex flex-col bg-secondary p-4 gap-y-1">
                    <div className="text-shadow-sm shadow-black-textShadow">
                        I have worked on a great variety of projects in my
                        career, ranging from web applications for
                        industry-leading company to Mixed Reality game for the
                        Hololens:
                    </div>
                </div>
            </div>

            <ProjectNavigation projects={projects} />
        </div>
    );
};

export default ProjectList;
