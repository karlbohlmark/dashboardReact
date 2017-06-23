import React, { PropTypes } from 'react';
import {
    Row,
    Col,
    Panel
} from 'react-bootstrap';
import {
    constant,
    map
} from 'lodash/fp';

import PropTypes_ from 'utils/prop-types';
import Placeholder from 'components/Placeholder';
import AlertErrors from 'components/AlertErrors';

const cDanger = constant('danger');

export default function PanelSummary(props) {
    return (
        <Panel bsStyle={props.errors.map(cDanger).getOrElse()} header={
            <h3>Total</h3>
        }>
            <Placeholder size={[ '100%', '190px' ]} busy={props.busy}>
                {props.results.map(results => (
                    <Row>
                        {map(metric => (
                            <Col xs={12} sm={6} md={4} key={metric.type}>
                                <Panel>
                                    <h4>{metric.title}: <big>{metric.value}</big></h4>
                                </Panel>
                            </Col>
                        ), results)}
                    </Row>
                )).getOrElse(null)}
            </Placeholder>

            {props.errors.map(errors => (
                <AlertErrors
                    title="Something went wrong:"
                    errors={errors.common}
                    tryAgain={props.tryAgainReceiveHandler.map(handler => ({
                        busy: props.busy,
                        handler
                    }))}
                />
            )).getOrElse(null)}
        </Panel>
    );
}

PanelSummary.propTypes = {
    results: PropTypes_.Maybe(
        PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                value: PropTypes.number.isRequired
            }).isRequired
        ).isRequired
    ).isRequired,
    busy: PropTypes.bool.isRequired,
    errors: PropTypes_.Maybe(
        PropTypes.shape({
            common: PropTypes_.Maybe(
                PropTypes.array.isRequired
            ).isRequired
        }).isRequired
    ).isRequired,

    tryAgainReceiveHandler: PropTypes_.Maybe(
        PropTypes.func.isRequired
    ).isRequired
};
