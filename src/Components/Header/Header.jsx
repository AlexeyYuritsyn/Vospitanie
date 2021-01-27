import './_header.scss'
import React, {useEffect, Suspense} from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {
    setUserWidth,
    fetchUserData,
} from '../../actions/globalAction';
import Preloader from "../Preloader/Preloader";
import Logo from "../Logo/Logo";
const MenuDesktop = React.lazy(() => import('./MenuDesktop/MenuDesktop'));
const MenuMobile = React.lazy(() => import('./MenuMobile/MenuMobile'));


const Header = (props) => {

    const {
        userWidth,
        setUserWidth,
        fetchUserData,
        userData,
        loading,
        error,
    } = props;

    window.addEventListener("resize", function() {
        setUserWidth(document.documentElement.clientWidth);
    }, false);

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className="header">
            <div className="header-container container">
                <Logo />
                <div className="menu-container">
                    <Suspense
                        fallback={<Preloader />}
                    >
                        {userWidth > 1080
                            ? <MenuDesktop
                                data={userData}
                                loading={loading}
                                error={error}
                            />
                            : <MenuMobile
                                data={userData}
                                loading={loading}
                                error={error}
                            />}
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    userWidth: PropTypes.number.isRequired,
    setUserWidth: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired,
    fetchUserData: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
};

const mapStateToProps = ({globalReducer}) => ({
    userWidth: globalReducer.userWidth,
    userData: globalReducer.userData,
    error: globalReducer.error,
    loading: globalReducer.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setUserWidth,
    fetchUserData,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);