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
                                    className="hover:opacity-hover text-label uppercase bg-white text-primary rounded-lg px-2 py-1"
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                    <div>
                        {image && (
                            <Image
                                alt="Image"
                                src={'/projects/cns.png'}
                                width={2000}
                                height={2000}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        )}
                    </div>
                </div>
            </Html>
        </>
    );
};

export default Project;
