import update from 'immutability-helper';
import {
    FETCH_LAST_NEWS_DATA_STARTED,
    FETCH_LAST_NEWS_DATA_SUCCESS,
    FETCH_LAST_NEWS_DATA_FAILURE,
} from '../actions/lastNewsAction';


const initialStore = {
    lastNewsData: [],
    loading: false,
    error: '',
};

export default function lastNewsReducer(store = initialStore, action) {
    switch (action.type) {
        case FETCH_LAST_NEWS_DATA_STARTED:
            return update(store, {
                loading: {$set: true},
            });
        case FETCH_LAST_NEWS_DATA_SUCCESS:
            return update(store, {
                loading: {$set: false},
                error: {$set: ''},
                lastNewsData: {$set: action.payload.lastNewsData},
            });
        case FETCH_LAST_NEWS_DATA_FAILURE:
            return update(store, {
                loading: {$set: false},
                error: {$set: action.payload.error}
            });
        default:
            return store;
    }
}