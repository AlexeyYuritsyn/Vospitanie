import React, {useEffect} from 'react';
import './_practices.scss';
import PracticesFilterBlock from "./PracticesFilterBlock";
import PracticesFilterBlockMobile from "./PracticesFilterBlockMobile";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import {setUserWidth} from '../../../actions/globalAction';
import PracticesResultList from "./PracticesResultList";
import CityPracticesResultList from "./CityPracticesResultList";
import CityPracticesFilterBlockMobile from "./CityPracticesFilterBlockMobile";


const Practices = (props) => {

    const {
        userWidth,
        setUserWidth,
    } = props;

    const itemPath = props.match.path;

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            setUserWidth(document.documentElement.clientWidth);

            window.addEventListener("resize", function () {
                setUserWidth(document.documentElement.clientWidth);
            }, false);
        }
        return () => mounted = false;
    }, [setUserWidth]);

    const filterBlockItem = () => {
        if (userWidth < 768 && itemPath === '/city-practices') {
            return <CityPracticesFilterBlockMobile userWidth={userWidth}/>
        } else if (userWidth < 768 && itemPath !== '/city-practices') {
            return <PracticesFilterBlockMobile userWidth={userWidth}/>
        } else if (userWidth > 768 && itemPath === '/city-practices') {
            return <PracticesFilterBlock isCity={true}/>
        } else return <PracticesFilterBlock isCity={false}/>
    }

    return (
        <>
            <div className="practices-main-wrap container">
                {filterBlockItem()}
                <div className="practices-events-block-wrap">
                    {
                        itemPath === '/city-practices'
                            ?
                            <CityPracticesResultList/>
                            :
                            <PracticesResultList/>
                    }
                </div>
            </div>
        </>
    )
}


Practices.propTypes = {
    userWidth: PropTypes.number.isRequired,
    setUserWidth: PropTypes.func.isRequired,
};

const mapStateToProps = ({globalReducer}) => ({
    userWidth: globalReducer.userWidth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setUserWidth,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Practices);