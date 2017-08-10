import React, { Component, PropTypes } from 'react';
import {
    withRouter
} from 'react-router';
import {
    routerShape,
    locationShape
} from 'react-router/lib/PropTypes';
import {
    connect
} from 'react-redux';
import {
    compose
} from 'lodash/fp';
import {
    get
} from 'utils';
import {
    Nothing,
    Just
} from 'data.maybe';
import {
    USER_TYPE_SUBSCRIBER,
    USER_TYPE_GOFUNDIS,
    USER_TYPE_ALL,
    TASK_STATYS_ALL,
    TASK_STATYS_COMPLETED,
    TASK_STATYS_ASSIGNED,
    TASK_STATYS_UNASSIGNED,
    TASK_STATYS_CANCELLED
} from 'models/googlemap';
import {
    showGoogleMapUser,
    showGoogleMapTasks,
    showGoogleMapCategory
} from 'actions/ui/googleMap';
import {
    setRangeDate
} from 'actions/ui/dateRangePicker';
import {
    receivePage as receivePageCompletedTasksHistogram
} from 'actions/queryData/completedTaskHistogram';
import {
    receivePage as receivePageUserLocation
} from 'actions/queryData/userLocation';
import {
    receivePage as receivePageTaskLocationByStatus
} from 'actions/queryData/taskLocationByStatus';
import {
    receivePage as receivePageTaskLocationByCategory
} from 'actions/queryData/taskLocationByCategory';
import {
    receivePage as receivePageGetOverviewStats
} from 'actions/queryData/getOverviewStats';
import {
    receivePage as receivePageGetRevenueHistogram
} from 'actions/queryData/getRevenueHistogram';
import {
    receivePage as receivePageGetLiveStats
} from 'actions/queryData/getLiveStats';
import {
    receivePage as receivePageGetUserStats
} from 'actions/queryData/getUserStats';
import {
    receivePage as receivePageGetPaymentStatistics
} from 'actions/queryData/getPaymentStatistics';
import {
    receivePage as receivePageGetCategoryStatistics
} from 'actions/queryData/getCategoryStatistics';
import Overview from 'components/Overview';

class OverviewContainer extends Component {
    render() {
        return (
            <Overview
                getCategoryStatistics={this.props.getCategoryStatistics}
                getUserStats={this.props.getUserStats}
                getPaymentStatistics={this.props.getPaymentStatistics}
                getLiveStats={this.props.getLiveStats}
                getRevenueHistogram={this.props.getRevenueHistogram}
                listCategories={this.props.listCategories}
                getOverviewStats={this.props.getOverviewStats}
                dateRangePicker={this.props.dateRangePicker}
                onRangeDate={compose(
                    this.props.receivePageGetCategoryStatistics,
                    this.props.receivePageGetUserStats,
                    this.props.receivePageGetPaymentStatistics,
                    this.props.receivePageGetLiveStats,
                    this.props.receivePageGetRevenueHistogram,
                    this.props.receivePageGetOverviewStats,
                    this.props.receivePageUserLocation,
                    this.props.receivePageTaskLocationByCategory,
                    this.props.receivePageTaskLocationByStatus,
                    this.props.receivePageCompletedTasksHistogram,
                    this.props.setRangeDate)}
                completedTasksHistogram={this.props.completedTasksHistogram}
                userLocation={this.props.userLocation}
                users={this.props.users}
                onUserLocationHandler={compose(
                    this.props.receivePageUserLocation,
                    this.props.showGoogleMapUser)}
                tasksLocationStatus={this.props.tasksLocationStatus}
                tasks={this.props.tasks}
                onChangeTaskStatusHandler={compose(
                    this.props.receivePageTaskLocationByStatus,
                    this.props.showGoogleMapTasks)}
                tasksLocationByCategory={this.props.tasksLocationByCategory}
                categories={this.props.categories}
                onChangeCategoryHandler={compose(
                    this.props.receivePageTaskLocationByCategory,
                    this.props.showGoogleMapCategory)}
            />
        );
    }
}

