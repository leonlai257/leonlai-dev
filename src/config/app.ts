import { type } from 'os';
import * as THREE from 'three';

export interface CoreConfig {
    color: ColorProfile;
    nav: NavItem[];
    contact: ContactItem[];
}

export type ColorProfile = {
    textColor: THREE.ColorRepresentation;
    backgroundColor: THREE.ColorRepresentation;
    primaryColor: THREE.ColorRepresentation;
    secondaryColor: THREE.ColorRepresentation;
    accentColor: THREE.ColorRepresentation;
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
        textColor: '#0E081E',
        backgroundColor: '#F8F7F2',
        primaryColor: '#9797D3',
        secondaryColor: '#C9E8E5',
        accentColor: '#4545A1',
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
