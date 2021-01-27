import './_footer.scss';
import mail from './images/mail.svg';
import phone from './images/phone.svg';
import React from 'react';
import Socials from "../Socials/Socials";


const supportContacts = [
    {
        name: 'Контакты',
        contacts: [
            {
                title: "Телефон",
                link: "tel:+79858283517",
                description: "+7 (985) 828-35-17",
                icon: phone,
            },
            {
                title: "Телефон",
                link: "tel:+79265171982",
                description: "+7 (926) 517-19-82",
                icon: phone,
            },
            {
                title: "Телефон",
                link: "tel:+79152204448",
                description: "+7 (915) 220-44-48",
                icon: phone,
            },
            {
                title: "Почта",
                link: "mailto:vospitanie@mosmetod.ru",
                description: "vospitanie@mosmetod.ru",
                icon: mail,
            },
        ]
    },
    {
        name: 'Техподдержка',
        contacts: [
            {
                title: "Телефон",
                link: "tel:+74995505097",
                description: "+7 (499) 550-50-97",
                icon: phone,
            },
        ]
    }
]


const ContactsItem = (props) => {

    const {name, contacts} = props;

    return (
        <div className="footer-support-item-container">
            <h3 className="footer-support-header">{name}:</h3>
            <div className="footer-support-container">
                {contacts.map((item, id) =>
                    <a
                        className="footer-contacts-link"
                        key={id}
                        href={item.link}
                    >
                        {/*<img*/}
                        {/*    className="footer-contacts-icon"*/}
                        {/*    src={item.icon}*/}
                        {/*    alt={item.title}*/}
                        {/*/>*/}
                        <span className="footer-contacts-text">
                            {item.description}
                        </span>
                    </a>
                )}
            </div>
        </div>
    )
}

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-container container">
                <div className="footer-support">
                    <div className="footer-support-wrap">
                        {supportContacts.map((item, id) =>
                            <ContactsItem
                                key={id}
                                name={item.name}
                                contacts={item.contacts}
                            />
                        )}
                    </div>
                </div>
                <div className="footer-socials-container">
                    <div
                        className="ya-share2 footer-share"
                        data-copy="hidden"
                        data-curtain=""
                        data-more-button-type="long"
                        data-popup-direction="auto"
                        data-popup-position="outer"
                        data-shape="normal"
                        data-direction="horizontal"
                        data-size="m"
                        data-limit="0"
                        data-services="vkontakte,facebook,odnoklassniki,telegram,whatsapp"
                    >
                    </div>
                    <Socials />
                </div>
            </div>
        </div>
    )
}

export default Footer;