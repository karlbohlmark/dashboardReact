import {
    Just,
    Nothing
} from 'data.maybe';

import {
    RECIEVE_PAGE_START,
    RECIEVE_PAGE_SUCCESS,
    RECIEVE_PAGE_FAILURE
} from 'actions/ui/userLocation';

export const initialState = {
    results: Nothing(),
    busy: false,
    errors: Nothing()
};

export function reducer(state, action) {
    switch (action.type) {
        case RECIEVE_PAGE_START: {
            return {
                ...state,
                results: Nothing(),
                busy: true,
                errors: Nothing()
            };
        }

        case RECIEVE_PAGE_SUCCESS: {
            return {
                ...state,
                results: Just(action.payload),
                busy: false
            };
        }

        case RECIEVE_PAGE_FAILURE: {
            return {
                ...state,
                busy: false,
                errors: Just(action.payload)
            };
        }

        default: {
            return state;
        }
    }
}
