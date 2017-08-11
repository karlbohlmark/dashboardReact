import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    map
} from 'lodash/fp';
import {
    capitalize
} from 'utils';
import SelectBoxItem from 'components/SelectBoxItem';
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
                <SelectBoxItem
                    style={{width: 200}}
                    options={props.listCategories.cata({
                        Nothing: () => ([]),
                        Just: fields => (
                            map(field => ({ value: field.name, label: capitalize(field.name) }), fields)
                        )
                    })}
                    // options={props.listCategories.errors.cata({
                    //     Nothing: () => props.listCategories.results.cata({
                    //         Nothing: () => ([]),
                    //         Just: fields => (
                    //             map(field => ({ value: field.name, label: capitalize(field.name) }), fields)
                    //         )
                    //     }),
                    //     Just: () => ([])
                    // })}
                    onChange={props.onChangeCategory}
                    value={props.categories}
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
