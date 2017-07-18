import React, { PropTypes } from 'react';
import Placeholder from 'components/Placeholder';
import SelectBoxItem from 'components/SelectBoxItem';
import GoogleMapCategory from 'components/GoogleMap/Category';
import {
    // CATEGORY_ALL,
    CATEGORY_NEW_INSTALL_DECODER,
    CATEGORY_NEW_INSTALL_SIGNAL,
    CATEGORY_NEW_INSTALL_ERROR,
    CATEGORY_REPAIR_INSTALL_DECODER,
    CATEGORY_REPAIR_INSTALL_SIGNAL,
    CATEGORY_REPAIR_INSTALL_ERROR
} from 'models/googlemap';
import {
    capitalize
} from 'utils';

function CategoriesMap(props) {
    return (
        <div>
            <SelectBoxItem
                style={{width: '300px'}}
                options={[
                    // { value: CATEGORY_ALL,
                    //     label: capitalize(CATEGORY_ALL) },
                    { value: CATEGORY_NEW_INSTALL_DECODER,
                        label: capitalize(CATEGORY_NEW_INSTALL_DECODER) },
                    { value: CATEGORY_NEW_INSTALL_SIGNAL,
                        label: capitalize(CATEGORY_NEW_INSTALL_SIGNAL) },
                    { value: CATEGORY_NEW_INSTALL_ERROR,
                        label: capitalize(CATEGORY_NEW_INSTALL_ERROR) },
                    { value: CATEGORY_REPAIR_INSTALL_DECODER,
                        label: capitalize(CATEGORY_REPAIR_INSTALL_DECODER) },
                    { value: CATEGORY_REPAIR_INSTALL_SIGNAL,
                        label: capitalize(CATEGORY_REPAIR_INSTALL_SIGNAL) },
                    { value: CATEGORY_REPAIR_INSTALL_ERROR,
                        label: capitalize(CATEGORY_REPAIR_INSTALL_ERROR) }
                ]}
                onChange={props.onUiCategoriesHandler}
                value={props.uiCategories}

            />
            {props.dataTasksLocationByCategory.errors.cata({
                Nothing: () => props.dataTasksLocationByCategory.results.cata({
                    Nothing: () => (
                        <Placeholder busy={props.dataTasksLocationByCategory.busy} size={[ '100%', '300px' ]} />
                    ),
                    Just: () => (
                        <GoogleMapCategory
                            uiCategories={props.uiCategories}
                            data={props.dataTasksLocationByCategory.results.getOrElse([])}
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
    dataTasksLocationByCategory: PropTypes.object.isRequired,
    uiCategories: PropTypes.object.isRequired,
    onUiCategoriesHandler: PropTypes.func.isRequired
};

export default CategoriesMap;

