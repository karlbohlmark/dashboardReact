import {
    isNil,
    concat,
    findIndex,
    reject,
    curry,
    property,
    isEqual,
    size
} from 'lodash/fp';
import {
    Nothing,
    Just
} from 'data.maybe';
import {
    CATEGORY_ALL,
    TASK_STATYS_ALL
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
    // tasks: Just({
    //     ALL: true
    // }),
    tasks: Just(['ALL']),
    categories: Just([{
        value: CATEGORY_ALL,
        label: capitalize(CATEGORY_ALL)
    }]),
    goFundis: Just({
        ALL: true
    })
};

const pObq = property('obq');
const pValue = property('value');

const checkAllCategorySelectEnd = curry(
    payload => (
        (findIndex({value: CATEGORY_ALL,
            label: capitalize(CATEGORY_ALL)
        }, pValue(payload)) === size(pValue(payload)) - 1 && size(pValue(payload)) >= 1) ?
            (Just([{value: CATEGORY_ALL,
                label: capitalize(CATEGORY_ALL)
            }])) :
            (Just(reject({value: CATEGORY_ALL,
                label: capitalize(CATEGORY_ALL)
            }, pValue(payload))))
    )
);

const checkAllCategorySelect = curry(
    payload => (
        (findIndex({value: CATEGORY_ALL,
            label: capitalize(CATEGORY_ALL)
        }, pValue(payload)) === 0 && size(pValue(payload)) >= 1) ?
            (Just(reject({value: CATEGORY_ALL,
                label: capitalize(CATEGORY_ALL)
            }, pValue(payload)))) :
            checkAllCategorySelectEnd(payload)
    )
);
const checkAllCategorySelectEmpty = curry(
    payload => (
        (size(pValue(payload)) === 1) ?
            (Just(pValue(payload))) :
            checkAllCategorySelect(payload)
    )
);
const checkAllTask = curry(
    (payload, entity) => (
        (isEqual(TASK_STATYS_ALL, payload.type)) ?
            (Just([payload.type])) :
            (Just(concat(payload.type, reject(rItem => rItem === TASK_STATYS_ALL, entity))))
    )
);
const filterTask = curry(
    (payload, entity) => (
        (!~findIndex(item => (item === payload.type), entity)) ?
            (Just(entity)) : (Just(reject(rItem => rItem === payload.type, entity)))
    )
);
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
        case SHOW_TASKS: {

            return {
                ...state,
                tasks: state.tasks.cata({
                    Just: entity => (payload.value) ?
                        checkAllTask(payload, entity) :
                        filterTask(payload, entity),
                    Nothing: () => !isNil(payload.type) ? Just([payload.type]) : Nothing()
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
                    Just: () => !isNil(payload.value) ? checkAllCategorySelectEmpty(payload) : Nothing(),
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
