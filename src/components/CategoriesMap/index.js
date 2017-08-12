import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    map
} from 'lodash/fp';
import Select from 'react-select';
import Placeholder from 'components/Placeholder';
import GoogleMapSegment from 'components/GoogleMap';
import CheckBoxItem from 'components/CheckBoxItem';
import {
    capitalize,
    filterCategory
} from 'utils';

const itemWidth = ['120px', '160px', '135px'];
const styleType = (field, cat) => (
    `${field.name.toString().split(' ').join('-')}-${cat.icon.toString().split('.svg').join('')}`
);

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
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <div styleName='column_items' style={{flexWrap: 'wrap', marginBottom: 0}}>
                    {props.commonCategories.errors.cata({
                        Nothing: () => props.commonCategories.results.cata({
                            Nothing: () => (
                                <div />
                            ),
                            Just: fields => (
                                fields.categoryGroups.map((field, index) => (
                                    <div key={index}
                                         styleName='row_items'>
                                        {
                                            field.children.map((subCat, subIndex) => (
                                                <div key={subIndex}
                                                     styleName='inline_items'
                                                     style={{
                                                         justifyContent: 'space-between',
                                                         alignItems: 'center',
                                                         width: itemWidth[subIndex]}}>
                                                    <CheckBoxItem
                                                        // style={{
                                                        //     display: 'flex',
                                                        //     flexDirection: 'column',
                                                        //     justifyContent: 'center'
                                                        // }}
                                                        value={false}
                                                        // inline={true}
                                                        onChange={f =>
                                                            console.log(`CheckBoxItem ${subCat.name.toString()}`, f)
                                                        }
                                                    >
                                                        <div styleName='inner_column'>
                                                            <div>
                                                                {`${capitalize(subCat.name.toString())}`}
                                                            </div>
                                                            <div styleName="label_small">
                                                                {`${capitalize(field.name.toString())}`}
                                                            </div>
                                                        </div>

                                                    </CheckBoxItem>
                                                    <div styleName={styleType(field, subCat)} />
                                                </div>
                                            ), )
                                        }
                                    </div>
                                ))
                            )
                        }),
                        Just: errors => (
                            <div>{errors}</div>
                        )
                    })}
                </div>

            </div>
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
    commonCategories: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CSSModules(CategoriesMap, styles);

