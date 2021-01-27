import './_news-item.scss';
import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {
    fetchNewsItemData,
} from '../../../../actions/newsItemAction';
import Preloader from "../../../Preloader/Preloader";
import FetchError from "../../../FetchError/FetchError";


const NewsItemContent = (props) => {

    const {data} = props;

    return (
        <div className="news-item-container container">
            <img
                className="news-item-image"
                src={data.image}
                alt={data.title}
            />
            <div className="news-item-content-block">
                <p className="news-item-date">
                    {data.date_created}
                </p>
                <h3 className="news-item-title">
                    {data.title}
                </h3>
                <p
                    className="news-item-content"
                    dangerouslySetInnerHTML={{__html: data.content}}
                />
            </div>
        </div>
    )
}

const NewsItem = (props) => {

    const {
        newsItemData,
        fetchNewsItemData,
        loading,
        error,
    } = props;

    const {id} = useParams();

    useEffect(() => {
        fetchNewsItemData(id);
    }, [id]);

    return (
        <div className="news-item">
            {loading && <Preloader/>}
            {newsItemData && <NewsItemContent data={newsItemData} />}
            {error && <FetchError error={error} />}
        </div>
    )
}

NewsItem.propTypes = {
    newsItemData: PropTypes.object.isRequired,
    fetchNewsItemData: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
};

const mapStateToProps = ({newsItemReducer}) => ({
    newsItemData: newsItemReducer.newsItemData,
    loading: newsItemReducer.loading,
    error: newsItemReducer.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchNewsItemData,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewsItem);