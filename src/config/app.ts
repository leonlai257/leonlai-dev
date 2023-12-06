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
        },
        {
            navTitle: 'Gusto Collective website',
            title: 'Gusto Collective website',
            to: 'gusto',
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
        },
        {
            navTitle: 'Jarvix Pay',
            title: 'Jarvix Pay',
            to: 'jarvix-pay',
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
        },
    ],
};
