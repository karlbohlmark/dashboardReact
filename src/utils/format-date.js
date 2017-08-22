import moment from 'moment';
import {
    contains,
    curry,
    map
} from 'lodash/fp';
import {
    DATERANGE_TODAY,
    DATERANGE_YESTERDAY,
    DATERANGE_LAST7DAYS,
    DATERANGE_LAST30DAYS,
    DATERANGE_THISMONTH,
    DATERANGE_LASTMONTH
} from 'models/dateRangePicker';

export function formatDate(date) {
    return moment(date).format('MMM Do');
}

export function formatDateTime([ date, time ]) {
    return moment(`${date}T${time}`).format('MMM D HH:mm');
}

export const getISOStringFromDate = date => new Date(date).toISOString();
const getFormatString = date => date.format('YYYY-MM-DD');
const getFormatFromDateRange = dateRange => map(item => (getFormatString(item)), dateRange);
const containDate = curry(
    (date, dateRange) => contains(
        getFormatString(date),
        getFormatFromDateRange(dateRange)
    )
);

export const formatDateLabel = curry(
    (startDate, endDate) => {
        if (containDate(startDate, DATERANGE_TODAY) &&
            containDate(endDate, DATERANGE_TODAY)) {
            return ('Today');
        } else if (containDate(startDate, DATERANGE_YESTERDAY) &&
            containDate(endDate, DATERANGE_YESTERDAY)) {
            return ('Yesterday');
        } else if (containDate(startDate, DATERANGE_LAST7DAYS) &&
            containDate(endDate, DATERANGE_LAST7DAYS)) {
            return ('Last 7 Days');
        } else if (containDate(startDate, DATERANGE_LAST30DAYS) &&
            containDate(endDate, DATERANGE_LAST30DAYS)) {
            return ('Last 30 Days');
        } else if (containDate(startDate, DATERANGE_THISMONTH) &&
            containDate(endDate, DATERANGE_THISMONTH)) {
            return ('This Month');
        } else if (containDate(startDate, DATERANGE_LASTMONTH) &&
            containDate(endDate, DATERANGE_LASTMONTH)) {
            return ('Last Month');
        }
        return ('Custom Range');
    }
);
