import {createStore, applyMiddleware, compose } from 'redux';
import {createBrowserHistory} from 'history';
// import {routerMiddleware} from 'connected-react-router';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import initReducers from '../reducers';
// import middlewares from './../middlewares';
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'practices',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: [
        // 'navigationReducer.menuItemsList',
    ],
    blacklist: [
        'globalReducer.isOpenMenuMobile',
    ],
};

export const history = createBrowserHistory();

function initStore() {
    const initialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducers(history)),
        initialStore,
        compose(
            applyMiddleware(thunk),
            // applyMiddleware(routerMiddleware(history), ...middlewares),
            // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
            window.__REDUX_DEVTOOLS_EXTENSION__  ?  window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
        ),
    );

    const persistor = persistStore(store);

    return {store, persistor};
}

export default initStore;