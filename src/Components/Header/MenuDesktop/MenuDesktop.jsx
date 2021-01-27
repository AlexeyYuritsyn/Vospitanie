import './_menu-desktop.scss';
import menuItems from "../menu-items.json";
import React from 'react';
import PropTypes from "prop-types";
import MenuDesktopItem from './MenuDesktopItem';
import DropdownProfile from "./DropdownProfile/DropdownProfile";
import Preloader from "../../Preloader/Preloader";
import FetchError from "../../FetchError/FetchError";


const MenuDesktop = (props) => {

    const {data, loading, error} = props;

    return (
        <ul className="menu-desktop">
            {
                menuItems.map((item, index) =>
                    <MenuDesktopItem
                        key={index}
                        data={item}
                    />
                )
            }
            {loading && <Preloader/>}
            <li className="menu-desktop-list-item">
                {!error && <DropdownProfile data={data}/>}
            </li>
            {error && <FetchError error={error} />}
        </ul>
    )
}

MenuDesktop.propTypes = {
    data: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
};

export default MenuDesktop;