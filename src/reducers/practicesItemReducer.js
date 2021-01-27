import update from 'immutability-helper';
import {
    SET_COMMENTS,
    SET_LIKES_COUNT,
    SET_PRACTICES_ITEM_CONTENT,
    TOGGLE_IS_LIKE_ADDED,
    TOGGLE_IS_ERROR,
} from '../actions/practicesItemAction';


const initialStore = {
    practicesItemContent: {
        commentsCount: 0,
        benefit: '',
        date_change: '',
        educational_practices_file: [],
        educational_practices_gallery: [],
        educational_practices_video: [],
        fio: '',
        id: null,
        implementation_project: '',
        likeCount: 0,
        likeDisable: true,
        links: '',
        nomination_name: '',
        project_idea: '',
        school_name: '',
        title: '',
        rating: '',
        type: 1,
    },
    comments: [],
    likesCount: 0,
    isLikeAdded: false,
    isSuccessful: false,
};

export default function practicesItemReducer(store = initialStore, action) {
    switch (action.type) {
        case SET_PRACTICES_ITEM_CONTENT: {
            return update(store, {
                practicesItemContent: {$set: action.practicesItemContent},
            });
        }
        case SET_COMMENTS: {
            return update(store, {
                comments: {$set: action.comments},
            });
        }
        case SET_LIKES_COUNT: {
            return update(store, {
                likesCount: {$set: action.likesCount},
            });
        }
        case TOGGLE_IS_LIKE_ADDED: {
            return update(store, {
                isLikeAdded: {$set: action.isLikeAdded},
            });
        }
        case TOGGLE_IS_ERROR: {
            return update(store, {
                isSuccessful: {$set: action.isSuccessful},
            });
        }
        default:
            return store;
    }
}