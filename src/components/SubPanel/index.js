import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    map,
    concat,
    findIndex,
    size,
    isArray
} from 'lodash/fp';
import {
    DropdownButton
} from 'react-bootstrap';
import {
    CATEGORY_ALL
} from 'models/googlemap';
import {
    capitalize,
    pName,
    labelType,
    styleType,
    valueType
} from 'utils';
import CheckBoxItem from 'components/CheckBoxItem';
import Select from 'react-select';
import DateRangePickerItem from 'components/DateRangePickerItem';
import Autosuggest from 'components/Autosuggest';

function SubPanel(props) {
    return (
        <div styleName='sub_panel_row' style={{alignItems: 'center', flexWrap: 'wrap'}}>
            {
                props.title ? <div styleName='sub_panel_title'>{props.title}</div> : null
            }

            <div styleName='sub_panel_filter' style={{width: 200}}>
                <Autosuggest/>
            </div>
            <div styleName='sub_panel_filter'>
                <Select
                    style={{width: 200}}
                    multi={true}
                    options={props.listCategories.cata({
                        Nothing: () => ([]),
                        Just: fields => (
                            concat([{
                                value: CATEGORY_ALL,
                                label: capitalize(CATEGORY_ALL)
                            }],
                            map(field => ({ value: field.style, label: capitalize(field.name) }), fields))

                        )
                    })}
                    value={props.categories.getOrElse(null)}
                    onChange={props.onChangeCategory}
                    placeholder='Category'
                />
            </div>
            <div styleName='sub_panel_filter'>
                <DateRangePickerItem
                    dateRangePicker={props.dateRangePicker}
                    onRangeDate={props.onRangeDate}
                />
            </div>
            <div className='category_filter'>
                <DropdownButton title={
                    <div style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'}}>
                        <div style={{
                            textAlign: 'left',
                            fontWeight: '300'
                        }}>Category</div>
                        <div style={{
                            whiteSpace: 'nowrap',
                            textAlign: 'left',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'}}>
                            {props.categories.cata({
                                Nothing: () => (<span>&nbsp;</span>),
                                Just: fields => (
                                    (isArray(fields) && size(fields)) ?
                                        map(field => (
                                            <span style={{
                                                fontWeight: 400,
                                                color: 'rgba(0,0,0,0.75)'
                                            }} key={field.value}>
                                                {capitalize(field.label)}
                                            </span>), fields) :
                                            (<span style={{
                                                fontWeight: 300,
                                                color: 'rgba(0,0,0,0.3)'
                                            }}>Select a category</span>)
                                )
                            })}
                        </div>

                    </div>
                } id={'dropdown-basic'}>
                    <div style={{
                        marginTop: 50,
                        padding: '6px 12px'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginTop: '10px',
                            marginBottom: '10px'
                        }}>
                            <div styleName='inline_items' style={{alignSelf: 'auto'}}>
                                <CheckBoxItem
                                    value={(!!~findIndex({
                                        value: CATEGORY_ALL,
                                        label: capitalize(CATEGORY_ALL)
                                    }, props.categories.getOrElse([])))}
                                    onChange={f =>
                                        props.onCheckBox({
                                            value: CATEGORY_ALL,
                                            label: capitalize(CATEGORY_ALL)
                                        }, f)}
                                >
                                    {capitalize(CATEGORY_ALL)}
                                </CheckBoxItem>
                            </div>
                            {props.commonCategories.errors.cata({
                                Nothing: () => props.commonCategories.results.cata({
                                    Nothing: () => (
                                        <div />
                                    ),
                                    Just: fields => (
                                        fields.categoryGroups.map(field => (
                                            field.children.map((subCat, subIndex) => (
                                                <div key={subIndex}
                                                     styleName='inline_items'
                                                     style={{
                                                         justifyContent: 'space-between',
                                                         alignItems: 'center',
                                                         width: '100%'}}>
                                                    <CheckBoxItem
                                                        // style={{
                                                        //     display: 'flex',
                                                        //     flexDirection: 'column',
                                                        //     justifyContent: 'center'
                                                        // }}
                                                        value={(!!~findIndex({
                                                            value: valueType(field, subCat),
                                                            label: labelType(field, subCat)
                                                        }, props.categories.getOrElse([])))}
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
                                        ))
                                    )
                                }),
                                Just: errors => (
                                    <div>{errors}</div>
                                )
                            })}

                        </div>
                    </div>
                </DropdownButton>
            </div>

        </div>
    );
}

SubPanel.propTypes = {
    commonCategories: PropTypes.object,
    onCheckBox: PropTypes.func,
    listCategories: PropTypes.object.isRequired,
    onChangeCategory: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    dateRangePicker: PropTypes.object.isRequired,
    onRangeDate: PropTypes.func.isRequired
};

export default CSSModules(SubPanel, styles);