OverviewContainer.propTypes = {
    router: routerShape.isRequired,
    location: locationShape.isRequired,

    tasksLocationByCategory: PropTypes.object.isRequired,
    tasksLocationStatus: PropTypes.object.isRequired,
    userLocation: PropTypes.object.isRequired,
    completedTasksHistogram: PropTypes.object.isRequired,

    dateRangePicker: PropTypes.object.isRequired,
    getOverviewStats: PropTypes.object.isRequired,
    getRevenueHistogram: PropTypes.object.isRequired,
    getLiveStats: PropTypes.object.isRequired,
    getUserStats: PropTypes.object.isRequired,
    getPaymentStatistics: PropTypes.object.isRequired,
    getCategoryStatistics: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    tasks: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    listCategories: PropTypes.object.isRequired,

    showGoogleMapUser: PropTypes.func.isRequired,
    showGoogleMapTasks: PropTypes.func.isRequired,
    showGoogleMapCategory: PropTypes.func.isRequired,
    setRangeDate: PropTypes.func.isRequired,
    receivePageCompletedTasksHistogram: PropTypes.func.isRequired,
    receivePageUserLocation: PropTypes.func.isRequired,
    receivePageTaskLocationByStatus: PropTypes.func.isRequired,
    receivePageTaskLocationByCategory: PropTypes.func.isRequired,
    receivePageGetOverviewStats: PropTypes.func.isRequired,
    receivePageGetRevenueHistogram: PropTypes.func.isRequired,
    receivePageGetLiveStats: PropTypes.func.isRequired,
    receivePageGetPaymentStatistics: PropTypes.func.isRequired,
    receivePageGetUserStats: PropTypes.func.isRequired,
    receivePageGetCategoryStatistics: PropTypes.func.isRequired
};

function select({ ui, queryData }) {

    return {
        getCategoryStatistics: queryData.getCategoryStatistics,
        getPaymentStatistics: queryData.getPaymentStatistics,
        getLiveStats: queryData.getLiveStats,
        getUserStats: queryData.getUserStats,
        getRevenueHistogram: queryData.getRevenueHistogram,
        listCategories: queryData.listDashboardCategories,
        getOverviewStats: queryData.getOverviewStats,
        dateRangePicker: ui.dateRangePicker,
        userLocation: queryData.userLocation,
        completedTasksHistogram: queryData.completedTasksHistogram,
        users: ui.googlemap.users.cata({
            Nothing: () => ({
                subscriber: Nothing(),
                gofundis: Nothing(),
                all: Nothing()
            }),
            Just: fields => ({
                ...fields,
                subscriber: get(USER_TYPE_SUBSCRIBER, fields),
                gofundis: get(USER_TYPE_GOFUNDIS, fields),
                all: get(USER_TYPE_ALL, fields)
            })
        }),
        tasksLocationStatus: queryData.taskLocationByStatus,
        tasks: ui.googlemap.tasks.cata({
            Nothing: () => ({
                completed: Nothing(),
                assigned: Nothing(),
                unassigned: Nothing(),
                cancelled: Nothing(),
                all: Nothing()
            }),
            Just: fields => ({
                ...fields,
                completed: get(TASK_STATYS_COMPLETED, fields),
                assigned: get(TASK_STATYS_ASSIGNED, fields),
                unassigned: get(TASK_STATYS_UNASSIGNED, fields),
                cancelled: get(TASK_STATYS_CANCELLED, fields),
                all: get(TASK_STATYS_ALL, fields)
            })
        }),
        tasksLocationByCategory: queryData.taskLocationByCategory,
        categories: ui.googlemap.categories.cata({
            Nothing: () => (Nothing()),
            Just: value => (Just(value))
        })
    };
}

const bindActions = {
    showGoogleMapUser,
    showGoogleMapTasks,
    showGoogleMapCategory,
    setRangeDate,
    receivePageCompletedTasksHistogram,
    receivePageUserLocation,
    receivePageTaskLocationByStatus,
    receivePageTaskLocationByCategory,
    receivePageGetOverviewStats,
    receivePageGetRevenueHistogram,
    receivePageGetLiveStats,
    receivePageGetPaymentStatistics,
    receivePageGetUserStats,
    receivePageGetCategoryStatistics
};

export default compose(
    connect(select, bindActions),
    withRouter
)(OverviewContainer);
