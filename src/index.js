import React from 'react';
import {
    render
} from 'react-dom';
import {
    Provider
} from 'react-redux';
import {
    Router,
    browserHistory
} from 'react-router';
import {
    compose
} from 'lodash/fp';

import './base.css';
import 'react-select/dist/react-select.css';
import {
    receivePage as receivePageUserLocation
} from 'actions/ui/userLocation';
// import {
//     receivePage as receivePageTaskLocationByStatus
// } from 'actions/ui/taskLocationByStatus';
import {
    receivePage as receivePageCompletedTasksHistogram
} from 'actions/ui/completedTaskHistogram';

import Root from 'containers/Root';
import App from 'containers/App';
import Login from 'containers/Login';
import RecoveryPassword from 'containers/RecoveryPassword';
import NotificationContainer from 'containers/Notification';

import Overview from 'containers/Overview';
import Tasks from 'containers/Tasks';
import GoFundis from 'containers/GoFundis';
import Subscribers from 'containers/Subscribers';

import {
    createStore
} from 'store';

const store = createStore();

const routes = {
    path: '/',
    component: Root,
    childRoutes: [
        {
            childRoutes: [
                {
                    path: 'login',
                    component: Login
                },
                {
                    path: 'restore-password(/:code)',
                    component: RecoveryPassword
                }
            ]
        },
        {
            component: App,
            indexRoute: {
                onEnter(nextState, replace) {
                    replace('/dashboard/overview');
                }
            },
            childRoutes: [
                {
                    path: 'logout',
                    onEnter: () => {}
                },
                {
                    onEnter: compose(compose(
                        store.dispatch,
                        receivePageUserLocation
                        ), compose(
                        store.dispatch,
                        receivePageCompletedTasksHistogram
                    )),
                    // onEnter: compose(
                    //     store.dispatch,
                    //     receivePageUserLocation
                    // ),
                    path: '/dashboard/overview',
                    component: props => (
                        <Overview {...props} />
                    )
                },
                {
                    onEnter: compose(
                        store.dispatch,
                        receivePageCompletedTasksHistogram
                    ),
                    path: '/dashboard/tasks',
                    component: props => (
                        <Tasks {...props} />
                    )
                },
                {
                    path: '/dashboard/gofundis',
                    component: props => (
                        <GoFundis {...props} />

                    )
                },
                {
                    path: '/dashboard/subscribers',
                    component: props => (
                        <Subscribers {...props} />
                    )
                }
            ]
        }
    ]
};

const DevTools = __PRODUCTION__ ? () => null : require('containers/DevTools').default;

render(
    (
        <Provider store={store}>
            <div>
                <Router history={browserHistory} routes={routes} />
                <NotificationContainer />
                <DevTools />
            </div>
        </Provider>
    ),
    document.getElementById('mount')
);
