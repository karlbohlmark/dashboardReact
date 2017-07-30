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
    location: locationShape.isRequired
};

function select({ ui }) {

    return {
    };
}

const bindActions = {

};

export default compose(
    connect(select, bindActions),
    withRouter
)(AppContainer);
