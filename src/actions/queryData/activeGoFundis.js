import {
    batchActions
} from 'redux-batched-actions';

import {
    activeGoFundis as activeGoFundisRequest
} from 'services/activeGoFundis';

import dataMapMarkerGoFundis from 'data/dataMapMarkerGoFundis';

export const RECIEVE_PAGE_START = 'UI/ACTIVE_GO_FUNDIS/RECIEVE_PAGE_START';

export function receivePageStart() {
    return {
        type: RECIEVE_PAGE_START
    };
}

export const RECIEVE_PAGE_SUCCESS = 'UI/ACTIVE_GO_FUNDIS/RECIEVE_PAGE_SUCCESS';

export function receivePageSuccess(page) {
    return {
        type: RECIEVE_PAGE_SUCCESS,
        payload: page
    };
}

export const RECIEVE_PAGE_FAILURE = 'UI/ACTIVE_GO_FUNDIS/RECIEVE_PAGE_FAILURE';

export function receivePageFailure(errors) {
    return {
        type: RECIEVE_PAGE_FAILURE,
        payload: errors
    };
}

export function receivePage() {
    return (dispatch, getState) => {
        const { ui, queryData } = getState();

        if (queryData.getTasksHighlights.busy) {
            return Promise.resolve();
        }

        dispatch(
            receivePageStart()
        );
        return activeGoFundisRequest(ui.dateRangePicker.startDate, ui.dateRangePicker.endDate)
            // .then(data => {
            .then(() => {
                dispatch(
                    batchActions([
                        receivePageSuccess(dataMapMarkerGoFundis)
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
