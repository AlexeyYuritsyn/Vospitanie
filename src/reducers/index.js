import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import globalReducer from "./globalReducer";
import practicesReducer from "./practicesReducer";
import cityPracticesReducer from "./cityPracticesReducer";
import practicesItemReducer from "./practicesItemReducer";
import ratingTopReducer from './ratingTopReducer';
import lastNewsReducer from './lastNewsReducer';
import newsReducer from './newsReducer';
import newsItemReducer from "./newsItemReducer";


export default (history) => combineReducers({
    router: connectRouter(history),
    globalReducer,
    practicesReducer,
    cityPracticesReducer,
    practicesItemReducer,
    homePageReducer: ratingTopReducer,
    lastNewsReducer,
    newsReducer,
    newsItemReducer,
});