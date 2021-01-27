import './_logo.scss';
import logo from './practices-logo.svg';
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {
    toggleMenuMobile,
} from '../../actions/globalAction';


const Logo = (props) => {

    const {
        toggleMenuMobile,
    } = props;

    const pageScrollToTop = () => {
        window.scroll(0,0);
    };

    const clickHandler = () => {
        pageScrollToTop();
        toggleMenuMobile(false);
    };

    return (
        <Link
            className="logo"
            to="/"
            onClick={clickHandler}
        >
            <img
                className="logo-image"
                src={logo}
                alt="logo"
            />
        </Link>
    )
}

Logo.propTypes = {
    toggleMenuMobile: PropTypes.func.isRequired,
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleMenuMobile,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Logo);