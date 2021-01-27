import './_socials.scss';
import vk from './images/vk.png';
import youtube from './images/youtube.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import React from 'react';


const socials = [
    {
        title: 'YouTube',
        url: 'https://www.youtube.com/user/mosmetod',
        logo: youtube
    },
    {
        title: 'ВКонтакте',
        url: 'https://vk.com/mosmetod',
        logo: vk
    },
    {
        title: 'facebook',
        url: 'https://www.facebook.com/mosmetod',
        logo: facebook
    },
    {
        title: 'Instagram',
        url: 'https://www.instagram.com/mosmetod/',
        logo: instagram
    },
]


const SocialsItem = (props) => {

    const {title, url, logo} = props;

    return (
        <a
            className="social-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                className="social-logo"
                src={logo}
                alt={title}
            />
        </a>
    )
}

const Socials = () => {

    return (
        <div className="socials">
            {socials.map((item, id) =>
                <SocialsItem
                    key={id}
                    title={item.title}
                    url={item.url}
                    logo={item.logo}
                />
            )}
        </div>
    )
}

export default Socials;