import {
    isNil
} from 'lodash/fp';
import {
    Nothing,
    Just
} from 'data.maybe';
import {
    SHOW_USERS,
    SHOW_TASKS,
    SHOW_CATEGORY,
    SHOW_GOFUNDIS
} from 'actions/ui/googleMap';

export const initialState = {
    users: Just({
        ALL: true
    }),
    tasks: Just({
        ALL: true
    }),
    categories: Nothing(),
    goFundis: Nothing()
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
        // case SHOW_TASKS: {
        //
        //     return {
        //         ...state,
        //         tasks: state.tasks.cata({
        //             Just: () => !isNil(payload.type) ? Just(payload.type) : Nothing(),
        //             Nothing: () => !isNil(payload.type) ? Just(payload.type) : Nothing()
        //         })
        //     };
        // }
        case SHOW_TASKS: {

            return {
                ...state,
                tasks: state.tasks.cata({
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
        case SHOW_CATEGORY: {

            return {
                ...state,
                categories: state.categories.cata({
                    Just: () => !isNil(payload.value) ? Just(payload.value) : Nothing(),
                    Nothing: () => !isNil(payload.value) ? Just(payload.value) : Nothing()
                })
            };
        }
        case SHOW_GOFUNDIS: {

            return {
                ...state,
                goFundis: state.goFundis.cata({
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
        default: {
            return state;
        }
    }
}
