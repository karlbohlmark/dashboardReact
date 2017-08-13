import {
    isNil,
    concat,
    findIndex,
    reject,
    curry,
    property,
    isEqual
} from 'lodash/fp';
import {
    Nothing,
    Just
} from 'data.maybe';
import {
    CATEGORY_ALL
} from 'models/googlemap';
import {
    SHOW_USERS,
    SHOW_TASKS,
    SHOW_CATEGORY,
    SET_CATEGORY,
    SHOW_GOFUNDIS
} from 'actions/ui/googleMap';
import {
    capitalize
} from 'utils';
export const initialState = {
    users: Just({
        ALL: true
    }),
    tasks: Just({
        ALL: true
    }),
    categories: Just([{
        value: CATEGORY_ALL,
        label: capitalize(CATEGORY_ALL)
    }]),
    goFundis: Just({
        ALL: true
    })
};

const pObq = property('obq');

const checkAllCategory = curry(
    (payload, entity) => (
        (isEqual({
            value: CATEGORY_ALL,
            label: capitalize(CATEGORY_ALL)
        }, pObq(payload))) ?
            (Just([pObq(payload)])) :
            (Just(concat(pObq(payload), reject({
                value: CATEGORY_ALL,
                label: capitalize(CATEGORY_ALL)
            }, entity))))
    )
);
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
                categories: state.categories.cata({
                    Just: entity => (payload.value) ?
                        checkAllCategory(payload, entity) :
                        filterCategory(payload, entity),
                    Nothing: () => !isNil(payload.obq) ? Just([payload.obq]) : Nothing()
                })
            };
        }
        case SHOW_CATEGORY: {

            return {
                ...state,
                categories: state.categories.cata({
                    // filter with add when have allCategory and other
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
