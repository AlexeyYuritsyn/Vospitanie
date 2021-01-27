import './_last-news.scss'
import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {
    fetchLastNewsData,
} from '../../../../../actions/lastNewsAction';
import LastNewsItem from "./LastNewsItem";
import Preloader from "../../../../Preloader/Preloader";
import FetchError from "../../../../FetchError/FetchError";


const LastNewsList = (props) => {

    const {data} = props;

    LastNewsList.propTypes = {
        data: PropTypes.array.isRequired,
    };

    return (
        <div className="last-news-container">
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

const LastNews = (props) => {

    const {
        header,
        lastNewsData,
        fetchLastNewsData,
        loading,
        error,
    } = props;

    useEffect(() => {
        fetchLastNewsData();
    }, []);

    return (
        <div className="last-news container">
            <h3 className="home-page-block-header">{header}</h3>
            {loading && <Preloader/>}
            {lastNewsData && <LastNewsList data={lastNewsData} />}
            {error && <FetchError error={error} />}
            {!error && !lastNewsData && <h3 className="last-news-header">В этом блоке будут новости, но их еще не загрузили</h3>}
        </div>
    )
}

LastNews.propTypes = {
    lastNewsData: PropTypes.array.isRequired,
    fetchLastNewsData: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
};

const mapStateToProps = ({lastNewsReducer}) => ({
    lastNewsData: lastNewsReducer.lastNewsData,
    loading: lastNewsReducer.loading,
    error: lastNewsReducer.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchLastNewsData,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LastNews);