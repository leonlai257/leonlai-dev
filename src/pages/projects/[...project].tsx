import { Html } from '@react-three/drei';
import { useRouter } from 'next/router';
import { ProjectProps } from '.';
import { useFrame } from '@react-three/fiber';
import { useParams } from 'wouter';
import Image from 'next/image';

const Project = ({ projects }: ProjectProps) => {
    const { project } = useParams();

    const info = projects.find((p) => p.to === project);
    const {
        title = '',
        date = '',
        links = [],
        description = '',
        role = '',
        image = '',
        gif = '',
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
                <div className="m-auto flex flex-col pointer-events-auto py-20 px-12 gap-y-8 w-full">
                    <div className="flex flex-col justify-start gap-2">
                        <div className="text-display uppercase">{title}</div>
                        <div className="flex w-full justify-between">
                            <div className="text-title uppercase italic text-secondary">
                                {role}
                            </div>
                            <div className="text-label uppercase italic text-secondary w-fit whitespace-nowrap">
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
                                    className="relative btn text-label uppercase bg-white text-primary rounded-lg px-2 py-1 h-fit whitespace-nowrap"
                                >
                                    {link.name}
                                    <div className="absolute bloom top-0 bg-white rounded-lg px-2 py-1 h-fit">
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
                                        className="relative text-label uppercase bg-accent text-white rounded-lg px-2 py-1 h-fit whitespace-nowrap"
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

                    <div className="flex justify-center">
                        {image && (
                            <Image
                                alt="Image"
                                src={image}
                                width={2000}
                                height={2000}
                                style={{
                                    height: '100%',
                                    width: 'auto',
                                    maxHeight: '100vh',
                                }}
                            />
                        )}
                    </div>

                    <div className="flex justify-center">
                        {gif && (
                            <Image
                                alt="Image"
                                src={gif}
                                width={2000}
                                height={2000}
                                style={{
                                    height: 'auto',
                                    width: '100%',
                                    maxWidth: '60vw',
                                }}
                            />
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

export default Project;
