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
                options={props.listCategories.errors.cata({
                    Nothing: () => props.listCategories.results.cata({
                        Nothing: () => ([]),
                        Just: fields => (
                            map(field => ({ value: field.id, label: capitalize(field.name) }), fields)
                        )
                    }),
                    Just: () => ([])
                })}
                onChange={props.onUiCategoriesHandler}
                value={props.uiCategories}

            />
            {props.dataTasksLocationByCategory.errors.cata({
                Nothing: () => props.dataTasksLocationByCategory.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.dataTasksLocationByCategory.busy} size={[ '100%', '300px' ]} />
                    ),
                    Just: () => (
                        <GoogleMapSegment
                            data={props.dataTasksLocationByCategory.results.getOrElse([])}
                            filterData={filterCategory(props.uiCategories)}
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
    listCategories: PropTypes.object.isRequired,
    dataTasksLocationByCategory: PropTypes.object.isRequired,
    uiCategories: PropTypes.object.isRequired,
    onUiCategoriesHandler: PropTypes.func.isRequired
};

export default CategoriesMap;

