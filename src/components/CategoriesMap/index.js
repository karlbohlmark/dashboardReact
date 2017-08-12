import React, { PropTypes } from 'react';
import {
    map
} from 'lodash/fp';
import Select from 'react-select';
import Placeholder from 'components/Placeholder';
import GoogleMapSegment from 'components/GoogleMap';
import {
    capitalize,
    filterCategory
} from 'utils';

function CategoriesMap(props) {
    return (
        <div>
            <Select
                style={{width: '300px'}}
                multi={true}
                options={props.options.cata({
                    Nothing: () => ([]),
                    Just: fields => (
                        map(field => ({ value: field.style, label: capitalize(field.name) }), fields)
                    )
                })}
                value={props.value.getOrElse(null)}
                onChange={props.onChange}
            />
            {props.data.errors.cata({
                Nothing: () => props.data.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.data.busy} size={[ '100%', '300px' ]} />
                    ),
                    Just: () => (
                        <GoogleMapSegment
                            data={props.data.results.getOrElse([])}
                            filterData={filterCategory(props.value)}
                        />
                    )
                }),
                Just: errors => (
                    <div>{errors}</div>
                )
            })}
        </div>
    );
}

CategoriesMap.propTypes = {
    options: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CategoriesMap;

