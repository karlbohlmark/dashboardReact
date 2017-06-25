import {
    Nothing,
    Just
} from 'data.maybe';
// import {
//     get
// } from 'utils';
import {
    SHOW_USERS,
    SHOW_TASKS,
    SHOW_CATEGORY
} from 'actions/ui/GoogleMap/';
export const initialState = {
    users: Nothing(),
    tasks: Nothing(),
    categories: Nothing()
};

export function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {

        case SHOW_USERS: {

            return {
                ...state,
                users: state.users.cata({
                    Just: entity => (Just({
                        ...entity,
                        [ payload.type ]: payload.value
                    })),
                    Nothing: () => (Just({
                        [ payload.type ]: payload.value
                    }))
                })
            };
        }
        case SHOW_TASKS: {

            return {
                ...state,
                tasks: state.tasks.cata({
                    Just: () => (Just(payload.type)),
                    Nothing: () => (Just(payload.type))
                })
            };
        }
        case SHOW_CATEGORY: {

            return {
                ...state,
                categories: state.categories.cata({
                    Just: () => (Just(payload.type)),
                    Nothing: () => (Just(payload.type))
                })
            };
        }
        default: {
            return state;
        }
    }
}
