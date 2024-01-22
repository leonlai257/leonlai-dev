import { Html } from '@react-three/drei';
import Image from 'next/image';
import { ProjectProps } from '.';

const ProjectFoodiverse = ({ projects }: ProjectProps) => {
    const info = projects.find((p) => p.to === 'foodiverse');
    const {
        title = '',
        date = '',
        links = [],
        description = '',
        role = '',
        image = '',
        gif,
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
                <div className="m-auto flex flex-col pointer-events-auto pt-20 px-12 gap-y-8 w-full">
                    <div className="flex flex-col justify-start">
                        <div className="text-display uppercase">{title}</div>
                        <div className="flex w-full justify-between">
                            <div className="text-title uppercase italic text-secondary">
                                {role}
                            </div>
                            <div className="text-label uppercase italic text-secondary">
                                {date}
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
                                    className="relative hover:opacity-hover text-label uppercase bg-white text-primary rounded-lg px-2 py-1"
                                >
                                    {link.name}
                                    <div className="absolute bloom top-0 bg-white rounded-lg px-2 py-1">
                                        {link.name}
                                    </div>
                                </a>
                            );
                        })}
                        <div className="flex gap-x-2 items-center w-fit">
                            {tags.map((tag) => {
                                return (
                                    <div
                                        key={tag}
                                        className="relative text-label uppercase bg-accent text-white rounded-lg px-2 py-1 h-fit"
                                    >
                                        {tag}
                                        <div className="absolute bloom top-0 bg-accent rounded-lg px-2 py-1 h-fit">
                                            {tag}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex justify-center gap-x-8 h-[70vh]">
                        {image && (
                            <div className="flex flex-col justify-center">
                                <Image
                                    alt="Image"
                                    src={image}
                                    width={2000}
                                    height={2000}
                                    style={{
                                        height: '100%',
                                        width: 'auto',
                                    }}
                                />
                            </div>
                        )}
                        {gif && (
                            <div className="flex flex-col justify-center">
                                <Image
                                    alt="Gif"
                                    src={gif}
                                    width={2000}
                                    height={2000}
                                    style={{
                                        height: '100%',
                                        width: 'auto',
                                    }}
                                />
                            </div>
                        )}
                    </div>

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

export default ProjectFoodiverse;
