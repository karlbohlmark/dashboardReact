import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    CATEGORY_ALL,
    CATEGORY_NEW_INSTALL_DECODER,
    CATEGORY_NEW_INSTALL_SIGNAL,
    CATEGORY_NEW_INSTALL_ERROR,
    CATEGORY_REPAIR_INSTALL_DECODER,
    CATEGORY_REPAIR_INSTALL_SIGNAL
} from 'models/googlemap';
import {
    capitalize
} from 'utils';
import SelectBoxItem from 'components/SelectBoxItem';
import DateRangePickerItem from 'components/DateRangePickerItem';
import Autosuggest from 'components/Autosuggest';


function SubPanel(props) {
    return (
        <div styleName='sub_panel_row' style={{alignItems: 'center'}}>
            {
                props.title ? <div styleName='sub_panel_title'>{props.title}</div> : null
            }

            <div style={{width: 200}}>
                <Autosuggest/>
            </div>
            <div>
                <SelectBoxItem
                    style={{width: '300px'}}
                    options={[
                        { value: CATEGORY_ALL, label: capitalize(CATEGORY_ALL) },
                        { value: CATEGORY_NEW_INSTALL_DECODER, label: capitalize(CATEGORY_NEW_INSTALL_DECODER) },
                        { value: CATEGORY_NEW_INSTALL_SIGNAL, label: capitalize(CATEGORY_NEW_INSTALL_SIGNAL) },
                        { value: CATEGORY_NEW_INSTALL_ERROR, label: capitalize(CATEGORY_NEW_INSTALL_ERROR) },
                        { value: CATEGORY_REPAIR_INSTALL_DECODER, label: capitalize(CATEGORY_REPAIR_INSTALL_DECODER) },
                        { value: CATEGORY_REPAIR_INSTALL_SIGNAL, label: capitalize(CATEGORY_REPAIR_INSTALL_SIGNAL) }
                    ]}
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
    onChangeCategory: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    dateRangePicker: PropTypes.object.isRequired,
    onRangeDate: PropTypes.func.isRequired
};

export default CSSModules(SubPanel, styles);
