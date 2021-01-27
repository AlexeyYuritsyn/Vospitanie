import update from 'immutability-helper';
import {
    FETCH_NEWS_ITEM_DATA_STARTED,
    FETCH_NEWS_ITEM_DATA_SUCCESS,
    FETCH_NEWS_ITEM_DATA_FAILURE,
} from "../actions/newsItemAction";


const initialStore = {
    newsItemData: {},
    loading: false,
    error: '',
};

export default function newsReducer(store = initialStore, action) {
    switch (action.type) {
        case FETCH_NEWS_ITEM_DATA_STARTED:
            return update(store, {
                loading: {$set: true},
            });
        case FETCH_NEWS_ITEM_DATA_SUCCESS:
            return update(store, {
                loading: {$set: false},
                error: {$set: ''},
                newsItemData: {$set: action.payload.newsItemData},
            });
        case FETCH_NEWS_ITEM_DATA_FAILURE:
            return update(store, {
                loading: {$set: false},
                error: {$set: action.payload.error}
            });
        default:
            return store;
    }
}