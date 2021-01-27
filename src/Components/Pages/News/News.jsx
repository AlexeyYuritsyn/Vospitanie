import './_news.scss';
import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {
    fetchNewsCount,
    fetchNews,
} from '../../../actions/newsAction';
import LastNewsItem from "../Home/HomePageBlocks/LastNews/LastNewsItem";
import NewsPagination from "./NewsPagination/NewsPagination";
import Preloader from "../../Preloader/Preloader";
import FetchError from "../../FetchError/FetchError";


const NewsList = (props) => {

    const {data} = props;

    NewsList.propTypes = {
        data: PropTypes.array.isRequired,
    };

    return (
        <div className="news-page-container container">
            {data.map(item =>
                <LastNewsItem
                    key={item.id}
                    id={item.id}
                    description={item.description}
                    image={item.image}
                    title={item.title}
                    date={item.date_created}
                />
            )}
        </div>
    )
}

const News = (props) => {

    const {
        newsData,
        fetchNews,
        newsCount,
        fetchNewsCount,
        loading,
        error,
    } = props;

    const {page} = useParams();

    useEffect(() => {
        fetchNewsCount();
    }, []);

    const pageCount = newsCount / 8;

    useEffect(() => {
        fetchNews(page);
    }, [page]);

    return (
        <div className="news-page">
            {loading && <Preloader/>}
            {newsData && <NewsList data={newsData}/>}
            {error && <FetchError error={error} />}
            {pageCount > 1 && <NewsPagination
                currentPage={page}
                pageCount={pageCount}
            />}
        </div>
    )
}

News.propTypes = {
    newsCount: PropTypes.number.isRequired,
    fetchNewsCount: PropTypes.func.isRequired,
    newsData: PropTypes.array.isRequired,
    fetchNews: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
};

const mapStateToProps = ({newsReducer}) => ({
    newsCount: newsReducer.newsCount,
    newsData: newsReducer.newsData,
    error: newsReducer.error,
    loading: newsReducer.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchNewsCount,
    fetchNews,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(News);