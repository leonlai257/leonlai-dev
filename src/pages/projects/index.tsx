import { CoreConfig } from '@config/app';
import { ProjectIntroduction, ProjectNavigation } from '@src/components';

export interface ProjectProps extends CoreConfig {}

const ProjectList = ({ projects = [] }: ProjectProps) => {
    return (
        <div className="w-full flex flex-col justify-start gap-4 min-h-[90vh]">
            <ProjectIntroduction />
            <ProjectNavigation projects={projects} />
        </div>
    );
};

export default ProjectList;
