import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    map,
    findIndex
} from 'lodash/fp';
import Select from 'react-select';
import Placeholder from 'components/Placeholder';
import GoogleMapSegment from 'components/GoogleMap';
import CheckBoxItem from 'components/CheckBoxItem';
import {
    capitalize,
    filterCategory,
    pName,
    labelType,
    styleType,
    valueType
} from 'utils';
const itemWidth = ['120px', '160px', '135px'];

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
                                                        value={(!!~findIndex({
                                                            value: valueType(field, subCat),
                                                            label: labelType(field, subCat)
                                                        }, props.value.getOrElse([])))}
                                                        // inline={true}
                                                        onChange={f =>
                                                            props.onCheckBox({
                                                                value: valueType(field, subCat),
                                                                label: labelType(field, subCat)
                                                            }, f)
                                                        }
                                                    >
                                                        <div styleName='inner_column'>
                                                            <div>
                                                                {`${capitalize(pName(subCat))}`}
                                                            </div>
                                                            <div styleName="label_small">
                                                                {`${capitalize(pName(field))}`}
                                                            </div>
                                                        </div>

                                                    </CheckBoxItem>
                                                    <div styleName={styleType(field, subCat)} />
                                                </div>
                                            ))
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
    onChange: PropTypes.func.isRequired,
    onCheckBox: PropTypes.func.isRequired
};

export default CSSModules(CategoriesMap, styles);

