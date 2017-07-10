import {
    initialState as initialNotificationState,
    reducer as reducerNotification
} from './notification';
import {
    initialState as initialGoogleMapState,
    reducer as reducerGoogleMap
} from './GoogleMap/index';
import {
    initialState as initialUserLocationState,
    reducer as reducerUserLocation
} from './userLocation';

export const initialState = {
    notifications: initialNotificationState,
    googlemap: initialGoogleMapState,
    userLocation: initialUserLocationState
};

export function reducer(state, action) {
    const nextNotification = reducerNotification(state.notifications, action);
    const nextGoogleMap = reducerGoogleMap(state.googlemap, action);
    const nextUserLocation = reducerUserLocation(state.userLocation, action);

    if (
        state.notifications === nextNotification &&
        state.googlemap === nextGoogleMap &&
        state.userLocation === nextUserLocation
    ) {
        return state;
    }

    return {
        notifications: nextNotification,
        googlemap: nextGoogleMap,
        userLocation: nextUserLocation
    };
}
