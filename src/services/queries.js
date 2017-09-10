import {
    curry
} from 'lodash/fp';

export const encodeQuery = curry(
    (query, value) => ({[query]: value})
);

export function serializeQuery(q) {
    return encodeURIComponent(JSON.stringify(q));
}
