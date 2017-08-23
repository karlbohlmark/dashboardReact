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
const checkDates = curry(
    (startDate, endDate, dateRange) => (
        containDate(startDate, dateRange) &&
        containDate(endDate, dateRange)
    )
);

// export const formatDateLabel = curry(
//     (startDate, endDate) => {
//         if (checkDates(startDate, endDate, DATERANGE_TODAY)) {
//             return ('Today');
//         } else if (checkDates(startDate, endDate, DATERANGE_YESTERDAY)) {
//             return ('Yesterday');
//         } else if (checkDates(startDate, endDate, DATERANGE_LAST7DAYS)) {
//             return ('Last 7 Days');
//         } else if (checkDates(startDate, endDate, DATERANGE_LAST30DAYS)) {
//             return ('Last 30 Days');
//         } else if (checkDates(startDate, endDate, DATERANGE_THISMONTH)) {
//             return ('This Month');
//         } else if (checkDates(startDate, endDate, DATERANGE_LASTMONTH)) {
//             return ('Last Month');
//         }
//         return ('Custom Range');
//     }
// );

const ternaryLabel = curry(
    (startDate, endDate, dateRange, fnLeft, fnRight) => (
        !checkDates(startDate, endDate, dateRange) ?
            fnLeft : fnRight
    )
);
export const formatDateLabel = curry(
    (startDate, endDate) => (
        ternaryLabel(startDate, endDate, DATERANGE_TODAY,
            ternaryLabel(startDate, endDate, DATERANGE_YESTERDAY,
                ternaryLabel(startDate, endDate, DATERANGE_LAST7DAYS,
                    ternaryLabel(startDate, endDate, DATERANGE_LAST30DAYS,
                        ternaryLabel(startDate, endDate, DATERANGE_THISMONTH,
                            ternaryLabel(startDate, endDate, DATERANGE_LASTMONTH, ('Custom Range'), ('Last Month')),
                            ('This Month')), ('Last 30 Days')), ('Last 7 Days')), ('Yesterday')), ('Today'))
    )

);
