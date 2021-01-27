import React, {useState} from 'react';
import './_practices.scss';
import {slide as Menu} from 'react-burger-menu'
/*import {add, format, sub} from 'date-fns';
import ru from 'date-fns/locale/ru';*/
import filterAcc from "./icons/filter-acc.svg";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import CheckboxPanel from "./CheckboxPanel";
//import PracticesSubjectSelect from "./SelectFilter";
//import api from "../../../assets/api";
import PracticesSearch from "./PracticesSearch";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {
    setFilterShow,
    deleteFilterUrl,
    setPracticesQuery,
    setSelectUrlPart,
    changePracticesFilters,
    setSelectedOption,
    setEventTypeFilter,
    setForWhomFilter,
} from "../../../actions/practicesAction";
import connect from "react-redux/es/connect/connect";
import filterClose from "./icons/filter-close.svg";
import OutsideClickHandler from "react-outside-click-handler";


const PracticesFilterBlockMobile = (props) => {
    const {
        userWidth,
        filterShow,
        setFilterShow,
        deleteFilterUrl,
        setPracticesQuery,
        setSelectUrlPart,
        changePracticesFilters,
        setSelectedOption,
        setEventTypeFilter,
        setForWhomFilter,
    } = props;

    const applyAllFilters = () => {
        setFilterShow(false);
        changePracticesFilters();
    }

    const deleteAllFilters = () => {
        deleteFilterUrl([]);
        setPracticesQuery('');
        setSelectUrlPart('');
        setSelectedOption(null);
        setEventTypeFilter([]);
        setForWhomFilter([]);
        changePracticesFilters();
    }

    return (
        <OutsideClickHandler
            onOutsideClick={() => {
                setFilterShow(false);
            }}>
            <Menu className={"practices-mobile-filter"}
                  overlayClassName={"practices-mobile-filter-overlay"}
                  menuClassName={"practices-mobile-filter-menu"}
                  width={userWidth > 460 ? 400 : '100%'}
                  isOpen={filterShow}
                  onClose={() => {
                      setFilterShow(false)
                  }}
                  disableCloseOnEsc>
                <div>
                    <div className="practices-mobile-filter-header">
                        <div className="practices-mobile-apply-button"
                             onClick={applyAllFilters}>Применить
                        </div>
                        <div className="practices-mobile-delete-button"
                             onClick={deleteAllFilters}>Сбросить
                        </div>
                        <img src={filterClose} alt="закрыть"
                             onClick={() => {
                                 setFilterShow(false)
                             }}/>
                    </div>
                </div>
                <div className="practices-filter-block-wrap">
                    <div className="filter-block">
                        <Accordion className="filter-block-accordion"
                                   allowMultipleExpanded={true}
                                   allowZeroExpanded={true}
                                   preExpanded={['a', 'b', 'c', 'd', 'e']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton className="filter-block-accordion__button">
                                        <span className="filter-block-title-text">Название</span>
                                        <img className="filter-block-acc-img" src={filterAcc} alt="+"/>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <PracticesSearch/>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton className="filter-block-accordion__button">
                                        <span className="filter-block-title-text">Направление</span>
                                        <img className="filter-block-acc-img" src={filterAcc} alt="+"/>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <CheckboxPanel
                                        filterType={'category'}
                                    />
                                </AccordionItemPanel>
                            </AccordionItem>
                            {/*<AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton className="filter-block-accordion__button">
                                        <span className="filter-block-title-text">Предмет/направление</span>
                                        <img className="filter-block-acc-img" src={filterAcc} alt="+"/>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <PracticesSubjectSelect
                                        filterType={'user_groups_id'}
                                        selectItemsUrl={'https://test.mosmetod.ru/api/get-work-plan-subject'}
                                    />
                                </AccordionItemPanel>
                            </AccordionItem>*/}
                        </Accordion>
                    </div>
                </div>
            </Menu>
        </OutsideClickHandler>
    )
}

PracticesFilterBlockMobile.propTypes = {
    filterShow: PropTypes.bool.isRequired,
    setFilterShow: PropTypes.func.isRequired,
    changePracticesFilters: PropTypes.func.isRequired,
    setSelectedOption: PropTypes.func.isRequired,
    setEventTypeFilter: PropTypes.func.isRequired,
    setForWhomFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({practicesReducer}) => ({
    filterShow: practicesReducer.filterShow,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setFilterShow,
    deleteFilterUrl,
    setPracticesQuery,
    setSelectUrlPart,
    changePracticesFilters,
    setSelectedOption,
    setEventTypeFilter,
    setForWhomFilter,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PracticesFilterBlockMobile);