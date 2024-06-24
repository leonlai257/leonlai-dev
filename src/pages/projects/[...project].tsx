import Image from 'next/image';
import { ProjectProps } from '.';
import { useRouter } from 'next/router';

const Project = ({ projects }: ProjectProps) => {
    const { asPath: pathname } = useRouter();
    console.log(pathname);

    const info = projects.find((p) => pathname.includes(p.to));
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
            <div className="m-auto flex flex-col pointer-events-auto py-20 px-12 gap-4 w-full text-primary">
                <div className="flex flex-col justify-start uppercase">
                    <div className="flex relative text-display w-fit z-10 whitespace-nowrap">
                        <div>{title}</div>
                        <div className="as-shadow">{title}</div>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <div className="text-title italic text-background bg-primary px-2 py-1 w-fit mx-1">
                            {role}
                        </div>
                        <div className="text-title italic w-fit whitespace-nowrap">
                            {date}
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {links.map((link) => {
                        return (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                className="relative btn text-label uppercase bg-secondary text-primary rounded-xl px-4 py-2 h-fit whitespace-nowrap"
                            >
                                {link.name}
                            </a>
                        );
                    })}

                    {tags.map((tag) => {
                        return (
                            <div
                                key={tag}
                                className="relative text-label uppercase bg-accent text-secondary rounded-xl px-4 py-2 h-fit whitespace-nowrap"
                            >
                                {tag}
                            </div>
                        );
                    })}
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
                            <div className="text-headline uppercase relative z-10">
                                <div className="text-accent">Summary</div>
                                <div className="as-shadow">Summary</div>
                            </div>

                            <div className="w-full h-[2px] bg-text-grayscale" />
                        </div>
                        <div className="text-description">{description}</div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Project;
