import './_practices.scss';
import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {
    setPracticesQuery,
    changePracticesFilters,
} from '../../../actions/practicesAction';
import {setUserWidth} from '../../../actions/globalAction';
import PropTypes from "prop-types";


export const PracticesSearch = (props) => {

    const {
        query,
        userWidth,
        setPracticesQuery,
        setUserWidth,
        changePracticesFilters,
    } = props;

    const changeHandler = (event) => {
        setPracticesQuery(event.target.value);
        if (userWidth > 768) {
            changePracticesFilters();
        }
    }

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

    return (
        <div className="practices-search-wrap">
            <input
                className="practices-search-input"
                value={query}
                name="search"
                type="search"
                placeholder="введите название"
                spellCheck="false"
                //autoComplete="off"
                onChange={changeHandler}
            />
        </div>
    );
};

PracticesSearch.propTypes = {
    query: PropTypes.string.isRequired,
    userWidth: PropTypes.number.isRequired,
    setPracticesQuery: PropTypes.func.isRequired,
    changePracticesFilters: PropTypes.func.isRequired,
    setUserWidth: PropTypes.func.isRequired,
};

const mapStateToProps = ({practicesReducer, globalReducer}) => ({
    query: practicesReducer.query,
    userWidth: globalReducer.userWidth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setPracticesQuery,
    changePracticesFilters,
    setUserWidth,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PracticesSearch);