import './_organizers.scss';
import dogm from './images/dogm.png';
import gmc from './images/gmc-logo.svg';
import React from 'react';


const organizers = [
    {
        role: 'Организатор',
        title: 'Департамент образования\nи науки города Москвы',
        logo: dogm,
        url: 'https://www.mos.ru/donm/'
    },
    {
        role: 'Оператор',
        title: 'Городской методический центр',
        logo: gmc,
        url: 'https://mosmetod.ru/'
    }
]

const OrganizersItem = (props) => {

    const {role, title, logo, url} = props;

    return (
        <div className="organizer">
            <h3 className="organizer-role">{role}</h3>
            <a
                className="organizer-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="organizer-logo"
                    src={logo}
                    alt={title}
                />
                <h3 className="organizer-title">
                    {title}
                </h3>
            </a>
        </div>
    )
}

const Organizers = (props) => {

    // const {header} = props;

    return (
        <div className="organizers container">
            {/*<h3 className="home-page-block-header">{header}</h3>*/}
            <div className="organizers-container">
                {organizers.map((item, id) =>
                    <OrganizersItem
                        key={id}
                        role={item.role}
                        title={item.title}
                        logo={item.logo}
                        url={item.url}
                    />
                )}
            </div>
        </div>
    )
}

export default Organizers;