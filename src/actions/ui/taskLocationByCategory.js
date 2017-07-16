import {
    batchActions
} from 'redux-batched-actions';

import {
    taskLocationByCategory as taskLocationByCategoryRequest
} from 'services/taskLocationByCategory';


export const RECIEVE_PAGE_START = 'UI/TASK_LOCATION_CATEGORY/RECIEVE_PAGE_START';

export function receivePageStart() {
    return {
        type: RECIEVE_PAGE_START
    };
}

export const RECIEVE_PAGE_SUCCESS = 'UI/TASK_LOCATION_CATEGORY/RECIEVE_PAGE_SUCCESS';

export function receivePageSuccess(page) {
    return {
        type: RECIEVE_PAGE_SUCCESS,
        payload: page
    };
}

export const RECIEVE_PAGE_FAILURE = 'UI/TASK_LOCATION_CATEGORY/RECIEVE_PAGE_FAILURE';

export function receivePageFailure(errors) {
    return {
        type: RECIEVE_PAGE_FAILURE,
        payload: errors
    };
}

export function receivePage() {
    return (dispatch, getState) => {
        const { ui } = getState();

        if (ui.taskLocationByCategory.busy) {
            return Promise.resolve();
        }
        // const categoriesTypes = ['unassigned', 'assigned', 'completed', 'cancelled'];
        // const toSendCategoriesTypes = ui.googlemap.categories.cata({
        //     Nothing: () => (categoriesTypes),
        //     Just: value => ([value.toLowerCase()])
        // });
        dispatch(
            receivePageStart()
        );

        return taskLocationByCategoryRequest(ui.dateRangePicker.startDate, ui.dateRangePicker.endDate, [])
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
