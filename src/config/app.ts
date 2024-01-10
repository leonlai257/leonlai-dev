import { type } from 'os';
import * as THREE from 'three';

export interface CoreConfig {
    color: ColorProfile;
    categories: CategoryItem[];
    nav: NavItem[];
    contact: ContactItem[];
    projects: ProjectItem[];
}
export type ColorProfile = {
    textColor: THREE.Color;
    backgroundColor: THREE.Color;
    backgroundDark: THREE.Color;
    primaryColor: THREE.Color;
    secondaryColor: THREE.Color;
    accentColor: THREE.Color;
};

export type CategoryItem = {
    name: string;
    skills: string[];
};

export type ProjectItem = {
    navTitle: string;
    title: string;
    to: string;
    date?: string;
    role?: string;
    links?: NavItem[];
    description?: string;
    image?: string;
    gif?: string;
    tags?: string[];
};

export type NavItem = {
    name: string;
    url: string;
};

export type ContactItem = {
    name: string;
    url: string;
    alias?: string;
};

export const baseConfig = {
    color: {
        textColor: '#090a06', // '#090a06',
        backgroundColor: '#FEEBD6', // '#FEEBD6',
        backgroundDark: '#222232', // '#222232',
        primaryColor: '#8294C4', // '#8294C4',
        secondaryColor: '#ACB1D6', // '#ACB1D6',
        accentColor: '#82b5c4', // '#82b5c4',
    },
    categories: [
        {
            name: 'FRONTEND',
            skills: ['React', 'Vue', 'Angular', 'PHP'],
        },
        {
            name: 'BACKEND',
            skills: ['Nest', 'Express', 'AWS', 'NoSQL'],
        },
        {
            name: 'GAME DEV',
            skills: ['Unity', 'C#', 'Java', 'Mrtk'],
        },
        // {
        //     name: 'WEB3',
        //     skills: ['Cardano', 'Blockchain'],
        // },
    ],
    contact: [
        {
            name: 'Github',
            url: 'https://github.com/leonlai257',
            alias: 'leonlai257',
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/leonlai257/',
            alias: 'leonlai257',
        },
        {
            name: 'Email',
            url: 'mailto:leonlai257@gmail.com',
            alias: 'leonlai257@gmail.com',
        },
    ],
    projects: [
        {
            navTitle: 'MeshJS contribution',
            title: 'MeshJS',
            to: 'mesh',
            role: 'Contributor - Frontend',
            date: 'Nov 2023',
            image: '/projects/mesh.png',
            links: [
                {
                    name: 'Live site',
                    url: 'https://meshjs.dev/apis/transaction/builderExample',
                },
                {
                    name: 'Github',
                    url: 'https://github.com/MeshJS/mesh',
                },
            ],
        },
        {
            navTitle: 'Cardano Naming Service',
            title: 'Cardano Naming Service',
            description:
                'Cardano Naming Service (CNS) is a domain name service built on the Cardano network. I was responsible for the majority (95%+) of the frontend development.',
            to: 'cns',
            role: 'Full Stack Developer',
            date: 'May 2023 - Nov 2023',
            image: '/projects/cns.png',
            links: [
                {
                    name: 'Live site',
                    url: 'https://cns.space/',
                },
            ],
        },
        {
            navTitle: 'Bubstal website',
            title: 'Bubstal.io',
            to: 'bubstal',
            role: 'Full Stack Developer',
            date: 'Feb 2023 - May 2023',
            image: '/projects/bubstal.png',
            links: [
                {
                    name: 'Live site',
                    url: 'https://bubstal.io',
                },
            ],
        },
        {
            navTitle: 'Foodiverse',
            title: 'Foodiverse',
            to: 'foodiverse',
            role: 'Full Stack Developer',
            date: 'May 2023 - July 2023',
            image: '/projects/foodiverse.jpg',
            gif: '/projects/foodiverse.gif',
            links: [
                {
                    name: 'News article',
                    url: 'https://metrodaily.hk/posts/52505',
                },
            ],
        },
        {
            navTitle: 'Gusto Collective website',
            title: 'Gusto Collective website',
            to: 'gusto',
            role: 'Full Stack Developer',
            date: 'March 2023 - July 2023',
            image: '/projects/gusto.png',
            links: [
                {
                    name: 'Live site',
                    url: 'https://thisisgusto.com',
                },
            ],
        },
        {
            navTitle: 'CoReality',
            title: 'CoReality',
            to: 'coreality',
            role: 'Full Stack Developer (Lead)',
            date: 'Feb 2023 - May 2023',
        },
        {
            navTitle: 'Jarvix Pay',
            title: 'Jarvix Pay',
            to: 'jarvix-pay',
            role: 'Full Stack Developer',
            date: 'Sep 2021 - Oct 2022',
            links: [
                {
                    name: 'Live site',
                    url: 'https://www.jarvixhk.com/en-us',
                },
            ],
        },
        {
            navTitle: 'Mixed Reality laboratory',
            title: 'Mixed Reality laboratory',
            to: 'mr-lab',
            role: 'Mixed Reality Developer',
            date: 'Oct 2019 - Feb 2022',
        },
    ],
};
