import './_dropdown-profile.scss';
import chevron from './chevron.svg';
import React, {useState} from 'react';
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler";


const DropdownProfile = (props) => {

    const {data} = props;

    const SiteLoginBottom = () => {
        return (
            <a
                className="menu-desktop-list-link menu-desktop-hover"
                href="/site/login"
                // target="_blank"
                // rel="noopener noreferrer"
            >
                <span className="menu-desktop-list-link-text">
                    Вход
                </span>
            </a>
        )
    }

    const ProfileMenu = (props) => {

        const {data} = props;

        // const [isOpenDetails, setDetailsStatus] = useState(false);
        //
        // const clickHandler = () => {
        //     setDetailsStatus(true);
        // }

        return (
            <OutsideClickHandler
                onOutsideClick={() => {
                    // setDetailsStatus(false)
                    document.querySelector('.dropdown-profile').removeAttribute('open')
                }}
            >
                <div
                    className="menu-desktop-list-item"
                >
                    <details
                        className="dropdown-profile"
                        // open={isOpenDetails}
                        // onClick={() => clickHandler}
                    >
                        <summary>
                            <span className="dropdown-profile-name-menu">
                                {data.first_name}
                            </span>
                            <img src={chevron} alt="chevron"/>
                        </summary>
                        <div className="dropdown-profile-content">
                            <p className="dropdown-profile-name">
                                <span className="profile-text">Вы зашли как</span><br/>
                                <span className="profile-bold-text">{data.second_name} {data.first_name} {data.third_name}</span>
                            </p>
                            <hr className="profile-hr" />
                            <p className="profile-text">
                                {data.email}
                            </p>
                            <hr className="profile-hr" />
                            <a
                                className="profile-text dropdown-profile-link"
                                href="/site/login"
                            >
                                Личный кабинет
                            </a>
                            <a
                                className="profile-text dropdown-profile-link"
                                href="/site/logout"
                            >
                                Выход
                            </a>
                        </div>
                    </details>
                </div>
            </OutsideClickHandler>
        )
    }

    return (
        <>
            {Object.keys(data).length !== 0
                ? <ProfileMenu data={data} />
                : <SiteLoginBottom />}
        </>
    )
}

DropdownProfile.propTypes = {
    data: PropTypes.object.isRequired,
};

export default DropdownProfile;