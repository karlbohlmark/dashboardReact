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
    setStatus
} from 'actions/ui/hamburger';
import Page from 'components/Page';

class AppContainer extends Component {
    render() {
        return (
            <Page {...this.props} />
        );
    }
}

AppContainer.propTypes = {
    router: routerShape.isRequired,
    location: locationShape.isRequired,

    setStatus: PropTypes.func.isRequired,
    hamburger: PropTypes.object.isRequired
};

function select({ ui }) {

    return {
        hamburger: ui.hamburger
    };
}

const bindActions = {
    setStatus
};

export default compose(
    connect(select, bindActions),
    withRouter
)(AppContainer);
