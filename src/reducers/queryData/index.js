import {
    initialState as initialUserLocationState,
    reducer as reducerUserLocation
} from './userLocation';
import {
    initialState as initialGetOverViewStats,
    reducer as reducerGetOverViewStats
} from './getOverviewStats';
import {
    initialState as initialTaskLocationByCategory,
    reducer as reducerTaskLocationByCategory
} from './taskLocationByCategory';
import {
    initialState as initialTaskLocationByStatus,
    reducer as reducerTaskLocationByStatus
} from './taskLocationByStatus';
import {
    initialState as initialCompletedTasksHistogram,
    reducer as reducerCompletedTasksHistogram
} from './completedTasksHistogram';
import {
    initialState as initialListDashboardCategories,
    reducer as reducerListDashboardCategories
} from './listDashboardCategories';
import {
    initialState as initialGetTasksHighlights,
    reducer as reducerGetTasksHighlights
} from './getTasksHighlights';
import {
    initialState as initialActiveGoFundis,
    reducer as reducerActiveGoFundis
} from './activeGoFundis';

export const initialState = {
    userLocation: initialUserLocationState,
    getOverviewStats: initialGetOverViewStats,
    taskLocationByStatus: initialTaskLocationByStatus,
    taskLocationByCategory: initialTaskLocationByCategory,
    completedTasksHistogram: initialCompletedTasksHistogram,
    listDashboardCategories: initialListDashboardCategories,
    getTasksHighlights: initialGetTasksHighlights,
    activeGoFundis: initialActiveGoFundis
};

export function reducer(state, action) {
    const nextUserLocation = reducerUserLocation(state.userLocation, action);
    const nextGetOverviewStats = reducerGetOverViewStats(state.getOverviewStats, action);
    const nextTaskLocationByStatus = reducerTaskLocationByStatus(state.taskLocationByStatus, action);
    const nextTaskLocationByCategory = reducerTaskLocationByCategory(state.taskLocationByCategory, action);
    const nextCompletedTasksHistogram = reducerCompletedTasksHistogram(state.completedTasksHistogram, action);
    const nextListDashboardCategories = reducerListDashboardCategories(state.listDashboardCategories, action);
    const nextGetTasksHighlights = reducerGetTasksHighlights(state.getTasksHighlights, action);
    const nextActiveGoFundis = reducerActiveGoFundis(state.activeGoFundis, action);
    if (
        state.userLocation === nextUserLocation &&
        state.getOverviewStats === nextGetOverviewStats &&
        state.taskLocationByStatus === nextTaskLocationByStatus &&
        state.taskLocationByCategory === nextTaskLocationByCategory &&
        state.completedTasksHistogram === nextCompletedTasksHistogram &&
        state.listDashboardCategories === nextListDashboardCategories &&
        state.getTasksHighlights === nextGetTasksHighlights &&
        state.activeGoFundis === nextActiveGoFundis
    ) {
        return state;
    }

    return {
        userLocation: nextUserLocation,
        getOverviewStats: nextGetOverviewStats,
        taskLocationByStatus: nextTaskLocationByStatus,
        taskLocationByCategory: nextTaskLocationByCategory,
        completedTasksHistogram: nextCompletedTasksHistogram,
        listDashboardCategories: nextListDashboardCategories,
        getTasksHighlights: nextGetTasksHighlights,
        activeGoFundis: nextActiveGoFundis
    };
}
