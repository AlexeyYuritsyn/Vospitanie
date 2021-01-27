import update from 'immutability-helper';
import {
    SET_PRACTICES_QUERY,
    SET_PRACTICES_DATA,
    SET_TOTAL_ITEMS_COUNT,
    SET_MORE_PRACTICES_DATA,
    SET_FILTER_URL,
    SET_SELECT_URL_PART,
    SET_CURRENT_PAGE,
    SET_PAGE_SIZE,
    SET_SCROLL_MODE,
    SET_FILTER_SHOW,
    DELETE_FILTER_URL,
    SET_EVENT_TYPE_FILTER,
    SET_FOR_WHOM_FILTER,
    SET_SELECTED_OPTION,
} from '../actions/practicesAction';


const initialStore = {
    data: [],
    totalItemsCount: 0,
    query: '',
    eventTypeFilters: [],
    forWhomFilters: [],
    filterUrl: [],
    selectedOption: null,
    selectUrlPart: '',
    pageSize: 8,
    currentPage: 0,
    infiniteScroll: false,
    filterShow: false,
};

export default function practicesReducer(store = initialStore, action) {
    switch (action.type) {
        case SET_EVENT_TYPE_FILTER: {
            return update(store, {
                eventTypeFilters: {$set: action.checkedFilter},
            });
        }
        case SET_FOR_WHOM_FILTER: {
            return update(store, {
                forWhomFilters: {$set: action.checkedFilter},
            });
        }
        case SET_SELECTED_OPTION: {
            return update(store, {
                selectedOption: {$set: action.selectedOption},
            });
        }
        case SET_SELECT_URL_PART: {
            return update(store, {
                selectUrlPart: {$set: action.selectUrlPart},
            });
        }
        case DELETE_FILTER_URL: {
            return update(store, {
                filterUrl: {$set: action.filterUrlPart},
            });
        }
        case SET_FILTER_URL: {
            let findItem = store.filterUrl.findIndex( item => item === action.partString);
            if (findItem !== -1) {
                return update(store, {
                    filterUrl: {$splice: [[findItem, 1]]},
                })
            } else {
                return update(store, {
                    filterUrl: {$push: action.filterUrlPart},
                })
            }
        }
        case SET_PRACTICES_QUERY: {
            return update(store, {
                query: {$set: action.query},
            });
        }
        case SET_PRACTICES_DATA: {
            return update(store, {
                data: {$set: action.data},
            });
        }
        case SET_MORE_PRACTICES_DATA: {
            return update(store, {
                data: {$push: action.data},

            });
        }
        case SET_TOTAL_ITEMS_COUNT: {
            return update(store, {
                totalItemsCount: {$set: action.totalItemsCount},
            });
        }
        case SET_PAGE_SIZE: {
            return update(store, {
                pageSize: {$set: action.pageSize},
            });
        }

        case SET_CURRENT_PAGE: {
            return update(store, {
                currentPage: {$set: action.currentPage},
            });
        }
        case SET_SCROLL_MODE: {
            return update(store, {
                infiniteScroll: {$set: action.infiniteScroll},
            });
        }
        case SET_FILTER_SHOW: {
            return update(store, {
                filterShow: {$set: action.filterShow},
            });
        }
        default:
            return store;
    }
}