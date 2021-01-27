import './_rating.scss';
import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {
    fetchRatingData,
} from '../../../../../actions/ratingTopAction';
import RatingItem from "./RatingItem";
import Preloader from "../../../../Preloader/Preloader";
import FetchError from "../../../../FetchError/FetchError";


const RatingList = (props) => {

    const {data} = props;

    return (
        <ul className="rating-list">
            {data.map((item) =>
                <RatingItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    school_name={item.school_name}
                    rating={item.rating}
                />
            )}
        </ul>
    )
}

const Rating = (props) => {

    const {
        header,
        ratingData,
        fetchRatingData,
        loading,
        error,
    } = props;

    useEffect(() => {
        fetchRatingData();
    }, []);

    return (
        <div className="rating container">
            <h3 className="home-page-block-header">{header}</h3>
            {loading && <Preloader/>}
            {ratingData && <RatingList data={ratingData}/>}
            {error && <FetchError error={error} />}
            {!error && !ratingData && <h3 className="rating-item-header">У нас еще пока недостаточно данных для составления рейтинга проектов. Данные скоро появятся в этом блоке</h3>}
        </div>
    )
}

Rating.propTypes = {
    ratingData: PropTypes.array.isRequired,
    fetchRatingData: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
};

const mapStateToProps = ({homePageReducer}) => ({
    ratingData: homePageReducer.ratingData,
    error: homePageReducer.error,
    loading: homePageReducer.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchRatingData,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Rating);
