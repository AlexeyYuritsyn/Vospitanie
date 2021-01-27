import axios from "axios";
import api from "../assets/api";


export const fetchLastNewsData = () => {
    return dispatch => {
        dispatch(fetchLastNewsDataStarted());

        axios.get(api.lastNews)
            .then(res => {
                // throw new Error('error!');
                dispatch(fetchLastNewsDataSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchLastNewsDataFailure(err.message));
            });
    }
}

export const FETCH_LAST_NEWS_DATA_STARTED = '@@last-news/FETCH_LAST_NEWS_DATA_STARTED';

const fetchLastNewsDataStarted = () => ({
    type: FETCH_LAST_NEWS_DATA_STARTED
});

export const FETCH_LAST_NEWS_DATA_SUCCESS = '@@last-news/FETCH_LAST_NEWS_DATA_SUCCESS';

const fetchLastNewsDataSuccess = lastNewsData => ({
    type: FETCH_LAST_NEWS_DATA_SUCCESS,
    payload: {
        lastNewsData
    }
});

export const FETCH_LAST_NEWS_DATA_FAILURE = '@@last-news/FETCH_LAST_NEWS_DATA_FAILURE';

const fetchLastNewsDataFailure = error => ({
    type: FETCH_LAST_NEWS_DATA_FAILURE,
    payload: {
        error
    }
});