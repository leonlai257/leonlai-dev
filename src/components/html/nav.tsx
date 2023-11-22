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
        name: 'Projects',
        url: '/projects',
    },
];

export const NavBar = () => {
    return (
        <>
            <div className="absolute z-[100] flex h-full w-full flex-col justify-end pointer-events-none">
                <div className="flex w-full justify-end p-8 gap-6 pointer-events-auto">
                    {nav &&
                        nav.map((item) => {
                            return (
                                <div className="hover:opacity-75 text-tertiary">
                                    <Link href={item.url}>{item.name}</Link>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};