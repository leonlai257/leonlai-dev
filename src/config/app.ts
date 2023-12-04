import { type } from 'os';
import * as THREE from 'three';

export interface CoreConfig {
    color: ColorProfile;
    nav: NavItem[];
    contact: ContactItem[];
}

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

const Config = {
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
};

export default Config;
