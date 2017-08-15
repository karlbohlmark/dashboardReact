import {
    batchActions
} from 'redux-batched-actions';
// import {
//     uniq,
//     flatten
// } from 'lodash/fp';
// import {
//     getTypesArray
// } from 'utils';
// import {
//     USER_TYPES
// } from 'actions/ui/googleMap';
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
        const { queryData } = getState();

        if (queryData.userLocation.busy) {
            return Promise.resolve();
        }
        // const userTypes = ['subscriber', 'gofundi'];
        // const toSendUserTypes = ui.googlemap.users.cata({
        //     Nothing: () => (userTypes),
        //     Just: fields => (fields)
        //
        // });
        dispatch(
            receivePageStart()
        );
        // console.log('receivePage :: ', userTypes, toSendUserTypes);
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
