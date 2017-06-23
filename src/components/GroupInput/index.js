import React, { PropTypes } from 'react';
import {
    FormGroup,
    ControlLabel
} from 'react-bootstrap';
import {
    constant
} from 'lodash/fp';

import PropTypes_ from 'utils/prop-types';
import ErrorsList from 'components/ErrorsList';


const cError = constant('error');

export default function GroupInput(props) {
    return (
        <FormGroup validationState={props.errors.map(cError).getOrElse(null)}>
            {props.label.map(label => (
                <ControlLabel>
                    {label}
                </ControlLabel>
            )).getOrElse(null)}

            {props.children}

            {props.errors.map(errors => (
                <ErrorsList>{errors}</ErrorsList>
            )).getOrElse(null)}
        </FormGroup>
    );
}

GroupInput.propTypes = {
    label: PropTypes_.Maybe(
        PropTypes.node.isRequired
    ).isRequired,
    errors: PropTypes_.Maybe(
        PropTypes.array.isRequired
    ).isRequired,
    children: PropTypes.element.isRequired
};
