import './_pagination.scss';
import React, {useState} from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import {
    setPageSize,
    setScrollMode,
    changePracticesFilters,
    setPracticesCurrentPage,
} from '../../../../actions/cityPracticesAction';
import ReactPaginate from 'react-paginate';
import infinityIcon from './infinity.svg';


export const CityPagination = (props) => {

    const {
        pageCount,
        currentPage,
        infiniteScroll,
        userWidth,
        totalItemsCount,
        setPageSize,
        setScrollMode,
        changePracticesFilters,
        setPracticesCurrentPage,
    } = props;

    const [activeButtonId, setActiveButtonId] = useState(1);
    const minQuantity = 8;

    const quantityButtons = [
        {id: 1, quantity: 8, infinite: false, text: '8'},
        {id: 2, quantity: 8, infinite: true, text: <img src={infinityIcon} alt="все"/>}
    ];

    const handlePageClick = page => {
        window.scroll(0, 0);
        setPracticesCurrentPage(page.selected);
    }

    const handlePageSize = (item) => {
        if (item.infinite) {
            window.scroll(0, 0);
        }
        setActiveButtonId(item.id);
        setScrollMode(item.infinite);
        setPageSize(item.quantity);
        changePracticesFilters();
    }

    return (
        <div className="pagination-wrap">
            <div className="pagination-pages-block">
                {
                    !infiniteScroll && pageCount > 1 &&
                    <ReactPaginate
                        previousLabel={'назад'}
                        nextLabel={'вперед'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        forcePage={currentPage}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={4}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                }
            </div>
            {
                userWidth > 1080 && totalItemsCount > minQuantity &&
                <div className="pagination-quantity-block">
                    <div className="pagination-quantity-text">Показывать</div>
                    {
                        quantityButtons.map(item => (
                            <div className={item.id === activeButtonId
                                ? 'pagination-quantity-button active-quantity'
                                : 'pagination-quantity-button'}
                                 key={item.id}
                                 onClick={() => {
                                     handlePageSize(item)
                                 }}
                            >{item.text}</div>
                        ))
                    }
                </div>
            }
        </div>
    );
};

CityPagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    infiniteScroll: PropTypes.bool.isRequired,
    setPageSize: PropTypes.func.isRequired,
    setScrollMode: PropTypes.func.isRequired,
    changePracticesFilters: PropTypes.func.isRequired,
    setPracticesCurrentPage: PropTypes.func.isRequired,
};

const mapStateToProps = ({cityPracticesReducer}) => ({
    currentPage: cityPracticesReducer.currentPage,
    infiniteScroll: cityPracticesReducer.infiniteScroll,
    totalItemsCount: cityPracticesReducer.totalItemsCount,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setPageSize,
    setScrollMode,
    changePracticesFilters,
    setPracticesCurrentPage,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CityPagination);