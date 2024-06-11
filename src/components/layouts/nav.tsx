import Link from 'next/link';

const nav = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Contact',
        url: '/contact',
    },
    {
        name: 'About',
        url: '/about',
    },
    {
        name: 'Projects',
        url: '/projects',
    },
];

export const NavBar = () => {
    return (
        <>
            <div className="fixed z-[999] flex h-full w-full flex-col justify-start pointer-events-none bg-transparent text-navigation text-primary">
                <div className="flex w-full justify-end py-2 px-4 md:py-4 md:px-8 gap-4 lg:gap-6 pointer-events-auto">
                    {nav &&
                        nav.map((item) => {
                            return (
                                <div
                                    key={`${item.name}`}
                                    className="relative z-10"
                                >
                                    <div className="btn hover:animate-float">
                                        <Link href={item.url}>{item.name}</Link>
                                    </div>
                                    <div className="as-shadow-text">
                                        {item.name}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};
