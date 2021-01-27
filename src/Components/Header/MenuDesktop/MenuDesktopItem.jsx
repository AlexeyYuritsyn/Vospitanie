import './_menu-desktop.scss';
import React from 'react';
import PropTypes from "prop-types";
import {NavLink} from 'react-router-dom';


const MenuDesktopItem = (props) => {

    const {data} = props;

    const pageScrollToTop = () => {
        window.scroll(0, 0);
    };

    return (
        <li
            className="menu-desktop-list-item"
            onClick={pageScrollToTop}
        >
            <NavLink
                className="menu-desktop-list-link"
                activeClassName="menu-desktop-list-link-active"
                to={data.url}
                exact={data.url === '/'}
                strict={data.url !== '/'}
            >
                <span className="menu-desktop-list-link-title">
                    {data.title}
                </span>
            </NavLink>
        </li>
    )
}

MenuDesktopItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MenuDesktopItem;