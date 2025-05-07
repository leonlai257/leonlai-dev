import { CoreConfig } from '@src/libs/config';
import { ProjectNavigation } from '@src/components';
import { ExperienceLink } from '@src/components/ExperienceItem';
import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrambleTextPlugin } from 'gsap/dist/ScrambleTextPlugin';

export interface MainProps extends CoreConfig {}

const Main = (props: MainProps) => {
    const { contact = [], projects = [], experiences = [] } = props;
    gsap.registerPlugin(ScrambleTextPlugin);
    useEffect(() => {
        gsap.to('#name', {
            duration: 1.2,
            scrambleText: {
                text: 'Leon Lai',
                chars: 'lowercase',
            },
        });

        gsap.fromTo(
            '#name-shadow',

            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 1.4,
                duration: 1.4,
            }
        );

        // split elements with the class "split" into words and characters
        let split_title = SplitText.create('#title', {
            type: 'words, chars',
        });

        // now animate the characters in a staggered fashion
        gsap.from(split_title.words, {
            delay: 0.5,
            duration: 1,
            x: -40,
            y: 80, // animate from 100px below
            autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
            stagger: 0.02, // 0.05 seconds between each
        });
    });

    return (
        <div className="flex flex-col w-full h-full z-50 gap-8">
            <div className="flex flex-col w-full items-center my-20">
                <div className="relative flex z-10 text-welcome w-fit h-fit whitespace-nowrap">
                    <div id="name">Leon Lai</div>
                    <div
                        id="name-shadow"
                        className="absolute left-[1.2%] top-[2.4%] text-secondary z-[-1] cursor-none"
                    >
                        Leon Lai
                    </div>
                </div>
                <div
                    id="title"
                    className="bg-primary text-background text-display px-4 py-2 text-center w-full"
                >
                    Senior Full Stack Developer
                </div>
            </div>

            <div className="p-20 w-full h-full flex flex-col lg:flex-row gap-16 items-center justify-center">
                <div className="w-[50vw] relative z-[10]">
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
                    <div className="absolute top-[4%] z-[-1] left-[4%] h-auto w-full bg-secondary aspect-[8/12]" />
                </div>
                <div className="flex flex-col justify-center gap-y-4 text-white pointer-events-auto text-body">
                    <div className="flex flex-col justify-center">
                        <div className="relative z-10 text-title uppercase ml-1">
                            <div className="text-accent">About Me</div>
                            <div className="as-shadow">About Me</div>
                        </div>

                        <div className="bg-secondary p-4 text-shadow-sm shadow-black-textShadow">
                            I am a Software Engineer based in Toronto, Canada,
                            with 5 years of industry experience and expertise in
                            Full Stack Web Development. I am highly motivated
                            and versatile with strong problem-solving and
                            communication skills. I am also great at delivering
                            robust solutions and visually stunning website.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <div className="relative z-10 text-title uppercase ml-1">
                            <div className="text-accent">Contact</div>
                            <div className="as-shadow">Contact</div>
                        </div>
                        <div className="flex flex-col bg-secondary p-4 gap-2">
                            <div className="text-shadow-sm shadow-black-textShadow">
                                Feel free to reach out to me through any of the
                                following:
                            </div>
                            <div className="flex flex-col gap-2">
                                {contact.map((c) => {
                                    return (
                                        <a
                                            key={c.name}
                                            href={c.url}
                                            target="_blank"
                                            className="btn relative z-10 text-label uppercase bg-primary text-secondary px-2 py-1 w-fit h-fit whitespace-nowrap"
                                        >
                                            {c.name}: {c.alias}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <div className="w-full h-full flex items-start gap-4 flex-col">
                    <div className="flex flex-col justify-center w-2/3">
                        <div className="relative z-10 text-headline flex gap-4 items-center uppercase ml-1">
                            <div className="text-accent">Past Experience</div>
                            <div className="as-shadow">Past Experience</div>
                        </div>
                        <div className="flex flex-col gap-y-2 w-full items-start px-1">
                            <div className="relative z-10 text-label uppercase bg-primary text-secondary px-2 py-0 w-fit h-fit whitespace-nowrap">
                                Hover to expand & learn more!
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full flex-col items-start px-4 py-1">
                        {experiences.map((experience, i) => {
                            return (
                                <ExperienceLink
                                    key={i}
                                    experience={experience}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full md:w-2/3 z-50   ">
                    <div className="relative z-10 text-headline flex gap-4 items-center uppercase ml-1">
                        <div className="text-accent">Projects</div>
                        <div className="as-shadow">Projects</div>
                    </div>
                    <div className="flex flex-col bg-secondary p-4 gap-y-1">
                        <div className="text-shadow-sm shadow-black-textShadow">
                            I have worked on a great variety of projects in my
                            career, ranging from web applications for
                            industry-leading company to Mixed Reality game for
                            the Hololens:
                        </div>
                        <div className="flex flex-col gap-y-2 w-full items-end px-1">
                            <div className="relative z-10 text-label uppercase bg-primary text-secondary px-2 py-0 w-fit h-fit whitespace-nowrap">
                                Hover & Click to learn more!
                            </div>
                        </div>
                    </div>
                </div>

                <ProjectNavigation projects={projects} />
            </div>
        </div>
    );
};

export default Main;
