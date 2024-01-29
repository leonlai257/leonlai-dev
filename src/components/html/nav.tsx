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
            <div className="absolute z-[999] flex h-full w-full flex-col justify-end pointer-events-none bg-transparent">
                <div className="flex w-full justify-end p-8 gap-6 pointer-events-auto">
                    {nav &&
                        nav.map((item) => {
                            return (
                                <div
                                    key={`${item.name}`}
                                    className="hover:opacity-75 text-text-grayscale"
                                >
                                    <Link href={item.url}>{item.name}</Link>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};
