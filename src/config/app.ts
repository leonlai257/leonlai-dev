import { type } from 'os';
import * as THREE from 'three';

export interface CoreConfig {
    color: ColorProfile;
    nav: NavItem[];
    contact: ContactItem[];
}

export type ColorProfile = {
    primaryColor: THREE.ColorRepresentation;
    secondaryColor: THREE.ColorRepresentation;
    tertiaryColor: THREE.ColorRepresentation;
    quaternaryColor: THREE.ColorRepresentation;
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

const Config = {
    color: {
        primaryColor: '#8294C4',
        secondaryColor: '#ACB1D6',
        tertiaryColor: '#DBDFEA',
        quaternaryColor: '#FFEAD2',
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
};

export default Config;
