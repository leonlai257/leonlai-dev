import {
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
    QuestionMarkCircledIcon,
} from '@radix-ui/react-icons';

export const RenderSocialMediaLogo = (name: string) => {
    const config = {
        width: '24px',
        height: '24px',
    };

    switch (name.toUpperCase()) {
        case 'EMAIL':
            return <EnvelopeClosedIcon {...config} />;
        case 'GITHUB':
            return <GitHubLogoIcon {...config} />;
        case 'INSTAGRAM':
            return <InstagramLogoIcon {...config} />;
        case 'LINKEDIN':
            return <LinkedInLogoIcon {...config} />;
        default:
            return <QuestionMarkCircledIcon {...config} />;
    }
};
