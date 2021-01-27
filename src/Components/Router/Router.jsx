import React, {Suspense} from 'react';
import {Switch, Route, Redirct, Redirect} from 'react-router-dom';
import Preloader from "../Preloader/Preloader";
import {LastLocationProvider} from 'react-router-last-location';

const Home = React.lazy(() => import('../Pages/Home/Home'));
const Practices = React.lazy(() => import('../Pages/Practices/Practices'));
const PracticesItem = React.lazy(() => import('../Pages/Practices/PracticesItem/PracticesItem'));
const News = React.lazy(() => import('../Pages/News/News'));
const NewsItem = React.lazy(() => import('../Pages/News/NewsItem/NewsItem'));
const Error404 = React.lazy(() => import('../Pages/Error404/Error404'));


const Router = () => {
    return (
        <LastLocationProvider>
            <Suspense fallback={<Preloader/>}>
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={Home}
                    />
                    <Route
                        exact
                        path='/practices'
                        component={Practices}
                    />
                    <Route
                        exact
                        path='/practices/:id'
                        component={PracticesItem}
                    />
                    <Route
                        exact
                        path='/city-practices'
                        component={Practices}
                    />
                    <Route
                        exact
                        path='/city-practices/:id'
                        component={PracticesItem}
                    />
                    <Redirect
                        exact
                        push
                        from="/news"
                        to="/news/1"
                    />
                    <Route
                        exact
                        path='/news/:page'
                        component={News}
                    />
                    <Route
                        exact
                        path='/news/item/:id'
                        component={NewsItem}
                    />
                    <Route
                        path="*"
                        component={Error404}
                    />
                </Switch>
            </Suspense>
        </LastLocationProvider>
    )
}

export default Router;