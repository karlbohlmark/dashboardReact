import React, { PropTypes } from 'react';
import {
    map
} from 'lodash/fp';
import Placeholder from 'components/Placeholder';
import SelectBoxItem from 'components/SelectBoxItem';
import GoogleMapSegment from 'components/GoogleMap';
import {
    capitalize,
    filterCategory
} from 'utils';

function CategoriesMap(props) {
    return (
        <div>
            <SelectBoxItem
                style={{width: '300px'}}
                options={props.options.cata({
                    Nothing: () => ([]),
                    Just: fields => (
                        map(field => ({ value: field.name, label: capitalize(field.name) }), fields)
                    )
                })}
                onChange={props.onChange}
                value={props.value}

            />
            {/*<SelectBoxItem*/}
                {/*style={{width: '300px'}}*/}
                {/*options={props.options.errors.cata({*/}
                    {/*Nothing: () => props.options.results.cata({*/}
                        {/*Nothing: () => ([]),*/}
                        {/*Just: fields => (*/}
                            {/*map(field => ({ value: field.name, label: capitalize(field.name) }), fields)*/}
                        {/*)*/}
                    {/*}),*/}
                    {/*Just: () => ([])*/}
                {/*})}*/}
                {/*onChange={props.onChange}*/}
                {/*value={props.value}*/}

            {/*/>*/}
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

