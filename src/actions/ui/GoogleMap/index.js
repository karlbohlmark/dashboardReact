import {
    curry
} from 'lodash/fp';

export const SHOW_USERS = 'UI/GOOGLEMAP/SHOW_USERS';

export const showGoogleMapUser = curry(
    (type, value) => ({
        type: SHOW_USERS,
        payload: { type, value }
    })
);
