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

export const SHOW_TASKS = 'UI/GOOGLEMAP/SHOW_TASKS';

export const showGoogleMapTasks = curry(
    type => ({
        type: SHOW_TASKS,
        payload: { type }
    })
);
