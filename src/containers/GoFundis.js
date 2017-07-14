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
    GOFUNDIS_STATYS_OFFLINE,
    GOFUNDIS_STATYS_ONLINE,
    GOFUNDIS_ALL
} from 'models/googlemap';
import {
    showGoogleMapUser,
    showGoogleMapTasks,
    showGoogleMapCategory,
    showGoogleMapGoFundis
} from 'actions/ui/GoogleMap/index';
import {
    setRangeDate
} from 'actions/ui/dateRangePicker';
import GoFundis from 'components/GoFundis';


class GoFundisContainer extends Component {
    render() {
        return (
            <GoFundis
                dateRangePicker={this.props.dateRangePicker}
                onRangeDate={(from, to) => this.props.setRangeDate(from, to)}
                categories={this.props.categories}
                onChangeCategoryHandler={this.props.showGoogleMapCategory}
                goFundis={this.props.goFundis}
                onOfflineStatusHandler={f => this.props.showGoogleMapGoFundis(GOFUNDIS_STATYS_OFFLINE, f)}
                onOnlineStatusHandler={f => this.props.showGoogleMapGoFundis(GOFUNDIS_STATYS_ONLINE, f)}
                onAllStatusHandler={f => this.props.showGoogleMapGoFundis(GOFUNDIS_ALL, f)}
            />
        );
    }
}

GoFundisContainer.propTypes = {
    router: routerShape.isRequired,
    location: locationShape.isRequired,

    users: PropTypes.object.isRequired,
    tasks: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    goFundis: PropTypes.object.isRequired,
    dateRangePicker: PropTypes.object.isRequired,

    showGoogleMapUser: PropTypes.func.isRequired,
    showGoogleMapTasks: PropTypes.func.isRequired,
    showGoogleMapCategory: PropTypes.func.isRequired,
    showGoogleMapGoFundis: PropTypes.func.isRequired,
    setRangeDate: PropTypes.func.isRequired


};

function select({ ui }) {

    return {
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
        }),
        goFundis: ui.googlemap.goFundis.cata({
            Nothing: () => ({
                offline: Nothing(),
                online: Nothing(),
                all: Nothing()
            }),
            Just: fields => ({
                ...fields,
                offline: get(GOFUNDIS_STATYS_OFFLINE, fields),
                online: get(GOFUNDIS_STATYS_ONLINE, fields),
                all: get(GOFUNDIS_ALL, fields)
            })
        })
    };
}

const bindActions = {
    showGoogleMapUser,
    showGoogleMapTasks,
    showGoogleMapCategory,
    showGoogleMapGoFundis,
    setRangeDate
};

export default compose(
    connect(select, bindActions),
    withRouter
)(GoFundisContainer);
