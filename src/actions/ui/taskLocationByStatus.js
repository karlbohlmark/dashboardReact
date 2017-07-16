import {
    compose
} from 'lodash/fp';
import {
    batchActions
} from 'redux-batched-actions';

import {
    taskLocationByStatus as taskLocationByStatusRequest
} from 'services/taskLocationByStatus';


export const RECIEVE_PAGE_START = 'UI/TASK_LOCATION_STATUS/RECIEVE_PAGE_START';

export function receivePageStart() {
    return {
        type: RECIEVE_PAGE_START
    };
}

export const RECIEVE_PAGE_SUCCESS = 'UI/TASK_LOCATION_STATUS/RECIEVE_PAGE_SUCCESS';

export function receivePageSuccess(page) {
    return {
        type: RECIEVE_PAGE_SUCCESS,
        payload: page
    };
}

export const RECIEVE_PAGE_FAILURE = 'UI/TASK_LOCATION_STATUS/RECIEVE_PAGE_FAILURE';

export function receivePageFailure(errors) {
    return {
        type: RECIEVE_PAGE_FAILURE,
        payload: errors
    };
}

export function receivePage() {
    return (dispatch, getState) => {
        const { ui } = getState();

        if (ui.taskLocationByStatus.busy) {
            return Promise.resolve();
        }
        const tasksTypes = ['unassigned', 'assigned', 'completed', 'cancelled'];
        const toSendTasksTypes = ui.googlemap.tasks.cata({
            Nothing: () => (tasksTypes),
            Just: value => ([value.toLowerCase()])
        });
        dispatch(
            receivePageStart()
        );

        return taskLocationByStatusRequest(ui.dateRangePicker.startDate, ui.dateRangePicker.endDate, toSendTasksTypes)
            .then(data => {
                dispatch(
                    batchActions([
                        receivePageSuccess(data)
                    ])
                );
            })
            .catch(errors => {
                dispatch(
                    receivePageFailure(errors)
                );
            });
    };
}
