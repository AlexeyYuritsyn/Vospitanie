import api from "../assets/api";
import axios from 'axios';


export const fetchRatingData = () => {
    return dispatch => {
        dispatch(fetchRatingDataStarted());

        axios.get(api.rating)
            .then(res => {
                // throw new Error('error!');
                dispatch(fetchRatingDataSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchRatingDataFailure(err.message));
            });
    }
}

export const FETCH_RATING_DATA_STARTED = '@@home-page/FETCH_RATING_DATA_STARTED';

const fetchRatingDataStarted = () => ({
    type: FETCH_RATING_DATA_STARTED
});

export const FETCH_RATING_DATA_SUCCESS = '@@home-page/FETCH_RATING_DATA_SUCCESS';

const fetchRatingDataSuccess = ratingData => ({
    type: FETCH_RATING_DATA_SUCCESS,
    payload: {
        ratingData
    }
});

export const FETCH_RATING_DATA_FAILURE = '@@home-page/FETCH_RATING_DATA_FAILURE';

const fetchRatingDataFailure = error => ({
    type: FETCH_RATING_DATA_FAILURE,
    payload: {
        error
    }
});