import '../../Practices/Pagination/_pagination.scss';
import React from "react";
import {useHistory} from 'react-router-dom';
import ReactPaginate from "react-paginate";

const NewsPagination = (props) => {

    const {pageCount} = props;

    const history = useHistory();

    const handlePageClick = (page) => {
        history.push(`/news/${page.selected + 1}`);
    }

    return(
        <div className="pagination-wrap container news-pagination">
            <div className="pagination-pages-block">
                <ReactPaginate
                    previousLabel={'назад'}
                    nextLabel={'вперед'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={4}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    )
}

export default NewsPagination;