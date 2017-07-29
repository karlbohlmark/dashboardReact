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
} from 'actions/queryData/userLocation';
import {
    receivePage as receivePageGetOverviewStats
} from 'actions/queryData/getOverviewStats';
import {
    receivePage as receivePageTaskLocationByStatus
} from 'actions/queryData/taskLocationByStatus';
import {
    receivePage as receivePageTaskLocationByCategory
} from 'actions/queryData/taskLocationByCategory';
import {
    receivePage as receivePageCompletedTasksHistogram
} from 'actions/queryData/completedTaskHistogram';
import {
    receivePage as receivePageListDashboardCategories
} from 'actions/queryData/listDashboardCategories';
import {
    receivePage as receivePageGetTasksHighlights
} from 'actions/queryData/getTasksHighlights';
import {
    receivePage as receivePageActiveGoFundis
} from 'actions/queryData/activeGoFundis';
import {
    receivePage as receivePageSubscribers
} from 'actions/queryData/subscribers';
import {
    receivePage as receivePageSubscribersReturning
} from 'actions/queryData/subscribersReturning';
import {
    receivePage as receivePageSubscribersRatingBreakdown
} from 'actions/queryData/subscribersRatingBreakdown';
import {
    receivePage as receivePageSubscribersSharePerArea
} from 'actions/queryData/subscribersSharePerArea';
import {
    receivePage as receivePageGoFundisStatuses
} from 'actions/queryData/goFundisStatuses';

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
                        receivePageGetOverviewStats
                        ), compose(
                        store.dispatch,
                        receivePageTaskLocationByCategory
                        ), compose(
                        store.dispatch,
                        receivePageTaskLocationByStatus
                        ), compose(
                        store.dispatch,
                        receivePageListDashboardCategories
                        ), compose(
                        store.dispatch,
                        receivePageCompletedTasksHistogram
                    )),
                    path: '/dashboard/overview',
                    component: props => (
                        <Overview {...props} />
                    )
                },
                {
                    onEnter: compose(compose(
                        store.dispatch,
                        receivePageGetTasksHighlights
                    ), compose(
                        store.dispatch,
                        receivePageGetOverviewStats
                    ), compose(
                        store.dispatch,
                        receivePageTaskLocationByStatus
                    ), compose(
                        store.dispatch,
                        receivePageListDashboardCategories
                    ), compose(
                        store.dispatch,
                        receivePageCompletedTasksHistogram
                    )),
                    path: '/dashboard/tasks',
                    component: props => (
                        <Tasks {...props} />
                    )
                },
                {
                    onEnter: compose(compose(
                        store.dispatch,
                        receivePageActiveGoFundis
                        ), compose(
                        store.dispatch,
                        receivePageGoFundisStatuses
                        ), compose(
                        store.dispatch,
                        receivePageGetOverviewStats
                        ), compose(
                        store.dispatch,
                        receivePageListDashboardCategories
                    )),
                    path: '/dashboard/gofundis',
                    component: props => (
                        <GoFundis {...props} />

                    )
                },
                {
                    onEnter: compose(compose(
                        store.dispatch,
                        receivePageSubscribersSharePerArea
                        ), compose(
                        store.dispatch,
                        receivePageSubscribersRatingBreakdown
                        ), compose(
                        store.dispatch,
                        receivePageSubscribersReturning
                        ), compose(
                        store.dispatch,
                        receivePageSubscribers
                        ), compose(
                        store.dispatch,
                        receivePageListDashboardCategories
                    )),
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
