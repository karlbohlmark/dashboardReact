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
    formatDate
} from 'utils/format-date';
import {
    USER_TYPE_SUBSCRIBER,
    USER_TYPE_GOFUNDIS,
    USER_TYPE_ALL
} from 'models/googlemap';
import {
    showGoogleMapUser,
    showGoogleMapTasks,
    showGoogleMapCategory
} from 'actions/ui/GoogleMap/index';
import {
    setRangeDate
} from 'actions/ui/dateRangePicker';
import Overview from 'components/Overview';


class OverviewContainer extends Component {
    render() {
        return (
            <Overview
                dateRangePicker={this.props.dateRangePicker}
                onRangeDate={(from, to) => this.props.setRangeDate(from, to)}
                userLocation={this.props.userLocation}
                completedTasksHistogram={this.props.completedTasksHistogram}
                users={this.props.users}
                subscriberHandler={f => this.props.showGoogleMapUser(USER_TYPE_SUBSCRIBER, f)}
                gofundisHandler={f => this.props.showGoogleMapUser(USER_TYPE_GOFUNDIS, f)}
                allHandler={f => this.props.showGoogleMapUser(USER_TYPE_ALL, f)}
                tasks={this.props.tasks}
                onChangeTaskStatusHandler={this.props.showGoogleMapTasks}
                categories={this.props.categories}
                onChangeCategoryHandler={this.props.showGoogleMapCategory}
            />
        );
    }
}

OverviewContainer.propTypes = {
    router: routerShape.isRequired,
    location: locationShape.isRequired,

    userLocation: PropTypes.object.isRequired,
    completedTasksHistogram: PropTypes.object.isRequired,
    dateRangePicker: PropTypes.object.isRequired,

    users: PropTypes.object.isRequired,
    tasks: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,

    showGoogleMapUser: PropTypes.func.isRequired,
    showGoogleMapTasks: PropTypes.func.isRequired,
    showGoogleMapCategory: PropTypes.func.isRequired,
    setRangeDate: PropTypes.func.isRequired


};

function select({ ui }) {

    return {
        dateRangePicker: ui.dateRangePicker,
        userLocation: ui.userLocation,
        completedTasksHistogram: {
            xAxis: {
                categories: ui.completedTasksHistogram.results.cata({
                    Nothing: () => ([]),
                    // Just: fields => (fields.map(field => (formatDate(field.date))))
                    Just: fields => (fields[0].data.map(field => (formatDate(field.date))))
                })
            },
            series: [{
                name: ui.completedTasksHistogram.results.cata({
                    Nothing: () => (''),
                    Just: fields => (fields[0].name)
                }),
                data: ui.completedTasksHistogram.results.cata({
                    Nothing: () => ([]),
                    Just: fields => (fields[0].data.map(field => (field.value)))
                })
            }, {
                name: ui.completedTasksHistogram.results.cata({
                    Nothing: () => (''),
                    Just: fields => (fields[1].name)
                }),
                data: ui.completedTasksHistogram.results.cata({
                    Nothing: () => ([]),
                    Just: fields => (fields[1].data.map(field => (field.value)))
                })
            }]

        },
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
    setRangeDate
};

export default compose(
    connect(select, bindActions),
    withRouter
)(OverviewContainer);
