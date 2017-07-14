import React, { PropTypes } from 'react';
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
        <div>
            <DateRangePicker
                startDate={props.dateRangePicker.startDate}
                endDate={props.dateRangePicker.endDate}
                ranges={props.dateRangePicker.ranges}
                onEvent={(event, picker) => props.onRangeDate(picker.startDate, picker.endDate)}>
                <Button className="selected-date-range-btn" style={{width: '100%'}}>
                    <div className="pull-left"><Glyphicon glyph="calendar" /></div>
                    <div className="pull-right">
                        &nbsp;<span>
										{label}
									</span>
                        &nbsp;<span className="caret"></span>
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

export default DateRangePickerItem;
