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
} from 'actions/ui/googleMap';
import {
    setRangeDate
} from 'actions/ui/dateRangePicker';
import {
    receivePage as receivePageGetOverviewStats
} from 'actions/queryData/getOverviewStats';
import {
    receivePage as receivePageActiveGoFundis
} from 'actions/queryData/activeGoFundis';
import GoFundis from 'components/GoFundis';


class GoFundisContainer extends Component {
    render() {
        return (
            <GoFundis
                listCategories={this.props.listCategories}
                getOverviewStats={this.props.getOverviewStats}
                dateRangePicker={this.props.dateRangePicker}
                onRangeDate={compose(
                    this.props.receivePageGetOverviewStats,
                    this.props.setRangeDate)}
                categories={this.props.categories}
                onChangeCategoryHandler={this.props.showGoogleMapCategory}
                activeGoFundis={this.props.activeGoFundis}
                goFundis={this.props.goFundis}
                onOfflineStatusHandler={compose(
                    this.props.receivePageActiveGoFundis,
                    f => this.props.showGoogleMapGoFundis(GOFUNDIS_STATYS_OFFLINE, f)
                )}
                onOnlineStatusHandler={compose(
                    this.props.receivePageActiveGoFundis,
                    f => this.props.showGoogleMapGoFundis(GOFUNDIS_STATYS_ONLINE, f)
                )}
                onAllStatusHandler={compose(
                    this.props.receivePageActiveGoFundis,
                    f => this.props.showGoogleMapGoFundis(GOFUNDIS_ALL, f)
                )}
            />
        );
    }
}

GoFundisContainer.propTypes = {
    router: routerShape.isRequired,
    location: locationShape.isRequired,

    dateRangePicker: PropTypes.object.isRequired,
    getOverviewStats: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    tasks: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    listCategories: PropTypes.object.isRequired,
    goFundis: PropTypes.object.isRequired,
    activeGoFundis: PropTypes.object.isRequired,

    showGoogleMapUser: PropTypes.func.isRequired,
    showGoogleMapTasks: PropTypes.func.isRequired,
    showGoogleMapCategory: PropTypes.func.isRequired,
    showGoogleMapGoFundis: PropTypes.func.isRequired,
    setRangeDate: PropTypes.func.isRequired,
    receivePageGetOverviewStats: PropTypes.func.isRequired,
    receivePageActiveGoFundis: PropTypes.func.isRequired,
};

function select({ ui, queryData }) {

    return {
        activeGoFundis: queryData.activeGoFundis,
        listCategories: queryData.listDashboardCategories,
        getOverviewStats: queryData.getOverviewStats,
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
    setRangeDate,
    receivePageGetOverviewStats,
    receivePageActiveGoFundis
};

export default compose(
    connect(select, bindActions),
    withRouter
)(GoFundisContainer);
