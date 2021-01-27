import './_menu-mobile.scss';
import burger from './icons/burger.svg';
import close from './icons/close.svg';
import menuItems from "../menu-items.json";
import React from 'react';
import PropTypes from "prop-types";
import {slide as Menu} from 'react-burger-menu';
import MenuMobileItem from "./MenuMobileItem";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {
    toggleMenuMobile,
} from '../../../actions/globalAction';
import Preloader from "../../Preloader/Preloader";
import FetchError from "../../FetchError/FetchError";


const Icon = (props) => {

    const {icon, alt} = props;

    return (
        <img
            className="menu-mobile-icon"
            src={icon}
            alt={alt}
        />
    )
}

const SiteLoginBottom = () => {
    return (
        <li className="menu-mobile-list-item">
            <a
                className="menu-mobile-list-link"
                href="/site/login"
                onClick={() => toggleMenuMobile(false)}
            >
                Вход
            </a>
        </li>
    )
}

const ProfileMenu = () => {
    return (
        <>
            <li className="menu-mobile-list-item">
                <a
                    className="menu-mobile-list-link"
                    href="/site/login"
                    onClick={() => toggleMenuMobile(false)}
                >
                    Личный кабинет
                </a>
            </li>
            <li className="menu-mobile-list-item">
            <a
                className="menu-mobile-list-link"
                href="/site/logout"
                onClick={() => toggleMenuMobile(false)}
            >
                Выход
            </a>
        </li>
        </>
    )
}

const MenuMobile = (props) => {

    const {
        userWidth,
        data,
        isOpenMenuMobile,
        toggleMenuMobile,
        loading,
        error,
    } = props;

    return(
        <>
            <div
                className="menu-mobile-icon-container"
                onClick={() => {
                    toggleMenuMobile(!isOpenMenuMobile);
                }}
            >
                {isOpenMenuMobile
                    ? <Icon icon={close} alt={'close'} />
                    : <Icon icon={burger} alt={'open'} />}
            </div>
            <Menu
                width={userWidth >= 550 ? 500 : '100%'}
                disableCloseOnEsc
                onClose={() => toggleMenuMobile(false)}
                isOpen={isOpenMenuMobile}
                customBurgerIcon={false}
                right
                id="menu-mobile"
                className="menu-mobile-position"
            >
                <ul className="menu-mobile-list">
                    {menuItems.map((item, index) =>
                        <MenuMobileItem
                            key={index}
                            data={item}
                        />
                    )}
                    {loading && <Preloader/>}
                    {!error && Object.keys(data).length !== 0
                        ? <ProfileMenu data={data} />
                        : <SiteLoginBottom />}
                    {error && <FetchError error={error} />}
                </ul>
            </Menu>
        </>
    )
}

MenuMobile.propTypes = {
    userWidth: PropTypes.number.isRequired,
    toggleMenuMobile: PropTypes.func.isRequired,
    isOpenMenuMobile: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
};

const mapStateToProps = ({globalReducer}) => ({
    userWidth: globalReducer.userWidth,
    isOpenMenuMobile: globalReducer.isOpenMenuMobile,
    loading: globalReducer.loading,
    error: globalReducer.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleMenuMobile,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MenuMobile);