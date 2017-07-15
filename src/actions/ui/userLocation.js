import {
    batchActions
} from 'redux-batched-actions';

import {
    listUserLocations as listUserLocationsRequest
} from 'services/userLocation';


export const RECIEVE_PAGE_START = 'UI/USER_LOCATION_LIST/RECIEVE_PAGE_START';

export function receivePageStart() {
    return {
        type: RECIEVE_PAGE_START
    };
}

export const RECIEVE_PAGE_SUCCESS = 'UI/USER_LOCATION_LIST/RECIEVE_PAGE_SUCCESS';

export function receivePageSuccess(page) {
    return {
        type: RECIEVE_PAGE_SUCCESS,
        payload: page
    };
}

export const RECIEVE_PAGE_FAILURE = 'UI/USER_LOCATION_LIST/RECIEVE_PAGE_FAILURE';

export function receivePageFailure(errors) {
    return {
        type: RECIEVE_PAGE_FAILURE,
        payload: errors
    };
}

export function receivePage() {
    return (dispatch, getState) => {
        const { ui } = getState();

        if (ui.userLocation.busy) {
            return Promise.resolve();
        }
        // todo check and collect params from getState to query
        // ui.googlemap.users
        dispatch(
            receivePageStart()
        );

        return listUserLocationsRequest()
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
