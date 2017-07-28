import {
    batchActions
} from 'redux-batched-actions';

import {
    listDashboardCategories as listDashboardCategoriesRequest
} from 'services/listDashboardCategories';

import dataListCategories from 'data/dataListCategories';

export const RECIEVE_PAGE_START = 'UI/LIST_DASHBOARD_CATEGORIES/RECIEVE_PAGE_START';

export function receivePageStart() {
    return {
        type: RECIEVE_PAGE_START
    };
}

export const RECIEVE_PAGE_SUCCESS = 'UI/LIST_DASHBOARD_CATEGORIES/RECIEVE_PAGE_SUCCESS';

export function receivePageSuccess(page) {
    return {
        type: RECIEVE_PAGE_SUCCESS,
        payload: page
    };
}

export const RECIEVE_PAGE_FAILURE = 'UI/LIST_DASHBOARD_CATEGORIES/RECIEVE_PAGE_FAILURE';

export function receivePageFailure(errors) {
    return {
        type: RECIEVE_PAGE_FAILURE,
        payload: errors
    };
}

export function receivePage() {
    return (dispatch, getState) => {
        const { queryData } = getState();

        if (queryData.getOverviewStats.busy) {
            return Promise.resolve();
        }

        dispatch(
            receivePageStart()
        );
        return listDashboardCategoriesRequest()
            // .then(data => {
            .then(() => {
                dispatch(
                    batchActions([
                        // receivePageSuccess(data)
                        receivePageSuccess(dataListCategories)
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
