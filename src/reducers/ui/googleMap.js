import {
    isNil,
    concat,
    findIndex,
    reject,
    curry,
    property
} from 'lodash/fp';
import {
    Nothing,
    Just
} from 'data.maybe';
import {
    SHOW_USERS,
    SHOW_TASKS,
    SHOW_CATEGORY,
    SET_CATEGORY,
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
    goFundis: Just({
        ALL: true
    }),
    allCategories: Nothing()
};

const pObq = property('obq');
const filterCategory = curry(
    (payload, entity) => (
        (!~findIndex(pObq(payload), entity)) ? (Just(entity)) : (Just(reject(pObq(payload), entity)))
    )
);
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
        case SET_CATEGORY: {

            return {
                ...state,
                allCategories: Nothing(),
                categories: state.categories.cata({
                    Just: entity => (payload.value) ?
                        (Just(concat(entity, payload.obq))) :
                        filterCategory(payload, entity),
                    Nothing: () => !isNil(payload.obq) ? Just([payload.obq]) : Nothing()
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
