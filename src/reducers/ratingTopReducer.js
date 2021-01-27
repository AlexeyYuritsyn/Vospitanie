import update from 'immutability-helper';
import {
    FETCH_RATING_DATA_STARTED,
    FETCH_RATING_DATA_SUCCESS,
    FETCH_RATING_DATA_FAILURE,
} from "../actions/ratingTopAction";


const initialStore = {
    ratingData: [],
    loading: false,
    error: '',
};

export default function ratingTopReducer(store = initialStore, action) {
    switch (action.type) {
        case FETCH_RATING_DATA_STARTED:
            return update(store, {
                loading: {$set: true},
            });
        case FETCH_RATING_DATA_SUCCESS:
            return update(store, {
                loading: {$set: false},
                error: {$set: ''},
                ratingData: {$set: action.payload.ratingData},
            });
        case FETCH_RATING_DATA_FAILURE:
            return update(store, {
                loading: {$set: false},
                error: {$set: action.payload.error}
            });
        default:
            return store;
    }
}