import axios from "axios";
import api from "../assets/api";

export const SET_USER_WIDTH = '@@global/SET_USER_WIDTH';

export const setUserWidth = (userWidth) => ({
    type: SET_USER_WIDTH,
    userWidth,
});

export const fetchUserData = () => {
    return dispatch => {
        dispatch(fetchUserDataStarted());

        axios.get(api.userData)
            .then(res => {
                // throw new Error('error!');
                dispatch(fetchUserDataSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchUserDataFailure(err.message));
            });
    }
}

export const FETCH_USER_DATA_STARTED = '@@global/FETCH_USER_DATA_STARTED';

const fetchUserDataStarted = () => ({
    type: FETCH_USER_DATA_STARTED
});

export const FETCH_USER_DATA_SUCCESS = '@@global/FETCH_USER_DATA_SUCCESS';

const fetchUserDataSuccess = userData => ({
    type: FETCH_USER_DATA_SUCCESS,
    payload: {
        userData
    }
});

export const FETCH_USER_DATA_FAILURE = '@@global/FETCH_USER_DATA_FAILURE';

const fetchUserDataFailure = error => ({
    type: FETCH_USER_DATA_FAILURE,
    payload: {
        error
    }
});

export const TOGGLE_MENU_MOBILE = '@@global/TOGGLE_MENU_MOBILE';

export const toggleMenuMobile = (isOpenMenuMobile) => ({
    type: TOGGLE_MENU_MOBILE,
    isOpenMenuMobile,
});