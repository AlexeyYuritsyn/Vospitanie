import update from 'immutability-helper';
import {
    SET_USER_WIDTH,
    FETCH_USER_DATA_STARTED,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE,
    TOGGLE_MENU_MOBILE,
} from '../actions/globalAction';


const initialStore = {
    userWidth: document.documentElement.clientWidth,
    userData: {},
    isOpenMenuMobile: false,
    loading: false,
    error: '',
};

export default function globalReducer(store = initialStore, action) {
    switch (action.type) {
        case SET_USER_WIDTH: {
            return update(store, {
                userWidth: {$set: action.userWidth},
            });
        }
        case FETCH_USER_DATA_STARTED:
            return update(store, {
                loading: {$set: true},
            });
        case FETCH_USER_DATA_SUCCESS:
            return update(store, {
                loading: {$set: false},
                error: {$set: ''},
                userData: {$set: action.payload.userData},
            });
        case FETCH_USER_DATA_FAILURE:
            return update(store, {
                loading: {$set: false},
                error: {$set: action.payload.error}
            });
        case TOGGLE_MENU_MOBILE: {
            return update(store, {
                isOpenMenuMobile: {$set: action.isOpenMenuMobile},
            });
        }
        default:
            return store;
    }
}