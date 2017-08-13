import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    map,
    concat
} from 'lodash/fp';
import {
    CATEGORY_ALL
} from 'models/googlemap';
import {
    capitalize
} from 'utils';
import Select from 'react-select';
import DateRangePickerItem from 'components/DateRangePickerItem';
import Autosuggest from 'components/Autosuggest';

function SubPanel(props) {
    return (
        <div styleName='sub_panel_row' style={{alignItems: 'center', flexWrap: 'wrap'}}>
            {
                props.title ? <div styleName='sub_panel_title'>{props.title}</div> : null
            }

            <div style={{width: 200}}>
                <Autosuggest/>
            </div>
            <div>
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
            <div >
                <DateRangePickerItem
                    dateRangePicker={props.dateRangePicker}
                    onRangeDate={props.onRangeDate}
                />
            </div>
        </div>
    );
}

SubPanel.propTypes = {
    listCategories: PropTypes.object.isRequired,
    onChangeCategory: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    dateRangePicker: PropTypes.object.isRequired,
    onRangeDate: PropTypes.func.isRequired
};

export default CSSModules(SubPanel, styles);
