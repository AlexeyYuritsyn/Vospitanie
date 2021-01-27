import axios from "axios";
import api from "../assets/api";


export const fetchNewsItemData = (id) => {
    return dispatch => {

        const url = `${api.newsItem}?id=${id}`;

        dispatch(fetchNewsItemDataStarted());

        axios.get(url)
            .then(res => {
                // throw new Error('error!');
                dispatch(fetchNewsItemDataSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchNewsItemDataFailure(err.message));
            });
    }
}

export const FETCH_NEWS_ITEM_DATA_STARTED = '@@global/FETCH_NEWS_ITEM_DATA_STARTED';

const fetchNewsItemDataStarted = () => ({
    type: FETCH_NEWS_ITEM_DATA_STARTED
});

export const FETCH_NEWS_ITEM_DATA_SUCCESS = '@@global/FETCH_NEWS_ITEM_DATA_SUCCESS';

const fetchNewsItemDataSuccess = newsItemData => ({
    type: FETCH_NEWS_ITEM_DATA_SUCCESS,
    payload: {
        newsItemData
    }
});

export const FETCH_NEWS_ITEM_DATA_FAILURE = '@@global/FETCH_NEWS_ITEM_DATA_FAILURE';

const fetchNewsItemDataFailure = error => ({
    type: FETCH_NEWS_ITEM_DATA_FAILURE,
    payload: {
        error
    }
});