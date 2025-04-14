import { ExperienceItem } from '@src/libs/config';
import { useState } from 'react';

export interface ExperienceItemProps {
    experience: ExperienceItem;
}

export const ExperienceLink = ({ experience }: ExperienceItemProps) => {
    const [expand, setExpand] = useState(false);

    return (
        <div
            className={`hover:shadow-sm w-full px-4 py-4 h-[180px] hover:h-[320px] relative text-title z-10 whitespace-nowrap flex flex-col bg-secondary gap-4 transition-all duration-150 ease-in-out rounded-lg`}
            onMouseOver={() => setExpand(true)}
            onMouseOut={() => setExpand(false)}
        >
            <div className="flex w-full justify-start flex-col">
                <div className="flex flex-col md:flex-row w-full justify-between gap-1">
                    <div className="w-fit px-2 bg-primary text-secondary">
                        {experience.title}
                    </div>
                    <div className="text-label px-1">{experience.date}</div>
                </div>
                <div className="italic text-label w-fit px-1">
                    {experience.company}
                </div>
            </div>
            {experience.tags && (
                <div className="flex gap-1 overflow-x-hidden h-[28px]">
                    {experience.tags.map((tag, i) => {
                        return (
                            <div
                                key={i}
                                className="text-background text-sm rounded-lg bg-accent px-2 py-1"
                            >
                                {tag}
                            </div>
                        );
                    })}
                </div>
            )}
            {expand && (
                <div className="flex w-full justify-start bg-background px-4 py-2 h-[160px] overflow-y-scroll transition-all">
                    <div className="text-body whitespace-pre-line">
                        {experience.description}
                    </div>
                </div>
            )}
        </div>
    );
};
