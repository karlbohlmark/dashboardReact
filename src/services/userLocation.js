import {
    isArray
} from 'lodash/fp';
import Maybe from 'data.maybe';

import config from 'config';

import {
    processResponse,
    processErrors
} from './common';

import {
    serializeQuery
} from './queries';

const METHOD = 'query/ListUserLocations';

export function listUserLocations(from, to, userTypes) {
    const query = Object.assign({
        timespan: { from, to }
    }, isArray(userTypes) ?
            { userTypes: userTypes ? userTypes : [] } :
            {}
    );
    return fetch(`${config.url}${config.version}${METHOD}?query=${serializeQuery(query)}`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(processResponse, processErrors)
    .catch(errors => Promise.reject({
        common: Maybe.fromNullable(errors.non_field_errors)
    }));
}
