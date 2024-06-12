import { CoreConfig } from '@config/app';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface MainProps extends CoreConfig {}

const Main = (props: MainProps) => {
    const { contact = [], projects = [] } = props;
    const [selected, setSelected] = useState('/projects/sidan.png');

    return (
        <div className="flex flex-col w-full h-full z-50 gap-8">
            <div className="flex flex-col w-full items-center my-20">
                <div className="relative flex z-10 text-welcome w-fit h-fit">
                    <div className="">Leon Lai</div>
                    <div className="absolute whitespace-nowrap left-[1.2%] top-[2.4%] text-secondary z-[-1] cursor-none">
                        Leon Lai
                    </div>
                </div>
                <div className="bg-primary text-background text-display px-4 py-2">
                    Full Stack Developer
                </div>
            </div>

            <div className="p-20 w-full h-full flex flex-col lg:flex-row gap-16 items-center justify-center">
                <div className="max-w-[50vw]  relative z-10">
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
                        <div className="relative z-10 text-title">
                            <div className="text-accent uppercase ml-1">
                                About Me
                            </div>
                            <div className="as-shadow uppercase ml-1 left-[0.4%] top-[4.2%]">
                                About Me
                            </div>
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
                        <div className="relative z-10 text-title">
                            <div className="text-accent uppercase ml-1">
                                Contact
                            </div>
                            <div className="as-shadow uppercase ml-1 left-[0.4%] top-[4.2%]">
                                Contact
                            </div>
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
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col justify-center w-2/3">
                    <div className="relative z-10 text-title">
                        <div className="text-accent uppercase ml-1">
                            Projects
                        </div>
                        <div className="as-shadow uppercase ml-1 left-[0.4%] top-[4.2%]">
                            Projects
                        </div>
                    </div>
                    <div className="flex flex-col bg-secondary p-4 gap-y-1">
                        <div className="text-shadow-sm shadow-black-textShadow">
                            I have worked on a great variety of projects in my
                            career, ranging from web applications for
                            industry-leading company to Mixed Reality game for
                            the Hololens:
                        </div>
                        <div className="flex flex-col gap-y-2 w-full items-end">
                            <Link
                                href={'/projects'}
                                className="btn relative z-10 text-label uppercase bg-primary text-secondary px-2 py-1 w-fit h-fit whitespace-nowrap"
                            >
                                Learn More!
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex items-start gap-4">
                    <div className="flex gap-2 flex-col justify-center items-start basis-1/3 minghja px-4 py-2">
                        {projects.map((project, i) => (
                            <Link
                                key={i}
                                className="w-full btn h-fit relative text-title uppercase z-10"
                                href={'/projects/' + project.to}
                                onMouseOver={() =>
                                    setSelected(project.image || '')
                                }
                            >
                                <div className="text-primary">
                                    {project.navTitle}
                                </div>
                                <div className="as-shadow z-[-1] left-[0.8%]">
                                    {project.navTitle}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="flex overflow-hidden flex-col basis-2/3 h-full p-4 justify-center relative z-10 object-cover">
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
                                    }}
                                />
                                {/* <div className="as-shadow h-full w-full"></div> */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
