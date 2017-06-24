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
    USER_TYPE_SUBSCRIBER,
    USER_TYPE_GOFUNDIS
} from 'models/googlemap';
import {
    showGoogleMapUser
} from 'actions/ui/GoogleMap/index';
import Overview from 'components/Overview';


class OverviewContainer extends Component {
    render() {
        console.log('OverviewContainer', this.props);
        return (
            <Overview
                users={this.props.users.getOrElse({})}
                subscriberHandler={f => this.props.showGoogleMapUser(USER_TYPE_SUBSCRIBER, f)}
                gofundisHandler={f => this.props.showGoogleMapUser(USER_TYPE_GOFUNDIS, f)}
            />
        );
    }
}

OverviewContainer.propTypes = {
    router: routerShape.isRequired,
    location: locationShape.isRequired,

    users: PropTypes.object.isRequired,

    showGoogleMapUser: PropTypes.func.isRequired

};

function select({ ui }) {

    return {
        users: ui.googlemap.users.map(fields => {
            console.log(':::fields', fields);
            return ({
                ...fields,
                subscriber: get(USER_TYPE_SUBSCRIBER, fields),
                gofundis: get(USER_TYPE_GOFUNDIS, fields)
            });
        })
    };
}

const bindActions = {
    showGoogleMapUser
};

export default compose(
    connect(select, bindActions),
    withRouter
)(OverviewContainer);
