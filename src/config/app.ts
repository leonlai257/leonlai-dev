import { type } from 'os';
import * as THREE from 'three';

export interface CoreConfig {
    color: ColorProfile;
    nav: NavItem[];
    contact: ContactItem[];
    projects: ProjectItem[];
}

export type ProjectItem = {
    navTitle: string;
    title: string;
    to: string;
    date?: string;
    role?: string;
    links?: NavItem[];
    description?: string;
    image?: string;
    tags?: string[];
};

export type ColorProfile = {
    textColor: THREE.Color;
    backgroundColor: THREE.Color;
    backgroundDark: THREE.Color;
    primaryColor: THREE.Color;
    secondaryColor: THREE.Color;
    accentColor: THREE.Color;
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
        textColor: '#090a06',
        backgroundColor: '#FFEAD2',
        backgroundDark: '#222232',
        primaryColor: '#8294C4',
        secondaryColor: '#ACB1D6',
        accentColor: '#C9E8E5',
    },
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
            role: 'Contributor',
            date: 'Nov 2023',
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
            to: 'cns',
            role: 'Full Stack Developer',
            date: 'May 2023 - Nov 2023',
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
        },
        {
            navTitle: 'Gusto Collective website',
            title: 'Gusto Collective website',
            to: 'gusto',
            role: 'Full Stack Developer',
            date: 'March 2023 - July 2023',
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
