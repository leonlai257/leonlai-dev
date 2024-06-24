import { ExperienceItem } from '@config/app';
import { useState } from 'react';

export interface ExperienceItemProps {
    experience: ExperienceItem;
}

export const ExperienceLink = ({ experience }: ExperienceItemProps) => {
    const [expand, setExpand] = useState(false);

    return (
        <div
            className={`hover:shadow-sm w-full px-4 py-4 h-fit relative text-title z-10 whitespace-nowrap flex flex-col bg-secondary gap-4`}
            onMouseOver={() => setExpand(true)}
            onMouseOut={() => setExpand(false)}
        >
            <div className="flex w-full justify-start flex-col">
                <div className="flex w-full justify-between">
                    <div className="w-fit px-2 bg-primary text-secondary">
                        {experience.title}
                    </div>
                    <div className="text-label">{experience.date}</div>
                </div>
                <div className="italic text-label w-fit px-1">
                    {experience.company}
                </div>
            </div>
            {experience.tags && (
                <div className="flex gap-1">
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
                <div className="flex w-full justify-start bg-background px-4 py-2">
                    <div className="text-body whitespace-pre-line">
                        {experience.description}
                    </div>
                </div>
            )}
        </div>
    );
};
