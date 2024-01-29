import { CoreConfig } from '@config/app';
import { Html, PerspectiveCamera, useCursor } from '@react-three/drei';
import { ContactTransition } from '@src/components';
import Image from 'next/image';
import { Suspense, useState } from 'react';
import Link from 'next/link';

export interface AboutProps extends CoreConfig {}

const About = (props: AboutProps) => {
    const { color, contact } = props;

    const { primaryColor, secondaryColor } = color;

    return (
        <>
            <Html
                fullscreen
                style={{
                    pointerEvents: 'none',
                }}
            >
                <div className="p-20 w-full h-full flex flex-col lg:flex-row gap-16 items-center justify-center">
                    <div className="w-[80%] max-w-[680px] relative z-10">
                        <Image
                            src="/photo.jpeg"
                            alt="photo"
                            width={1920}
                            height={1080}
                            style={{
                                height: 'auto',
                                width: '100%',
                            }}
                        />
                        <div className="absolute top-[4%] z-[-1] left-[4%] h-auto w-full bg-accent aspect-[8/12]" />
                    </div>
                    <div className="flex flex-col justify-center gap-y-4 text-white pointer-events-auto ">
                        <div className="flex flex-col justify-center ">
                            <div className="text-title text-secondary uppercase ml-1">
                                About Me
                            </div>
                            <div className="text-body bg-accent p-4 text-shadow-sm shadow-black-textShadow">
                                I'm a Software Engineer based in Toronto,
                                Canada. I had 4+ years of industry experience
                                with expertise in Full Stack Development. I am
                                highly motivated and versatile with strong
                                problem-solving and communication skills. I am
                                also great at delivering robust solutions and
                                visually stunning website.
                            </div>
                        </div>
                        <div className="flex flex-col justify-center ">
                            <div className="text-title text-secondary uppercase ml-1">
                                Contact
                            </div>
                            <div className="text-body flex flex-col bg-accent p-4 gap-y-1 ">
                                <div className="text-shadow-sm shadow-black-textShadow">
                                    Feel free to reach out to me through any of
                                    the following:
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    {contact.map((c) => {
                                        return (
                                            <a
                                                key={c.name}
                                                href={c.url}
                                                target="_blank"
                                                className="btn relative z-10 text-label uppercase bg-white text-accent px-2 py-1 w-fit h-fit whitespace-nowrap"
                                            >
                                                {c.name}: {c.alias}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-title text-secondary uppercase ml-1">
                                Projects
                            </div>
                            <div className="text-body flex flex-col bg-accent p-4 gap-y-1">
                                <div className="text-shadow-sm shadow-black-textShadow">
                                    I have worked on a great variety of projects
                                    in my career, ranging from web applications
                                    for industry-leading company to Mixed
                                    Reality game for the Hololens 2:
                                </div>
                                <div className="flex flex-col gap-y-2 w-full items-end">
                                    <Link
                                        href={'/projects'}
                                        className="btn relative z-10 text-label uppercase bg-white text-accent px-2 py-1 w-fit h-fit whitespace-nowrap"
                                    >
                                        Learn More!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Html>
        </>
    );
};

export default About;
