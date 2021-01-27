import './_rating.scss';
import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const RatingItem = (props) => {

    const {
        id,
        title,
        school_name,
        rating,
    } = props;

    const pageScrollToTop = () => {
        window.scroll(0, 0);
    };

    return (
        <li
            className="rating-item"
            onClick={pageScrollToTop}
        >
            <Link
                className="rating-item-link"
                to={`/practices/${id}`}
            >
                <h3 className="rating-item-title">{title}</h3>
                <p className="rating-item-author">{school_name}</p>
                <p className="rating-item-ratio">
                    Рейтинг: <span className="rating-item-ratio-number">{rating}</span>
                </p>
            </Link>
        </li>
    )
}

RatingItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    school_name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
};

export default RatingItem;

