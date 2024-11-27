export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: "Javonta'",
    subtitle: "Advertising Account Director.",
    description: "Javonta's landing page.",
    image: {
        src: '/dante-preview.jpg',
        alt: 'Landing Page header image.'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Work',
            href: '/projects'
        },
        {
            text: 'Resume',
            href: '/resume'
        },
        {
            text: 'Blog',
            href: '/blog'
        }
    ],
    footerNavLinks: [

        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Quick Access',
            href: '/quickaccess'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/javontathomas/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/xjavontax/'
        },
        {
            text: 'Bluesky',
            href: 'https://bsky.app/profile/xjavontax.com'
        },
        {
            text: 'Letterboxd',
            href: 'https://letterboxd.com/xjavontax/'
        }
    ],
    hero: {
        title: 'Hi. This is where I put my stuff.',
        text: "I'm **Javonta Thomas**, an advertising Account Director. <p>Since 2018, I've been working in marketing and communications building brand campaigns, introducing new brands to the world, and leading teams of people to make great work with the goal of cutting through all the noise consumers are faced with every day. Some examples of work I've done can be found here, but if you want to know a bit more about me and what I've done, drop me a line!</p> <p>When I'm not working on bespoke marketing comms, I can usually be found playing a video game, seated at a theater catching a movie (follow me on Letterboxd!), or finding the diviest dive bar in whatever city I'm located in at the time.</p> <p>Socials<br><a href='https://instagram.com/xjavontax/'>Instagram</a> | <a href='https://bsky.app/profile/xjavontax.com'>Bluesky</a> | <a href='https://letterboxd.com/xjavontax/'>Letterboxd</a> | <a href='www.linkedin.com/in/javontathomas'>LinkedIn</a>",
        image: {
            src: '/homeheader.jpg',
            alt: 'A photo of me. Doing something.'
        },
        actions: [
            {
                text: 'Talk to me',
                href: '/contact'
            }
        ]
    },
    projectsPerPage: 8
};

export default siteConfig;
