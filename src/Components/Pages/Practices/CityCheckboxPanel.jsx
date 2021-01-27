import React, {useEffect} from 'react';
import './_practices.scss';
import CheckboxTree from 'react-checkbox-tree';
import checkboxFlag from "./icons/checkbox-flag.svg";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {
    setFilterUrl,
    changePracticesFilters,
    setEventTypeFilter,
    setForWhomFilter,
} from "../../../actions/cityPracticesAction";
import {setUserWidth,} from '../../../actions/globalAction';
import connect from "react-redux/es/connect/connect";


export const CityCheckboxPanel = (props) => {
    const {
        filterType,
        eventTypeFilters,
        forWhomFilters,
        userWidth,
        setUserWidth,
        setFilterUrl,
        changePracticesFilters,
        setEventTypeFilter,
        setForWhomFilter,
    } = props;

    const checkList = [
        {id: 1, label: "Гражданско-патриотическое воспитание", value: 1},
        {id: 2, label: "Духовно-нравственное воспитание", value: 2},
        {id: 3, label: "Приобщение к культурному наследию", value: 3},
        {id: 4, label: "Художественное творчество", value: 4},
        {id: 5, label: "Популяризация научных знаний", value: 5},
        {id: 6, label: "Культура здорового образа жизни", value: 6},
        {id: 7, label: "Трудовое воспитание и профессиональное самоопределение", value: 7},
        {id: 8, label: "Экологическая культура", value: 8},
        {id: 9, label: "Культура безопасности жизни", value: 9},
    ];

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

    const handleCheck = (checked, targetNode) => {
        filterType === 'category' ? setEventTypeFilter(checked) : setForWhomFilter(checked);
        let arr = [];
        let str = `&${filterType}[]=${targetNode.value}`;
        arr.push(str);
        setFilterUrl(arr, str);
        if (userWidth > 768) {
            changePracticesFilters();
        }
    }


    return (
        <div className="filter-block-checkbox-panel-wrap">
            {
                checkList.length > 0 ?
                    <CheckboxTree
                        expandDisabled={true}
                        showNodeIcon={false}
                        nodes={checkList}
                        checked={filterType === 'category' ? eventTypeFilters : forWhomFilters}
                        onCheck={handleCheck}
                        icons={{
                            check: <img className="checkbox-block-img" src={checkboxFlag} alt="+"/>,
                            uncheck: ''
                        }}
                    /> :
                    <div className="practices-event-stats-text">Нет данных</div>
            }
        </div>
    )
}

CityCheckboxPanel.propTypes = {
    eventTypeFilters: PropTypes.array.isRequired,
    forWhomFilters: PropTypes.array.isRequired,
    filterType: PropTypes.string.isRequired,
    userWidth: PropTypes.number.isRequired,
    setFilterUrl: PropTypes.func.isRequired,
    setEventTypeFilter: PropTypes.func.isRequired,
    setForWhomFilter: PropTypes.func.isRequired,
    setUserWidth: PropTypes.func.isRequired,
};

const mapStateToProps = ({cityPracticesReducer, globalReducer}) => ({
    mobileFilterDelete: cityPracticesReducer.mobileFilterDelete,
    eventTypeFilters: cityPracticesReducer.eventTypeFilters,
    forWhomFilters: cityPracticesReducer.forWhomFilters,
    userWidth: globalReducer.userWidth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setFilterUrl,
    changePracticesFilters,
    setEventTypeFilter,
    setForWhomFilter,
    setUserWidth,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CityCheckboxPanel);