import api from "../assets/api";
import axios from "axios";

export const SET_PRACTICES_QUERY = '@@cityPractices/SET_PRACTICES_QUERY';

export const setPracticesQuery = (query) => ({
    type: SET_PRACTICES_QUERY,
    query,
});

export const SET_PRACTICES_DATA = '@@cityPractices/SET_PRACTICES_DATA';

export const setPracticesData = (data) => ({
    type: SET_PRACTICES_DATA,
    data,
});

export const SET_MORE_PRACTICES_DATA = '@@cityPractices/SET_MORE_PRACTICES_DATA';

export const setMorePracticesData = (data) => ({
    type: SET_MORE_PRACTICES_DATA,
    data,
});

export const SET_TOTAL_ITEMS_COUNT = '@@cityPractices/SET_TOTAL_ITEMS_COUNT';

export const setTotalItemsCount = (totalItemsCount) => ({
    type: SET_TOTAL_ITEMS_COUNT,
    totalItemsCount,
});

export const SET_FILTER_URL = '@@cityPractices/SET_FILTER_URL';

export const setFilterUrl = (filterUrlPart, partString) => ({
    type: SET_FILTER_URL,
    filterUrlPart,
    partString,
});

export const SET_EVENT_TYPE_FILTER = '@@cityPractices/SET_EVENT_TYPE_FILTER';

export const setEventTypeFilter = (checkedFilter) => ({
    type: SET_EVENT_TYPE_FILTER,
    checkedFilter,
});

export const SET_FOR_WHOM_FILTER = '@@cityPractices/SET_FOR_WHOM_FILTER';

export const setForWhomFilter = (checkedFilter) => ({
    type: SET_FOR_WHOM_FILTER,
    checkedFilter,
});

export const SET_SELECTED_OPTION = '@@cityPractices/SET_SELECTED_OPTION';

export const setSelectedOption = (selectedOption) => ({
    type: SET_SELECTED_OPTION,
    selectedOption,
});

export const DELETE_FILTER_URL = '@@cityPractices/DELETE_FILTER_URL';

export const deleteFilterUrl = (filterUrlPart) => ({
    type: DELETE_FILTER_URL,
    filterUrlPart
});

export const SET_SELECT_URL_PART = '@@cityPractices/SET_SELECT_URL_PART';

export const setSelectUrlPart = (selectUrlPart) => ({
    type: SET_SELECT_URL_PART,
    selectUrlPart,
});

export const SET_PAGE_SIZE = '@@cityPractices/SET_PAGE_SIZE';

export const setPageSize = (pageSize) => ({
    type: SET_PAGE_SIZE,
    pageSize,
});

export const SET_CURRENT_PAGE = '@@cityPractices/SET_CURRENT_PAGE';

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const SET_SCROLL_MODE = '@@cityPractices/SET_SCROLL_MODE';

export const setScrollMode = (infiniteScroll) => ({
    type: SET_SCROLL_MODE,
    infiniteScroll,
});

export const SET_FILTER_SHOW = '@@cityPractices/SET_FILTER_SHOW';

export const setFilterShow = (filterShow) => ({
    type: SET_FILTER_SHOW,
    filterShow,
});


export const setInitialPracticesData = () => {
    return (dispatch, getState) => {
        const eventsList = getState().cityPracticesReducer.data;
        const query = getState().cityPracticesReducer.query;
        const currentPage = getState().cityPracticesReducer.currentPage;
        const filtersList = getState().cityPracticesReducer.filterUrl.join('');

        const allFiltersUrl = `${api.practicesList}?title=${query}&page=${currentPage + 1}&type=2`;
        const quantityUrl = `${api.practicesCount}?title=${query}${filtersList}&type=2`;

        if (eventsList.length === 0 && query === '' && currentPage === 0 && filtersList.length === 0) {
            const fetchData = async () => {
                const result = await axios(
                    allFiltersUrl,
                );
                dispatch(setPracticesData(result.data));

                const result2 = await axios(
                    quantityUrl,
                );
                dispatch(setTotalItemsCount(result2.data.practicesPageCount));
            };
            fetchData();
        }
    }
};

export const uploadPracticesData = () => {
    return (dispatch, getState) => {
        const query = getState().cityPracticesReducer.query;
        const page = getState().cityPracticesReducer.currentPage + 1;
        const filtersList = getState().cityPracticesReducer.filterUrl.join('');

        dispatch(setCurrentPage(page));

        const allFiltersUrl = `${api.practicesList}?title=${query}${filtersList}&page=${page + 1}&type=2`;

        const fetchData = async () => {
            const result = await axios(
                allFiltersUrl,
            );
            dispatch(setMorePracticesData(result.data));
        };
        fetchData();
    }
};

export const setPracticesCurrentPage = (page) => {
    return (dispatch, getState) => {
        const query = getState().cityPracticesReducer.query;
        const filtersList = getState().cityPracticesReducer.filterUrl.join('');

        const allFiltersUrl = `${api.practicesList}?title=${query}${filtersList}&page=${page + 1}&type=2`;

        dispatch(setCurrentPage(page));

        const fetchData = async () => {
            const result = await axios(
                allFiltersUrl,
            );
            dispatch(setPracticesData(result.data));
        };
        fetchData();
    }
};

export const setPracticesPageSize = (scrollMode, pageSize) => {
    return (dispatch, getState) => {
        const page = 0;
        const currentScrollMode = getState().cityPracticesReducer.infiniteScroll;
        const query = getState().cityPracticesReducer.query;
        const filtersList = getState().cityPracticesReducer.filterUrl.join('');

        const allFiltersUrl = `${api.practicesList}?title=${query}${filtersList}&page=${page + 1}&type=2`;

        if (currentScrollMode !== scrollMode) {
            const fetchData = async () => {
                const result = await axios(
                    allFiltersUrl,
                );
                dispatch(setPracticesData(result.data));
                dispatch(setCurrentPage(page));
                dispatch(setScrollMode(scrollMode));
            };
            fetchData();
        }
    }
};

export const changePracticesFilters = () => {
    return (dispatch, getState) => {
        const page = 0;
        const query = getState().cityPracticesReducer.query;
        const filtersList = getState().cityPracticesReducer.filterUrl.join('');

        const allFiltersUrl = `${api.practicesList}?title=${query}${filtersList}&page=${page + 1}&type=2`;
        const quantityUrl = `${api.practicesCount}?title=${query}${filtersList}&type=2`;

        dispatch(setCurrentPage(page));

        const fetchData = async () => {
            const result = await axios(
                allFiltersUrl,
            );
            dispatch(setPracticesData(result.data));

            const result2 = await axios(
                quantityUrl,
            );
            dispatch(setTotalItemsCount(result2.data.practicesPageCount));
        };
        fetchData();
    }
};