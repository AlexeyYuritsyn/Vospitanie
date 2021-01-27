import React from 'react';
import './_practices.scss';
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
import PracticesSearch from "./PracticesSearch";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import CityPracticesSearch from "./CityPracticesSearch";
import CityCheckboxPanel from "./CityCheckboxPanel";


const PracticesFilterBlock = (props) => {
    const {
        isCity,
    } = props;

    return (
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
                            {
                                isCity ? <CityPracticesSearch/> : <PracticesSearch/>
                            }
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
                            {
                                isCity
                                    ?
                                    <CityCheckboxPanel filterType={'category'}/>
                                    :
                                    <CheckboxPanel filterType={'category'}/>
                            }
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
    )
}

PracticesFilterBlock.propTypes = {};

const mapStateToProps = ({practicesReducer}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PracticesFilterBlock);