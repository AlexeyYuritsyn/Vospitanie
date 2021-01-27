import './_menu-mobile.scss'
import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {
    toggleMenuMobile,
} from '../../../actions/globalAction';
import connect from "react-redux/es/connect/connect";


const pageScrollToTop = () => {
    window.scroll(0,0);
};

const MenuMobileItem = (props) => {

    const {data, toggleMenuMobile} = props;

    const clickHandler = () => {
        pageScrollToTop();
        toggleMenuMobile(false);
    }

    return(
        <li
            key={data.key}
            className="menu-mobile-list-item"
        >
            <NavLink
                onClick={clickHandler}
                className="menu-mobile-list-link"
                activeClassName="menu-mobile-list-link-active"
                to={data.url}
                exact={data.url === '/'}
                strict={data.url !== '/'}
            >
                {data.title}
            </NavLink>
        </li>
    )
}

MenuMobileItem.propTypes = {
    toggleMenuMobile: PropTypes.func.isRequired,
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleMenuMobile,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MenuMobileItem);