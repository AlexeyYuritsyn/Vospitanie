import update from 'immutability-helper';
import {
    SET_NEWS_COUNT,
    FETCH_NEWS_STARTED,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
} from '../actions/newsAction';


const initialStore = {
    newsCount: 0,
    newsData: [],
    loading: false,
    error: '',
};

export default function newsReducer(store = initialStore, action) {
    switch (action.type) {
        case SET_NEWS_COUNT: {
            return update(store, {
                newsCount: {$set: action.newsCount},
            });
        }
        case FETCH_NEWS_STARTED:
            return update(store, {
                loading: {$set: true},
            });
        case FETCH_NEWS_SUCCESS:
            return update(store, {
                loading: {$set: false},
                error: {$set: ''},
                newsData: {$set: action.payload.newsData},
            });
        case FETCH_NEWS_FAILURE:
            return update(store, {
                loading: {$set: false},
                error: {$set: action.payload.error}
            });
        default:
            return store;
    }
}