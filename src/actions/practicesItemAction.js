import api from "../assets/api";
import axios from "axios";

export const SET_PRACTICES_ITEM_CONTENT = '@@practicesItem/SET_PRACTICES_ITEM_CONTENT';

export const setPracticesItemContent = (practicesItemContent) => ({
    type: SET_PRACTICES_ITEM_CONTENT,
    practicesItemContent,
});

export const SET_COMMENTS = '@@practicesItem/SET_COMMENTS';

export const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments,
});

export const SET_LIKES_COUNT = '@@practicesItem/SET_LIKES_COUNT';

export const setLikesCount = (likesCount) => ({
    type: SET_LIKES_COUNT,
    likesCount,
});

export const TOGGLE_IS_LIKE_ADDED = '@@practicesItem/TOGGLE_IS_LIKE_ADDED';

export const toggleIsLikeAdded = (isLikeAdded) => ({
    type: TOGGLE_IS_LIKE_ADDED,
    isLikeAdded,
});

export const TOGGLE_IS_ERROR = '@@practicesItem/TOGGLE_IS_ERROR';

export const toggleIsError = (isSuccessful) => ({
    type: TOGGLE_IS_ERROR,
    isSuccessful,
});


export const setInitialPracticesItemContent = (practicesItemId, practicesItemPath) => {
    return (dispatch, getState) => {
        const content = getState().practicesItemReducer.practicesItemContent;

        const practiceType = () => {
            if (practicesItemPath === '/city-practices/:id') {
                return 2
            } else return 1
        }

        const contentUrl = `${api.practicesItem}?id=${practicesItemId}&type=${practiceType()}`;
        const commentsUrl = `${api.practicesComments}?id=${practicesItemId}`;

        if (practicesItemId !== content.id || content.length === 0) {
            const fetchData = async () => {
                try {
                    const result = await axios(
                        contentUrl,
                    );
                    dispatch(setPracticesItemContent(result.data));
                    dispatch(setLikesCount(result.data.likeCount));

                    dispatch(toggleIsError(result.data.length === 0));

                    const result2 = await axios(
                        commentsUrl,
                    );
                    dispatch(setComments(result2.data));
                } catch (error) {
                    dispatch(toggleIsError(true));
                }
            };
            fetchData();
        }
    }
};

export const addPracticeLike = (practicesItemId) => {
    return (dispatch) => {
        const addLikeUrl = `${api.addLikeForPracticeUrl}?id=${practicesItemId}`;

        const fetchData = async () => {
            const result = await axios(
                addLikeUrl,
            );
            dispatch(setLikesCount(result.data.likeCount));
        };
        fetchData();
    }
};