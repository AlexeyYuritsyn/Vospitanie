import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import initStore, {history} from './utils/store';
import {ConnectedRouter} from 'connected-react-router';
import {PersistGate} from 'redux-persist/integration/react';
import Router from "./Components/Router/Router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


const {store, persistor} = initStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <Header />
                <div className="main">
                    <Router />
                </div>
                <Footer />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);