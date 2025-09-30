import { LuFacebook, LuGlobe, LuInstagram, LuLinkedin, LuSendHorizontal, LuSmartphone } from "react-icons/lu";
import { siteConfig } from "./site";

export const footerData = [
    {
        id: 1,
        link: siteConfig.links.facebook,
        image: LuFacebook,
        alt: 'Facebook Icon',
        color: '#1877F2'
    },
    {
        id: 2,
        link: siteConfig.links.instagram,
        image: LuInstagram,
        alt: 'Instagram Icon',
        color: '#DD2A7B'
    },
    {
        id: 3,
        link: siteConfig.links.linkedin,
        image: LuLinkedin,
        alt: 'LinkedIn Icon',
        color: '#0072B1'
    },
    {
        id: 4,
        link: siteConfig.links.business,
        image: LuGlobe,
        alt: 'Blueprint logo',
        color: '#1E3A8A'
    },
    {
        id: 5,
        link: `mailto:${siteConfig.company.email}`,
        image: LuSendHorizontal,
        alt: 'Mail Icon',
        color: '#cc0000'
    },
    {
        id: 6,
        link: `tel:${siteConfig.company.phone}`,
        image: LuSmartphone,
        alt: 'Phone Icon',
        color: '#374151'
    }
];
