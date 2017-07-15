import {
    curry,
    includes,
    omitBy,
    keys,
    map,
    has
} from 'lodash/fp';
import {
    Nothing,
    Just
} from 'data.maybe';
import {
    USER_TYPE_SUBSCRIBER,
    USER_TYPE_GOFUNDIS,
    USER_TYPE_ALL,
    USER_TYPES
} from 'models/googlemap';

/**
 * Extract the value of key that may success.
 *
 * @type String -> Dict String b -> Maybe b
 */
export const get = curry(
    (key, dict) => !has(key, dict) ?
        Nothing() :
        Just(dict[ key ])
);
const tfilter = omitBy(value => (!value));

const getTypes = curry(
    (key, dict, userTypes) => {
        if (includes(key, dict)) {
            switch (key) {
                case USER_TYPE_SUBSCRIBER:
                    return userTypes[0];
                case USER_TYPE_GOFUNDIS:
                    return userTypes[1];
                case USER_TYPE_ALL:
                    return userTypes;
                default:
                    return null;
            }
        }
        return null;
    }
);
export const getTypesArray = curry(
    (fields, userTypes) => map(val => getTypes(val, USER_TYPES, userTypes), keys(tfilter(fields)))
);
