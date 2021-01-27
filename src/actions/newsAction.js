import axios from "axios";
import api from "../assets/api";


export const fetchNewsCount = () => {
    return dispatch => {

        axios.get(api.newsCount)
            .then(res => {
                // throw new Error('error!');
                dispatch(setNewsCount(res.data.newsPageCount));
            })
            .catch(err => {
                console.log(err.message);
            });
    }
}

export const SET_NEWS_COUNT = '@@news/SET_NEWS_COUNT';

export const setNewsCount = (newsCount) => ({
    type: SET_NEWS_COUNT,
    newsCount,
});

export const fetchNews = (page) => {
    return dispatch => {
        dispatch(fetchNewsStarted());

        const url = `${api.allNews}?page=${page}`;

        axios.get(url)
            .then(res => {
                // throw new Error('error!');
                dispatch(fetchNewsSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchNewsFailure(err.message));
            });
    }
}

export const FETCH_NEWS_STARTED = '@@news/FETCH_NEWS_STARTED';

const fetchNewsStarted = () => ({
    type: FETCH_NEWS_STARTED
});

export const FETCH_NEWS_SUCCESS = '@@news/FETCH_NEWS_SUCCESS';

const fetchNewsSuccess = newsData => ({
    type: FETCH_NEWS_SUCCESS,
    payload: {
        newsData
    }
});

export const FETCH_NEWS_FAILURE = '@@news/FETCH_NEWS_FAILURE';

const fetchNewsFailure = error => ({
    type: FETCH_NEWS_FAILURE,
    payload: {
        error
    }
});