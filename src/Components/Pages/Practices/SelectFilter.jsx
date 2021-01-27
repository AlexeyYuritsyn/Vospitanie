import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {
    setSelectUrlPart,
    setSelectedOption,
    changePracticesFilters,
} from "../../../actions/practicesAction";
import {setUserWidth} from '../../../actions/globalAction';
import connect from "react-redux/es/connect/connect";
import axios from "axios";


const SelectFilter = (props) => {
    const {
        selectItemsUrl,
        filterType,
        selectedOption,
        userWidth,
        setSelectUrlPart,
        setSelectedOption,
        changePracticesFilters,
        setUserWidth,
    } = props;

    const [selectItems, setSelectItems] = useState(null);

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            padding: '10px 4px 10px 0',
            background: '#FFFFFF',
            border: '1px solid #E7E7E7',
            boxSizing: 'border-box',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
            borderRadius: '0px 3px 3px 3px',
            marginTop: 0,
        }),
        control: (state) => ({
            width: '100%',
            alignItems: 'center',
            marginTop: 10,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            minHeight: 38,
            marginRight: 40,
            outline: '0 !important',
            position: 'relative',
            transition: 'all 100ms',
            ':hover': {
                borderBottom: '1px solid #000000',
                cursor: 'pointer',
            },
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            display: 'none',
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            padding: '0 8px 0 0',
        }),
        indicatorSeparator: (provided, state) => ({
            ...provided,
            display: 'none',
        }),
        singleValue: (provided, state) => ({
            ...provided,
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '1rem',
            color: '#233670',
            //fontFamily: 'Roboto',
        }),
        option: (provided, state) => ({
            ...provided,
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '0.87rem',
            lineHeight: '1rem',
            color: '##233670',
            padding: '5px 10px 5px 15px',
            backgroundColor: state.isDisabled
                ? null
                : state.isSelected
                    ? '#B2D4FF'
                    : state.isFocused
                        ? '#B2D4FF'
                        : null,
            ':active': {
                backgroundColor: '#DEEBFF',
            },
            ':hover': {
                backgroundColor: '#DEEBFF',
                cursor: 'pointer',
            },
        })
    }

    useEffect(() => {
        let mounted = true;
        let eventTypeListUrl = `${selectItemsUrl}?date_start=2020-01-01&date_end=2020-12-30`;
        if (mounted) {
            const fetchData = async () => {
                const result = await axios(
                    eventTypeListUrl,
                );
                setSelectItems(result.data);
            };
            fetchData();
        }
        return () => mounted = false;
    }, [selectItemsUrl]);

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

    const handleChange = selectedOption => {
        selectedOption ? setSelectUrlPart(`&${filterType}[]=${selectedOption.id}`) : setSelectUrlPart('');
        setSelectedOption(selectedOption);
        if (userWidth > 1080) {
            changePracticesFilters();
        }
    };

    return (
        <Select
            InputValue={selectedOption}
            value={selectedOption ? selectedOption : null}
            onChange={handleChange}
            options={selectItems}
            styles={customStyles}
            isClearable={true}
            tabSelectsValue={false}
            noOptionsMessage={() => 'не найдено'}
            placeholder="введите направление"
            className='react-select-container'
            classNamePrefix="react-select"/>
    );
}

SelectFilter.propTypes = {
    selectItemsUrl: PropTypes.string.isRequired,
    filterType: PropTypes.string.isRequired,
    userWidth: PropTypes.number.isRequired,
    setSelectUrlPart: PropTypes.func.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
    changePracticesFilters: PropTypes.func.isRequired,
    setUserWidth: PropTypes.func.isRequired,
};

const mapStateToProps = ({practicesReducer, globalReducer}) => ({
    selectedOption: practicesReducer.selectedOption,
    userWidth: globalReducer.userWidth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setSelectUrlPart,
    setSelectedOption,
    changePracticesFilters,
    setUserWidth,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SelectFilter);