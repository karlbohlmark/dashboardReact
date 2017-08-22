import moment from 'moment';
import {
    nth,
    head
} from 'lodash/fp';
import {
    SET_RANGE_DATE
} from 'actions/ui/dateRangePicker';
import {
    DATERANGE_TODAY,
    DATERANGE_YESTERDAY,
    DATERANGE_LAST7DAYS,
    DATERANGE_LAST30DAYS,
    DATERANGE_THISMONTH,
    DATERANGE_LASTMONTH
} from 'models/dateRangePicker';
export const initialState = {
    ranges: {
        Today: DATERANGE_TODAY,
        Yesterday: DATERANGE_YESTERDAY,
        'Last 7 Days': DATERANGE_LAST7DAYS,
        'Last 30 Days': DATERANGE_LAST30DAYS,
        'This Month': DATERANGE_THISMONTH,
        'Last Month': DATERANGE_LASTMONTH
    },
    startDate: head(DATERANGE_LAST30DAYS),
    endDate: nth(1, DATERANGE_LAST30DAYS)
};

export function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_RANGE_DATE: {
            return {
                ...state,
                startDate: payload.from ? payload.from : moment(),
                endDate: payload.to ? payload.to : moment()
            };
        }

        default: {
            return state;
        }
    }
}
