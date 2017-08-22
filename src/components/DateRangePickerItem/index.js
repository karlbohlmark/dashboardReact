import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import {
    formatDateLabel
} from 'utils';
import {
    Button,
    Glyphicon
} from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';

function DateRangePickerItem(props) {
    const start = props.dateRangePicker.startDate.format('YYYY-MM-DD');
    const end = props.dateRangePicker.endDate.format('YYYY-MM-DD');
    let label = `${start} - ${end}`;
    if (start === end) {
        label = start;
    }
    return (
        <div className='daterangepicker_filter'>
            <DateRangePicker
                startDate={props.dateRangePicker.startDate}
                endDate={props.dateRangePicker.endDate}
                ranges={props.dateRangePicker.ranges}
                // onEvent={(event, picker) => props.onRangeDate(picker.startDate, picker.endDate)}
                onApply={(event, picker) => props.onRangeDate(picker.startDate, picker.endDate)}
                >
                <Button className="selected-date-range-btn">
                    <div styleName='header_daterangepicker'>
                        <div>
                            <div styleName='header_daterangepicker_label'>
                                {formatDateLabel(
                                    props.dateRangePicker.startDate,
                                    props.dateRangePicker.endDate)}
                                </div>
                            <div styleName='header_daterangepicker_subLabel_status'>
                                <div className="pull-left"><Glyphicon glyph="calendar" /></div>
                                <div className="pull-right">
                                    &nbsp;<span>
										{label}
									</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="caret" />
                        </div>
                    </div>
                </Button>
            </DateRangePicker>
        </div>
    );
}

DateRangePickerItem.propTypes = {
    dateRangePicker: PropTypes.object.isRequired,
    onRangeDate: PropTypes.func.isRequired
};

export default CSSModules(DateRangePickerItem, styles);
