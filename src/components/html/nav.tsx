import { NavItem } from '@src/config/app';
import { Link } from 'wouter';

export const NavBar = ({ nav }: { nav: NavItem[] }) => {
    return (
        <>
            <div className="absolute z-[100] flex h-full w-full flex-col justify-end pointer-events-none">
                <div className="flex w-full justify-end p-8 gap-6 pointer-events-auto">
                    {nav &&
                        nav.map((item) => {
                            return (
                                <div
                                    key={`${item.name}`}
                                    className="hover:opacity-75 text-tertiary"
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
