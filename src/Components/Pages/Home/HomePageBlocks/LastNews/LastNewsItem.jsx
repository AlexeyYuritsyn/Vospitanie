import './_last-news.scss'
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";


const LastNewsItem = (props) => {

    const {
        id,
        title,
        description,
        image,
        date,
    } = props;

    const pageScrollToTop = () => {
        window.scroll(0, 0);
    };

    return (
        <Link
            className="last-news-item"
            to={`/news/item/${id}`}
            onClick={pageScrollToTop}
        >
            <img
                className="last-news-item-image"
                loading="lazy"
                src={image}
                alt={title}
            />
            <div className="last-news-item-content">
                <p className="last-news-item-date">
                    {date}
                </p>
                <h3 className="last-news-item-title">
                    {title}
                </h3>
                <p className="last-news-item-description">
                    {description}
                </p>
            </div>
        </Link>
    )
}

LastNewsItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default LastNewsItem;