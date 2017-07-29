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
    USER_TYPE_ALL
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
    receivePage as receivePageSubscribersRatingBreakdown
} from 'actions/queryData/subscribersRatingBreakdown';
import {
    receivePage as receivePageSubscribersReturning
} from 'actions/queryData/subscribersReturning';
import {
    receivePage as receivePageSubscribersSharePerArea
} from 'actions/queryData/subscribersSharePerArea';
import Subscribers from 'components/Subscribers';


class SubscribersContainer extends Component {
    render() {
        return (
            <Subscribers
                subscribersSharePerArea={this.props.subscribersSharePerArea}
                subscribersRatingBreakdown={this.props.subscribersRatingBreakdown}
                subscribersReturning={this.props.subscribersReturning}
                subscribers={this.props.subscribers}
                listCategories={this.props.listCategories}
                dateRangePicker={this.props.dateRangePicker}
                onRangeDate={compose(
                    this.props.receivePageSubscribersRatingBreakdown,
                    this.props.receivePageSubscribersReturning,
                    this.props.receivePageSubscribersSharePerArea,
                    this.props.setRangeDate)}
                categories={this.props.categories}
                onChangeCategoryHandler={this.props.showGoogleMapCategory}
            />
        );
    }
}

SubscribersContainer.propTypes = {
    router: routerShape.isRequired,
    location: locationShape.isRequired,

    dateRangePicker: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    tasks: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    listCategories: PropTypes.object.isRequired,
    subscribers: PropTypes.object.isRequired,
    subscribersReturning: PropTypes.object.isRequired,
    subscribersRatingBreakdown: PropTypes.object.isRequired,
    subscribersSharePerArea: PropTypes.object.isRequired,

    showGoogleMapUser: PropTypes.func.isRequired,
    showGoogleMapTasks: PropTypes.func.isRequired,
    showGoogleMapCategory: PropTypes.func.isRequired,
    setRangeDate: PropTypes.func.isRequired,
    receivePageSubscribersRatingBreakdown: PropTypes.func.isRequired,
    receivePageSubscribersReturning: PropTypes.func.isRequired,
    receivePageSubscribersSharePerArea: PropTypes.func.isRequired
};

function select({ ui, queryData }) {

    return {
        subscribersSharePerArea: queryData.subscribersSharePerArea,
        subscribersRatingBreakdown: queryData.subscribersRatingBreakdown,
        subscribersReturning: queryData.subscribersReturning,
        subscribers: queryData.subscribers,
        listCategories: queryData.listDashboardCategories,
        dateRangePicker: ui.dateRangePicker,
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
        tasks: ui.googlemap.tasks.cata({
            Nothing: () => (Nothing()),
            Just: value => (Just(value))
        }),
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
    receivePageSubscribersRatingBreakdown,
    receivePageSubscribersReturning,
    receivePageSubscribersSharePerArea
};

export default compose(
    connect(select, bindActions),
    withRouter
)(SubscribersContainer);
