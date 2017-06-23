import React, { PropTypes } from 'react';
import {
    FormGroup,
    FormControl,
    ProgressBar,
    ControlLabel,
    HelpBlock,
    Button
} from 'react-bootstrap';
import FIcon from 'react-fontawesome';
import {
    map,
    compose,
    property,
    constant,
    F
} from 'lodash/fp';
import {
    Just
} from 'data.maybe';

import PropTypes_ from 'utils/prop-types';
import {
    getBunchID
} from 'utils/bunch';
import GroupDropzone from 'components/GroupDropzone';
import TextEditor from 'components/TextEditor';


const mapErrors = map(error => (
    <HelpBlock key={error}>{error}</HelpBlock>
));

const cError = constant('error');
const pBunch = property('bunch');
const pTitle = property('title');
const pDescription = property('description');
const pCountry = property('country');
const pCommon = property('common');
const pHeaderIcon = compose(
    property('icon'),
    property('header')
);
const pTargetValue = compose(
    property('value'),
    property('target')
);

const mapCountries = map(country => (
    <option value={JSON.stringify(country.bunch)} key={getBunchID(country.bunch)}>
        {country.name}
    </option>
));

function Edit(props) {
    const mTitleError = props.errors.chain(pTitle);
    const mDescriptionError = props.errors.chain(pDescription);
    const mCountryError = props.errors.chain(pCountry);

    return (
        <div>
            <FormGroup validationState={mTitleError.map(cError).getOrElse(null)}>
                <ControlLabel>
                    Channel Title
                </ControlLabel>

                <FormControl
                    type="text"
                    placeholder="Channel name"
                    autoFocus
                    disabled={props.busy}
                    value={props.fields.title}
                    onChange={compose(
                        props.changeTitleHandler,
                        pTargetValue
                    )}
                />

                {mTitleError.map(mapErrors).getOrElse(null)}
            </FormGroup>

            <FormGroup validationState={mDescriptionError.map(cError).getOrElse(null)}>
                <ControlLabel>
                    Short Description (Tagline)
                </ControlLabel>

                <TextEditor
                    readOnly={props.busy}
                    placeholder="Write a tagline"
                    value={props.fields.description.getOrElse('')}
                    onChange={props.changeDescriptionHandler}
                />

                {mDescriptionError.map(mapErrors).getOrElse(null)}
            </FormGroup>

            <FormGroup validationState={mCountryError.map(cError).getOrElse(null)}>
                <ControlLabel>
                    Country
                </ControlLabel>

                {props.countries.results.cata({
                    Nothing: () => props.countries.busy ? (
                        <ProgressBar active now={100}/>
                    ) : (
                        <Button
                            onClick={props.receiveCountryAgainHandler}
                        >
                            Try to get countries again
                            <FIcon name="refresh" fixedWidth />
                        </Button>
                    ),

                    Just: countries => props.visibility.countryPicker ? (
                        <FormControl
                            componentClass="select"
                            value={props.fields.country.map(
                                compose(JSON.stringify, pBunch)
                            ).getOrElse()}
                            disabled={props.busy}
                            onChange={compose(
                                props.changeCountryHandler,
                                JSON.parse,
                                pTargetValue
                            )}
                        >
                            {props.fields.country.map(F).getOrElse(
                                <option key="default">Choose a country</option>
                            )}
                            {mapCountries(countries)}
                        </FormControl>
                    ) : props.fields.country.map(country => (
                        <FormControl.Static>{country.name}</FormControl.Static>
                    )).getOrElse(null)
                })}

                {mCountryError.map(mapErrors).orElse(
                    () => props.countries.errors.chain(pCommon)
                ).getOrElse(null)}
            </FormGroup>

            <GroupDropzone
                label={Just('FIcon')}
                image={props.fields.header.icon}
                errors={props.errors.chain(pHeaderIcon)}
                placeholder="Drop file here"
                size={[ '100px', '100px' ]}
                onUpload={props.uploadHeaderIconHandler}
                onRemove={props.removeHeaderIconHandler}
            />
        </div>
    );
}

const mString = PropTypes_.Maybe(
    PropTypes.string.isRequired
);

const mShape = shape => PropTypes_.Maybe(
    PropTypes.shape(shape).isRequired
);

const mArrayOfString = PropTypes_.Maybe(
    PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired
);

const mImageShape = mShape({
    url: mString.isRequired,
    busy: PropTypes.bool.isRequired,
    errors: mShape({
        common: mArrayOfString.isRequired
    }).isRequired
});

const countryShape = PropTypes.shape({
    bunch: PropTypes_.bunch.isRequired,
    name: PropTypes.string.isRequired
});

Edit.propTypes = {
    visibility: PropTypes.shape({
        countryPicker: PropTypes.bool.isRequired
    }).isRequired,
    busy: PropTypes.bool.isRequired,
    fields: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: mString.isRequired,
        country: PropTypes_.Maybe(
            countryShape.isRequired
        ).isRequired,
        header: PropTypes.shape({
            icon: mImageShape.isRequired
        }).isRequired
    }).isRequired,
    countries: PropTypes.shape({
        results: PropTypes_.Maybe(
            PropTypes.arrayOf(
                countryShape.isRequired
            ).isRequired
        ).isRequired,
        busy: PropTypes.bool.isRequired,
        errors: mShape({
            common: mArrayOfString.isRequired
        }).isRequired
    }).isRequired,
    errors: mShape({
        title: mArrayOfString.isRequired,
        description: mArrayOfString.isRequired,
        country: mArrayOfString.isRequired,
        header: PropTypes.shape({
            icon: mArrayOfString.isRequired
        }).isRequired
    }).isRequired,

    changeTitleHandler: PropTypes.func.isRequired,
    changeDescriptionHandler: PropTypes.func.isRequired,
    changeCountryHandler: PropTypes.func.isRequired,
    uploadHeaderIconHandler: PropTypes.func.isRequired,
    removeHeaderIconHandler: PropTypes.func.isRequired,
    receiveCountryAgainHandler: PropTypes.func.isRequired
};

export default Edit;
