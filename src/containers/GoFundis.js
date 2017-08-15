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
    compose,
    isArray,
    map,
    reduce,
    union
} from 'lodash/fp';
import {
    get
} from 'utils';
import {
    Nothing,
    Just
} from 'data.maybe';
import {
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
import {
    receivePage as receivePageGoFundisStatuses
} from 'actions/queryData/goFundisStatuses';
import {
    receivePage as receivePageGoFundisCharts
} from 'actions/queryData/goFundisCharts';
import GoFundis from 'components/GoFundis';
import {
    pChildren,
    pName,
    valueType
} from 'utils';

class GoFundisContainer extends Component {
    render() {
        return (
            <GoFundis
                getDashboardSettings={this.props.getDashboardSettings}
                goFundisCharts={this.props.goFundisCharts}
                goFundisStatuses={this.props.goFundisStatuses}
                listCategories={this.props.listCategories}
                getOverviewStats={this.props.getOverviewStats}
                dateRangePicker={this.props.dateRangePicker}
                onRangeDate={compose(
                    this.props.receivePageGoFundisCharts,
                    this.props.receivePageGoFundisStatuses,
                    this.props.receivePageActiveGoFundis,
                    this.props.receivePageGetOverviewStats,
                    this.props.setRangeDate)}
                categories={this.props.categories}
                onChangeCategoryHandler={this.props.showGoogleMapCategory}
                activeGoFundis={this.props.activeGoFundis}
                goFundis={this.props.goFundis}
                // onChangeStatus={compose(
                //     this.props.receivePageActiveGoFundis,
                //     this.props.showGoogleMapGoFundis
                // )}
                onChangeStatus={this.props.showGoogleMapGoFundis}
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
    goFundisStatuses: PropTypes.object.isRequired,
    goFundisCharts: PropTypes.object.isRequired,
    getDashboardSettings: PropTypes.object.isRequired,

    showGoogleMapUser: PropTypes.func.isRequired,
    showGoogleMapTasks: PropTypes.func.isRequired,
    showGoogleMapCategory: PropTypes.func.isRequired,
    showGoogleMapGoFundis: PropTypes.func.isRequired,
    setRangeDate: PropTypes.func.isRequired,
    receivePageGetOverviewStats: PropTypes.func.isRequired,
    receivePageActiveGoFundis: PropTypes.func.isRequired,
    receivePageGoFundisStatuses: PropTypes.func.isRequired,
    receivePageGoFundisCharts: PropTypes.func.isRequired
};

function select({ ui, queryData }) {

    return {
        getDashboardSettings: queryData.getDashboardSettings,
        goFundisCharts: queryData.goFundisCharts,
        goFundisStatuses: queryData.goFundisStatuses,
        activeGoFundis: queryData.activeGoFundis,
        // listCategories: queryData.listDashboardCategories,
        listCategories: queryData.getCategoryStatistics.results.cata({
            Nothing: () => Nothing(),
            Just: fields => (Just(
                (fields.categoryGroups && isArray(fields.categoryGroups)) ?
                    reduce(
                        (result, subarray) => (
                            union(result, subarray)
                        ), [],
                        map(field => (
                            isArray(pChildren(field)) ? map(subCat => ({
                                style: valueType(field, subCat),
                                name: `${pName(field)} ${pName(subCat)}`
                            }), pChildren(field)) : Nothing()
                        ), fields.categoryGroups)) : Nothing()
            ))
        }),
        getOverviewStats: queryData.getOverviewStats,
        dateRangePicker: ui.dateRangePicker,
        users: ui.googlemap.users,
        tasks: ui.googlemap.tasks,
        categories: ui.googlemap.categories,
        goFundis: ui.googlemap.goFundis
    };
}

const bindActions = {
    showGoogleMapUser,
    showGoogleMapTasks,
    showGoogleMapCategory,
    showGoogleMapGoFundis,
    setRangeDate,
    receivePageGetOverviewStats,
    receivePageActiveGoFundis,
    receivePageGoFundisStatuses,
    receivePageGoFundisCharts
};

export default compose(
    connect(select, bindActions),
    withRouter
)(GoFundisContainer);
