export interface CoreConfig {
    categories: CategoryItem[];
    nav: NavItem[];
    contact: ContactItem[];
    experiences: ExperienceItem[];
    projects: ProjectItem[];
}

export type CategoryItem = {
    name: string;
    skills: string[];
};

export type ExperienceItem = {
    title: string;
    company: string;
    date: string;
    description: string;
    tags: string[];
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
    thumbnail?: string;
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
    experiences: [
        {
            title: 'Full Stack Developer',
            company: 'Freelance',
            date: 'Feb 2023 - Present',
            description: `Developed highly responsive web applications and robust backend for:
            - Bubstal (bubstal.io), Foodiverse (7-Eleven HK), Gusto Collective (thisisgusto.com), Cardano Naming Service (cns.space), MeshJS (meshjs.dev), Sidan Lab (sidan.io), Confidential crypto exchange project`,
            tags: [
                'Vue',
                'React',
                'Angular',
                'php',
                'WordPress',
                'three.js',
                'Babylon',
                'Tensorflow',
                'AWS',
                'Rust',
                'Docker',
                'Blockchain',
                'Redis',
                'Web3',
            ],
        },
        {
            title: 'Full Stack Developer',
            company: 'Gusto Collective',
            date: 'Oct 2022 - May 2023',
            description: `- Built RESTful API endpoints with serverless AWS Lambda and CMS using React for an mobile AR application with 20k+ concurrent users.
            - Led and developed CoReality, a 3D online store SaaS, using React and three.js.`,
            tags: [
                'React',
                'php',
                'WordPress',
                'three.js',
                '8th Wall',
                'AWS',
                'serverless',
                'Rust',
                'Docker',
                'Web3',
            ],
        },
        {
            title: 'Software Engineer',
            company: 'Aigniter Technology Limited',
            date: 'Sep 2021 - Oct 2022',
            description: `- Developed Jarvix Pay, a mobile B2C payment application from scratch using Vue, React, React Native and NestJs, with transactions from 5000+ registered merchant.
            - Wrote extensive integration and E2E test cases in Jest, Cypress, with code coverage of 90+%.`,
            tags: [
                'React',
                'Vue',
                'pm2',
                'NestJs',
                'AWS',
                'Docker',
                'React Native',
                'ionic',
                'iOS',
                'Android',
            ],
        },
        {
            title: 'Mixed Reality Developer',
            company: 'The Chinese University of Hong Kong',
            date: 'Oct 2019 - Feb 2022',
            description: `Developed Mixed Reality games for Hololens 2 with spatial awareness and interactive elements: 
            - MR laboratory simulations for the Faculty of Science 
            - MR art contest mentor for the Faculty of Fine Arts`,
            tags: [
                'Unity',
                'C#',
                'MRTK',
                'Hololens',
                'Java',
                '3ds Max',
                'Blender',
            ],
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
            image: '/images/projects/sidan.png',
            thumbnail: '/images/square-thumbnail/sidan.png',
            tags: [
                'Next.js',
                'Tailwindcss',
                'React',
                'Redux',
                'Typescript',
                'Web3',
                'Cardano(.ada)',
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
            image: '/images/projects/mesh.png',
            thumbnail: '/images/square-thumbnail/mesh.png',
            tags: ['Web3', 'Cardano(.ada)'],
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
            image: '/images/projects/cns.png',
            thumbnail: '/images/square-thumbnail/cns.png',
            tags: [
                'Next.js',
                'Tailwindcss',
                'React',
                'Redux',
                'Web3',
                'Redis',
                'Cardano(.ada)',
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
            image: '/images/projects/bubstal.png',
            thumbnail: '/images/square-thumbnail/bubstal.png',
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
            description: `Foodiverse is a limited time lucky draw event launched by the 7-Eleven Hong Kong during 5-14 July 2023. I developed 95% of the frontend and part of the backend. The fully-responsive website is built with Stitches(CSS library) and Next.js. The animation utilized GSAP and Lottie.`,
            to: 'foodiverse',
            role: 'Full Stack Developer',
            date: 'May 2023 - July 2023',
            image: '/images/projects/foodiverse.jpg',
            thumbnail: '/images/square-thumbnail/foodiverse.jpg',
            gif: '/images/projects/foodiverse.gif',
            tags: ['Next.js', 'Stitches', 'GSAP', 'Lottie', 'Node.js', 'Redis'],
            links: [
                {
                    name: 'News article',
                    url: 'https://www.jetsotoday.com/7-eleven-dee-20230714/',
                },
            ],
        },
        {
            navTitle: 'Gusto Collective website',
            title: 'Gusto Collective website',
            to: 'gusto',
            role: 'Full Stack Developer',
            date: 'March 2023 - July 2023',
            image: '/images/projects/gusto.png',
            thumbnail: '/images/square-thumbnail/gusto.png',
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
            image: '/images/projects/coreality.png',
            thumbnail: '/images/square-thumbnail/coreality.png',
            gif: '/images/projects/coreality-demo.gif',
            date: 'Feb 2023 - May 2023',
            tags: ['React', 'Tailwindcss', 'Node.js', 'Next.js', 'Three.js'],
            description: `Coreality is a Software as a Service application for advanced e-commerce, aimed to provide a 3D panoramic storeroom environment to users to enhance their shopping experience. I led the development and added a config system, allowing non-developers to add or design their own storeroom experience without codes. The application was built with Next.js and Three.js. The applications allows 4K quality graphic to be viewed on mobile with constant 30+FPS.`,
        },
        {
            navTitle: 'Jarvix Pay',
            title: 'Jarvix Pay',
            to: 'jarvix-pay',
            role: 'Full Stack Developer',
            image: '/images/projects/jarvix.png',
            thumbnail: '/images/square-thumbnail/jarvix.png',
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
            image: '/images/projects/mr.png',
            thumbnail: '/images/square-thumbnail/mr.png',
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
