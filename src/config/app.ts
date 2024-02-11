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
        {
            name: 'WEB3',
            skills: ['Cardano', 'Blockchain', 'FinTech'],
        },
    ],
    contact: [
        {
            name: 'GitHub',
            url: 'https://github.com/leonlai257',
            alias: 'leonlai257',
        },
        {
            name: 'LinkedIn',
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
            navTitle: 'Sidan Lab website',
            title: 'Sidan.io',
            description: `Sidan is a cryptocurrency startup that aims to make blockchain accessible and transformative. I was responsible for the majority of the frontend development. The fully-responsive website is built with Tailwindcss and Next.js. 
            It provided a gateway for users to get in touch and contact with the company, including a function that allows them to stake in to the company's Cardano pool for support.`,
            to: 'sidan',
            role: 'Full Stack Developer',
            date: 'Nov 2023 - Present',
            image: '/projects/sidan.png',
            tags: [
                'Next.js',
                'Tailwindcss',
                'React',
                'Redux',
                'Typescript',
                'Web3',
                'Cardano(ADA)',
            ],
            links: [
                {
                    name: 'Live site',
                    url: 'https://sidan.io',
                },
            ],
        },
        {
            navTitle: 'MeshJS contribution',
            title: 'MeshJS',
            description: `MeshJs is a open-source library that provide tools for users to build powerful applications on the Cardano blockchain with ease. I developed the frontend document, detailing all APIs and examples, for the Mesh Tx Builder, a feature that enable users to utilize low level functions to build transaction.`,
            to: 'mesh',
            role: 'Contributor - Frontend',
            date: 'Nov 2023',
            image: '/projects/mesh.png',
            tags: ['Web3', 'Cardano(ADA)'],
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
            description: `Cardano Naming Service (CNS) is a domain name service built on the Cardano network. I was responsible for the majority (95%+) of the frontend development.`,
            to: 'cns',
            role: 'Full Stack Developer',
            date: 'May 2023 - Nov 2023',
            image: '/projects/cns.png',
            tags: [
                'Next.js',
                'Tailwindcss',
                'React',
                'Redux',
                'Web3',
                'Redis',
                'Cardano(ADA)',
                'PostgresQL',
            ],
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
            description: `Bubstal is a Hong Kong Metaverse startup. I developed majority of their company website using Vue.js and some of the gameplay logic using Babylon.js.`,
            tags: [
                'Vue',
                'Tailwindcss',
                'Babylon.js',
                'Tensorflow',
                'Metaverse',
            ],
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
            description: `Foodiverse is a limited time lucky draw event launched by the 7-Eleven Hong Kong during 5-14 July 2023. I developed 95% of the frontend and part of the backend. The fully-responsive website is built with Stitches(CSS library) and Next.js. The animation used in the application utilized GSAP and Lottie.`,
            to: 'foodiverse',
            role: 'Full Stack Developer',
            date: 'May 2023 - July 2023',
            image: '/projects/foodiverse.jpg',
            gif: '/projects/foodiverse.gif',
            tags: ['Next.js', 'Stitches', 'GSAP', 'Lottie', 'Node.js', 'Redis'],
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
            tags: ['php', 'WordPress', 'jQuery', 'Angular', 'GSAP'],
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
            image: '/projects/coreality.png',
            gif: '/projects/coreality-demo.gif',
            date: 'Feb 2023 - May 2023',
            tags: ['React', 'Tailwindcss', 'Node.js', 'Next.js', 'Three.js'],
        },
        {
            navTitle: 'Jarvix Pay',
            title: 'Jarvix Pay',
            to: 'jarvix-pay',
            role: 'Full Stack Developer',
            image: '/projects/jarvix.png',
            date: 'Sep 2021 - Oct 2022',
            tags: [
                'React',
                'React Native',
                'Android Studio',
                'iOS',
                'Tailwindcss',
                'Express',
                'Vue.js',
                'NestJs',
                'pm2',
                'mySQL',
            ],
            links: [
                {
                    name: 'Live site',
                    url: 'https://www.jarvixhk.com/en-us',
                },
            ],
            description: `Jarvix Pay is a mobile payment gateway that allows merchants to accept payments from customers using all kind of payment methods. I built the application from the ground up in 3 months, responsible for majority of the frontend (Vue.js) and backend development(NestJs).
            The application launched and retained 5000+ concurrent merchants in the first month. It is one of the top credit card payment applications in Hong Kong.`,
        },
        {
            navTitle: 'Mixed Reality Development',
            title: 'Mixed Reality Development',
            to: 'mr',
            role: 'Mixed Reality Developer',
            date: 'Oct 2019 - Feb 2022',
            image: '/projects/mr.png',
            tags: [
                'Unity',
                'C#',
                'MRTK',
                'Hololens',
                'Java',
                '3ds Max',
                'Blender',
                'Visual Studio',
            ],
            links: [
                {
                    name: 'Demo video',
                    url: 'https://drive.google.com/file/d/1uZj4i39yiIOtS0jNR3HCVpkMTWRHNIDq/view?usp=sharing',
                },
            ],
            description: `I developed a Mixed Reality applications for the Faculty of Life Science and the Faculty of Art at the Chinese University of Hong Kong. The application was built with Unity Engine(Mixed Reality ToolKit) and Visual Studio, then was deployed to Hololens 2. I was responsible for the whole process of the development, including the 3D modelling, game logic programming and scripting.
            
            The laboratory game was used to help students in the Faculty of Life Science to learn about the process of developing cell culture. For the Faculty of Art, I mentored the students in building a virtual art piece using the Mixed Reality technology.`,
        },
    ],
};
