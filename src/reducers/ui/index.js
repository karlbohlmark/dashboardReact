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
import {
    initialState as initialTaskLocationByStatus,
    reducer as reducerTaskLocationByStatus
} from './taskLocationByStatus';
import {
    initialState as initialCompletedTasksHistogram,
    reducer as reducerCompletedTasksHistogram
} from './completedTasksHistogram';

export const initialState = {
    notifications: initialNotificationState,
    googlemap: initialGoogleMapState,
    userLocation: initialUserLocationState,
    taskLocationByStatus: initialTaskLocationByStatus,
    completedTasksHistogram: initialCompletedTasksHistogram
};

export function reducer(state, action) {
    const nextNotification = reducerNotification(state.notifications, action);
    const nextGoogleMap = reducerGoogleMap(state.googlemap, action);
    const nextUserLocation = reducerUserLocation(state.userLocation, action);
    const nextTaskLocationByStatus = reducerTaskLocationByStatus(state.taskLocationByStatus, action);
    const nextCompletedTasksHistogram = reducerCompletedTasksHistogram(state.completedTasksHistogram, action);

    if (
        state.notifications === nextNotification &&
        state.googlemap === nextGoogleMap &&
        state.userLocation === nextUserLocation &&
        state.taskLocationByStatus === nextTaskLocationByStatus &&
        state.completedTasksHistogram === nextCompletedTasksHistogram
    ) {
        return state;
    }

    return {
        notifications: nextNotification,
        googlemap: nextGoogleMap,
        userLocation: nextUserLocation,
        taskLocationByStatus: nextTaskLocationByStatus,
        completedTasksHistogram: nextCompletedTasksHistogram
    };
}
