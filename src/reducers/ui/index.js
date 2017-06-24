import {
    initialState as initialNotificationState,
    reducer as reducerNotification
} from './notification';
import {
    initialState as initialGoogleMapState,
    reducer as reducerGoogleMap
} from './GoogleMap/index';

export const initialState = {
    notifications: initialNotificationState,
    googlemap: initialGoogleMapState
};

export function reducer(state, action) {
    const nextNotification = reducerNotification(state.notifications, action);
    const nextGoogleMap = reducerGoogleMap(state.googlemap, action);

    if (
        state.notifications === nextNotification &&
        state.googlemap === nextGoogleMap
    ) {
        return state;
    }

    return {
        notifications: nextNotification,
        googlemap: nextGoogleMap
    };
}
