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
    (type, value) => ({
        type: SHOW_TASKS,
        payload: { type, value }
    })
);

export const SHOW_CATEGORY = 'UI/GOOGLEMAP/SHOW_CATEGORY';

export const showGoogleMapCategory = curry(
    type => ({
        type: SHOW_CATEGORY,
        payload: { type }
    })
);

export const SHOW_GOFUNDIS = 'UI/GOOGLEMAP/SHOW_GOFUNDIS';

export const showGoogleMapGoFundis = curry(
    (type, value) => ({
        type: SHOW_GOFUNDIS,
        payload: { type, value }
    })
);
