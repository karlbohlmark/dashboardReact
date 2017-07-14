import moment from 'moment';
import {
    SET_RANGE_DATE
} from 'actions/ui/dateRangePicker';

export const initialState = {
    ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'),
            moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate: moment()
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
